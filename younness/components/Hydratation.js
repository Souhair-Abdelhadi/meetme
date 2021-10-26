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
import React from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet, ScrollView, Image, ImageBackground, Dimensions } from 'react-native'
import ProgressCircle from "react-native-progress-circle"
import { Modal } from 'react-native';
import RNSecureStorage, { ACCESSIBLE } from "rn-secure-storage"





export default class App extends React.Component {


    state = {
        currentCapacity: 0,
        percentage: 0,
        total: 2500,
        showModal: false,
        records: [],
        day: "",

    }

    messageIdGenerator() {
        // generates an id.
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, c => {
            let r = (Math.random() * 16) | 0,
                v = c == "x" ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    }

    waterAmountRelativeIcon = (amount) => {

        if (amount == 100) {
            return (<Image source={require('../assets/water100ml.png')}
                style={{ marginLeft: "8%", height: 32, width: 32 }} />)
        }
        else if (amount == 200) {
            return (<Image source={require('../assets/water200ml.png')}
                style={{ marginLeft: "8%", height: 32, width: 32 }} />)
        }
        else if (amount == 300) {
            return (<Image source={require('../assets/water300ml.png')}
                style={{ marginLeft: "8%", height: 32, width: 32 }} />)
        }
        else if (amount == 400) {
            return (<Image source={require('../assets/water400ml.png')}
                style={{ marginLeft: "8%", height: 32, width: 32 }} />)
        }
        else if (amount == 500) {
            return (<Image source={require('../assets/water500ml.png')}
                style={{ marginLeft: "8%", height: 32, width: 32 }} />)
        }
    }

    addAmountOfWater = (amount) => {
        var day = new Date().getUTCDate()
        RNSecureStorage.set("day", JSON.stringify(day), { accessible: ACCESSIBLE.WHEN_UNLOCKED })
            .then(() => {
                console.log("new day is set")
            })
            .catch((error) => console.log(error))

        var newCapacity = this.state.currentCapacity + amount
        this.setState({ currentCapacity: newCapacity })
        var addTime = new Date().getHours() + ":" + new Date().getMinutes()
        //this.state.records.push({ time: addTime, amount: amount })
        // this.setState({ records: [...this.state.records,{ time: addTime, amount: amount }]})
        this.setState({ records: [...this.state.records, { time: addTime, amount: amount }] })
        //this.setState({records : this.state.records})
        setTimeout(() => {
            if (this.state.currentCapacity < 2500) {
                var op = this.state.currentCapacity / this.state.total
                console.log("divided number :", op)
                var newPercentage = Math.floor(op * 100)
                this.setState({ percentage: newPercentage })
                RNSecureStorage.set("records", JSON.stringify(this.state.records), { accessible: ACCESSIBLE.WHEN_UNLOCKED })
                    .then(() => {
                        console.log("record added")
                    })
                    .catch((e) => console.log("error when trying to add record"))
            }
            else {
                this.setState({ percentage: 100 })
            }
        }, 100)

    }

    componentDidMount() {



        RNSecureStorage.get("day").then((data) => {

            if (data != null) {

                var object_day = JSON.parse(data)
                console.log("day :", object_day)

                if (object_day != new Date().getUTCDate()) {
                    var day = new Date().getUTCDate()
                    RNSecureStorage.set("day", JSON.stringify(day), { accessible: ACCESSIBLE.WHEN_UNLOCKED })
                        .then(() => {
                            console.log("new day was set")
                            this.setState({ records: [] })
                            this.state.records.length = 0
                            var records = [];
                            RNSecureStorage.set("records", JSON.stringify(records), { accessible: ACCESSIBLE.WHEN_UNLOCKED })
                            .then(()=>{
                                console.log("records data cleared")
                            })
                            .catch((e)=>console.log(error))
                        })
                        .catch((error) => console.log(error))
                }
                else {
                    RNSecureStorage.get("records").then((data) => {
                        if (data != null) {
                            var object_data = []
                            object_data = JSON.parse(data)
                            object_data.forEach((data) => {
                                var value = data.amount
                                this.setState({ currentCapacity: this.state.currentCapacity + value })
                            })
                            this.setState({ records: object_data })
                            console.log("object_data :", object_data)
                        }
                    })
                        .then(() => {
                            //this.setState({ percentage: Math.floor(this.state.currentCapacity / this.state.total)*100})
                            if (this.state.currentCapacity < 2500) {
                                var op = this.state.currentCapacity / this.state.total
                                console.log("devided number :", op)
                                var newPercentage = Math.floor(op * 100)
                                this.setState({ percentage: newPercentage })

                            }
                            else {
                                this.setState({ percentage: 100 })
                            }
                        })
                        .catch((error) => console.log("error"))
                }
            }
            else {
                console.log("error happened")
                var day = new Date().getUTCDate()
                RNSecureStorage.set("day", JSON.stringify(day), { accessible: ACCESSIBLE.WHEN_UNLOCKED })
                    .then(() => {
                        console.log("new day was set")
                    })
                    .catch((error) => console.log(error))
            }


        })


    }


    render() {


        return (
            //<SafeAreaView style={styles.container} >

            <ImageBackground style={styles.container} source={require('../assets/drinkWaterBackground.jpg')}
                width={Dimensions.get('window').width} height={Dimensions.get('window').height}
            >



                <Modal visible={this.state.showModal} transparent={true} onRequestClose={() => {
                    this.setState({ showModal: false });
                }} >

                    <View style={styles.modalContainer}>

                        <View style={styles.modalViewText}>

                            <Text style={{ fontSize: 18, fontWeight: 'bold', color: "white" }} > Choose amount of water that you drunk </Text>

                        </View>

                        <View style={styles.modalCard} >

                            <TouchableOpacity onPress={() => {
                                this.addAmountOfWater(100)
                                this.setState({ showModal: false })

                            }} style={{ alignSelf: "center", marginVertical: "10%" }}  >

                                <Image source={require('../assets/water100ml.png')}
                                    style={{ marginLeft: "8%", height: 32, width: 32 }} />

                                <Text
                                    style={{ fontSize: 14, fontWeight: '200', color: "white", paddingTop: "3%" }}

                                >100ml</Text>

                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => {
                                this.addAmountOfWater(200)
                                this.setState({ showModal: false })
                            }} >

                                <Image source={require('../assets/water200ml.png')}
                                    style={{ marginLeft: "8%", height: 64, width: 64 }} />

                                <Text
                                    style={{ fontSize: 14, fontWeight: '200', color: "white", paddingTop: "3%", paddingLeft: "15%" }}

                                >200ml</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => {
                                this.addAmountOfWater(300)
                                this.setState({ showModal: false })
                            }} >

                                <Image source={require('../assets/water300ml.png')}
                                    style={{ marginLeft: "8%", height: 64, width: 64 }} />

                                <Text
                                    style={{ fontSize: 14, fontWeight: '200', color: "white", paddingTop: "3%", paddingLeft: "15%" }}

                                >300ml</Text>
                            </TouchableOpacity>


                        </View>


                        <View style={styles.modalCard} >

                            <TouchableOpacity onPress={() => {
                                this.addAmountOfWater(400)
                                this.setState({ showModal: false })
                            }} >

                                <Image source={require('../assets/water400ml.png')}
                                    style={{ marginLeft: "8%", height: 64, width: 64 }} />
                                <Text
                                    style={{ fontSize: 14, fontWeight: '200', color: "white", paddingTop: "3%", paddingLeft: "15%" }}

                                >400ml</Text>

                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => {
                                this.addAmountOfWater(500)
                                this.setState({ showModal: false })
                            }} >

