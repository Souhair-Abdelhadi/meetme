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
import { createStackNavigator } from 'react-navigation-stack';
import ChangeUserProfile from '../components/changeProfileData';

const screen = {

    Profile: {
        screen: ChangeUserProfile,
        // navigationOptions: ({ navigation }) => {
        //     return {
        //         headerTitle: () => <Header navigation={navigation} />,

        //     };
        // },

    },

};

const ChangeProfileData = createStackNavigator(screen, {
    defaultNavigationOptions: {
        headerShown : false,

        
    },

});





export default ChangeProfileData;