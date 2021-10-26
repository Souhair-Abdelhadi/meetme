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
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native"
import Icon from "react-native-vector-icons/Ionicons"

export default class App extends React.Component {


    render() {

        return (

            <SafeAreaView style={styles.container} >

                <ScrollView>

                    <View style={styles.head} >
                        <TouchableOpacity 
                            onPress={()=>{
                                this.props.navigation.goBack()
                            }}
                            style={{ marginLeft: "3%" }}
                        >

                            <Icon
                                name="arrow-back-sharp"
                                size={24}
                                color="white"
                                
                            />

                        </TouchableOpacity>

                        <Text style={styles.headTitleStyle} >ADAMA DIAKHABY</Text>
                    </View>

                    <View style={styles.ImageView} >

                        <Image
                            source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_xBCRKLnDjw_o48CbyOVERfkFO0uhMSjnvw&usqp=CAU" }}
                            style={styles.image}
                        />

                    </View>

                    <View style={styles.programmeView} >

                        <View style={styles.programmeItem} >

                            <Text style={styles.itemTitle} >Lundi : </Text>

                            <View style={styles.itemData}>

                                <View style={styles.itemDataRow} >

                                    <View style={styles.pointViewStyle} />
                                    <Text style={styles.itemDataStyle} >Petit déjouné 9H MAX</Text>

                                </View>
                                <View style={styles.itemDataRow} >

                                    <View style={styles.pointViewStyle} />
                                    <Text style={styles.itemDataStyle} >Petit déjouné 9H MAX</Text>

                                </View>
                                <View style={styles.itemDataRow} >

                                    <View style={styles.pointViewStyle} />
                                    <Text style={styles.itemDataStyle} >Petit déjouné 9H MAX</Text>

                                </View>
                                <View style={styles.itemDataRow} >

                                    <View style={styles.pointViewStyle} />
                                    <Text style={styles.itemDataStyle} >Petit déjouné 9H MAX</Text>

                                </View>
                            </View>

                        </View>

                    </View>


                    <View style={styles.programmeView} >

                        <View style={styles.programmeItem} >

                            <Text style={styles.itemTitle} >Mardi : </Text>

                            <View style={styles.itemData}>

                                <View style={styles.itemDataRow} >

                                    <View style={styles.pointViewStyle} />
                                    <Text style={styles.itemDataStyle} >Petit déjouné 9H MAX</Text>

                                </View>
                                <View style={styles.itemDataRow} >

                                    <View style={styles.pointViewStyle} />
                                    <Text style={styles.itemDataStyle} >Petit déjouné 9H MAX</Text>

                                </View>
                                <View style={styles.itemDataRow} >

                                    <View style={styles.pointViewStyle} />
                                    <Text style={styles.itemDataStyle} >Petit déjouné 9H MAX</Text>

                                </View>
                                <View style={styles.itemDataRow} >

                                    <View style={styles.pointViewStyle} />
                                    <Text style={styles.itemDataStyle} >Petit déjouné 9H MAX</Text>

                                </View>
                            </View>

                        </View>

                    </View>



                    <View style={styles.programmeView} >

                        <View style={styles.programmeItem} >

                            <Text style={styles.itemTitle} >Mercredi : </Text>

                            <View style={styles.itemData}>

                                <View style={styles.itemDataRow} >

                                    <View style={styles.pointViewStyle} />
                                    <Text style={styles.itemDataStyle} >Petit déjouné 9H MAX</Text>

                                </View>
                                <View style={styles.itemDataRow} >

                                    <View style={styles.pointViewStyle} />
                                    <Text style={styles.itemDataStyle} >Petit déjouné 9H MAX</Text>

                                </View>
                                <View style={styles.itemDataRow} >

                                    <View style={styles.pointViewStyle} />
                                    <Text style={styles.itemDataStyle} >Petit déjouné 9H MAX</Text>

                                </View>
                                <View style={styles.itemDataRow} >

                                    <View style={styles.pointViewStyle} />
                                    <Text style={styles.itemDataStyle} >Petit déjouné 9H MAX</Text>

                                </View>
                            </View>

                        </View>

                    </View>




                    <View style={styles.programmeView} >

                        <View style={styles.programmeItem} >

                            <Text style={styles.itemTitle} >Jeudi : </Text>

                            <View style={styles.itemData}>

                                <View style={styles.itemDataRow} >

                                    <View style={styles.pointViewStyle} />
                                    <Text style={styles.itemDataStyle} >Petit déjouné 9H MAX</Text>

                                </View>
                                <View style={styles.itemDataRow} >

                                    <View style={styles.pointViewStyle} />
                                    <Text style={styles.itemDataStyle} >Petit déjouné 9H MAX</Text>

                                </View>
                                <View style={styles.itemDataRow} >

                                    <View style={styles.pointViewStyle} />
                                    <Text style={styles.itemDataStyle} >Petit déjouné 9H MAX</Text>

                                </View>
                                <View style={styles.itemDataRow} >

                                    <View style={styles.pointViewStyle} />
                                    <Text style={styles.itemDataStyle} >Petit déjouné 9H MAX</Text>

                                </View>
                            </View>

                        </View>

                    </View>





                    <View style={styles.programmeView} >

                        <View style={styles.programmeItem} >

                            <Text style={styles.itemTitle} >Vendredi : </Text>

                            <View style={styles.itemData}>

                                <View style={styles.itemDataRow} >

                                    <View style={styles.pointViewStyle} />
                                    <Text style={styles.itemDataStyle} >Petit déjouné 9H MAX</Text>

                                </View>
                                <View style={styles.itemDataRow} >

                                    <View style={styles.pointViewStyle} />
                                    <Text style={styles.itemDataStyle} >Petit déjouné 9H MAX</Text>

                                </View>
                                <View style={styles.itemDataRow} >

                                    <View style={styles.pointViewStyle} />
                                    <Text style={styles.itemDataStyle} >Petit déjouné 9H MAX</Text>

                                </View>
                                <View style={styles.itemDataRow} >

                                    <View style={styles.pointViewStyle} />
                                    <Text style={styles.itemDataStyle} >Petit déjouné 9H MAX</Text>

                                </View>
                            </View>

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
        height: 60,
        backgroundColor: "#042f66",
        flexDirection: "row",
        alignItems: "center",
        paddingTop: "3%",
        paddingBottom: "3%"
    },
    headTitleStyle: {
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: "10%",
        color: "white"
    },
    ImageView: {
        margin: "3%",
        borderWidth: 3,
        borderColor: "black"
    },
    image: {
        height: 200,
        width: "100%",
    },
    programmeView: {
        margin: "2%",
        borderWidth: 2,
        borderColor: "gray",
        borderRadius: 15,
        backgroundColor: "#eeeee4"

    },
    programmeItem: {
        marginLeft: "3%",
        marginTop: "4%",
        marginBottom: "4%",
    },
    itemTitle: {
        fontSize: 22,
        fontWeight: "bold",
        color: "black"
    },
    itemData: {
        marginLeft: "2%",
        marginTop: "2%",
    },
    itemDataRow: {
        flexDirection: "row",
        alignItems: "center"
    },
    pointViewStyle: {
        height: 5,
        width: 5,
        borderRadius: 5 / 2,
        backgroundColor: "black",

    },
    itemDataStyle: {
        fontSize: 16,
        marginLeft: "5%"

    },



})