                                <Image source={require('../assets/water500ml.png')}
                                    style={{ marginLeft: "8%", height: 64, width: 64 }} />
                                <Text
                                    style={{ fontSize: 14, fontWeight: '200', color: "white", paddingTop: "3%", paddingLeft: "15%" }}

                                >500ml</Text>

                            </TouchableOpacity>




                        </View>




                    </View>


                </Modal>


                <ScrollView>
                    <View style={styles.drinkWaterTitle} >

                        <Text style={styles.drinkWaterTitleText} >Drink and see your water drink records</Text>

                    </View>


                    <View style={styles.logoView} >

                        <Image source={require('../assets/drinkwaterlogo.jpeg')}
                            style={styles.logoStyle}
                        />

                    </View>




                    <View style={styles.card} >

                        <View style={styles.waterDrinkTracker} >


                            <ProgressCircle

                                percent={this.state.percentage}
                                radius={90}
                                borderWidth={8}
                                color="#3399FF"
                                shadowColor="#999"
                                bgColor="#fff"
                            >

                                <View style={{ alignSelf: "center" }} >

                                    <Text style={styles.waterDrinkTrackerText} > <Text style={{ color: "#3399FF" }} > {this.state.currentCapacity} </Text>/ {this.state.total}ml </Text>

                                    <Text style={styles.completeTarget} > {this.state.percentage}% </Text>

