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
import  * as firebase from 'react-native-firebase';


// @refresh reset

import React  from 'react';
import { StyleSheet, View, FlatList, Text,SafeAreaView,ImageBackground,Dimensions} from 'react-native';
import Card from './card';
import AsyncStorage from '@react-native-community/async-storage';
//   const db = firebase.database();
import SoundPlayer from 'react-native-sound-player'
    

    export default class home extends React.Component{

        state = {
            messagesList: [],
            isRefreshing: false,
            newData: [],
            user: AsyncStorage.getItem('user'),
            userUid: '',
            list: [],
        }

        // refresh the online users list 

        getDataFromFirebase = async()=> {
            firebase.database().ref('/coach')
                .once('value', (snap) => {
                    this.state.list.length = 0;
                    this.state.newData.length = 0;

                    if (snapshot.val() != null) {
                    snap.forEach(snapshot => {
                        this.state.list.push(snapshot.val());
                    })

                    }

                }).then(() => {
                    console.log('from update the');
                    this.setState({ list: this.state.list});
                    this.setState({ newData: this.state.list});
                    console.log(this.state.list, this.state.list.length);
                    console.log('setList');
                })
                .catch(error => error.message);
            this.setState({isRefreshing : false});
        }



        refreshData = async () =>  {
            this.setState({ isRefreshing: true });
            this.getDataFromFirebase();

        }

        // sawMessage = (userUid,hisId)=>{
        //     console.log("messages seen executed",userUid,hisId);
        //     firebase.database().ref("/users/"+hisId+"/conversations/")
        //     .child(userUid)
        //     .update({
        //         seen : true
        //     }).then(()=>console.log("messages seen updated"))
        //     .catch(e=>console.log(e))
            
        // }

componentDidMount(){




            firebase.database().ref('/coach/')
                .on('value', (snap) => {

                    if(snap.val() != null){
                    this.state.messagesList.length = 0;
                    snap.forEach(snapshot => {
                        
                        this.state.messagesList.push(snapshot.val());     

                    })

                    this.setState({ messagesList: this.state.messagesList });
                    this.setState({ list: this.state.messagesList })
                    console.log("---------------------------------------");
                    console.log("from Home ----->", this.state.messagesList, this.state.messagesList.length);
                    console.log("---------------------------------------");
                }
                else{
                    console.log("no data found")
                }

                })
                
            

}

componentWillUnmount(){


    // fix Warning: Can't perform a React state update on an unmounted component
    this.setState = (state, callback) => {
        return;
    };
}

        render(){

      return(

        <SafeAreaView style={{flex:1}} >

        <ImageBackground style={styles.newContainer} source={require('../assets/sport.png')}
            width={Dimensions.get('window').width} height={Dimensions.get('window').height}
         >

        <View style={styles.container} >


            <View style={styles.header} >
                <Text style={{fontSize:24,fontWeight:'bold',color:'white',textAlign : 'center'}} >Coach's</Text>
            </View>

        {
                  this.state.list.length == 0 ?

            <Text style={{  textAlign : 'center',alignSelf : 'center',marginVertical : '50%',fontSize:20,fontWeight:'bold',color :'white' }} 
             >  No Coach available. </Text> : null
        }


        <FlatList 
        
        onRefresh={this.refreshData }
        refreshing={this.state.isRefreshing}
        keyExtractor={(item) => item.id}
        data={this.state.list}
        extraData={this.state.messagesList}
        scrollEnabled={true}
        renderItem={({ item }) => (

            <View>
               
               
                    <Card props={item} userUid={item.id} profileImage={item.profileImage}
                        messages={item.conversations}
                        navigation = {this.props.navigation}
                        hisName={item.fullName}
                        id={firebase.auth().currentUser.uid}
                    >
                        <Text style={styles.text} > {item.fullName} </Text>
                        {/* {
                            ((typeof item.conversations === 'undefined') ||
                                (typeof item.conversations[this.state.userUid] == 'undefined') ||
                                item.conversations[this.state.userUid].numberOfMessages == 0) ? null : (<View style={styles.circle}  >
                                    <Text style={styles.circle_text} >{item.conversations[this.state.userUid].numberOfMessages}</Text>
                                    {item.conversations[this.state.userUid].seen === true ? null :
                                        SoundPlayer.playSoundFile("msg_tone", "mp3"),
                                        this.sawMessage(this.state.userUid, item.id)
                                    }
                                </View>)

                        } */}

                    </Card>
                    

            </View>
            

        ) }
        
        

        />

        </View>
        
        </ImageBackground>
        </SafeAreaView>
)


    }




}








    const styles = StyleSheet.create({


        container : {
            flex : 1,
        },
        header : {
            backgroundColor: 'black', 
            marginTop: '5%', 
            marginBottom: '1%',
            width : Dimensions.get('window').width,
            paddingTop : '3%',
            paddingBottom : '3%'
        }
        ,
        input : {
            height: 50,
            width:'100%',
            borderWidth:1,
            padding:15,
            marginBottom:20,
            borderColor:'gray',
    
    
        },
        circle: {
            minHeight: 20,
            minWidth: 20,
            borderRadius: 20,
            backgroundColor: 'red',
            alignSelf: 'flex-start',
            alignItems: 'center',
            marginLeft: '8%',
            marginVertical: '10%'
        },
        circle_text: {
            color: 'white',
            fontSize: 14,
            fontWeight: 'bold',
            padding: "1%",

        },
        text: {
            color: 'white',
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'center',
            textAlignVertical: 'center'

        },
        newContainer: {
            flex: 1,

        }
    
    
    })
    
    