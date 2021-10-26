/* eslint-disable react-native/no-inline-styles */
/* eslint-disable space-infix-ops */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable keyword-spacing */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-shadow */
/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
    View, Text, StyleSheet, TextInput, TouchableOpacity,
    TouchableWithoutFeedback, Image, Keyboard, ScrollView, Button, Alert, Dimensions, Modal,ImageBackground
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import * as firebase from 'react-native-firebase';

import AsyncStorage from '@react-native-community/async-storage';
import Icons from 'react-native-vector-icons/FontAwesome'


export default class Auth extends React.Component {

    state = {
        email: "",
        password: "",
        errorMessage: "",
        modal: false,
        resetPassword: "",
        resetPasswordError: "",
        showPassword : false
    }




    forgotPassword = () => {

        if (this.state.resetPassword.length === 0) {
            this.setState({
                resetPasswordError: 'please insert your data in the input ',
            });
        }

        else {

            firebase.auth().sendPasswordResetEmail(this.state.resetPassword)
                .then(user => {


                    this.setState({ resetPasswordError: 'password reset successfully, check your e-mail' });

                })
                .catch(error => this.setState({ resetPasswordError: error.message }));

        }

    }

    handleModal = () => {

        this.setState({ modal: false });
        this.setState({ resetPasswordError: '' });

    }

    openModal = () => {

        this.setState({ modal: true });
        this.setState({ resetPasswordError: '' });

    }


    handleLogin = () => {



        if (this.state.password.length === 0 || this.state.email.length === 0) {
            this.setState({
                errorMessage: 'please insert your data in the input ',
            });
        }

        // else{
        //     this.props.navigation.navigate("App")
        // }

        else {
            const { email, password } = this.state;
            var user;
            firebase.auth().signInWithEmailAndPassword(email, password)
                .then(async snapshot => {
                    console.log('user has logging');
                    user = snapshot.user;
                    if (user && user.emailVerified) {
                        const _id = user.uid;
                        const name = user.displayName;
                        // this._storeData(user.uid,user.displayName);
                        await AsyncStorage.setItem('user', JSON.stringify({ _id: _id, name: name }))
                        firebase.database().ref('/users/' + user.uid)
                            .update({
                                status: 'online'
                            })
                        this.props.navigation.navigate("App")
                    }
                    else if (user && user.emailVerified == false) {
                        this.setState({ errorMessage: '' });
                        firebase.auth().signOut()
                            .catch(err => console.log(err.message));
                        Alert.alert('Attention',
                            'Your account is not yet verified , please go check your email and verify your account to use it  ',
                            [{ text: 'UNDERSTOOD', onPress: () => console.log('user pressed understood for verified account case') }]);
                        console.log('user signed out from login screen');
                        firebase.database().ref('/users/' + user.uid)
                            .update({
                                status: 'offline'
                            })
                    }
                })
                .catch(error => {
                    console.log(error.message);

                    this.setState({ errorMessage: error.message });

                });


        }

    }




    _storeData = async (_id, name) => {

        try {
            await AsyncStorage.setItem('user', JSON.stringify({ _id, name }));


        }
        catch (err) {
            console.log('couldn\'t save data');
        }

    }

    //    _retrieveData= async () => {

    //     try{
    //     const value = await AsyncStorage.getItem('user');
    //     const data = JSON.parse(value);
    //     console.log(data.uid,data.fullName);

    //     }
    //     catch(err){
    //         console.log('error has occurred');
    //     }

    // }


    componentWillUnmount() {


        // fix Warning: Can't perform a React state update on an unmounted component
        this.setState = (state, callback) => {
            return;
        };
    }

