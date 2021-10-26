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

import React  from 'react';
import {StyleSheet,View,Text} from 'react-native';
import OptionsMenu from 'react-native-option-menu';
import * as firebase from 'react-native-firebase'

export default class Test extends React.Component{

    state = {
        options : ['Logout','Close'],
    }

    SignOut = () =>{
        firebase.auth().signOut()
        .catch(error => error.message);
        console.log('user has Signed out');
        firebase.database().ref("/users/" + firebase.auth().currentUser.uid)
        .update({
          status: "offline"
        })
        .catch(e => console.log(e));
    }

    Cancel = () =>{
        console.log('cancel clicked') ;
    }
render(){


  

    return (


        <View style={styles.container}>
  
  
        <View style={styles.card} >
  
        <View style={styles.title} >
            <Text style={styles.text}>Meet me</Text>
        </View>
        
        
        
        <View style={styles.Logout}>
        
          <OptionsMenu 
  
          button={require('../assets/more.png')}
          buttonStyle={{ width: 32, height: 32,  }}
          destructiveIndex={1}
          options={this.state.options}
          actions={[this.SignOut]}
            
          />
  
        </View>



        </View>
  
       {/* {this.props.children} */}
  
        </View>
  
  
        
  
  
  
  
  
      )



}





}




const styles = StyleSheet.create({

    container : {
        // flex:1,
      backgroundColor : 'white',
      alignSelf: 'auto',
    },
    card : {
      // marginTop: '3%',
      width :'100%',
      alignSelf: 'auto',
      flexDirection : 'row',
        },
    text : {
      fontSize : 40,
      color  : '#05036D',
      fontWeight : 'bold',
      paddingLeft : '30%',
    },
    Logout : {
       paddingLeft : '20%',
       paddingTop:'1%',
    },
    // title : {
    //   paddingVertical : '0%',
    // }


  })


