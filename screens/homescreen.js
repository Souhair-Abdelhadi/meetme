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
// import AboveTab from '../component/theAboveTab'
import LaUne from '../component/laUne';
import Profile from './profileScreen'
import Icon from 'react-native-vector-icons/Ionicons'
import GlobalUserData from '../globalUserData'


 function  profileHeader(props){

    console.log("global user data", GlobalUserData)

    return (
    <SafeAreaView style={{ flex: 1 }}>
            <View style={{
                height: 100, alignItems: 'center', justifyContent: 'center',
                 marginTop: "3%",
                marginBottom: "3%"
                 }}>
            <View style={{
                        marginTop : "3%",
                        marginBottom : "3%"
                        }}>
                    <Image source={GlobalUserData.profileImage != "" ? { uri: GlobalUserData.profileImage } : require("../assets/VT_logo2.png")}
                    style={{
                        marginTop: "8%",
                        width: 100,
                        height: 100,
                        borderRadius: 50,
                        }}
                />
            </View>
                <Text style={{ fontSize: 18 }}>{GlobalUserData.fullName}</Text>
        </View>
        <ScrollView style={{marginTop : "8%"}} >
            <DrawerItems {...props} />
        </ScrollView>
    </SafeAreaView>)

}

const Root = createDrawerNavigator(
    {

        usersList: {
            screen: LaUne,
            navigationOptions: {
                drawerIcon: (
                    <Image style={{ width: 24, height: 24 }}
                        source={require('../assets/home.png')}
                    />
                ),
            },

        },
        Settings: {
            screen: Account,
            navigationOptions: {
                drawerIcon: (
                    <Image style={{ width: 24, height: 24 }}
                        source={require('../assets/settings.png')}
                    />
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
        About: {
            screen: AboutApp,
            navigationOptions: {
                drawerIcon: (
                    <Image style={{ width: 24, height: 24 }}
                        source={require('../assets/about.png')}
                    />
                ),
            },

        },


    },
    {
        contentComponent: (props) => profileHeader(props)
    }
);




export default createAppContainer(Root);
