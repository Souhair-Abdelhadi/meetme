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
import {ScrollView,SafeAreaView,View,Text} from 'react-native'
import {createAppContainer} from 'react-navigation';
import  {createDrawerNavigator,DrawerItems} from 'react-navigation-drawer';
import React from 'react';
import {Image} from 'react-native';
import Account from './account';
import AboutApp from './aboutApp';
import Chat from '../components/Chat'
import Accueill from '../components/Test'
import Profile from './profileScreen'
import Icon from 'react-native-vector-icons/Ionicons'
import GlobalUserData from '../components/globalUserData'
import Hydration from "../screens/HydrationScreen"
import NutritionContent from "../screens/NutritionContentScreen"
import BottomTab from "../components/BottomTabTest"


 function  profileHeader(props){

    console.log("global user data", GlobalUserData)

    return (
    <SafeAreaView style={{ flex: 1 }}>
            <View style={{
                height: 100, alignItems: 'center', justifyContent: 'center',
                 marginTop: "6%",
                marginBottom: "10%"
                 }}>
            <View style={{
                        marginTop : "3%",
                        marginBottom : "3%"
                        }}>
                    <Image source={GlobalUserData.profileImage != "" ? { uri: GlobalUserData.profileImage } : require("../../assets/VT_logo2.png")}
                    style={{
                        marginTop: "8%",
                        width: 100,
                        height: 100,
                        borderRadius: 50,
                        }}
                />
            </View>
                <Text style={{ fontSize: 18,fontWeight :'bold',marginBottom:'1%' }}>{GlobalUserData.fullName}</Text>
                <Text style={{ fontSize: 18 }}>COMPTE VIP</Text>
        </View>
        <ScrollView style={{marginTop : "8%"}} >
            <DrawerItems {...props} />
        </ScrollView>
    </SafeAreaView>
    )

}

const Root = createDrawerNavigator(
    {

        Accueil: {
            screen: BottomTab,
            navigationOptions: {
                drawerIcon: (
                    <Icon name="home" size={24} color="black" />
                ),
            },

        },
        Nutrition: {
            screen: NutritionContent,
            navigationOptions: {
                drawerIcon: (
                    <Icon name="fast-food" size={24} color="black" />
                ),
            },

        },
        SOMMEIL: {
            screen: Account,
            navigationOptions: {
                drawerIcon: (
                    <Icon name="moon" size={24} color="black" />
                ),
            },
        },
        HYDRATION: {
            screen: Hydration,
            navigationOptions: {
                drawerIcon: (
                    <Icon name="wine" size={24} color="black" />
                ),
            },
        },
        RECUPERATION: {
            screen: Chat,
            navigationOptions: {
                drawerIcon: (
                    <Icon name="body" size={24} color="black" />
                ),
            },
        },
        "MINDEST DEVELOPPEMENT" : {
            screen: Chat,
            navigationOptions: {
                drawerIcon: (
                    <Icon name="bulb" size={24} color="black" />
                ),
            },
        },
        Messenger: {
            screen: Chat,
            navigationOptions: {
                drawerIcon: (
                    <Icon name="chatbubble" size={24} color="black" />
                ),
            },
        },
        Profile: {
            screen: Profile,
            navigationOptions: {
                drawerIcon: (
                    <Icon name="person-circle" size={24} color="black" />
                ),
            },
        }
        ,
        "SE déconnecter": {
            screen: AboutApp,
            navigationOptions: {
                drawerIcon: (
                    <Icon name="arrow-forward" size={24} color="black" />
                ),
            },

        },


    },
    {
        contentComponent: (props) => profileHeader(props)
    }
);




export default createAppContainer(Root);
