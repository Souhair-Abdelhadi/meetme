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
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, ScrollView, } from "react-native"
import Icons from 'react-native-vector-icons/FontAwesome5'
import Homev2 from "../components/Home"
import Hydrationv2 from '../components/Hydratation';
import Appabout from "../components/aboutApp"
import Profile from "../components/userProfile"
// import Profile from "../screens/profileScreen"

export default class BottomTabTest extends React.Component {

    state = {
        acceuilColor: "white",
        footballColor: "black",
        tableColor: "black",
        profileColor: "black",
        acceuilDisplay: "flex",
        footballDisplay: "none",
        tableDisplay: "none",
        profileDisplay: "none",
    }


    render() {

        return (

            <View style={{ flex: 1 }} >

                
                <View style={{ flex: 1, display: this.state.acceuilDisplay }} >
                    <Homev2 navigation={this.props.navigation} />
                </View>

                <View style={{ flex: 1, display: this.state.footballDisplay }} >
                    <Hydrationv2 />
                </View>

                <View style={{ flex: 1, display: this.state.tableDisplay }} >
                    <Appabout />
                </View>

                <View style={styles.bottomTabStyle}>


                    <View style={[styles.bottomTabItems, { marginLeft: "8%" }]} >
                        <TouchableOpacity onPress={() => {
                            this.setState({
                                acceuilColor: "white",
                                footballColor: "black",
                                tableColor: "black",
                                profileColor: "black",
                                acceuilDisplay: "flex",
                                footballDisplay: "none",
                                tableDisplay: "none",
                                profileDisplay: "none",
                            })
                        }} >
                            <Icons name="home" size={32} color={this.state.acceuilColor} />
                            <Text style={{ color: this.state.acceuilColor }} >Accueil</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={styles.bottomTabItems} >
                        <TouchableOpacity onPress={() => {
                            this.setState({
                                acceuilColor: "black",
                                footballColor: "white",
                                tableColor: "black",
                                profileColor: "black",
                                acceuilDisplay: "none",
                                footballDisplay: "flex",
                                tableDisplay: "none",
                                profileDisplay: "none",
                            })
                        }} >
                            <Icons name="futbol" size={32} color={this.state.footballColor} />
                            <Text style={{ color: this.state.footballColor }} >Football</Text>

                        </TouchableOpacity>
                    </View>

                    <View style={styles.bottomTabItems} >
                        <TouchableOpacity onPress={() => {
                            this.setState({
                                acceuilColor: "black",
                                footballColor: "black",
                                tableColor: "white",
                                profileColor: "black",
                                acceuilDisplay: "none",
                                footballDisplay: "none",
                                tableDisplay: "flex",
                                profileDisplay: "none",
                            })
                        }} >
                            <Icons name="table" size={32} color={this.state.tableColor} />
                            <Text style={{ color: this.state.tableColor }} >Table</Text>

                        </TouchableOpacity>
                    </View>

                    <View style={styles.bottomTabItems} >
                        <TouchableOpacity onPress={() => {
                            this.setState({
                                acceuilColor: "black",
                                footballColor: "black",
                                tableColor: "black",
                                profileColor: "white",
                                acceuilDisplay: "none",
                                footballDisplay: "none",
                                tableDisplay: "none",
                                profileDisplay: "flex",
                            })
                        }} >
                            <Icons name="user-circle" size={32} color={this.state.profileColor} />
                            <Text style={{ color: this.state.profileColor }} >Profile</Text>

                        </TouchableOpacity>
                    </View>

                </View>

            </View>


        )
    }



}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        
    },
    bottomTabStyle: {
        backgroundColor: "green",
        flexDirection: "row",
    },
    bottomTabItems: {
        alignSelf: 'center',
        marginLeft: "10%",
        marginRight: "2%"
    }


})