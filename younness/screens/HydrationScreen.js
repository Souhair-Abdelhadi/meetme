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
import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Hydratation from "../components/Hydratation";
import Header from './HydrationHeader';




const screens = {
    About: {
        screen: Hydratation,
        navigationOptions: ({ navigation }) => {

            return {
                headerTitle: () => <Header navigation={navigation} />,

            };
        },
    },
};
const Hydration = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#324052', height: 50,

        },
        headerTintColor: 'white',
    }
});

export default Hydration;
