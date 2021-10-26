/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-bitwise */
/* eslint-disable no-lone-blocks */
/* eslint-disable react/no-did-mount-set-state */
/* eslint-disable react/self-closing-comp */
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
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Image, ScrollView  } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons';




export default class App extends React.Component {


    state = {

    }





    render() {


        return (

            <SafeAreaView style={styles.container} >

                <View style={styles.head}>

                    <Text style={styles.settingsTextStyle}>Setting</Text>
                    <View style={styles.headItemStyleView}>

                        <Image
                            source={{ uri: "https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half-caption/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=0hb44OrI" }}
                            style={styles.image}
                        />

                        <View style={styles.settingsTwoExpressions} >

                            <Text style={{ color: "#c7ccd0", fontSize: 14 }} >Hello</Text>
                            <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }} >Ahlame Murphy</Text>
                        </View>

                        <TouchableOpacity onPress={() => {
                            console.log("image pressed")
                        }}
                            style={styles.SettingsModifyIcon}
                        >
                            <Icon name="pencil-outline" size={32} color="white" />
                        </TouchableOpacity>

                    </View>


                </View>

                <View style={styles.body}>
                    <ScrollView>
                        <View style={[styles.Card]} >

                            <View style={styles.option} >

                                <Text style={styles.optionTextStyle} >My Home</Text>

                                <Icon name="chevron-forward-outline" size={32} style={styles.rightIcon} />

                            </View>

                            <View style={styles.option} >

                                <Text style={styles.optionTextStyle} >My Home</Text>

                                <Icon name="chevron-forward-outline" size={32} style={styles.rightIcon} />

                            </View>

                            <View style={styles.option} >

                                <Text style={styles.optionTextStyle} >My Home</Text>

                                <Icon name="chevron-forward-outline" size={32} style={styles.rightIcon} />

                            </View>
                            <View style={[styles.option, { marginBottom: "0%" }]} >

                                <Text style={styles.optionTextStyle} >My Home</Text>

                                <Icon name="chevron-forward-outline" size={32} style={styles.rightIcon} />

                            </View>

                        </View>



                        <View style={[styles.Card, { marginTop: "4%" }]} >

                            <View style={styles.option} >

                                <Text style={styles.optionTextStyle} >My Home</Text>

                                <Icon name="chevron-forward-outline" size={32} style={styles.rightIcon} />

                            </View>

                            <View style={styles.option} >

                                <Text style={styles.optionTextStyle} >My Home</Text>

                                <Icon name="chevron-forward-outline" size={32} style={styles.rightIcon} />

                            </View>

                            <View style={styles.option} >

                                <Text style={styles.optionTextStyle} >My Home</Text>

                                <Icon name="chevron-forward-outline" size={32} style={styles.rightIcon} />

                            </View>
                            <View style={[styles.option, { marginBottom: "0%" }]} >

                                <Text style={styles.optionTextStyle} >My Home</Text>

                                <Icon name="chevron-forward-outline" size={32} style={styles.rightIcon} />

                            </View>

                        </View>



                        <View style={[styles.Card, { marginTop: "4%" }]} >

                            <View style={styles.option} >

                                <Text style={styles.optionTextStyle} >My Home</Text>

                                <Icon name="chevron-forward-outline" size={32} style={styles.rightIcon} />

                            </View>

                            <View style={styles.option} >

                                <Text style={styles.optionTextStyle} >My Home</Text>

                                <Icon name="chevron-forward-outline" size={32} style={styles.rightIcon} />

                            </View>

                            <View style={styles.option} >

                                <Text style={styles.optionTextStyle} >My Home</Text>

                                <Icon name="chevron-forward-outline" size={32} style={styles.rightIcon} />

                            </View>
                            <View style={[styles.option, { marginBottom: "0%" }]} >

                                <Text style={styles.optionTextStyle} >My Home</Text>

                                <Icon name="chevron-forward-outline" size={32} style={styles.rightIcon} />

                            </View>

                        </View>


                    </ScrollView>


                </View>




            </SafeAreaView>



        )



    }


}


const styles = StyleSheet.create({

    container: {
        flex: 1,
    },
    head: {
        height: 200,
        backgroundColor: "#0b1b32"
    },
    settingsTextStyle: {
        fontSize: 26,
        fontWeight: "bold",
        color: "white",
        marginTop: "8%",
        marginLeft: "5%"
    },
    headItemStyleView: {
        flexDirection: "row",
        marginTop: "5%",
        marginLeft: "7%"
    },
    image: {
        height: 80,
        width: 80,
        borderRadius: 80 / 2,
    },
    settingsTwoExpressions: {
        marginLeft: "8%",
        alignSelf: "center",
    },
    SettingsModifyIcon: {
        alignSelf: "center",
        marginLeft: "15%"
    },
    body: {
        flex: 1,
        backgroundColor: "#dbdbdb"
    },
    Card: {
        backgroundColor: "white",
        borderRadius: 5,
    },
    option: {
        flexDirection: "row",
        paddingLeft: "8%",
        height: 50,
        alignItems: "center",
        marginBottom: "3%",
        marginTop: "1%",
        borderBottomWidth: 2,
        borderBottomColor: "#bababa",
    },
    optionTextStyle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "black",
    },
    rightIcon: {
        position: "absolute",
        left: "95%"
    }

})