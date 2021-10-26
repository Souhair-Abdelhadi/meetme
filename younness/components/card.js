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
import { View, Text, Image, StyleSheet, TouchableOpacity, ActivityIndicator,Modal,ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';



export default class Card extends React.PureComponent {


    state = {
        loading: true,
        showModal: false,
        showChatModal:false,
        showFullImageModal:false,

    }


    render() {
        return (


            <View style={styles.Card}>
                {/* modal to show the profile of the specific user */}
                

                {/* modal to show chat component with the specific person */}

                <LinearGradient colors={['black', '#343252', 'black']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 10 }} >

                    <TouchableOpacity onPress={()=>{

                        console.log("card component pressed")
                        this.props.navigation.push('ChatRoom',{
                            userUid: this.props.userUid,
                            fullName : this.props.hisName,
                            profileImage : this.props.profileImage,
                            id : this.props.id
                        });

                    }}>

                    <View style={styles.CardContent} >

                        <TouchableOpacity hitSlop={{ bottom: 100, }} onPress={() => {
                            console.log("image pressed");
                            // console.log(this.props.props)
                            // this.props.props.navigate('About');
                        }} >
                                <Image source={(typeof this.props.profileImage === "undefined") ? require('../../assets/VT_logo2.png') : {uri : this.props.profileImage} } style={styles.image} onLoadEnd={() => {
                                this.setState({ loading: false });
                                console.log("loading is set to false")
                            }} />



                            {this.state.loading && <ActivityIndicator animating size={'large'} color='blue' />}
                        </TouchableOpacity>

                                {/* <Text style={styles.text} > {this.props.children}  </Text> */}
                            {this.props.children}

                    </View>

                    </TouchableOpacity>

                </LinearGradient>

            </View>

        )

    }

}

const styles = StyleSheet.create({

    Card: {
        borderBottomWidth: 2,
        borderBottomColor: 'black'
    },
    CardContent: {
        flexDirection: 'row',
        flex: 1,
        // textAlign : 'center',


    },
    text: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        textAlignVertical: 'center'

    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    imageView: {
        height: 300,
        width: 300,
        borderRadius: 150,
        alignSelf: 'center',
    },
    Title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
    card: {
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        padding: '3%',
        flexDirection : 'row'
    },
    profileText: {
        fontSize: 18,
        lineHeight: 25,

    },
    container : {
        flex:1,
    },
    aboutMe_goal: {
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        padding: '3%',

    }

})