    render() {


        return (


            <TouchableWithoutFeedback onPress={() => {
                console.log('you just get out from the input');
                Keyboard.dismiss();
            }
            } style={{flex : 1,}}   
            >

                <ImageBackground style={styles.newContainer} source={require('../assets/offiBackgroundLogo.jpeg')}
                    width={Dimensions.get('window').width} height={Dimensions.get('window').height}
                >

                <ScrollView keyboardShouldPersistTaps='handled' >

                    {/* <LinearGradient colors={['#05036D', 'pink', '#36AFF2']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={{ flex: 1, height: Dimensions.get('window').height }}  > */}

                  



                        <View >

                            <View style={[styles.image,{marginBottom : '1%',marginTop : '5%'}]} >
                                <Image source={require('../assets/logo1.png')} style={styles.circle} />
                            </View>


                            <Text style={styles.error} > {this.state.errorMessage} </Text>




                            <View style={styles.inputboxs}>
                                <Icons name="user" size={32} color="black" style={{alignSelf :'center'}} />
                                <TextInput placeholder='Enter your email' placeholderTextColor='black' keyboardType={'email-address'}
                                    style={styles.input} onChangeText={email => this.setState({ email })}
                                    value={this.state.email}
                                    autoCapitalize={'none'}
                                />
                            </View>

                            <View style={styles.inputboxs}>
                                <Icons name="lock" size={32} color="black" style={{ alignSelf: 'center' }} />

                                <TextInput placeholder='Enter your password' placeholderTextColor='black'
                                    style={styles.input}
                                    secureTextEntry={!this.state.showPassword} onChangeText={password => this.setState({ password })}
                                    value={this.state.password}
                                    autoCapitalize="none"

                                />
                                {
                                    !this.state.showPassword ? <Icons name="eye" size={32} color="black" style={{ alignSelf: 'center' }} onPress ={() => this.setState({showPassword : !this.state.showPassword})} /> :
                                        <Icons name="eye-slash" size={32} color="black" style={{ alignSelf: 'center' }} onPress={() => this.setState({ showPassword: !this.state.showPassword })} />
                                }
                            </View>

                            <View style={styles.button}>
                                <Button title='SE CONNECTER'
                                    color='gray'
                                    onPress={this.handleLogin}

                                />
                            </View>

                            <View style={{ marginTop: '5%', marginBottom: '5%',alignSelf :'center'}} >
                                    <Text style={{fontSize:18,fontWeight:'bold',color:'white'}} >Ou</Text>
                            </View>
                            
                            <View style={styles.button}>
                                <Button title='NOUVEAU COMPTE'
                                    color='gray'
                                    onPress={() => this.props.navigation.navigate("Register")}
                                />
                            </View>


                        </View>

                    {/* </LinearGradient> */}

                </ScrollView>

                </ImageBackground>


            </TouchableWithoutFeedback>








        )


    }


}


const styles = StyleSheet.create({

    container: {
        //flex:1,
        //backgroundColor: '#607aec',
        margin: 0,
    },
    newContainer : {
        flex : 1,
        
    }
    ,
    image: {
        marginTop: 0,
        alignItems: 'center',
        marginLeft: 0,
        marginBottom: '5%',

    },
    inputboxs: {
        borderColor: 'white',
        borderWidth: 3,
        backgroundColor: 'white',
        borderRadius: 6,
        marginTop : '5%',
        marginBottom :'5%',
        marginLeft : '5%',
        marginRight: '5%',
        flexDirection : 'row',
        paddingLeft :'3%'
    },
    input: {
        borderColor: 'white',
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black',
        borderWidth: 3,
        backgroundColor :'white',
        width: '80%',
        height: 50,
        marginLeft:'4%',
        borderRadius : 6,
    },
    button: {
        width: '60%',
        alignContent: 'center',
        marginLeft: 80,
        marginTop: 10,
        marginBottom: 10,
    },
    error: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 30,

    },
    note: {
        marginLeft: 10,
        marginTop: 10,
        marginBottom: 10,
        flexDirection: "row",
    },
    signUp: {
        fontSize: 16,
        fontWeight: "bold",
        color: '#05036D',
    },
    Redirect: {
        fontSize: 15,
        fontWeight: "bold",
        color: 'yellow',
        marginRight: 10,
        marginLeft: 10,


    },
    modalContainer: {
        flex: 1,
        backgroundColor: '#607aec',
    },
    close: {
        marginLeft: '90%',
        marginTop: '2%',

    },
    logo: {
        marginTop: -18,
        fontWeight: 'bold',
        fontSize: 30,
        color: '#05036D',
    },
    circle : {
        width : 250,
        height : 250,
        tintColor : "white",
     }

});

