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
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Image } from "react-native"





export default class App extends React.Component {


    render() {


        return (
            <SafeAreaView style={styles.container} >
                <TouchableOpacity
                    onPress={()=>{
                        this.props.navigation.navigate('NutritonContentDetails')
                    }}
                >
                    <View style={styles.card} >

                        <View style={styles.cardItem}>

                            <Image
                                source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_xBCRKLnDjw_o48CbyOVERfkFO0uhMSjnvw&usqp=CAU" }}
                                style={styles.image}
                            />

                            <View style={styles.itemExpressions} >
                                <Text style={styles.personFullName}>ADAMA DIAKHABY</Text>
                                <Text style={styles.startedDate}>Date début : 28/10/2020</Text>
                                {/* put here expiration Date */}
                            </View>

                            <Text style={styles.itemStatusOpen} >En cours</Text>

                        </View>

                    </View>
                </TouchableOpacity>

                <View style={styles.card} >

                    <View style={styles.cardItem}>

                        <Image
                            source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR58HXKC8JQGbr3IdX2IMXCBD2AgHc7NMngpg&usqp=CAU" }}
                            style={styles.image}
                        />

                        <View style={styles.itemExpressions} >
                            <Text style={styles.personFullName}>THOMAS FONTAINE</Text>
                            <Text style={styles.startedDate}>Date début : 01/02/2020</Text>
                            {/* put here expiration Date */}
                            <Text style={styles.startedDate}>Date fin : 27/10/2020</Text>
                        </View>

                        <Text style={styles.itemStatusClosed} >Expiré</Text>

                    </View>

                </View>

            </SafeAreaView>
        )



    }



}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "white",
    },
    card: {
        marginTop: "2%",
        marginBottom: "2%",
        marginLeft: "3%",
        marginRight: "3%",
        borderWidth: 3,
        borderColor: "black",
        height: 150
    },
    cardItem: {
        flexDirection: "row",
        margin: "3%",
        alignItems: "center"
    },
    image: {
        height: 130,
        width: 100,
    },
    itemExpressions: {
        marginLeft: "8%",
        marginTop: "-20%",
    },
    personFullName: {
        fontSize: 20,
        fontWeight: "bold",
    },
    startedDate: {
        marginTop: "3%",
        fontSize: 16,

    },
    itemStatusOpen: {
        color: "green",
        fontSize: 14,
        fontWeight: "bold",
        position: "absolute",
        top: "80%",
        marginLeft: "80%"
    },
    itemStatusClosed: {
        color: "red",
        fontSize: 14,
        fontWeight: "bold",
        position: "absolute",
        top: "80%",
        marginLeft: "80%"
    },


})