                                </View>

                            </ProgressCircle>


                            <TouchableOpacity style={{ marginTop: "10%", marginLeft: "18%" }}
                                onPress={() => {
                                    // var newCapacity = this.state.currentCapacity + 100
                                    // this.setState({ currentCapacity: newCapacity })

                                    // setTimeout(() => {
                                    //   if (this.state.currentCapacity < 2500) {
                                    //     var op = this.state.currentCapacity / this.state.total
                                    //     console.log("divided number :", op)
                                    //     var newPercentage = Math.floor(op * 100)
                                    //     this.setState({ percentage: newPercentage })

                                    //   }
                                    //   else {
                                    //     this.setState({ percentage: 100 })
                                    //   }
                                    // }, 100)

                                    this.setState({ showModal: true })

                                }}

                            >

                                <Image source={require('../assets/add.png')} />

                            </TouchableOpacity>


                        </View>

                    </View>



                    <View style={styles.RecordsSection} >

                        <View style={styles.RecordsViewText} >

                            <Text style={styles.recordsText} >Records</Text>

                        </View>

                        <View style={styles.recordsItems} >

                            {this.state.records.length != 0 ?
                                this.state.records.map(list => {
                                    return (<View key={this.messageIdGenerator()} style={{ flexDirection: "row", marginBottom: "5%" }} >
                                        {/* <Icons name="wine" size={42} color="#D0EFFE" style={{ marginLeft: "15%" }} /> */}
                                        {this.waterAmountRelativeIcon(list.amount)}
                                        <Text style={{ fontSize: 18, marginLeft: "10%", marginTop: "3%" }} > {list.time}    </Text>
                                        <Text style={{ fontSize: 18, marginLeft: "10%", marginTop: "3%" }} > {list.amount}ml   </Text>
                                    </View>
                                    )

                                })
                                : <View>
                                    <Text style={{ fontSize: 19, fontWeight: "bold", marginHorizontal: "15%", marginBottom: "3%" }} >There is no record for today</Text>
                                </View>
                            }


                        </View>



                    </View>



                </ScrollView>

            </ImageBackground>

            //</SafeAreaView>
        )



    }
}

const styles = StyleSheet.create({


    container: {
        flex: 1,
        backgroundColor: "white",
    },
    drinkWaterTitle: {

        height: 60,
        backgroundColor: "#78B5EE",
        //alignSelf : "center",


    },
    logoView: {
        marginTop: "5%",
        alignSelf: "center"
    },
    logoStyle: {
        height: 240,
        width: 250,
    },
    drinkWaterTitleText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        marginTop: "3%"
    },
    card: {
        marginTop: "5%",
        marginLeft: "5%",
        marginRight: "5%",
        paddingTop: "5%",
        paddingBottom: "5%",
        backgroundColor: "white",
        borderWidth: 2,
        borderRadius: 10,
        borderColor: "gray",
    },
    waterDrinkTracker: {
        marginTop: "5%",
        alignSelf: "center",
        backgroundColor: "white",
    },
    waterDrinkTrackerText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "black",
    },
    completeTarget: {
        marginLeft: "12%",
        fontSize: 22,
        fontWeight: "bold",
        color: "black",
        marginTop: "10%",


    },
    RecordsSection: {
        borderColor: "#3399FF",
        borderWidth: 3,
        borderRadius: 6,
        marginTop: "10%",
        backgroundColor: "white",

    },
    recordsText: {
        fontSize: 22,
        fontWeight: "bold",
        color: "white",
        marginLeft: "2%"
    },
    recordsItems: {
        marginTop: "3%",
        flex: 1,
    },
    RecordsViewText: {
        marginTop: "2%",
        backgroundColor: "#3399FF",
        height: 30,
    },

    modalContainer: {
        backgroundColor: "rgba(0,204,255,0.7)",
        height: "60%",
        marginVertical: "50%",
        marginLeft: "5%",
        marginRight: "5%"


    },
    modalViewText: {
        alignSelf: "center",
        marginHorizontal: "10%",
        marginTop: "2%",

    },
    modalCard: {
        flexDirection: "row",
        marginLeft: "3%",
        marginTop: "10%",

    },



})