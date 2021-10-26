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
    Text, View, TouchableWithoutFeedback, Keyboard,
    TextInput, StyleSheet, ScrollView, Image, Button, TouchableOpacity, Modal, Dimensions,ImageBackground
} from 'react-native';
import * as firebase from 'react-native-firebase';
import LinearGradient from 'react-native-linear-gradient';
import Icons from 'react-native-vector-icons/FontAwesome5'


export default class Registration extends React.Component {

    state = {
        firstname: '',
        lastname: '',
        phoneNumber: '',
        email: '',
        password: '',
        errorMessage: '',
        modal: false,
        pays : '',
        club : '',
        instagram : '',
        showPassword : false

    }







    ShowCurrentDate = () => {

        var day = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();

        if (day < 10 && month < 10) {
            var date = '0' + day + '/0' + month + '/' + year;
            return date;
        }

        else if (day < 10) {
            var date = '0' + day + '/' + month + '/' + year;
            return date;
        }

        else if (month < 10) {
            var date = day + '/0' + month + '/' + year;
            return date;
        }
    };

    handleModal = () => {

        this.setState({ modal: false });

    }


    handleRegistration = () => {


        if (this.state.email.length === 0 || this.state.lastname.length === 0 || this.state.firstname.length === 0) {
            this.setState({ errorMessage: 'please complete the registration data' });
        }
        else if (this.state.phoneNumber.length < 10) {
            this.setState({ errorMessage: 'Phone number must have 10 digits ' });

        }
        else if (this.state.password.length < 8) {
            this.setState({ errorMessage: 'password must have at least 8 characters' });

        }

        else {
            console.log('register button has been clicked');
            firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
                .then(userCredetials => {
                    userCredetials.user.updateProfile({
                        displayName: this.state.lastname + ' ' + this.state.firstname,
                    });





                    userCredetials.user.sendEmailVerification();
                    console.log('email verification sent to ' + userCredetials.user.email);

                    this.setState({ modal: true });

                    firebase.database().ref().child('/users/' + userCredetials.user.uid)
                        .update({
                            id: userCredetials.user.uid,
                            phoneNumber: this.state.phoneNumber,
                            fullName: this.state.lastname + ' ' + this.state.firstname,
                            status: 'offline',

                        });



                }
                )
                .catch(error => this.setState({ errorMessage: error.message })
                );
        }
        // const _id = Math.random().toString(36).substring(7);
        // const userFullName = this.state.lastname + ' ' +this.state.firstname;
        // const user ={_id,userFullName};
        //  AsyncStorage.setItem('user',JSON.stringify(user))
    }




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
            } style={{ flex: 1, }}
            >

                <ImageBackground style={styles.newContainer} source={require('../assets/offiBackgroundLogo.jpeg')}
                    width={Dimensions.get('window').width} height={Dimensions.get('window').height}
                >

                    <ScrollView keyboardShouldPersistTaps='handled' >
                        <View style={styles.container}>



                            <Modal visible={this.state.modal} >

                                <View style={styles.modalContainer} >
                                    <LinearGradient colors={['#05036D', 'pink', '#36AFF2']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={{ flex: 1, height: Dimensions.get('window').height }}  >
                                        <TouchableOpacity onPress={this.handleModal} >

                                            <Image source={require('../../assets/close32.png')} style={styles.close} />

                                        </TouchableOpacity>

                                        <View style={[styles.image, { marginBottom: '10%', marginTop: '10%' }]}>

                                            <Image source={require('../assets/sport_logo.png')} style={styles.circle} />

                                        </View>

                                        <View style={styles.textViewContainer}>

                                            <Text style={styles.textContainer} >  You Registered successfully in <Text style={{ color: '#05036D' }} > Meetme
                                            </Text>  App. We sent a verification link to your email : <Text style={{ color: '#05036D' }} > abdelhadi0497@gmail.com </Text>
                                                Thanks for using our App.

                                            </Text>
                                            <Text style={styles.noteText} > Note that : </Text>
                                            <Text style={styles.modalText} > You won't be able to login if your account isn't verified.</Text>

                                        </View>

                                    </LinearGradient>
                                </View>


                            </Modal>


                            <View style={[styles.image, { marginBottom: '1%', marginTop: '5%' }]} >
                                <Image source={require('../assets/logo1.png')} style={styles.circle} />

                            </View>

                            <Text style={styles.error} > {this.state.errorMessage} </Text>

                            <View style={styles.inputboxs}>
                                <Icons name="user" size={32} color="black" style={{ alignSelf: 'center' }} />
                                <TextInput placeholder='PRENOM' placeholderTextColor='black'
                                    style={styles.input}
                                    onChangeText={firstname => this.setState({ firstname })}
                                    value={this.state.firstname}
                                />
                            </View>

                            <View style={styles.inputboxs}>
                                <Icons name="user" size={32} color="black" style={{ alignSelf: 'center' }} />
                                <TextInput placeholder='NOM' placeholderTextColor='black'
                                    style={styles.input}
                                    onChangeText={lastname => this.setState({ lastname })}
                                    value={this.state.lastname}
                                />
                            </View>

                            {/* <View style={styles.inputboxs}>
                                <TextInput placeholder='Enter your phone number' placeholderTextColor='black'
                                    style={styles.input}
                                    onChangeText={phoneNumber => this.setState({ phoneNumber })}
                                    value={this.state.phoneNumber} keyboardType={"phone-pad"}
                                    maxLength={10}
                                />
                            </View> */}


                            <View style={styles.inputboxs}>
                                <Icons name="at" size={32} color="black" style={{ alignSelf: 'center' }} />
                                <TextInput placeholder='Email' placeholderTextColor='black'
                                    style={styles.input}
                                    onChangeText={email => this.setState({ email })}
                                    value={this.state.email} keyboardType={"email-address"} autoCapitalize="none"
                                />
                            </View>

                            <View style={[styles.inputboxs,{paddingRight : "6%"}]}>
                                <Icons name="lock" size={32} color="black" style={{ alignSelf: 'center' }} />
                                <TextInput placeholder='Mot de passe' placeholderTextColor='black'
                                    style={styles.input} secureTextEntry={!this.state.showPassword}
                                    onChangeText={password => this.setState({ password })}
                                    value={this.state.password}
                                    autoCapitalize="none"
                                />
                                {
                                    !this.state.showPassword ? <Icons name="eye" size={32} color="black" style={{ alignSelf: 'center' }} onPress={() => this.setState({ showPassword: !this.state.showPassword })} /> :
                                        <Icons name="eye-slash" size={32} color="black" style={{ alignSelf: 'center'}} onPress={() => this.setState({ showPassword: !this.state.showPassword })} />
                                }
                            </View>

                            <View style={styles.inputboxs}>
                                <Icons name="flag" size={32} color="black" style={{ alignSelf: 'center' }} />
                                <TextInput placeholder='Pays' placeholderTextColor='black'
                                    style={styles.input}
                                    onChangeText={pays => this.setState({ pays })}
                                    value={this.state.pays} keyboardType={"default"} autoCapitalize="none"
                                />
                            </View>

                            <View style={styles.inputboxs}>
                                <Icons name="futbol" size={32} color="black" style={{ alignSelf: 'center' }} />
                                <TextInput placeholder='Club' placeholderTextColor='black'
                                    style={styles.input}
                                    onChangeText={club => this.setState({ club })}
                                    value={this.state.club} keyboardType={"default"} autoCapitalize="none"
                                />
                            </View>

                            <View style={styles.inputboxs}>
                                <Icons name="instagram" size={32} color="black" style={{ alignSelf: 'center' }} />
                                <TextInput placeholder='Instagram' placeholderTextColor='black'
                                    style={styles.input}
                                    onChangeText={instagram => this.setState({ instagram })}
                                    value={this.state.instagram} keyboardType={"default"} autoCapitalize="none"
                                />
                            </View>

                            <View style={styles.button} >
                                <Button title="S'INSCRIRE"
                                    color='gray'
                                    onPress={this.handleRegistration}
                                />

                            </View>


                            <View style={{ marginTop: '5%', marginBottom: '5%', alignSelf: 'center' }} >
                                <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }} >Ou</Text>
                            </View>

                            <View style={styles.button}>
                                <Button title='SE CONNECTER'
                                    color='gray'
                                    onPress={() => this.props.navigation.navigate("Login")}
                                />
                            </View>


                        </View>

                    </ScrollView>

                </ImageBackground>


            </TouchableWithoutFeedback>
        );


    }
}

