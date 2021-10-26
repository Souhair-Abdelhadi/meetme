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
import React from "react"
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons';




export default class App extends React.Component {



    render() {

        return (

            <SafeAreaView style={styles.container} >

                <ScrollView>

                    <View style={styles.head} >

                        <View style={styles.headExpressions} >

                            <Icon
                                name="arrow-back-outline"
                                size={32}
                                color="white"
                                style={{ marginLeft: "4%" }}
                            />

                            <Text style={{ position: "absolute", marginLeft: "35%", color: "white", fontSize: 18, fontWeight: "bold" }} > Edit Profile</Text>

                            <Text style={{ position: "absolute", left: "85%", color: "white", fontSize: 14, fontWeight: "normal" }} > SAVE</Text>

                        </View>

                        <View style={styles.imageView} >

                            <Image
                                source={{ uri: "https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half-caption/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=0hb44OrI" }}
                                style={styles.image}
                            />
                            <Icon
                                name="camera"
                                size={32}
                                color="red"
                                style={
                                    {
                                        position: "absolute",
                                        top: "75%",
                                        left: "35%"

                                    }
                                }
                            />


                        </View>

                    </View>

                    <View style={styles.body}>

                        <View style={styles.item} >

                            <Text style={styles.itemTitleStyle}>UserName</Text>
                            <TextInput
                                placeholder="Ahlame Murphy"
                                style={styles.textInputStyle}
                                placeholderTextColor="black"

                            />
                            <View style={{
                                borderBottomWidth: 2,
                                borderBottomColor: "#dddddd",
                                marginTop: "1%",
                                marginRight: "5%",
                            }} />

                        </View>

                        <View style={styles.item} >

                            <Text style={styles.itemTitleStyle}>Email</Text>
                            <TextInput
                                placeholder="Ahlame.Murphy@gmail.com"
                                style={styles.textInputStyle}
                                placeholderTextColor="black"

                            />
                            <View style={{
                                borderBottomWidth: 2,
                                borderBottomColor: "#dddddd",
                                marginTop: "1%",
                                marginRight: "5%",
                            }} />

                        </View>

                        <View style={styles.item} >

                            <Text style={styles.itemTitleStyle}>Phone</Text>
                            <TextInput
                                placeholder="+212627829229"
                                style={styles.textInputStyle}
                                placeholderTextColor="black"

                            />
                            <View style={{
                                borderBottomWidth: 2,
                                borderBottomColor: "#dddddd",
                                marginTop: "1%",
                                marginRight: "5%",
                            }} />

                        </View>

                        <View style={styles.item} >

                            <Text style={styles.itemTitleStyle}>Gender</Text>
                            <TextInput
                                placeholder="Female"
                                style={styles.textInputStyle}
                                placeholderTextColor="black"

                            />
                            <View style={{
                                borderBottomWidth: 2,
                                borderBottomColor: "#dddddd",
                                marginTop: "1%",
                                marginRight: "5%",
                            }} />

                        </View>

                        <View style={styles.item} >

                            <Text style={styles.itemTitleStyle}>Date of Birth</Text>
                            <TextInput
                                placeholder="10/04/1996"
                                style={styles.textInputStyle}
                                placeholderTextColor="black"

                            />
                            <View style={{
                                borderBottomWidth: 2,
                                borderBottomColor: "#dddddd",
                                marginTop: "1%",
                                marginRight: "5%",
                            }} />

                        </View>
                    </View>

                </ScrollView>

            </SafeAreaView>


        )


    }



}

const styles = StyleSheet.create({

    container: {

        flex: 1,

    },
    head: {
        height: 250,
        backgroundColor: "#0b1b32",
    },
    headExpressions: {
        flexDirection: "row",
        marginTop: "5%",
        alignItems: "center"
    },
    imageView: {
        alignSelf: "center",
        marginTop: "5%",
    },
    image: {
        height: 150,
        width: 150,
        borderRadius: 150 / 2
    },
    body: {
        flex: 1,
        backgroundColor: "white",
        paddingBottom: "5%"
    },
    item: {
        marginTop: "5%",
        marginLeft: "8%",

    },
    itemTitleStyle: {
        fontSize: 14,
        fontWeight: "normal",
        color: "gray"
    },
    textInputStyle: {
        fontSize: 16,
        fontWeight: "bold"
    },

})