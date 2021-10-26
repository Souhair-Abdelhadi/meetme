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
import Auth from './Auth'
import Registration from './Registration'
import Home from './Home'
import AboutApp from '../../component/aboutApp'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icons from 'react-native-vector-icons/FontAwesome5'
const Tab = createBottomTabNavigator();



export default class Test extends React.Component{





    render(){

        return(
            <NavigationContainer>

                <Tab.Navigator
                    initialRouteName="Home"
                    tabBarOptions={{
                        activeTintColor: 'white',
                        activeBackgroundColor: 'white',
                        inactiveTintColor: 'black',
                        tabStyle: { backgroundColor: '#64E59A', paddingTop: "4%" },
                        labelStyle: { fontSize: 16, marginTop: "10%" }
                    }}
                >

                    <Tab.Screen name="Accueil" component={Home}
                        options={{
                            tabBarLabel: 'Accueil',
                            tabBarIcon: ({ focused, color, size }) => (
                                <Icons name="home" size={32} color="black" />

                            )
                        }}
                    />
                    <Tab.Screen name="football" component={Auth}
                        options={{
                            tabBarLabel: 'Football',
                            tabBarIcon: ({ focused, color, size }) => (
                                <Icons name="futbol" size={32} color="black" />

                            )
                        }}
                    />
                    <Tab.Screen name="Table" component={Registration}
                        options={{
                            tabBarLabel: 'Table',
                            tabBarIcon: ({ focused, color, size }) => (
                                <Icons name="table" size={32} color="black" />

                            )
                        }}
                    />
                    <Tab.Screen name="profile" component={AboutApp}
                        options={{
                            tabBarLabel: 'Profile',
                            tabBarIcon: ({ focused, color, size }) => (
                                <Icons name="user-circle" size={32} color="black" />

                            )
                        }}
                    />
                   


                </Tab.Navigator>
            </NavigationContainer>
        )
    }
}