const styles = StyleSheet.create({

    container: {
        // flex:1,
        // backgroundColor: '#36AFF2',
        marginTop: 0,

    },
    newContainer: {
        flex: 1,

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
        marginTop: '2%',
        marginBottom: '2%',
        marginLeft: '5%',
        marginRight: '5%',
        flexDirection: 'row',
        paddingLeft: '3%',
        paddingRight : '3%'
    },
    input: {
        borderColor: 'white',
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black',
        borderWidth: 3,
        width: '80%',
        height: 50,
        marginLeft: '4%',
    },
    button: {
        width: '70%',
        alignContent: 'center',
        marginLeft: 60,
        marginTop: 10,
        marginBottom: 20,
    },
    error: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 30,

    },
    note: {
        marginLeft: 10,
        marginTop: 30,
        marginBottom: 20,
        flexDirection: "row",
        lineHeight: 20,
    },
    signIn: {
        fontSize: 16,
        fontWeight: "bold",
        color: 'gray',
    },
    modalContainer: {
        flex: 1,

    },
    modalText: {
        fontSize: 16,
        fontWeight: "bold",
        color: 'black',
        paddingTop: 10,
        paddingBottom: 5,
        lineHeight: 30,




    },
    close: {
        marginLeft: '90%',
        marginTop: '2%',

    },
    noteText: {
        fontSize: 18,
        fontWeight: "bold",
        color: 'red',
        paddingTop: 15,
        paddingBottom: 5,
        marginRight: 20,
        marginLeft: 20,
    },
    logo: {
        marginTop: -18,
        fontWeight: 'bold',
        fontSize: 30,
        color: '#05036D',
    },
    textContainer: {

        lineHeight: 30,
        fontSize: 16,
        fontWeight: 'bold',

    },
    textViewContainer: {
        marginLeft: '2%',
        marginRight: '2%',
    },
    circle: {
        width: 250,
        height: 250,
        tintColor : "white",
    }

});