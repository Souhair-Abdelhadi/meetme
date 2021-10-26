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
import {View, Text, StyleSheet ,ActivityIndicator} from 'react-native';
import * as firebase from 'react-native-firebase';
import AsyncStorage from '@react-native-community/async-storage';
import GlobalUserData from '../globalUserData'

export default class LoadingScreen extends React.Component{

    constructor(props){
        super(props);

    }


    componentDidMount(){
            


         firebase.auth().onAuthStateChanged( async user => {
            var verified;

            if (user) {
                
                verified = user.emailVerified;

                        if (verified === true){
                            await AsyncStorage.setItem('user', JSON.stringify({ _id: user.uid, name: user.displayName }))
                            .catch(e=>console.log(e));
                            await AsyncStorage.setItem('user', JSON.stringify({ _id: user.uid, name: user.displayName }))
                            .then(()=>{
                                firebase.database().ref("/users/" +user.uid )
                                    .update({
                                        status: "online"
                                    })
                                    .catch(e => console.log(e));
                                   firebase.database().ref("/users/"+user.uid)
                                   .once('value',(snap)=>{
                                       GlobalUserData.id = snap.val().id;
                                       GlobalUserData.fullName = snap.val().fullName;
                                       GlobalUserData.profileImage = snap.val().profileImage != null ? snap.val().profileImage : null
                                   }).then(()=>{
                                       this.props.navigation.navigate("App");

                                   })
                                   .catch(e=>console.log(e));

                            })
                            .catch(e=>console.log(e))
                        }
                    

                        else {
                            this.props.navigation.navigate("Auth");
                            
                            
                        }
            }

            else {
                this.props.navigation.navigate("Auth");
            }

         });

    //    this.disconnect =  firebase.database().ref('/users/' + this.state.userUid)
    //         .onDisconnect()
    //         .set({
    //             status : "offline"
    //         })
            

        
    }

    render() {

        return (
            <View style={styles.container}>
                <Text style={styles.text}> Loading ... </Text>
                <ActivityIndicator size="large" color="red"  />
            </View>
        );
    }

    // componentWillUnmount(){

    //     this.disconnect;
    // }


}

const styles = StyleSheet.create({

    container : {
        flex : 1,
        justifyContent: "center",
        alignItems: 'center',

    },
    text: {
        fontSize:26,
        fontWeight: "bold",
        padding : 80,
    }
})