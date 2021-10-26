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
import React from 'react'
import { SafeAreaView, View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions } from "react-native"
import Swiper from "react-native-swiper"
import * as firebase from 'react-native-firebase';
import OptionsMenu from 'react-native-option-menu'


export default class Home extends React.Component{


    state = {
        options: ['Logout', 'Close'],
    }

    SignOut = () => {
        firebase.auth().signOut()
            .catch(error => error.message);
        console.log('user has Signed out');
        // firebase.database().ref("/users/" + firebase.auth().currentUser.uid)
        //     .update({
        //         status: "offline"
        //     })
        //     .catch(e => console.log(e));
    }

    Cancel = () => {
        console.log('cancel clicked');
    }


    componentWillUnmount() {


        // fix Warning: Can't perform a React state update on an unmounted component
        this.setState = (state, callback) => {
            return;
        };
    }


    

    render(){

        return(

            <SafeAreaView style={styles.container} >

                <View style={styles.head}>

                    <View style={styles.optionAndLogo} >
                        <View  >

                            <Image
                                source={require('../assets/logo1.png')}
                                style={styles.logo}

                            />
                            <Text style={{
                                color: "white", fontSize: 14,
                                fontWeight: "bold", marginTop: "-20%",
                                marginLeft: "20%"
                            }} >Foot App</Text>
                        </View>

                        <View style={styles.option} >
                            <OptionsMenu

                                button={require('../../assets/more.png')}
                                buttonStyle={{ width: 32, height: 32, tintColor: 'white' }}
                                destructiveIndex={1}
                                options={this.state.options}
                                actions={[this.SignOut]}


                            />
                        </View>

                    </View>


                </View>

                <ScrollView   >

                <TouchableOpacity 
                 onPress={()=>{
                     console.log("image pressed")
                     this.props.navigation.navigate('Nutrition')
                 }}
                 >

                    <View style={styles.largeItemView} >

                        <Image
                            source={require('../assets/nutrition.jpg')}
                            style={styles.largeItemImageStyle}
                        />

                        <View style={styles.largeItemTextStyle} >
                            <Text style={styles.largeItemText} >NUTRITION</Text>
                        </View>


                    </View>

                </TouchableOpacity>



                    <Swiper style={{ height: 300 }}
                        showsButtons={false}
                        horizontal={true}

                    >

                        <View style={{ flexDirection: "row", flex: 1, marginLeft: "5%" }} >
                            

                            <View style={styles.itemCard} >
                            <TouchableOpacity
                                onPress={() => {
                                    console.log("image pressed")
                                }}
                            >
                                <Image
                                    source={require('../assets/hydration.png')}
                                    style={styles.itemImageStyle}
                                />

                                <View style={styles.itemTextStyle} >
                                    <Text style={styles.itemText} >HYDRATATION</Text>
                                </View>
                            </TouchableOpacity>

                            </View>


                            <View style={[styles.itemCard, { marginLeft: "10%" }]} >
                            <TouchableOpacity
                                onPress={() => {
                                    console.log("image pressed")
                                }}
                            >

                                <Image
                                    source={require('../assets/mindset.jpg')}
                                    style={styles.itemImageStyle}
                                />

                                <View style={styles.itemTextStyle} >
                                    <Text style={styles.itemText} >MINDSET</Text>
                                </View>
                            </TouchableOpacity>

                            </View>

                        </View>

                        <View style={{ flexDirection: "row", flex: 1, marginLeft: "5%" }} >


                            <View style={styles.itemCard} >
                            <TouchableOpacity
                                onPress={() => {
                                    console.log("image pressed")
                                }}
                            >

                                <Image
                                    source={require('../assets/phone.jpg')}
                                    style={styles.itemImageStyle}
                                />

                                <View style={styles.itemTextStyle} >
                                    <Text style={styles.itemText} >MESSENGER</Text>
                                </View>
                            </TouchableOpacity>

                            </View>

                            

                            <View style={[styles.itemCard, { marginLeft: "10%" }]} >
                            <TouchableOpacity
                                onPress={() => {
                                    console.log("image pressed")
                                }}
                            >
                                <Image
                                    source={require('../assets/beach_at_night.jpg')}
                                    style={styles.itemImageStyle}
                                />

                                <View style={styles.itemTextStyle} >
                                    <Text style={styles.itemText} >SOMMEIL</Text>
                                </View>
                            </TouchableOpacity>

                            </View>

                        </View>



                    </Swiper>


                    <TouchableOpacity
                        onPress={() => {
                            console.log("image pressed")
                        }}
                    >

                    <View style={styles.largeItemView} >


                        <Image
                            source={require('../assets/recuperation.png')}
                            style={styles.largeItemImageStyle}
                        />

                        <View style={styles.largeItemTextStyle} >
                            <Text style={styles.largeItemText} >RECUPERATION</Text>
                        </View>


                    </View>

                    </TouchableOpacity>

                </ScrollView>


            </SafeAreaView>

        );



    }

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "white",
    },
    head: {
        height: "18%",
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        backgroundColor: "#279c7c",
    },
    titleView: {
        marginVertical: "1%",
        alignSelf: "center",
    },
    titleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
    },
    optionAndLogo: {
        marginVertical: "0%",
        marginLeft: "8%",
        flexDirection: "row"
    },
    logo: {
        height: 100,
        width: 100,
        borderRadius: 100 / 2,
        tintColor: "white",
    },
    option: {
        tintColor: "white",
        left: "100%",
        marginLeft: "20%",
        marginTop: "8%"
    },
    body: {
        marginLeft: "4%",
        marginRight: "4%",
        marginTop: "6%",
        flex: 1,
    },
    itemCard: {
        marginTop: "10%",
        height: "70%",
        width: "40%",
        //backgroundColor : "black",
        borderWidth: 2,
        borderLeftColor: "#eaeceb",
        borderRightColor: "#eaeceb",
        borderBottomColor: "#eaeceb",
        borderTopColor: "white",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        shadowColor: "gray",

    },
    itemTextStyle: {
        marginTop: "5%",
        alignSelf: "center"
    },
    itemText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: "black"
    },
    itemImageStyle: {
        height: "80%",
        width: "100%",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    largeItemView: {
        // padding: "30%",
        height: 200,
        width: "90%",
        backgroundColor: "black",
        marginTop: "10%",
        marginLeft: "5%",
        marginRight: "5%",
        marginBottom: "8%",
    },

    largeItemImageStyle: {
        height: "80%",
        width: "100%",
    },
    largeItemTextStyle: {
        marginTop: "3%",
        alignSelf: "center",
    },
    largeItemText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: "white"
    },

})