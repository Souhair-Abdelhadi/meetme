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
import {View, Text, StyleSheet ,Animated,TouchableWithoutFeedback,Image,ImageBackground,Dimensions} from 'react-native';
import * as firebase from 'react-native-firebase';
import AsyncStorage from '@react-native-community/async-storage';
import GlobalUserData from './globalUserData'

export default class LoadingScreen extends React.Component{

    constructor(props){
        super(props);

    }

    state = {
        fadeAnim: new Animated.Value(0),
        goDown: new Animated.Value(0),
        goUp: new Animated.Value(0),
    }




    componentDidMount(){

        this.intervale1 = setTimeout(() => {

            Animated.timing(
                this.state.goDown,
                {
                    toValue: 80,
                    duration: 2000,
                    useNativeDriver: false,
                }
            ).start();

            Animated.timing(
                this.state.goUp,
                {
                    toValue: -500,
                    duration: 2000,
                    useNativeDriver: false,
                }
            ).start();


        }, 1000);
            

        this.intervale2 = setTimeout(() => {

            //this.props.navigation.navigate("Auth");
            
            firebase.auth().onAuthStateChanged(async user => {
                var verified;

                if (user) {

                    verified = user.emailVerified;

                    if (verified === true) {
                        await AsyncStorage.setItem('user', JSON.stringify({ _id: user.uid, name: user.displayName }))
                            .catch(e => console.log(e));
                        await AsyncStorage.setItem('user', JSON.stringify({ _id: user.uid, name: user.displayName }))
                            .then(() => {
                                firebase.database().ref("/users/" + user.uid)
                                    .update({
                                        status: "online"
                                    })
                                    .catch(e => console.log(e));
                                firebase.database().ref("/users/" + user.uid)
                                    .once('value', (snap) => {
                                        GlobalUserData.id = snap.val().id;
                                        GlobalUserData.fullName = snap.val().fullName;
                                        GlobalUserData.profileImage = snap.val().profileImage != null ? snap.val().profileImage : null
                                    }).then(() => {
                                        this.props.navigation.navigate("App");

                                    })
                                    .catch(e => {
                                        console.log(e)
                                        this.props.navigation.navigate("Auth");
                                    });

                            })
                            .catch(e => {
                                console.log(e)
                                this.props.navigation.navigate("Auth");
                            }

                            )
                    }


                    else {
                        this.props.navigation.navigate("Auth");


                    }
                }

                else {
                    this.props.navigation.navigate("Auth");
                }

            });

            
        }, 3000);
         

        
    }

    componentWillUnmount(){

        clearTimeout(this.intervale1);
        clearTimeout(this.intervale2);
        this.setState = (state,callback)=>{
            return;
        }


    }

    render() {

        return (
           
 
                <ImageBackground source={require('../assets/background2.jpeg')}
                    style={
                        {
                            height: Dimensions.get('window').height, width: Dimensions.get('window').width,flex:1,
                        }
                    }
                >



                    <View style={{ alignSelf: 'center', marginTop: 60 }} >

                        <Animated.View style={{ paddingTop: this.state.goDown }}>

                            <Image source={require('../assets/logo1.png')} style={styles.image} />

                        </Animated.View>

                    </View>

                    <View style={{ zIndex: 10, marginTop: 500 }} >

                        <Animated.View style={{ marginTop: this.state.goUp }} >

                            <Image source={require('../assets/logo02.png')}
                                style={{ height: 200, width: 200, marginLeft: "20%", tintColor: "white" }} />
                            <Text
                                style={{
                                    fontSize: 22, fontWeight: 'bold',
                                    fontStyle: 'italic', marginTop: -55, marginHorizontal: "20%", color: "white",
                                }} >THINK DIFFERENTLY </Text>

                            <Text
                                style={{
                                    fontSize: 22, fontWeight: 'bold',
                                    fontStyle: 'italic',
                                    marginTop: "2%", marginHorizontal: "25%", color: "white"
                                }} >ABOUT YOUR </Text>
                            <Text
                                style={{
                                    fontSize: 22, fontWeight: 'bold',
                                    fontStyle: 'italic',
                                    marginTop: "2%", marginHorizontal: "25%", color: "white"
                                }} >PERFORMANCE</Text>



                        </Animated.View>

                    </View>

                </ImageBackground>
        );
    }



}

const styles = StyleSheet.create({

    image: {
        height: 200,
        width: 200,
        tintColor: "white"
    }
})