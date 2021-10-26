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


// import LinearGradient from 'react-native-linear-gradient';
// import  * as firebase from 'react-native-firebase';
// import {Actions} from 'react-native-router-flux';

import Routes from './component/routes';
import loading from './component/loading';
import Login from './component/login'
import Register from './component/register'

import HomeScreen from './screens/homescreen';
import CheckConn from './screens/connectivityLost'
import Conversation from './component/chatRoom'
import {createSwitchNavigator,createAppContainer} from 'react-navigation';
import {createStackNavigator } from 'react-navigation-stack';
// import {createStackNavigator} from '@react-navigation/stack'

// @refresh reset

// import React ,{Component,useState,useEffect,useCallback} from 'react';
// import {StyleSheet,View,Animated,TextInput,ActivityIndicator,Button,TouchableWithoutFeedback,Dimensions,Alert,PermissionsAndroid ,Keyboard,Modal,FlatList,Text,TouchableOpacity, Image} from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage';
// import {GiftedChat} from 'react-native-gifted-chat';
// import Card from './card';
// import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
// import About from './component/aboutApp';
// import Icon from 'react-native-vector-icons/Ionicons';
// import OptionsMenu from "react-native-option-menu";
// import Test from './test'
// import { create } from 'react-test-renderer';
// import { ScrollView } from 'react-native-gesture-handler';



//------------------------------ younness principal programme
//import React from 'react'
import Auth from './younness/components/Auth'
import Registration from './younness/components/Registration'
import Home from './younness/components/Home'
import AboutApp from './component/aboutApp'
import Hydration from './younness/screens/HydrationScreen';
import ChatRoom from './younness/components/chatRoom';
import HomeScreenV2 from './younness/screens/homescreen'
import Loading from './younness/components/loading'
import NutritionContent from './younness/Test/NutritionContent'
import NutritonContentDetails  from './younness/Test/NutritionContentDetails'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
//import Icons from 'react-native-vector-icons/FontAwesome5'
const Tab = createBottomTabNavigator();
import Test from './younness/components/Test'
//import {View,Text} from 'react-native'


// const Login_Registre = createStackNavigator({
//   Login : {

//     screen : Auth,

//   },
//   Register : {
//     screen : Registration,
//   },

// },

//   {
//     defaultNavigationOptions: {
//       headerShown: false,
//     },
//   }
// ) 


// const appStack = createStackNavigator({
//   Home : {
//     screen : HomeScreenV2,
//   },
//   ChatRoom : {
//     screen : ChatRoom
//   }
//   ,
//   Hydrataion: {

//     screen: Hydration,

//   },
//   NutritionContent : {
//     screen: NutritionContent
//   },
//   NutritonContentDetails: {
//     screen: NutritonContentDetails
//   },

//  },
 
 

// {
//   defaultNavigationOptions : {
//     headerShown: false,
//   },
// } 

// );





// export default createAppContainer(
//  createSwitchNavigator({
//    Loading : Loading,
//    Auth: Login_Registre,
//    App : appStack,

//  },

//  {
//    initialRouteName : "Loading"
//  }

//  )  
// )


// export default class App extends React.Component{



//   render(){
//     console.log(new Date().toUTCString())
//     return(

//       <View>
//         <Text>hello world</Text>
//       </View>

//     );


//   }


// }




//--------------------------------------------------------------


// class  App extends React.Component {
  
//   NetInfoSubscribtion = null;

//   constructor(props) {
//     super(props);
//     this.state = {
//       connection_status: false,
//       connection_type: null,
//       connection_net_reachable: false,
//       connection_wifi_enabled: false,
//       connection_details: null,
//     }
//   }

//   componentDidMount() {

//     this.NetInfoSubscribtion = NetInfo.addEventListener(
//       this._handleConnectivityChange,
//     );

//   }

//   componentWillUnmount() {
//     this.NetInfoSubscribtion && this.NetInfoSubscribtion();
//   }

//   _handleConnectivityChange = (state) => {
//     this.setState({
//       connection_status: state.isConnected,
//       connection_type: state.type,
//       connection_net_reachable: state.isInternetReachable,
//       connection_wifi_enabled: state.isWifiEnabled,
//       connection_details: state.details,
//     })
//   }

//        render(){
        
//         return (

//             <View style={styles.container} >

            
//             <View style={styles.image} >

//             <Image  source={require('./assets/VT_logo2.png')}   />
                
//             <Text style={styles.logo} >   Meet me  </Text>

            
//             </View>
//             <View style= {styles.textCentralization} >

//             <Text style={styles.text}>You lost your connectivity to the internet  </Text>

//             <Text style={styles.text} >Please connect your device to the internet </Text>
           
//             </View>

//             <View style={{marginTop:'3%',}} >
            
//             <ActivityIndicator size="large" color={'white'}  />
            
//             </View>

//             </View>



//         )
//         }



//     }



//     const styles=StyleSheet.create({


//             container : {
//               flex:1,
//               backgroundColor: '#05036D',
              
//             },
//             logo: {
//               marginTop: -18,
//               fontWeight: 'bold',
//               fontSize: 30,
//               color: '#05036D',
//             },
//             image: {
//               marginTop: 0,
//               alignItems: 'center',
//               marginLeft: 0,
//               marginBottom: '5%',

//             },
//              textCentralization : {

//               textAlign: 'center',
//               alignSelf:'center',

//              },
//             text : {
//               color : 'white',
//               fontSize:18,
//               fontWeight:'bold',

//             }



//     })


// export default  App;









// //     return(

// //       <View style={styles.container} >

// //       <Text> number of messages</Text>

// //       {  1 == 0 ? 



// //       <View style={styles.rond} >
// //       <Text style={styles.text} > 10 </Text>
// //        </View>


// //         : null

// // }
//       {/* <Card>
//           <Text>  {'number of messages'}  </Text>
//           <Text> number of messages icon </Text>
//           <Image   />
//       </Card> */}



//       // </View>
//     // )


//   }




// meet me principal programme

// const Login_Registre = createStackNavigator({
//   Login : {

//     screen : Login,

//   },
//   Register : {
//     screen : Register,
//   },
  
// },

//   {
//     defaultNavigationOptions: {
//       headerShown: false,
//     },
//   }
// ) 

 
// const appStack = createStackNavigator({
//   Home : {
//     screen : HomeScreen,
//   },
//   Conversation : {
//     screen : Conversation,
//   },
  
//  },
 

// {
//   defaultNavigationOptions : {
//     headerShown: false,
//   },
// } 

// );

// const AuthStack = createStackNavigator({
//   Login : {
//     screen : Routes,
//   },
// },
// {
//  defaultNavigationOptions : {
//    headerShown: false,
//  },
// } 

// )



// export default createAppContainer(
//  createSwitchNavigator({
//    Loading : loading,
//    App : appStack,
//    Auth : Login_Registre,
//    CheckConn : CheckConn,
//  },

//  {
//    initialRouteName : "Loading"
//  }

//  )  
// )






// import React from 'react'
// import {View,Text} from 'react-native'

// export default function App(){



//   return (

//     <View>



//     <Text>hello there</Text>


//     </View>





//   )

// }



// -----------------------------------------------------------------------------------------------------------------




// import React, { useState, useEffect, useCallback } from 'react';
// import {
//   StyleSheet, View, TouchableOpacity, Text, Image,
//   Platform,
//   PermissionsAndroid,
//   Dimensions,
//   ActivityIndicator,
//   Alert,
//   KeyboardAvoidingView
// } from 'react-native';
// import * as firebase from 'react-native-firebase';
// import AsyncStorage from '@react-native-community/async-storage';
// import { GiftedChat, Bubble } from 'react-native-gifted-chat';
// import { DrawerActions } from 'react-navigation-drawer'
// import { AudioRecorder, AudioUtils } from "react-native-audio";
// import Ionicons from "react-native-vector-icons/Ionicons";
// import Sound from "react-native-sound";


// var strCmp = require('../res/dbData');
// const ImagePicker = require("react-native-image-picker");


// const db = firebase.firestore();
// // const userUid = firebase.auth().currentUser.uid;
// // const myName = firebase.auth().currentUser.displayName;


// export default function chatRoom({ navigation }) {
//   const ref = navigation.getParam('id');

//   // var chatsRef = db.collection(navigation.getParam('id'));
//   const [userUid, setUsersUid] = useState();
//   const myUid = navigation.getParam('myUid')
//   const _retrieveData = async () => {
//     try {

//       const value = await AsyncStorage.getItem('user');
//       if (value !== null) {
//         // We have data!!
//         const data = JSON.parse(value);

//         setUsersUid(data._id);
//         setMyName(data.name);
//       }
//     } catch (error) {
//       console.log('error has occurred')
//     }
//   };
//   _retrieveData();







//   const [user, setUser] = useState(null);
//   const [name, setName] = useState('');
//   const [messages, setMessages] = useState([])
//   // console.log(navigation.getParam('id'));
//   const ConversationLocation = strCmp(ref, myUid);
//   const chatsRef = db.collection(ConversationLocation);
//   // const chatsRef = strCmp(ref,)
//   const hisName = navigation.getParam('fullName');
//   const [myName, setMyName] = useState();
//   const [image, setImage] = useState(null);
//   const [imageurl, setImageurl] = useState(null);

//   //  const [startAudio, setStartAudio] = useState(false);
//   //  const [hasPermission, set_hasPermission] = useState(false);
//   //  const [audioPath, set_audioPath] = useState(`${AudioUtils.DocumentDirectoryPath
//   //      }/${this.messageIdGenerator()}test.aac`);
//   //  const [playAudio, set_playAudio] = useState();
//   //  const [audioSettings, set_audioSettings] = useState({
//   //      SampleRate: 22050,
//   //      Channels: 1,
//   //      AudioQuality: "Low",
//   //      AudioEncoding: "aac",
//   //      MeteringEnabled: true,
//   //      IncludeBase64: true,
//   //      AudioEncodingBitRate: 32000
//   //  });




//   useEffect(() => {
//     readUser();
//     checkPermission();
//     reloadData();
//     const unsubscribe = chatsRef.onSnapshot((querySnapshot) => {
//       console.log(querySnapshot.docChanges.length);
//       if (querySnapshot.docChanges.length != 0) {

//         const messagesFirestore = querySnapshot
//           .docChanges.filter(({ type }) => type === 'added').map(({ doc }) => {
//             const messages = doc.data();
//             return { ...messages, createdAt: messages.createdAt.toDate() }
//           }).sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
//         appendMessages(messagesFirestore);
//       }
//       // else{
//       //         setMessages([...[]]);
//       // }

//     })
//     return () => unsubscribe();

//   }, [ref])

//   const appendMessages = useCallback((messages) => {
//     setMessages((previousMessages) => GiftedChat.append(previousMessages, messages));
//   }, [messages])

//   async function readUser() {
//     //const user = await AsyncStorage.getItem('user');
//     const _id = Math.random().toString(36).substring(7);
//     const user = { _id, name: "abdelhadi souhair", avatar: 'https://facebook.github.io/react/img/logo_og.png'};
//     if (user) {
//       setUser(JSON.parse(user))
//     }
//   }


//   async function handleChatLogin() {

//     const _id = Math.random().toString(36).substring(7)
//     const user = { _id, name }
//     await AsyncStorage.setItem('user', JSON.stringify(user))
//     setUser(user)

//   }
//   async function reloadData() {
//     setMessages([...[]]);
//     console.log('data loaded ');

//   }

//   async function handleSendMessage(messages) {

//     const writes = messages.map((m) => chatsRef.add(m));
//     await Promise.all(writes);

//     // add/update user contact for current user

//     firebase.database().ref('/users/' + userUid)
//       .child('contacts').child(ref).update({
//         conversation: ConversationLocation,
//         id: ref,
//         fullName: hisName,
//       })
//       .catch(err => console.log(err.message))

//     // add/update user contact for user on conversation with

//     firebase.database().ref('/users/' + ref)
//       .child('contacts').child(userUid).update({
//         conversation: ConversationLocation,
//         id: userUid,
//         fullName: myName,

//       })
//       .catch(err => console.log(err.message))
//   }


//   function checkPermission() {
//     if (Platform.OS !== "android") {
//       return Promise.resolve(true);
//     }
//     const rationale = {
//       title: "storage Permission",
//       message:
//         " need access to your device gallery so you can send pictures."
//     };
    
//     return PermissionsAndroid.request(
//       PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
//       rationale
//     ).then(result => {
//       console.log("Permission result:", result);
//       return result === true || result === PermissionsAndroid.RESULTS.GRANTED;
//     });

    

//   }

//  function messageIdGenerator() {
//     // generates uuid.
//     return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, c => {
//       let r = (Math.random() * 16) | 0,
//         v = c == "x" ? r : (r & 0x3) | 0x8;
//       return v.toString(16);
//     });
//   }


//   function handleAddPicture(){
//     const options = {
//       title: "Select Profile Pic",
//       mediaType: "photo",
//       takePhotoButtonTitle: "Take a Photo",
//       maxWidth: 256,
//       maxHeight: 256,
//       allowsEditing: true,
//       noData: true,
//       storageOptions: {
//         skipBackup: true,
//         path: 'images'
//       }
//     };
//     ImagePicker.launchImageLibrary(options, response => {
//       console.log("Response = ", response);
//       if (response.didCancel) {
//         // do nothing
//       } else if (response.error) {
//         // alert error
//       } else {
//         const { uri } = response;
//         const extensionIndex = uri.lastIndexOf(".");
//         const extension = uri.slice(extensionIndex + 1);
//         const allowedExtensions = ["jpg", "jpeg", "png"];
//         const correspondingMime = ["image/jpeg", "image/jpeg", "image/png"];
//         const source = { uri: response.uri };
//         console.log(source);
//         setImage(source);
//         // const options = {
//         //   keyPrefix: AwsConfig.keyPrefix,
//         //   bucket: AwsConfig.bucket,
//         //   region: AwsConfig.region,
//         //   accessKey: AwsConfig.accessKey,
//         //   secretKey: AwsConfig.secretKey,
//         // };
//         const file = {
//           uri,
//           name: `${this.messageIdGenerator()}.${extension}`,
//           type: correspondingMime[allowedExtensions.indexOf(extension)]
//         };

//         await uploadImage();

//         const message = {};
//         message._id = this.messageIdGenerator();
//         message.createdAt = Date.now();
//         message.user = user
//         message.image = imageurl;
//         message.messageType = "image";
       
//         if (!allowedExtensions.includes(extension)) {
//           return alert("That file type is not allowed.");
//         }
//       }
//     });
//   };


//   const uploadImage = async () => {
//     const { uri } = image;
//     const filename = uri.substring(uri.lastIndexOf('/') + 1);
//     const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri;
//     const task = firebase.storage()
//       .ref(filename)
//       .putFile(uploadUri)
//     // set progress state
//     task.on('state_changed', snapshot => {
      
//       setImageurl(snapshot.downloadURL);

//     });
    
//     setImage(null);
//   };

//   return (

//     <View style={styles.container} >



//       <View style={styles.Card}>

//         <TouchableOpacity
//           onPress={() => {
//             navigation.dispatch(DrawerActions.closeDrawer())
//             navigation.goBack();
//             console.log('button clicked')
//           }}
//         >

//           <Image source={require('../assets/goBack.png')} style={{ marginLeft: 10, width: 32, height: 32, tintColor: 'white' }} />

//         </TouchableOpacity>

//         <Text style={styles.fullName}> {hisName}  </Text>


//         <TouchableOpacity
//           onPress={() => {
//             handleAddPicture()
//             console.log('button clicked')
//           }}
//         >
//         <Text>add picture</Text>

//         </TouchableOpacity>

//       </View>




//       <GiftedChat messages={messages} user={user} onSend={handleSendMessage}

//         isTyping={true}
//         isLoadingEarlier={true}
//         messageIdGenerator={messageIdGenerator}


//       />

//     </View>
//   )

// }

// const styles = StyleSheet.create({

//   input: {

//     height: 50,
//     width: '100%',
//     borderWidth: 1,
//     padding: 15,
//     marginBottom: 20,
//     borderColor: 'gray',


//   },
//   container: {
//     flex: 1,
//   },
//   Card: {
//     flexDirection: 'row',
//     backgroundColor: '#324662',
//     alignSelf: 'auto'
//   },
//   fullName: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: 'white',
//     paddingLeft: '25%'
//   }


// })






//         var moment = require('moment-timezone')


// export default function App(){





//         // var today_date = new Date()
//         // let string_date = today_date.toUTCString();
//         // let string_date_todate = moment(string_date).toDate()
//         // let string_date_todate_getTime = moment(string_date_todate).unix()
        
        

//         // console.log(today_date);
//         // console.log(string_date);
//         // console.log(moment(string_date).toDate())
//         // console.log(string_date_todate_getTime)

        

//     // let data = moment('6 avril 2021 à 12:47:46 UTC+1').toISOString()

//     // console.log(data);



// return (




//       <View>




//           <Text>hello world</Text>






//       </View>







// )



// }




// ------------------------------------------------------------------------------------------------------

// import ModalPicker from "react-native-modal-selector"



// export default function App(){


//   const [modal_on, set_modal_on] = useState(false)


//    function mediaHandler(arg){


//     if (arg == 1){
//           console.log("handlerAddPhoto is clicked")
//     }
//     else if(arg == 2){
//           console.log("handlerAddVideo is clicked")
//     }


//   }


//   return(










//       <View style={{ flex : 1,backgroundColor:"cyan"}}>


//         <Button title="show modal" color = "black"  onPress={()=> {
//           console.log("show modal is clicked")
//           set_modal_on(true);
//         }} />

//         <Modal visible={modal_on} transparent={true}  >

//         <View style={{ backgroundColor: "rgba(0,0,0,0.7)", flex: 1 }}>


//           <View style={{marginVertical:"50%" }}>

//            <View style={styles.modal_view_style} >
//               <TouchableOpacity onPress={() => {
//                 console.log("images is clicked")
//                 set_modal_on(false)
//                 mediaHandler(1)
//               }} >

//                 <Text style={styles.options} >Images</Text>

//               </TouchableOpacity>

//            </View>

//             <View style={styles.modal_view_style} >
//               <TouchableOpacity onPress={() => {
//                 console.log("video is clicked")
//                 set_modal_on(false)
//                 mediaHandler(2)
//               }} >

//                 <Text style={styles.options}>Video</Text>

//               </TouchableOpacity>

//             </View>

//             <View style={{ backgroundColor: 'rgba(150, 150, 150, 0.28)',opacity:0.3,padding:"5%"}} >
              

//             </View>

//             <View style={styles.modal_view_style} >
//               <TouchableOpacity  onPress={()=>{
//                 console.log("cancel is clicked")
//                 set_modal_on(false)
//               }} >

//                 <Text style={styles.options}>Cancel</Text>

//               </TouchableOpacity>

//             </View>
            
            
            

//           </View>

//         </View>

//         </Modal>

//       </View>

       

    











//   )


// }

//  const styles = StyleSheet.create({


//     container : {
//       // flex : 1,
//       backgroundColor : "red",

      

//     },
//     modal_container : {

//       backgroundColor: "gray",
//       opacity : 0.1,


//     },
//     options : {

//       color:'#4ac3ff',
//       fontSize : 20,
//       fontWeight : 'bold',
//       textAlign : 'center',

//     },
//     modal_view_style : {
//       borderBottomWidth : 2,
//       borderColor : "black",
//       // marginBottom : 5,
//       padding : "5%",
//       backgroundColor : "white",
      
//     }
    




//  })

// ------------------------------------------------------


// import React, { useEffect, useState } from "react"
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
//   ActivityIndicator,Dimensions
// } from "react-native"

// import VideoPlayer from 'react-native-video-controls'
// import Orientation from "react-native-orientation-locker"

//   export default function App(){


//     const [opacity,setOpacity] = useState(0);
//     const [video, setVideo] = useState(0);
//     const [DeviceOrientation, setDeviceOrientation] = useState('PORTRAIT');
//     const [width, setWidth] = useState(300);
//     const [height, setHeight] = useState(200);
//     const [isFullScreen, setIsFullScreen] = useState(false);




//     function onLoadStart(){
//       // this.setState({ opacity: 1 });
//       setOpacity(1);
//     }

//     function onLoad(){
//       // this.setState({ opacity: 0 });
//       setOpacity(0);

//       // this.state.currentPosition;
//     }

//     function onBuffer({ isBuffering }){
//       // this.setState({ opacity: isBuffering ? 1 : 0 });
//       setOpacity(isBuffering ? 1 : 0);

//     }

//     function onFullScreenClicked(){
//         // this.setState({width:Dimensions.get('screen').width,height : Dimensions.get('screen').height-15,isFullScreen:true})
//         setIsFullScreen(true)
//         setWidth(Dimensions.get('screen').width)
//         setHeight(Dimensions.get('screen').height-15)
//     }
//     function onFullScreenDismiss(){
//       // this.setState({ width: 300, height: 200, isFullScreen: false })
//       setIsFullScreen(false)
//       setWidth(300)
//       setHeight(200)
//     }


//       useEffect(()=>{
//         var OrientationInterval = setInterval(() => {
//           Orientation.getOrientation((orientation) => {

//             setDeviceOrientation(orientation);

//           })
//         }, 1000);
//         function window_listener(){
         
//           if(isFullScreen === true){
//             if (Orientation.getInitialOrientation() == 'PORTRAIT' || Orientation.getInitialOrientation() == 'PORTRAIT-UPSIDEDOWN') {
//               setWidth(Dimensions.get('window').width)
//               setHeight(Dimensions.get('screen').height - 15)
//             }
//             else if (Orientation.getInitialOrientation() == 'LANDSCAPE-LEFT' || Orientation.getInitialOrientation() == 'LANDSCAPE-RIGHT') {
//               setWidth(Dimensions.get('window').width)
//               setHeight(Dimensions.get('screen').height)
//             }
//           }
//         }
//         window_listener();
//         console.log("hooks executed");
//         return  ()  =>  clearInterval(OrientationInterval)
        
//       }, [isFullScreen,DeviceOrientation])
    

//         return(


//           <View style={{ width: width, height: height }} >


//               <VideoPlayer 
//               source={{ uri: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4?_=1' }}
//               onBack={()=>console.log("onBack function is clicked")}
//               disableBack={true}
//               paused={true}
//               onLoad={onLoad }
//               onBuffer={onBuffer}
//               onLoadStart={onLoadStart}
//               resizeMode={'cover'}
//               fullscreen={false}
//               onEnterFullscreen={onFullScreenClicked}
//               onExitFullscreen={onFullScreenDismiss}
//               />
            

//           </View>




//         )

//       }




//   ---------------------------------------------
//   export default class App extends React.Component {


//   constructor(props) {
//     super(props);
//     this.state = { opacity: 0, video: 0, currentPosition: 1, width: 300, height: 200, isFullScreen: false };
//   }

//   componentDidMount() {


//     // if (Orientation.getInitialOrientation() == 'LANDSCAPE-LEFT' || Orientation.getInitialOrientation() == 'LANDSCAPE-RIGHT') {

//     //   // this.setState({ width: Dimensions.get('screen').width, height: Dimensions.get('screen').height })
//     //   console.log("device is on left or right");

//     // }

//     Orientation.addOrientationListener((orientation) => {
//       console.log("current orientation is", orientation)
//     })


//   }



//   onLoadStart = () => {
//     this.setState({ opacity: 1 });
//   }

//   onLoad = () => {
//     this.setState({ opacity: 0 });
//     this.state.currentPosition;
//   }

//   onBuffer = ({ isBuffering }) => {
//     this.setState({ opacity: isBuffering ? 1 : 0 });

//   }

//   onFullScreenClicked = () => {
//     this.setState({ width: Dimensions.get('screen').width, height: Dimensions.get('screen').height - 15, isFullScreen: true })
//   }
//   onFullScreenDismiss = () => {
//     this.setState({ width: 300, height: 200, isFullScreen: false })
//   }


//   render() {


//     return (


//       // <View style={{flex : 1,alignSelf : 'center',alignContent:'center'}}>
//       <View style={{ width: this.state.width, height: this.state.height }} >

//         {/* <ActivityIndicator
//               animating
//               size="large"
//               color={"blue"}
//               style={[styles.activityIndicator, { opacity: this.state.opacity }]}
//             /> */}
//         {/* <Video
//               source={{ uri: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4?_=1' }}
//               style={{ width: 200, height: 200 }}
//               controls={true}
//               onBuffer={this.onBuffer}
//               onLoad={this.onLoad}
//               onLoadStart={this.onLoadStart}
//               ref={(ref) => {
//                 this.player = ref
//               }} 
//               fullscreen={true}
//               paused={true}
//               resizeMode={'cover'}
              
//               /> */}

//         <VideoPlayer
//           source={{ uri: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4?_=1' }}
//           ref={(ref) => {
//             this.player = ref
//           }}
//           onBack={() => console.log("onBack function is clicked")}
//           disableBack={true}
//           paused={true}
//           onLoad={this.onLoad}
//           onBuffer={this.onBuffer}
//           onLoadStart={this.onLoadStart}
//           resizeMode={'cover'}
//           // fullscreen={true}
//           onEnterFullscreen={this.onFullScreenClicked}
//           onExitFullscreen={this.onFullScreenDismiss}
//         />


//       </View>




//     )

//   }

// }

// const styles = StyleSheet.create({


//   ActivityIndicator: {
//     position: 'absolute',
//     left: 0,
//     right: 0,
//     top: 0,
//     bottom: 0,

//   }

// })



// --------------------------------------------------------------

// import {AudioRecorder,AudioUtils} from 'react-native-audio'
// import Sound from 'react-native-sound'
// import RenderAudio from './audioCustomView'
// const Audios = [];
// var numberOfAudios = 0;
// export default function App(){


// const [showRecord,setShowRecord] = useState('flex')
// const [showStop, setShowStop] = useState('none')
// const [showAudioRecorded, setShowAudioRecorded] = useState(false)
// const [audioPath,setAudioPath] = useState('');
// const [StartAudio,setStartAudio] = useState(false);
// const [playAudio,setPlayAudio] = useState(false);
// const [currentTime, setCurrentTime] = useState(0.0);
// const [paused,setPaused] = useState(false);
// const [finished,setFinished] = useState(false);
// const [sound,setSound] = useState({});
// const [audio_play_time_update, setAudio_play_time_update] = useState('');
// const [audio_time_update_continue, setAudio_time_update_continue] = useState('');
// const [length, setLength] = useState(0);


// // const [audio_recorded_id,setAudio_recorded_id]=useState([]);


//   function messageIdGenerator() {
//     // generates uuid.
//     return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, c => {
//       let r = (Math.random() * 16) | 0,
//         v = c == "x" ? r : (r & 0x3) | 0x8;
//       return v.toString(16);
//     });
//   }

//   const requestAudioRecord = async () => {
//     try {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
//         {
//           title: " Permission to record audio",
//           message:
//             "we need your permission to record audio",
//           buttonNeutral: "Ask Me Later",
//           buttonNegative: "Cancel",
//           buttonPositive: "OK"
//         }
//       );
//       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//         console.log("You can use audio recorder");
//       } else {
//         console.log("audio record permission denied");
//       }
//     } catch (err) {
//       console.warn(err);
//     }
//   };
//   requestAudioRecord()


//   var message = {};
//   message._id = messageIdGenerator();
//   message.user = { _id: messageIdGenerator(), name: "souhair" };
//   var today_date = new Date();
//   message.createdAt = today_date.toUTCString();
//   message.audio = audioPath;
//   message.messageType = "audio";
//   message.content = {
//     playAudio: false,
//     paused: false,
//     finished: false,
//     currentTime: 0.0,
//     audio_play_time_update: '',
//     audio_time_update_continue: '',
//   }

//   Audios[numberOfAudios] = message;

//    async function StartAudioRecord(){
//     let folder = AudioUtils.DocumentDirectoryPath;
//     let audioPath = folder + '/'+messageIdGenerator()+'.aac';
//     setAudioPath(audioPath);
//     console.log("audio path is :",audioPath);
//     let options = {
//       SampleRate: 22050,
//       Channels: 1,
//       AudioQuality: "Low",
//       AudioEncoding: "wav",
//       MeteringEnabled: true,
//     };
//     await AudioRecorder.prepareRecordingAtPath(audioPath, {
//        SampleRate: 22050,
//        Channels: 1,
//        AudioQuality: "Low",
//        AudioEncoding: "aac"
//      })
//     //  .then(
//     //    (async (success)=>{
//     //       await AudioRecorder.startRecording().catch((e) => console.log(e))
//     //   })
//     // ).catch((e) => console.log(e))
//      await AudioRecorder.startRecording().catch((e) => console.log(e))
//   }

//   async function StopAudioRecording(){
//     await AudioRecorder.stopRecording();
//     const sound = new Sound(audioPath,Sound.MAIN_BUNDLE,err =>{
//       if(!err){
//         console.log(err);
//       }
//       setLength(sound.getDuration());
//     })

   
    
//     console.log("audio recording stopped");
//     setShowAudioRecorded(true);
//   }


//   function renderAudio(prop){

//     // const {_id,audioPath}={...prop};

//     // let newAudio=prop._id;

//     // setAudio_recorded_id(prev => [...prev,newAudio]);

//    return (
//      <View style={[{ display: 'flex', backgroundColor: 'gray' }, styles.readAudio]}>

//        <View style={styles.audioStyle}>

//          {/* play audio */}
//          <View style={{ display: !prop.content.playAudio && prop.content.paused == false ? 'flex' : 'none' }} >
//            <Icon
//              name="ios-play"
//              size={35}
//              color={"blue"}
//              style={{
//                left: 20,
//                // position: "relative",
//                shadowColor: "#000",
//                shadowOffset: { width: 0, height: 0 },
//                shadowOpacity: 0.5,
//                backgroundColor: "transparent"
//              }}
//              onPress={() => {
//               //  setPlayAudio(true);
//               //  setPaused(false);
//               //  setFinished(false);
//               Audios[0].content.playAudio=true;
//                Audios[0].content.pause = false;
//                Audios[0].content.finished = false;
//                clearInterval(Audios[0].content.audio_play_time_update);
//                clearInterval(Audios[0].content.audio_time_update_continue);
//                const sound = new Sound(prop.audio, Sound.MAIN_BUNDLE, error => {
//                  if (error) {
//                    console.log("failed to load the sound", error);
//                   //  setPlayAudio(false);
//                    Audios[0].content.playAudio = false;
//                  }
//                  setSound(sound);
//                  sound.play(success => {
//                    console.log(success, "success play");
//                    Audios[0].content.finished = false;
//                    clearInterval(Audios[0].content.audio_play_time_update);
//                    //  clearInterval(audio_time_update_continue);
//                   //  setCurrentTime(0);
//                    Audios[0].content.currentTime=0;
//                    sound.stop();
//                   //  setPlayAudio(false);
//                   //  setPaused(false);
//                   //  setFinished(false);
//                    Audios[0].content.playAudio = false;
//                    Audios[0].content.pause = false;
//                    Audios[0].content.finished = false;
//                    if (!success) {
//                      Alert.alert("There was an error playing this audio");
//                     //  setPlayAudio(false)
//                      Audios[0].content.playAudio = false;
//                    }
//                  });

//                  var audio_play_time_update = setInterval(() => {
//                    console.log("interval executed");
//                    sound.getCurrentTime((sec, isPlaying) => {
//                      if (isPlaying === true) {
//                       //  setCurrentTime(sec);
//                        Audios[0].content.currentTime=sec;
//                        }
//                    });

//                  }, 1000);

//                  Audios[0].content.audio_play_time_update=audio_play_time_update;

//                });
//              }}
//            />
//          </View>

//          {/* pause the audio */}
//          <View style={{ display: Audios[0].content.playAudio ? 'flex' : 'none' }} >
//            <Icon
//              name="pause-circle"
//              size={35}
//              color={"red"}
//              style={{
//                left: 20,
//                // position: "relative",
//                shadowColor: "#000",
//                shadowOffset: { width: 0, height: 0 },
//                shadowOpacity: 0.5,
//                backgroundColor: "transparent"
//              }}
//              onPress={() => {
//                Audios[0].content.playAudio=false;
//                Audios[0].content.paused=true;
//                sound.pause();
//              }}
//            />
//          </View>

//          {/* audio continue view */}
//          <View style={{ display: !Audios[0].content.playAudio && Audios[0].content.paused ? 'flex' : 'none' }} >
//            <Icon
//              name="play-circle"
//              size={35}
//              color={"green"}
//              style={{
//                left: 20,
//                // position: "relative",
//                shadowColor: "#000",
//                shadowOffset: { width: 0, height: 0 },
//                shadowOpacity: 0.5,
//                backgroundColor: "transparent"
//              }}
//              onPress={async () => {
//                Audios[0].content.playAudio=true;
//                Audios[0].content.paused=false;
//                await sound.setCurrentTime(Audios[0].content.currentTime);
//                await sound.play(success => {
//                  console.log(success, "success play");
//                  Audios[0].content.finished=true;
//                  clearInterval(Audios[0].content.audio_play_time_update);
//                  clearInterval(Audios[0].content.audio_time_update_continue);
//                  Audios[0].content.currentTime=0;
//                  sound.stop();
//                  Audios[0].content.playAudio=false;
//                  Audios[0].content.paused=false;
//                  Audios[0].content.finished=false;
//                  if (!success) {
//                    Alert.alert("There was an error playing this audio");
//                    Audios[0].content.playAudio=false;
//                  }
//                });

//                var audio_time_update_continue = setInterval(() => {
//                  sound.getCurrentTime((sec, isPlaying) => {
//                    console.log("interval executed");
//                    if (isPlaying === true && (sound.getDuration() != Audios[0].content.currentTime)) {
//                      Audios[0].content.currentTime=sec;
//                    }
//                  });
//                }, 1000);
//                Audios[0].content.audio_time_update_continue=audio_time_update_continue;
//              }}
//            />
//          </View>

//          <Text style={styles.audioText}> {Math.floor(Audios[0].content.currentTime)} </Text>

//        </View>

//      </View>

//     )

//   }

// return(



//   <View style={styles.container}>


//       <View>
//         <Text>Start recording audio</Text>

//         <View style={[{display : showRecord},styles.playAudio]}>
            
//         <TouchableOpacity onPress={()=>{
//               console.log("start audio record clicked");
//               StartAudioRecord();
//               setShowRecord("none");
//               setShowStop("flex");

//           }} >
//           <Icon name="mic" size={64} color="blue" />
//         </TouchableOpacity>
            
//         </View>

//         <View style={[{ display: showStop },styles.playAudio]}>
        
//         <TouchableOpacity onPress={() => {
//           StopAudioRecording();
//           setShowRecord("flex");
//           setShowStop("none");
//           setShowAudioRecorded(true);
//           console.log("audio record stop clicked");
//         }} >
//           <Icon name="stop" size={64} color="red"   />
//         </TouchableOpacity>

//         </View>

//         <View style={{display : showAudioRecorded ? 'flex' : 'none'}} >

//         <RenderAudio props={{ audioPath:'https://firebasestorage.googleapis.com/v0/b/meetme-a37bb.appspot.com/o/ad94df0c-48ef-415c-93ec-14b328f625be.aac?alt=media&token=169b9674-4f8e-4d5e-97e2-fb7da735de4b' ,length}} />

//         </View>



//       {/* {renderAudio(Audios[0]) } */}

//       </View>

//     {/* <View style={[{ display: showAudioRecorded },styles.readAudio]}>
     
//       <Icon
//         name="ios-play"
//         size={35}
//         color={playAudio ? "red" : "blue"}
//         style={{
//           left: 90,
//           position: "relative",
//           shadowColor: "#000",
//           shadowOffset: { width: 0, height: 0 },
//           shadowOpacity: 0.5,
//           backgroundColor: "transparent"
//         }}
//         onPress={() => {
//           setPlayAudio(true);
//           const sound = new Sound(audioPath, Sound.MAIN_BUNDLE, error => {
//             if (error) {
//               console.log("failed to load the sound", error);
//               setPlayAudio(false);
//             }
            
//             sound.play(success => {
//               console.log(success, "success play");
//               if (!success) {
//                 Alert.alert("There was an error playing this audio");
//                 setPlayAudio(false);
//               }
//             });
//           });
//         }}
//       />

    
//       </View> */}

   

//   </View>





// )

// // ------------------------------------------------------------


// // return (



  
// //   <View>

// //             <Text> hello world</Text>

// //             <Button title="click" color="black" onPress={()=>{
// //               const _id = Math.floor(Math.random() * 1000);
// //               const audioPath ="file://data/data/com.meetme/file/fheihfhff.aac";

// //             var newAudio = {
// //               _id : ''+_id+'',
// //               content :{
// //                 playAudio: false,
// //                 paused: false,
// //                 finished: false,
// //                 currentTime: 0.0,
// //                 audio_play_time_update: '',
// //                 audio_time_update_continue: '',
// //                 audioPath: audioPath
// //               }
// //               }
              
// //               console.log("new audio added");
// //               Audios.splice(numberOfAudios,0,newAudio);
// //               numberOfAudios++;
// //       // setAudio_recorded_id({audio_recorded_id,newAudio});
              
// //             }}  />

// //             <Button title="show"  color="red"  onPress={()=>{
// //                 console.log(Audios);
// //             }} />

// //             <TextInput placeholder='Enter a number' placeholderTextColor='#05036D'
// //               style={{borderColor :"black",borderWidth : 3,marginTop : 15,marginBottom : 15,}}
// //               onChangeText={phoneNumber => setNumber(phoneNumber) }
// //               value={ number} keyboardType={"numeric"}
// //             />

// //             <Button title="show object from array with this id" color="blue" onPress={()=>{
// //               console.log(parseInt(number));
// //               console.log(number);
// //               const object = Audios[parseInt(number)];
// //               console.log(object);

              
// //             }} />

// //             <TextInput placeholder='Enter index of object to update' placeholderTextColor='#05036D'
// //               style={{ borderColor: "black", borderWidth: 3, marginTop: 15, marginBottom: 15, }}
// //               onChangeText={phoneNumber => setIndex(phoneNumber)}
// //               value={Index} keyboardType={"numeric"}
// //             />

// //             <Button title="show object after update" color="blue" onPress={() => {
// //               console.log(parseInt(Index));
// //               const object = Audios[parseInt(Index)];
// //               console.log("before update :",object);
// //               object.playAudio=true;
// //               Audios[parseInt(Index)]=object;
// //               console.log(Audios[parseInt(Index)]);


// //             }} />

// //   </View>

// // )

// // ------------------------------------------------------------


// // return (


// //   <View style={{flex:1}}>


// //     <View style={[{ display: 'flex',backgroundColor:'gray' }, styles.readAudio]}>
      
// //       <View style={styles.audioStyle}>
      
// //       <View style={{display : !playAudio ? 'flex' : 'none' }} >
// //           <Icon
// //             name="ios-play"
// //             size={35}
// //             color={playAudio ? "red" : "blue"}
// //             style={{
// //               left: 20,
// //               // position: "relative",
// //               shadowColor: "#000",
// //               shadowOffset: { width: 0, height: 0 },
// //               shadowOpacity: 0.5,
// //               backgroundColor: "transparent"
// //             }}
// //             onPress={() => {
// //               setPlayAudio(true);
// //               const sound = new Sound(audioPath, Sound.MAIN_BUNDLE, error => {
// //                 if (error) {
// //                   console.log("failed to load the sound", error);
// //                   setPlayAudio(false);
// //                 }
// //                 setSound(sound);
// //                 sound.play(success => {
// //                 console.log(success, "success play");
// //                 sound.getCurrentTime((sec, isPlaying) => {
// //                   setCurrentTime(sec);
// //                 })

// //                   if (!success) {
// //                     Alert.alert("There was an error playing this audio");
// //                     setPlayAudio(false);
// //                   }
// //                 });

// //               });
// //             }}
// //           />
// //       </View>

// //         <View style={{ display: playAudio ? 'flex' : 'none' }} >
// //           <Icon
// //             name="pause-circle"
// //             size={35}
// //             color={"red"}
// //             style={{
// //               left: 20,
// //               // position: "relative",
// //               shadowColor: "#000",
// //               shadowOffset: { width: 0, height: 0 },
// //               shadowOpacity: 0.5,
// //               backgroundColor: "transparent"
// //             }}
// //             onPress={() => {
// //               setPlayAudio(false);
// //               sound.pause();
// //             }}
// //           />
// //         </View>

// //         <Text style={styles.audioText}> {currentTime} </Text>

// //     </View>

// //     </View>

// //   </View>



// // )



//  }





// <View style={[{ display: showAudioRecorded ? 'flex' : 'none', backgroundColor: 'gray' }, styles.readAudio]}>

//   <View style={styles.audioStyle}>

//     {/* play audio */}
//     <View style={{ display: !playAudio && paused == false ? 'flex' : 'none' }} >
//       <Icon
//         name="ios-play"
//         size={35}
//         color={playAudio ? "red" : "blue"}
//         style={{
//           left: 20,
//           // position: "relative",
//           shadowColor: "#000",
//           shadowOffset: { width: 0, height: 0 },
//           shadowOpacity: 0.5,
//           backgroundColor: "transparent"
//         }}
//         onPress={() => {
//           setPlayAudio(true);
//           setPaused(false);
//           setFinished(false);
//           const sound = new Sound(audioPath, Sound.MAIN_BUNDLE, error => {
//             if (error) {
//               console.log("failed to load the sound", error);
//               setPlayAudio(false);
//             }
//             setSound(sound);
//             sound.play(success => {
//               console.log(success, "success play");
//               setFinished(true);
//               clearInterval(audio_play_time_update);
//               //  clearInterval(audio_time_update_continue);
//               setCurrentTime(0);
//               sound.stop();
//               setPlayAudio(false);
//               setPaused(false);
//               setFinished(false);
//               if (!success) {
//                 Alert.alert("There was an error playing this audio");
//                 setPlayAudio(false);
//               }
//             });

//             var audio_play_time_update = setInterval(() => {
//               console.log("interval executed");
//               sound.getCurrentTime((sec, isPlaying) => {
//                 if (isPlaying === true) {
//                   setCurrentTime(sec);
//                 }
//                 // else if (isPlaying && (sound.getDuration() == currentTime)) {


//                 // }
//               });

//             }, 1000);

//             setAudio_play_time_update(audio_play_time_update);

//           });
//         }}
//       />
//     </View>

//     {/* pause the audio */}
//     <View style={{ display: playAudio ? 'flex' : 'none' }} >
//       <Icon
//         name="pause-circle"
//         size={35}
//         color={"red"}
//         style={{
//           left: 20,
//           // position: "relative",
//           shadowColor: "#000",
//           shadowOffset: { width: 0, height: 0 },
//           shadowOpacity: 0.5,
//           backgroundColor: "transparent"
//         }}
//         onPress={() => {
//           setPlayAudio(false);
//           setPaused(true);
//           sound.pause();
//         }}
//       />
//     </View>

//     {/* audio continue view */}
//     <View style={{ display: !playAudio && paused ? 'flex' : 'none' }} >
//       <Icon
//         name="play-circle"
//         size={35}
//         color={"green"}
//         style={{
//           left: 20,
//           // position: "relative",
//           shadowColor: "#000",
//           shadowOffset: { width: 0, height: 0 },
//           shadowOpacity: 0.5,
//           backgroundColor: "transparent"
//         }}
//         onPress={async () => {
//           setPlayAudio(true);
//           setPaused(false);
//           await sound.setCurrentTime(currentTime);
//           await sound.play(success => {
//             console.log(success, "success play");
//             setFinished(true);
//             clearInterval(audio_play_time_update);
//             clearInterval(audio_time_update_continue);
//             setCurrentTime(0);
//             sound.stop();
//             setPlayAudio(false);
//             setPaused(false);
//             setFinished(false);
//             if (!success) {
//               Alert.alert("There was an error playing this audio");
//               setPlayAudio(false);
//             }
//           });

//           var audio_time_update_continue = setInterval(() => {
//             sound.getCurrentTime((sec, isPlaying) => {
//               console.log("interval executed");
//               if (isPlaying === true && (sound.getDuration() != currentTime)) {
//                 setCurrentTime(sec);
//               }
//               // else if (isPlaying && (sound.getDuration() == currentTime)) {
//               //   sound.stop();
//               //   clearInterval(audio_time_update);
//               //   setPlayAudio(false);
//               //   setPaused(false);
//               //   setCurrentTime(0.0);
//               // }
//             });
//           }, 1000);
//           setAudio_time_update_continue(audio_time_update_continue);
//         }}
//       />
//     </View>

//     <Text style={styles.audioText}> {Math.floor(currentTime)} </Text>

//   </View>

// </View>








// const item = {fullname : 'souhair abdelhadi',age : 23};
// export default class App extends React.Component{




//   render(){


//     return(

//         <View style={{flexDirection:'row',marginTop:'60%',marginLeft : '30%'}}>

//           <Card>
//             <Text style={{color : 'black'}} > {item.fullname} </Text>
//           </Card>

//         </View>

//     )



//   }




// }





// import ImageZoomViewer from 'react-native-image-zoom-viewer'
// import * as ImagePicker from 'react-native-image-picker'
// import {Picker} from '@react-native-picker/picker'
// var age = [];

// for (var i = 18;i<=100;i++){
//   age=[...age,
//     {label : i.toString(),value : i.toString() }
//   ]
// }

// export default class App extends React.PureComponent{




//   constructor(props){
//     super(props);
//     const tryMe = async () =>{
//       try {

//         const data = await AsyncStorage.getItem('user');
//         if (data !== null) {
//           console.log(data);
//           var value = JSON.parse(data);
//           console.log(value._id);
//           firebase.database().ref('/users/' + value._id)
//             .once('value', (snapshot) => {
//               this.setState({ profileImage: snapshot.val().profileImage,userUid : value._id });

//             })

//         }

//       } catch (error) {
//         console.log(error)
//       }
//     }
//     tryMe();
//     console.log(age);
//   }

//   state = { 
//     showModal: false,
//     isLoading:false,
//     totalByte:0,
//     transferredBytes:0,
//     showEditModal : false,
//     editFirsName :'',
//     editLastName : '',
//     editAge : '',
//     editPhoneNumber : '',
//     editSocialStatus :'',
//     editGender: '',
//     editInterest: '',
//     editAboutMe: '',
//     editGoal: '',
//    }



//    //arrow function to change user profile image
//   changeImage = () =>{
//     const options = {
//       title: "Select Picture",
//       mediaType: "photo",
//       takePhotoButtonTitle: "Take a Photo",
//       maxWidth: 1000,
//       maxHeight: 1000,
//       allowsEditing: true,
//       noData: true,
//       storageOptions: {
//         skipBackup: true,
//         path: 'images'
//       },

//     };
//     console.log("image pressed");
//     ImagePicker.launchImageLibrary(options, response => {
//       console.log("Response = ", response);
//       if (response.didCancel) {
//         // do nothing
//       } else if (response.error) {
//         // alert error
//       } else {
//         const { uri } = response;
//         console.log(uri)
//         const extensionIndex = uri.lastIndexOf(".");
//         const extension = uri.slice(extensionIndex + 1);
//         const allowedExtensions = ["jpg", "jpeg", "png"];
//         const correspondingMime = ["image/jpg", "image/jpeg", "image/png"];
//         const source = { uri: response.uri };
//         const filename = uri.substring(uri.lastIndexOf('/') + 1);
//         const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri;
//         if (!allowedExtensions.includes(extension)) {
//           return alert("That file type is not allowed.");
//         }
//         else{
//          const uploadFile =  firebase.storage()
//             .ref(filename)
//             .putFile(uploadUri)
//           const res =uploadFile;

//           res.then((snapshot)=>{
//             console.log("loading ended");
//             this.setState({profileImage : snapshot.downloadURL,totalByte:0,transferredBytes:0,isLoading:false});
//             firebase.database().ref('/users/'+this.state.userUid)
//             .update({profileImage : snapshot.downloadURL});
//           })

//           uploadFile.on("state_changed",(snap)=>{

//             this.setState({ totalByte: snap.totalBytes, transferredBytes: snap.bytesTransferred, isLoading: true})

//           })


//         }


       
//       }
//     });
//   }

//     render(){



//       return(







//           <View style={styles.container}>


//           <Modal visible={true} onRequestClose={()=>this.setState({showEditModal : false})} >

//               <LinearGradient colors={['pink', 'gray']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0.5 }} style={{ flex: 1 }} >
//               <ScrollView>

//                 <View style={{ borderBottomWidth: 1, borderBottomColor: 'white', backgroundColor: "#9ba1a3" }} >

//                   <View style={[styles.card, { borderBottomWidth: 0, alignSelf: 'center' }]} >

//                     <Text style={styles.Title} > Change your data</Text>

//                   </View>

//                 </View>
//               <View style={styles.editCard} >
//                 <View style={[styles.card,{borderBottomWidth:0}]} >
//                   <Icon name="person-circle" size={24} color="black" />
//                   <Text style={styles.Title} > First name : </Text> 

//                 </View>
//                   <TextInput placeholder='First name' placeholderTextColor='#05036D'
//                     style={styles.input}
//                     onChangeText={editFirsName => this.setState({ editFirsName })}
//                     value={this.state.editFirsName} 
//                     maxLength={15}

//                     />
//               </View>

//                 <View style={styles.editCard} >
//                   <View style={[styles.card, { borderBottomWidth: 0 }]} >
//                     <Icon name="person-circle" size={24} color="black" />
//                     <Text style={styles.Title} > Last name : </Text>

//                   </View>
//                   <TextInput placeholder='Last name' placeholderTextColor='#05036D'
//                     style={styles.input}
//                     onChangeText={editLastName => this.setState({ editLastName })}
//                     value={this.state.editLastName}
//                     maxLength={15}

//                   />
//                 </View>
                
//                 <View style={styles.editCard} >
                
//                 <View style={[styles.card, { borderBottomWidth: 0 }]} >
//                   <Icon name="heart" size={24} color="black" />

//                   <Text style={styles.Title} > Age :</Text> 

//                 </View>

//                     <View style={{backgroundColor:"white",borderColor:"black",borderWidth:2}} >
//                     <Picker
//                       onValueChange={(value) => console.log(value)}
//                       selectedValue={(e) => console.log(e)}
//                       mode="dialog"
                      
//                     >
//                       {age.map((snap) => {
//                         return (<Picker.Item label={snap.label} value={snap.value} key={snap.label}  />)
//                       })}
//                     </Picker>
//                     </View>
 
//                 </View>


                



//                 <View style={styles.editCard} >
//                   <View style={[styles.card, { borderBottomWidth: 0 }]} >


//                     <Icon name="phone-portrait" size={24} color="black" />
//                     <Text style={styles.Title} > Phone Number :</Text>


//                   </View>
//                   <TextInput placeholder='Phone Number' placeholderTextColor='#05036D'
//                     style={styles.input}
//                     onChangeText={editPhoneNumber => this.setState({ editPhoneNumber })}
//                     value={this.state.editPhoneNumber}
//                     maxLength={10}

//                   />
//                 </View>


//                 <View style={styles.editCard} >
//                   <View style={[styles.card, { borderBottomWidth: 0 }]} >

//                     <Icon name="globe" size={26} color="black" />
//                     <Text style={styles.Title} > Social Status : </Text>

//                   </View>



//                 </View>


//                 <View style={styles.card} >
//                   <Icon name="male" size={24} color="black" />
//                   <Text style={styles.text} >/</Text>
//                   <Icon name="female" size={24} color="black" />

//                   <Text style={styles.text} ><Text style={styles.Title} > Sex : </Text> Male </Text>

//                 </View>

//                 <View style={styles.card} >
//                   <Icon name="search" size={24} color="black" />
//                   <Text style={styles.text} ><Text style={styles.Title} > Interested in  : </Text> {this.props.interested_in ?
//                     this.props.interested_in : "Girls"} </Text>

//                 </View>
                

//                 <View style={styles.aboutMe_goal} >

                  
//                     <View style={[styles.card, { borderBottomWidth: 0 }]} >

//                     <Icon name="heart" size={26} color="black" />
//                     <Text><Text style={styles.Title} > About me : </Text> </Text>
//                     </View>
//                     <TextInput placeholder='Give a short description about you' placeholderTextColor='#05036D'
//                       style={{padding:'10%',borderWidth:2,borderColor:"blue",alignSelf:'center'}}
//                       onChangeText={editAboutMe => this.setState({ editAboutMe })}
//                       value={this.state.editAboutMe}
//                       maxLength={500}

//                     />
//                 </View>

//                 <View style={styles.aboutMe_goal} >
//                   <View style={{ flexDirection: 'row' }} >
//                     <Icon name="flame" size={26} color="black" />
//                     <Text><Text style={styles.Title} > Goal : </Text> </Text>
//                   </View>
//                   <View style={{ backgroundColor: 'white', padding: '2%', borderRadius: 10, marginTop: '2%' }} >
//                     <Text style={styles.text} >I was previously seeing this error. After optimizing my code, I no longer see it. I figured out the problem by adding console.log() statement to the render() function of the Component that creates the FlatList, and the function that renders each item in the List. I noticed that my code was previously re-rendering the entire FlatList and all its items whenever there's a state change to any component on that page (even a component that's not related to the FlatList). I fixed this by converting various components to PureComponents. Here's what my FlatList declaration looks like</Text>

//                   </View>
//                 </View>
//               </ScrollView>
//               </LinearGradient>

//           </Modal>


//           <ScrollView>

//             {/* code for rounded image and it change button */}
//             <LinearGradient colors={['#05036D', 'pink', '#36AFF2']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={{
//               flex: 1, borderBottomWidth: 1,
//               borderBottomColor: 'white', }}  >

//             <View style={[styles.card,{alignSelf:'center',borderBottomWidth:0}]} >

//                   <TouchableOpacity onPress={()=>this.setState({showModal:true})} >
//                   <View style={{flexDirection : 'row'}}>
//                     <Image source={{ uri:this.state.profileImage }} style={styles.imageView} />
//                     {this.state.isLoading ? <Text style={styles.upload} >Uploading : <Text style={{color:"orange"}} >{Math.round((this.state.transferredBytes / this.state.totalByte) * 100)}</Text>  </Text> : <Text></Text>}
//                     <TouchableOpacity onPress={() => this.changeImage()} style={styles.changeImage} >
//                       <Icon name="camera" size={32} color="black" />
//                     </TouchableOpacity>
//                   </View>
//                   </TouchableOpacity>

//                 <Modal visible={this.state.showModal} transparent={true} onRequestClose={()=>this.setState({showModal:false})} >
//                   <ImageZoomViewer imageUrls={[{url : this.state.profileImage}]} onCancel={()=>this.setState({showModal : false})} />
//                 </Modal>

//             </View>
//                     </LinearGradient>

//               {/* code for user profile data and edit button */}
//             <LinearGradient colors={['pink','gray']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0.5 }} style={{ flex: 1 }} >

//               <View style={{ borderBottomWidth: 1, borderBottomColor: 'white', backgroundColor:"#9ba1a3" }} >
                
//                 <View style={[styles.card, { borderBottomWidth: 0,alignSelf:'center'}]} >
            
//                   <Icon name="settings" size={27} color="black" />
//                   <Text style={styles.Title} > Edit</Text>

//                </View>

//               </View>

//           <View style={styles.card} >
//               <Icon name="person-circle" size={24} color="black"  /> 
//               <Text style={styles.text} ><Text style={styles.Title} > Name : </Text> Souhair abdelhadi </Text>

//           </View>

//               <View style={styles.card} >
//                 <Icon name="heart" size={24} color="black" />

//                 <Text style={styles.text} ><Text style={styles.Title} > Age :</Text> 23 </Text>

//               </View>
//               <View style={styles.card} >
//                 <Icon name="phone-portrait" size={24} color="black" />
//                 <Text style={styles.text} ><Text style={styles.Title} > Phone Number :</Text> 0XXXXXXXXX </Text>

//               </View>

//               <View style={styles.card} >
//                 <Icon name="globe" size={26} color="black" />
//                 <Text style={styles.text} ><Text style={styles.Title} > Status : </Text> Single </Text>

//               </View>
//               <View style={styles.card} >
//                 <Icon name="male" size={24} color="black" />
//                 <Text style={styles.text} >/</Text>
//                 <Icon name="female" size={24} color="black" />

//                 <Text style={styles.text} ><Text style={styles.Title} > Sex : </Text> Male </Text>

//               </View>
//               <View style={styles.card} >
//                 <Icon name="search" size={24} color="black" />
//                 <Text style={styles.text} ><Text style={styles.Title} > Interested in  : </Text> {this.props.interested_in ?
//                   this.props.interested_in: "Girls"} </Text>

//               </View>

//               <View style={styles.aboutMe_goal} >
//                 <View style={{ flexDirection: 'row' }} >
//                   <Icon name="heart" size={26} color="black" />
//                   <Text><Text style={styles.Title} > About me : </Text> </Text>
//                 </View>
//               <View style={{backgroundColor : 'white',padding:'2%',borderRadius:10,marginTop:'2%'}} >
//                   <Text style={styles.text} >I was previously seeing this error. After optimizing my code, I no longer see it. I figured out the problem by adding console.log() statement to the render() function of the Component that creates the FlatList, and the function that renders each item in the List. I noticed that my code was previously re-rendering the entire FlatList and all its items whenever there's a state change to any component on that page (even a component that's not related to the FlatList). I fixed this by converting various components to PureComponents. Here's what my FlatList declaration looks like</Text>

//               </View>
//             </View>

//               <View style={styles.aboutMe_goal} >
//                 <View style={{ flexDirection: 'row'}} >
//                   <Icon name="flame" size={26} color="black" />
//                   <Text><Text style={styles.Title} > Goal : </Text> </Text>
//                 </View>
//                 <View style={{ backgroundColor: 'white', padding: '2%', borderRadius: 10, marginTop: '2%' }} >
//                   <Text style={styles.text} >I was previously seeing this error. After optimizing my code, I no longer see it. I figured out the problem by adding console.log() statement to the render() function of the Component that creates the FlatList, and the function that renders each item in the List. I noticed that my code was previously re-rendering the entire FlatList and all its items whenever there's a state change to any component on that page (even a component that's not related to the FlatList). I fixed this by converting various components to PureComponents. Here's what my FlatList declaration looks like</Text>

//                 </View>
//             </View>

//             </LinearGradient>
//           </ScrollView>

//           </View>



//       )



//     }




// }



// const styles = StyleSheet.create({



//   container : {
//     flex : 1,
//   },
//   imageView : {
//     height:300,
//     width: 300,
//     borderRadius:150,
//     alignSelf : 'center',
//   },
//   Title : {
//     fontSize : 24,
//     fontWeight : 'bold',
//     color: 'white',
//   },
//   card : {
//     borderBottomWidth : 1,
//     borderBottomColor : 'white',
//     padding : '3%',
//     flexDirection:'row',
//   },
//   text : {
//         fontSize:18,
//         lineHeight  : 25,

//   },
//   aboutMe_goal : {
//     borderBottomWidth: 1,
//     borderBottomColor: 'white',
//     padding: '3%',
    
//   },
//   changeImage : {
//     top : '80%',
//     right : '20%',
//   },
//   upload :{
//     fontSize:20,
//     fontWeight:'bold',
//     color:"white",
//     top: '50%',
//     left: '30%',
//     position:'absolute'
//   },
//   editCard : {
//     borderBottomWidth: 1,
//     borderBottomColor: 'white',
//     padding: '3%',
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#05036D',
//     fontSize: 15,
//     fontWeight: 'bold',
//     color: '#05036D',
//     borderWidth: 3,
//     width: '90%',
//     height: 40,
//     marginLeft: 20,
//     paddingLeft: 15,
//     textAlign: 'center',
//   },
//   pickerList : {
//     borderWidth : 2,
//     backgroundColor : 'white',
//     borderColor : 'white',
//   }


// })


// // const styles = StyleSheet.create({

// //   container : {
// //     flex : 1,

// //   },
// //   playAudio : {
// //     marginLeft: '50%',
// //     marginVertical : '30%',


// //   },
// //   readAudio : {
// //     marginLeft: '5%',
// //     marginVertical: '30%',
// //     borderWidth: 2,
// //     borderRadius: 4,
// //     width : "70%"
// //     },
// //   audioStyle : {
// //     margin : 5,
// //     flexDirection: 'row',

// //   },
// //   audioText : {
// //     fontSize: 20, 
// //     fontWeight: 'bold', 
// //     color: 'white', 
// //     marginLeft: '25%',

// //   }


// // })




// import Profile from './component/changeProfileData'



// export default function App(){





//   return(


//     <Profile  />


//   )









// }





// export default class App extends React.PureComponent{

 


//     render(){
//       return (


//         <Modal visible={true} transparent={true}  >

//           <View style={{ backgroundColor: "rgba(0,0,0,0.7)", flex: 1 }}>


//            <View style={{marginVertical : '50%',alignSelf:'center'}} >

//            <ActivityIndicator size="large" color="blue" />
//               <Text style={styles.modalUpdatingText} > Making Changes </Text>

//            </View>

//           </View>

//         </Modal>


//       )









//     }






// }


// const styles = StyleSheet.create({

//   input: {

//     height: 50,
//     width: '100%',
//     borderWidth: 1,
//     padding: 15,
//     marginBottom: 20,
//     borderColor: 'gray',


//   },
//   container: {
//     flex: 1,
//   },
//   Card: {
//     flexDirection: 'row',
//     backgroundColor: '#324662',
//     alignSelf: 'auto',
//     paddingTop: '2%',
//     paddingBottom: '2%',
//   },
//   fullName: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: 'white',
//     paddingLeft: '20%'
//   },
//   modal_container: {

//     backgroundColor: "gray",
//     opacity: 0.1,


//   },
//   options: {

//     color: '#4ac3ff',
//     fontSize: 20,
//     fontWeight: 'bold',
//     textAlign: 'center',

//   },
//   modal_view_style: {
//     borderBottomWidth: 2,
//     borderColor: "black",
//     // marginBottom : 5,
//     padding: "5%",
//     backgroundColor: "white",

//   },
//   video: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     bottom: 0,
//     right: 0,
//   },
//   playAudio: {
//     // marginLeft: '50%',
//     marginVertical: '5%',


//   },
//   readAudio: {
//     margin: '5%',
//     borderWidth: 2,
//     borderRadius: 4,
//     width: "70%",
//   },
//   audioStyle: {
//     margin: 5,
//     flexDirection: 'row',

//   },
//   audioText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: 'white',
//     marginLeft: '25%',

//   },
//   modalUpdatingText : {
//     fontSize:20,
//     fontWeight:'bold',
//     color : 'white',
//     marginTop : '5%',
//   }



// })

// import CheckConn from './screens/connectivityLost'


// export default class App extends React.Component{



//   state = {
//     showModal : false,
//   }

//   componentDidMount(){

    
//     this.conCheckInterval = setInterval(() => {
//       try {


//         fetch(
//           'http://www.google.com'
//         ).then(async (response) => {

//           if (response.status == 200) {

//             console.log("connection exists");
//             this.setState({showModal : false});

//           }

//           else {
           
//             console.log("you may lost the connection");
//             this.setState({ showModal: true });

//           }

//         })
//           .catch( (error) => {

//             console.log(error);
//             console.log("you may lost the connection");
//             this.setState({ showModal: true });


//           });


//       }
//       catch (error) {
//         console.log(error);

//       }
//     }, 10000);

//   }

//   componentWillUnmount(){
//     clearInterval(this.conCheckInterval);
//   }


//   render(){


//     return(

//       <View >

//       <Modal visible={this.state.showModal} >
//         <CheckConn />
//       </Modal>

//         <Text>Hello world</Text>
//       </View>

//     )


//   }




// }


// var item = {
//   fullName :"fhzuieh",
//   userUid : "fizehhejj",
//   profileImage: "https://image.winudf.com/v2/image1/Y29tLndhbGxpZS5sZWRwdXJnZW1hc2t3YWxscGFwZXJfc2NyZWVuXzRfMTU2NzQ5MDE4OF8wODE/screen-4.jpg?fakeurl=1&type=.jpg",
//   age:32,
//   gender:"",
//   interest:"",
//   aboutMe:"",
//   goal:"",
//   socialStatus:"",
//   phoneNumber:""

// }

// var obj ={
//   "fhzeihfize" : {
//     data : 'zdho',
//     age : 673
//   }
// }
// export default class App extends React.PureComponent{










//   render(){


//     return(
//      <View style={styles.container} >
        
//         <View style={styles.card} >
//           <Text style={styles.text}  >Full Name</Text>
//           <View style={styles.circle} >
//             <Text style={styles.circle_text} >100</Text>
//           </View>
//       </View>

//      </View>
//     )

//   }







// }

// const styles = StyleSheet.create({
  
//   container : {
//     flex : 1
//   },
//   card : {
//     height : 50,
//     backgroundColor: '#324052',
//     flexDirection : 'row',
//   },
//   text : {
//     fontSize : 20,
//     fontWeight: 'bold',
//     color : 'white',
//     textAlign : 'center',
//   },
//   circle : {
//     minHeight: 20,
//     minWidth:20,
//     borderRadius:20,
//     backgroundColor : 'red',
//     alignSelf : 'flex-start',
//     alignItems : 'center',
//     marginLeft:'3%'
//   },
//   circle_text : {
//     color : 'white',
//     fontSize: 14,
//     fontWeight : 'bold',
//     padding:"1%",

//   }

// })













// export default class App extends React.Component{



//     state = {
//       onlineUsersMounted : true,
//       messagesMounted : false,      
//     }



// render(){


//   return(


//     <View style={styles.container} >

//           <View style={styles.card} >

//               <TouchableOpacity style={{flexDirection : 'row',marginLeft : "8%",
//           borderBottomWidth: 2,
//           borderBottomColor: this.state.onlineUsersMounted ? "orange" : "white"
//               }} 
//               onPress={()=>{
//                 this.setState({
//                   onlineUsersMounted :  true,
//                   messagesMounted : false
//                 })
//               }}
//               >
//                 <Icon  name="person-circle"  size={24} 
//                 color={this.state.onlineUsersMounted ? "orange" : "white"}
//                  />
//           <Text style={[styles.text, { color: this.state.onlineUsersMounted ? "orange" : "white" }]} >Online users</Text>
//               </TouchableOpacity>

//         <TouchableOpacity style={{ flexDirection: 'row',marginLeft : "8%",
//           borderBottomWidth: 2,
//           borderBottomColor: this.state.messagesMounted ? "orange" : "white"
//          }}
//           onPress={() => {
//             this.setState({
//               onlineUsersMounted: false,
//               messagesMounted: true
//             })
//           }}
//            >
//                 <Icon name="chatbubbles" size={24}
//                 color={this.state.messagesMounted ? "orange" : "white"}
//               />
//           <Text style={[styles.text, { color: this.state.messagesMounted ? "orange" : "white" }]}  >Messages</Text>
//             </TouchableOpacity>

//           </View>


//           <View style={{flex : 1,display : this.state.onlineUsersMounted ? 'flex' :'none' }} >
//             <About />
//           </View>

//       <View style={{ flex: 1,display: this.state.messagesMounted ? 'flex' : 'none' }} >

//           <Text>Hello world</Text>

//           </View>

//     </View>




//   )

// }



// }



// const styles = StyleSheet.create({


//   container : {
//     flex : 1
//   },
//   text : {
//     fontSize : 18,
//     fontWeight: 'bold',
//     marginLeft : "3%",
//   },
//   card : {
//     flexDirection : 'row',
//     backgroundColor : "blue",
//     height : "6%",
//     alignItems: 'center'
//   }



// })

//------------------------------------------Hydratation interface------------------------------------------------------------

// import React from 'react'
// import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet, ScrollView,Image,ImageBackground,Dimensions} from 'react-native'
// import ProgressCircle from "react-native-progress-circle"
// import { Modal } from 'react-native';
// import RNSecureStorage,{ACCESSIBLE} from "rn-secure-storage"





// export default class App extends React.Component{


//   state = {
//     currentCapacity : 0,
//     percentage : 0,
//     total : 2500,
//     showModal : false,
//     records : [],
//     day : "",

//   }

//    messageIdGenerator() {
//   // generates an id.
//   return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, c => {
//     let r = (Math.random() * 16) | 0,
//       v = c == "x" ? r : (r & 0x3) | 0x8;
//     return v.toString(16);
//   });
// }

//   waterAmountRelativeIcon = (amount) =>{

//     if(amount == 100){
//       return (<Image source={require('./younness/assets/water100ml.png')}
//         style={{ marginLeft: "8%", height: 32, width: 32 }} />)
//     }
//     else if(amount == 200){
//       return (<Image source={require('./younness/assets/water200ml.png')}
//         style={{ marginLeft: "8%", height: 32, width: 32 }} />)
//     }
//     else if (amount == 300) {
//       return (<Image source={require('./younness/assets/water300ml.png')}
//         style={{ marginLeft: "8%", height: 32, width: 32 }} />)
//     }
//     else if (amount == 400) {
//       return (<Image source={require('./younness/assets/water400ml.png')}
//         style={{ marginLeft: "8%", height: 32, width: 32 }} />)
//     }
//     else if (amount == 500) {
//       return (<Image source={require('./younness/assets/water500ml.png')}
//         style={{ marginLeft: "8%", height: 32, width: 32 }} />)
//     }
//   }

//   addAmountOfWater = (amount) =>{
//     var day = new Date().getUTCDate()
//     RNSecureStorage.set("day",JSON.stringify(day),{accessible : ACCESSIBLE.WHEN_UNLOCKED})
//     .then(()=>{
//       console.log("new day is set")
//     })
//     .catch((error)=>console.log(error))

//     var newCapacity = this.state.currentCapacity + amount
//     this.setState({ currentCapacity: newCapacity })
//     var addTime = new Date().getHours()+":"+new Date().getMinutes()
//     //this.state.records.push({ time: addTime, amount: amount })
//     // this.setState({ records: [...this.state.records,{ time: addTime, amount: amount }]})
//     this.setState({ records: [...this.state.records,{ time: addTime, amount: amount }] })
//     //this.setState({records : this.state.records})
//     setTimeout(() => {
//       if (this.state.currentCapacity < 2500) {
//         var op = this.state.currentCapacity / this.state.total
//         console.log("divided number :", op)
//         var newPercentage = Math.floor(op * 100)
//         this.setState({ percentage: newPercentage })
//         RNSecureStorage.set("records",JSON.stringify(this.state.records),{accessible : ACCESSIBLE.WHEN_UNLOCKED})
//         .then(()=>{
//           console.log("record added")
//         })
//         .catch((e)=>console.log("error when trying to add record"))
//       }
//       else {
//         this.setState({ percentage: 100 })
//       }
//     }, 100)
    
//   }

//   componentDidMount(){

   

//     RNSecureStorage.get("day").then((data)=>{

//       if(data != null){

//         var object_day = JSON.parse(data)
//         console.log("day :",object_day)

//         if(object_day != new Date().getUTCDate()){
//           var day = new Date().getUTCDate()
//           RNSecureStorage.set("day", JSON.stringify(day), { accessible: ACCESSIBLE.WHEN_UNLOCKED })
//             .then(() => {
//               console.log("new day was set")
//               this.setState({records : []})
//               this.state.records.length = 0
//             })
//             .catch((error) => console.log(error))
//         }
//         else{
//           RNSecureStorage.get("records").then((data)=>{
//             if(data != null){
//               var object_data = []
//               object_data = JSON.parse(data)
//               object_data.forEach((data) => {
//                 var value = data.amount
//                 this.setState({ currentCapacity: this.state.currentCapacity + value })
//               })
//               this.setState({records : object_data})
//               console.log("object_data :",object_data)
//             }
//           })
//           .then(()=>{
//             //this.setState({ percentage: Math.floor(this.state.currentCapacity / this.state.total)*100})
//             if (this.state.currentCapacity < 2500) {
//               var op = this.state.currentCapacity / this.state.total
//               console.log("devided number :", op)
//               var newPercentage = Math.floor(op * 100)
//               this.setState({ percentage: newPercentage })

//             }
//             else {
//               this.setState({ percentage: 100 })
//             }
//           })
//           .catch((error)=>console.log("error"))
//         }
//       }
//       else{
//         console.log("error happened")
//         var day = new Date().getUTCDate()
//         RNSecureStorage.set("day",JSON.stringify(day),{accessible : ACCESSIBLE.WHEN_UNLOCKED})
//         .then(()=>{
//           console.log("new day was set")
//         })
//         .catch((error)=>console.log(error))
//       }


//     })


//   }


// render(){


//   return(

//     <ImageBackground style={styles.container} source={require('./younness/assets/drinkWaterBackground.jpg')} 
//         width={Dimensions.get('window').width} height={Dimensions.get('window').height}
//     >



//           <Modal visible={this.state.showModal}  transparent ={true} onRequestClose={()=>{
//             this.setState({showModal : false});
//           }} >

//             <View style={styles.modalContainer}>

//               <View style={styles.modalViewText}>

//                 <Text style={{ fontSize: 18, fontWeight: 'bold', color: "white" }} > Choose amount of water that you drunk </Text>

//               </View>

//               <View style={styles.modalCard} >

//                 <TouchableOpacity onPress={()=>{
//                     this.addAmountOfWater(100)
//                     this.setState({showModal : false})
                    
//                 }} style={{alignSelf : "center",marginVertical : "10%"}}  >

//                   <Image source={require('./younness/assets/water100ml.png')}
//                   style={{ marginLeft: "8%", height: 32, width: 32 }} />
                  
//               <Text
//                 style={{ fontSize: 14, fontWeight: '200', color: "white",paddingTop : "3%" }}

//               >100ml</Text>

//                 </TouchableOpacity>

//               <TouchableOpacity onPress={() => {
//                 this.addAmountOfWater(200)
//                 this.setState({showModal : false})
//               }} >

//                 <Image source={require('./younness/assets/water200ml.png')}
//                   style={{ marginLeft: "8%", height: 64, width: 64 }} />
                
//                   <Text
//                   style={{ fontSize: 14, fontWeight: '200', color: "white", paddingTop: "3%",paddingLeft :"15%" }}

//                 >200ml</Text>
//               </TouchableOpacity>

//             <TouchableOpacity onPress={() => {
//               this.addAmountOfWater(300)
//               this.setState({showModal : false})
//             }} >

//               <Image source={require('./younness/assets/water300ml.png')}
//                 style={{ marginLeft: "8%", height: 64, width: 64 }} />

//               <Text
//                 style={{ fontSize: 14, fontWeight: '200', color: "white", paddingTop: "3%", paddingLeft: "15%" }}

//               >300ml</Text>
//             </TouchableOpacity>


//               </View>


//           <View style={styles.modalCard} >

//             <TouchableOpacity onPress={() => {
//               this.addAmountOfWater(400)
//               this.setState({showModal : false})
//             }} >

//               <Image source={require('./younness/assets/water400ml.png')}
//                 style={{ marginLeft: "8%", height: 64, width: 64 }} />
//               <Text
//                 style={{ fontSize: 14, fontWeight: '200', color: "white", paddingTop: "3%", paddingLeft: "15%" }}

//               >400ml</Text>

//             </TouchableOpacity>

//             <TouchableOpacity onPress={() => {
//               this.addAmountOfWater(500)
//               this.setState({showModal : false})
//             }} >

//               <Image source={require('./younness/assets/water500ml.png')}
//                 style={{ marginLeft: "8%", height: 64, width: 64 }} />
//               <Text
//                 style={{ fontSize: 14, fontWeight: '200', color: "white", paddingTop: "3%", paddingLeft: "15%" }}

//               >500ml</Text>

//             </TouchableOpacity>

            


//           </View>


              

//             </View>


//           </Modal>


//       <ScrollView>
//         <View style={styles.drinkWaterTitle} >

//           <Text style={styles.drinkWaterTitleText} >Drink and see your water drink records</Text>

//         </View>


//         <View style={styles.logoView} >

//           <Image  source={require('./younness/assets/drinkwaterlogo.jpeg')}
//             style={styles.logoStyle}
//            />

//         </View>

        


//         <View style={styles.card} > 

//           <View style={styles.waterDrinkTracker} >


//             <ProgressCircle

//               percent={this.state.percentage}
//               radius={90}
//               borderWidth={8}
//               color="#3399FF"
//               shadowColor="#999"
//               bgColor="#fff"
//             >

//               <View style={{ alignSelf: "center" }} >

//                 <Text style={styles.waterDrinkTrackerText} > <Text style={{ color: "#3399FF" }} > {this.state.currentCapacity} </Text>/ {this.state.total}ml </Text>

//                 <Text style={styles.completeTarget} > {this.state.percentage}% </Text>

//               </View>

//             </ProgressCircle>


//             <TouchableOpacity style={{ marginTop: "10%", marginLeft: "18%" }}
//               onPress={() => {
//                 // var newCapacity = this.state.currentCapacity + 100
//                 // this.setState({ currentCapacity: newCapacity })

//                 // setTimeout(() => {
//                 //   if (this.state.currentCapacity < 2500) {
//                 //     var op = this.state.currentCapacity / this.state.total
//                 //     console.log("divided number :", op)
//                 //     var newPercentage = Math.floor(op * 100)
//                 //     this.setState({ percentage: newPercentage })

//                 //   }
//                 //   else {
//                 //     this.setState({ percentage: 100 })
//                 //   }
//                 // }, 100)

//                 this.setState({ showModal: true })

//               }}

//             >

//               <Image source={require('./younness/assets/add.png')} />

//             </TouchableOpacity>


//           </View>

//         </View>



//         <View style={styles.RecordsSection} >

//           <View style={styles.RecordsViewText} >

//             <Text style={styles.recordsText} >Records</Text>

//           </View>

//           <View style={styles.recordsItems} >

//             {this.state.records.length != 0 ? 
//               this.state.records.map(list=>{
//                 return (<View key={this.messageIdGenerator()} style={{flexDirection : "row",marginBottom : "5%"}} >
//                 {/* <Icons name="wine" size={42} color="#D0EFFE" style={{ marginLeft: "15%" }} /> */}
//                   {this.waterAmountRelativeIcon(list.amount)}
//                 <Text style={{ fontSize: 18, marginLeft: "10%", marginTop: "3%" }} > {list.time}    </Text>
//                 <Text style={{ fontSize: 18, marginLeft: "10%", marginTop: "3%" }} > {list.amount}ml   </Text>
//               </View>
//               )

//               })
//               : <View>
//                 <Text style={{fontSize:19,fontWeight : "bold",marginHorizontal : "15%",marginBottom : "3%"}} >There is no record for today</Text>
//               </View>
//               }


//           </View>



//         </View>



//       </ScrollView>

//       </ImageBackground>

//   )



// }
// }

// const styles = StyleSheet.create({


//   container : {
//     flex : 1,
//     backgroundColor : "white",
//   },
//   drinkWaterTitle : {

//     height : 60,
//     backgroundColor: "#78B5EE",
//     //alignSelf : "center",
  

//   },
//   logoView : {
//       marginTop : "5%",
//       alignSelf : "center"
//   },
//   logoStyle : {
//       height : 240,
//       width : 250,
//   },
//   drinkWaterTitleText : {
//     fontSize : 18,
//     fontWeight : "bold",
//     color : "white",
//     textAlign : "center",
//     marginTop : "3%"
//   },
//   card : {
//     marginTop: "5%",
//     marginLeft : "5%",
//     marginRight : "5%",
//     paddingTop : "5%",
//     paddingBottom : "5%",
//     backgroundColor : "white",
//     borderWidth : 2 ,
//     borderRadius : 10,
//     borderColor : "gray",
//   },
//   waterDrinkTracker : {
//     marginTop : "5%",
//     alignSelf : "center",
//     backgroundColor : "white",
//   },
//   waterDrinkTrackerText : {
//     fontSize : 16,
//     fontWeight : "bold",
//     color : "black",
//   },
//   completeTarget : {
//     marginLeft : "12%",
//     fontSize: 22,
//     fontWeight: "bold",
//     color: "black",
//     marginTop : "10%",


//   },
//   RecordsSection : {
//     borderColor: "#3399FF",
//     borderWidth : 3,
//     borderRadius : 6,
//     marginTop : "10%",
//     backgroundColor : "white",

//   },
//   recordsText :{
//     fontSize: 22,
//     fontWeight: "bold",
//     color: "white",
//     marginLeft : "2%"
//   },
//   recordsItems : {
//     marginTop : "3%",
//     flex : 1,
//   },
//   RecordsViewText : {
//     marginTop: "2%",
//     backgroundColor: "#3399FF",
//     height : 30,
//   },
  
//   modalContainer : {
//     backgroundColor: "rgba(0,204,255,0.7)",
//     height : "60%",
//     marginVertical : "50%",
//     marginLeft : "5%",
//     marginRight : "5%"


//   },
//   modalViewText : {
//     alignSelf : "center",
//     marginHorizontal : "10%",
//     marginTop : "2%",

//   },
//   modalCard : {
//     flexDirection : "row",
//     marginLeft : "3%",
//     marginTop : "10%",

//   },
 


// })



//-----------------------Initiation screen animation--------------------------

// import React from 'react'
// import { View, Text, StyleSheet, Animated, Dimensions, ImageBackground, Image,TouchableWithoutFeedback} from "react-native"


//   export default class App extends React.Component{



//       state = {
//         fadeAnim : new Animated.Value(0),
//         goDown: new Animated.Value(0),
//         goUp: new Animated.Value(0),
//       }


//       componentDidMount(){

//        setTimeout(() => {

//          Animated.timing(
//            this.state.goDown,
//            {
//              toValue: 80,
//              duration: 2000,
//              useNativeDriver: false,
//            }
//          ).start();

//          Animated.timing(
//            this.state.goUp,
//            {
//              toValue: -500,
//              duration: 2000,
//              useNativeDriver: false,
//            }
//          ).start();

         
//        }, 1000);
       

//       }
      
      

//       render(){


//         return(

//           <TouchableWithoutFeedback onPress={() => {
//             console.log('you just get out from the input');
//             Keyboard.dismiss();
//           }
//           } style={{ flex: 1, }}
//           >

//             <ImageBackground source={require('./younness/assets/background2.jpeg')}
//             style={
//               {
//                 height : Dimensions.get('window').height , width : Dimensions.get('window').width 
//               }
//             }
//             >

           

//             <View style={{alignSelf : 'center',marginTop : 60}} >

//               <Animated.View style={{ paddingTop: this.state.goDown }}>

//                   <Image  source={require('./younness/assets/logo1.png')}  style={styles.image} />

//               </Animated.View>

//             </View>

//             <View style={{ zIndex : 10,marginTop : 500 }} >

//               <Animated.View style={{ marginTop: this.state.goUp }} >

//                 <Image source={require('./younness/assets/logo02.png')} 
//                 style={{height : 200,width:200,marginLeft :"20%",tintColor : "white" }} />
//                 <Text 
//                 style={{fontSize : 22,fontWeight : 'bold',
//                 fontStyle :'italic',marginTop : -55,marginHorizontal : "20%",color : "white",
//                 }} >THINK DIFFERENTLY </Text>
                 
//                 <Text
//                     style={{
//                       fontSize: 22, fontWeight: 'bold',
//                       fontStyle: 'italic',
//                        marginTop: "2%", marginHorizontal: "25%",color : "white"
//                     }} >ABOUT YOUR </Text>
//                 <Text
//                     style={{
//                       fontSize: 22, fontWeight: 'bold',
//                       fontStyle: 'italic', 
//                        marginTop: "2%",marginHorizontal : "25%",color : "white"
//                     }} >PERFORMANCE</Text>

                   

//               </Animated.View>

//             </View>

//             </ImageBackground>
//           </TouchableWithoutFeedback>

//         )





//       }









//   }



// const styles = StyleSheet.create({
  
//   image : {
//     height : 200,
//     width : 200,
//     tintColor : "white"
//   }



// })


//-------------------Bottom Tab----------------


// import { SafeAreaView,View, } from 'react-native';



// export default class App extends React.Component{






//   render(){


//     return(

//         <SafeAreaView>

//         </SafeAreaView>


//     )







//   }










// }


//-----------------------------------------------------

// import React from "react"
// import {SafeAreaView,View,Text,StyleSheet,TouchableOpacity,ScrollView} from "react-native"
// import Icons from 'react-native-vector-icons/FontAwesome5'
// import Homev2 from "./younness/components/Home"
// import Hydrationv2 from './younness/components/Hydratation';
// import Appabout from "./younness/components/aboutApp"
// import Profile from "./younness/components/userProfile"


// export default class App extends React.Component{

//       state = {
//         acceuilColor : "white",
//         footballColor : "black",
//         tableColor: "black",
//         profileColor: "black",
//         acceuilDisplay: "flex",
//         footballDisplay: "none",
//         tableDisplay: "none",
//         profileDisplay: "none",
//       }


//     render(){

//       return(

//         <SafeAreaView style={{flex : 1}} >

//         <ScrollView>

//           <View style={{flex : 1,display :this.state.acceuilDisplay }} >
//             <Homev2 />
//           </View>

//           <View style={{ flex: 1, display: this.state.footballDisplay }} >
//               <Hydrationv2 />
//           </View>

//           <View style={{ flex: 1, display: this.state.tableDisplay }} >
//             <Appabout />
//           </View>
          
//           <View style={{ flex: 1, display: this.state.profileDisplay }} >
//               <Profile />
//           </View>

//         </ScrollView>


//         <View style={styles.bottomTabStyle}>


//           <View style={[styles.bottomTabItems,{marginLeft : "8%"}]} >
//             <TouchableOpacity onPress={()=>{
//               this.setState({
//                 acceuilColor: "white",
//                 footballColor: "black",
//                 tableColor: "black",
//                 profileColor: "black",
//                 acceuilDisplay: "flex",
//                 footballDisplay: "none",
//                 tableDisplay: "none",
//                 profileDisplay: "none",
//               })
//             }} >
//               <Icons name="home" size={32} color={this.state.acceuilColor} />
//               <Text style={{ color: this.state.acceuilColor}} >Accueil</Text>
//               </TouchableOpacity>

//           </View>

//             <View style={styles.bottomTabItems} >
//               <TouchableOpacity onPress={() => {
//                 this.setState({
//                   acceuilColor: "black",
//                   footballColor: "white",
//                   tableColor: "black",
//                   profileColor: "black",
//                   acceuilDisplay: "none",
//                   footballDisplay: "flex",
//                   tableDisplay: "none",
//                   profileDisplay: "none",
//                 })
//               }} >
//               <Icons name="futbol" size={32} color={this.state.footballColor} />
//               <Text style={{ color: this.state.footballColor}} >Football</Text>

//               </TouchableOpacity>
//             </View>

//             <View style={styles.bottomTabItems} >
//                 <TouchableOpacity onPress={() => {
//                 this.setState({
//                   acceuilColor: "black",
//                   footballColor: "black",
//                   tableColor: "white",
//                   profileColor: "black",
//                   acceuilDisplay: "none",
//                   footballDisplay: "none",
//                   tableDisplay: "flex",
//                   profileDisplay: "none",
//                 })
//                 }} >
//               <Icons name="table" size={32} color={this.state.tableColor} />
//               <Text style={{ color: this.state.tableColor}} >Table</Text>

//               </TouchableOpacity>
//             </View>

//             <View style={styles.bottomTabItems} >
//                   <TouchableOpacity onPress={() => {
//                 this.setState({
//                   acceuilColor: "black",
//                   footballColor: "black",
//                   tableColor: "black",
//                   profileColor: "white",
//                   acceuilDisplay: "none",
//                   footballDisplay: "none",
//                   tableDisplay: "none",
//                   profileDisplay: "flex",
//                 })
//                   }} >
//               <Icons name="user-circle" size={32} color={this.state.profileColor} />
//               <Text style={{ color: this.state.profileColor}} >Profile</Text>

//               </TouchableOpacity>
//             </View>

//         </View>

//         </SafeAreaView>


//       )
//     }



// }


// const styles = StyleSheet.create({

//   container : {
//     flex :1,

//   },
//   bottomTabStyle : {
//     backgroundColor : "green",
//     flexDirection : "row",
//   },
//   bottomTabItems : {
//     alignSelf: 'center',
//     marginLeft : "10%",
//     marginRight : "2%"
//   }


// })



//  -----------------------------nouveau acceuil------------------------------------------


// import React from 'react'
// import {SafeAreaView,View,Text,StyleSheet,Image,TouchableOpacity,ScrollView,Dimensions} from "react-native"
// import Swiper from "react-native-swiper"
// import BottomTab from "./younness/components/BottomTabTest"
// import Icons from 'react-native-vector-icons/FontAwesome5'



// export default class App extends React.Component{


//   state = {
//     acceuilColor: "white",
//     footballColor: "black",
//     tableColor: "black",
//     profileColor: "black",
//     acceuilDisplay: "flex",
//     footballDisplay: "none",
//     tableDisplay: "none",
//     profileDisplay: "none",
//   }



//   render(){




//     return(


//       <SafeAreaView style={styles.container} >

//       <View  style={styles.head}>

//         <View style={styles.optionAndLogo} >
//           <View  >

//           <Image 
//             source={require('./younness/assets/logo1.png')}
//             style={styles.logo}

//           />
//           <Text style={{color:"white",fontSize:14,
//           fontWeight:"bold",marginTop : "-20%",
//           marginLeft : "20%"}} >Foot App</Text>
//           </View>
          
//           <Image source={require('./assets/more.png')} 
//             style={styles.option}
//            />

//         </View>

        
//       </View>

//         <ScrollView   >

//           <View style={styles.largeItemView} >

//             <Image
//               source={require('./younness/assets/nutrition.jpg')}
//               style={styles.largeItemImageStyle}
//             />

//             <View style={styles.largeItemTextStyle} >
//               <Text style={styles.largeItemText} >NUTRITION</Text>
//             </View>


//           </View>



//           <Swiper style={{height : 300}}
//             showsButtons={false}
//             horizontal={true}

//           >

//             <View style={{ flexDirection: "row", flex: 1,marginLeft : "5%" }} >
//               <View style={styles.itemCard} >

//                 <Image
//                   source={require('./younness/assets/hydration.png')}
//                   style={styles.itemImageStyle}
//                 />

//                 <View style={styles.itemTextStyle} >
//                   <Text style={styles.itemText} >HYDRATATION</Text>
//                 </View>

//               </View>

//               <View style={[styles.itemCard, { marginLeft: "10%" }]} >

//                 <Image
//                   source={require('./younness/assets/mindset.jpg')}
//                   style={styles.itemImageStyle}
//                 />

//                 <View style={styles.itemTextStyle} >
//                   <Text style={styles.itemText} >MINDSET</Text>
//                 </View>

//               </View>
//             </View>

//             <View style={{ flexDirection: "row", flex: 1, marginLeft : "5%" }} >
//               <View style={styles.itemCard} >

//                 <Image
//                   source={require('./younness/assets/phone.jpg')}
//                   style={styles.itemImageStyle}
//                 />

//                 <View style={styles.itemTextStyle} >
//                   <Text style={styles.itemText} >MESSENGER</Text>
//                 </View>

//               </View>

//               <View style={[styles.itemCard, { marginLeft: "10%" }]} >

//                 <Image
//                   source={require('./younness/assets/beach_at_night.jpg')}
//                   style={styles.itemImageStyle}
//                 />

//                 <View style={styles.itemTextStyle} >
//                   <Text style={styles.itemText} >SOMMEIL</Text>
//                 </View>

//               </View>
//             </View>



//           </Swiper>


//           <View style={styles.largeItemView} >


//             <Image
//               source={require('./younness/assets/recuperation.png')}
//               style={styles.largeItemImageStyle}
//             />

//             <View style={styles.largeItemTextStyle} >
//               <Text style={styles.largeItemText} >RECUPERATION</Text>
//             </View>


//           </View>


//         </ScrollView>


//       </SafeAreaView>



//     )





//   }


// }


// const styles = StyleSheet.create({

//   container : {
//     flex : 1,
//     backgroundColor : "white",
//   },
//   head : {
//     height : "20%",
//     borderBottomLeftRadius : 40,
//     borderBottomRightRadius : 40,
//     backgroundColor: "#279c7c",
//   },
//   titleView : {
//       marginVertical : "1%",
//       alignSelf : "center",
//   },
//   titleStyle : {
//     fontSize : 20,
//     fontWeight : "bold",
//     color : "white",
//   },
//   optionAndLogo : {
//     marginVertical : "5%",
//     marginLeft : "8%",
//     flexDirection : "row"
//   },
//   logo : {
//     height : 100,
//     width : 100,
//     borderRadius : 100/2,
//     tintColor  : "white",
//   },
//   option : {
//     tintColor : "white",
//     left : "100%",
//     marginLeft : "20%",
//     marginTop : "8%"
//   },
//   body : {
//     marginLeft : "4%",
//     marginRight : "4%",
//     marginTop : "6%",
//     flex : 1,
//   },
//   itemCard : {
//     marginTop : "10%",
//     height : "70%",
//     width : "40%",
//     //backgroundColor : "black",
//     borderWidth : 2,
//     borderLeftColor: "#eaeceb",
//     borderRightColor: "#eaeceb",
//     borderBottomColor: "#eaeceb",
//     borderTopColor : "white",
//     borderTopLeftRadius: 20,
//     borderTopRightRadius: 20,
//     shadowColor : "gray",
    
//   },
//   itemTextStyle : {
//     marginTop : "5%",
//     alignSelf : "center"
//   },
//   itemText : {
//     fontSize : 16,
//     fontWeight : 'bold',
//     color : "black"
//   },
//   itemImageStyle : {
//     height: "80%",
//     width: "100%",
//     borderTopLeftRadius: 20,
//     borderTopRightRadius: 20
//   },
//   largeItemView : {
//     // padding: "30%",
//     height: 200,
//     width: "90%",
//     backgroundColor : "black",
//     marginTop : "10%",
//     marginLeft : "5%",
//     marginRight : "5%",
//     marginBottom : "8%",
//   },
  
// largeItemImageStyle : {
//   height: "80%",
//   width: "100%",
// },
// largeItemTextStyle : {
//   marginTop: "3%",
//   alignSelf: "center",
// },
// largeItemText : {
//   fontSize: 16,
//   fontWeight: 'bold',
//   color: "white"
// },

// })


//----------------------Radar Chart----------------------------------


import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  processColor
} from 'react-native';
import update from 'immutability-helper';

import { RadarChart } from 'react-native-charts-wrapper';


 export default class App extends React.Component {

  constructor() {
    super();

    this.state = {
      data: {},
      legend: {
        enabled: true,
        textSize: 16,
        form: 'CIRCLE',
        wordWrapEnabled: true,
        textColor: processColor('white'),
        
      }
    };
  }

  componentDidMount() {
    this.setState(
      update(this.state, {
        data: {
          $set: {
            dataSets: [{
              values: [{ value: 100 }, { value: 110 }, { value: 105 }, { value: 115 }, { value: 110 }],
              label: 'DS 1',
              config: {
                color: processColor('#FF8C9D'),
                valueTextColor: processColor('#FF8C9D'),
                valueTextSize: 16,
                drawFilled: true,
                fillColor: processColor('#FF8C9D'),
                fillAlpha: 100,
                lineWidth: 2
              },
              color: processColor('#FFFFFF'),
            }, {
              values: [{ value: 115 }, { value: 100 }, { value: 105 }, { value: 110 }, { value: 120 }],
              label: 'DS 2',
              config: {
                color: processColor('#C0FF8C'),
                valueTextColor: processColor('#C0FF8C'),
                valueTextSize: 16,
                drawFilled: true,
                fillColor: processColor('#C0FF8C'),
                fillAlpha: 150,
                lineWidth: 1.5
              }
            }, {
              values: [{ value: 105 }, { value: 115 }, { value: 121 }, { value: 110 }, { value: 105 }],
              label: 'DS 3',
              config: {
                color: processColor('#8CEAFF'),
                valueTextColor: processColor('#8CEAFF'),
                valueTextSize: 16,
                drawFilled: true,
                fillColor: processColor('#8CEAFF'),
                
              }
            }],
          }
        },
        xAxis: {
          $set: {
            valueFormatter: ['A', 'B', 'C', 'D', 'E'],
            textColor: processColor('white'),
            textSize: 18,
          }
        },
        
        
      })
    );
  }

  handleSelect(event) {
    let entry = event.nativeEvent
    if (entry == null) {
      this.setState({ ...this.state, selectedEntry: null })
    } else {
      this.setState({ ...this.state, selectedEntry: JSON.stringify(entry) })
    }

    console.log(event.nativeEvent)
  }

  render() {
    return (
      <View style={{ flex: 1 }}>

        {/* <View style={{ height: 80 }}>
          <Text> selected entry</Text>
          <Text> {this.state.selectedEntry}</Text>
        </View> */}

        <View style={styles.container}>
          <RadarChart
            style={styles.chart}
            data={this.state.data}
            xAxis={this.state.xAxis}
            yAxis={{ drawLabels: true,textColor : processColor('white'),fontWeight : "bold",textSize : 15 }}
            chartDescription={{ text: '' }}
            legend={this.state.legend}
            drawWeb={true}

            webLineWidth={5}
            webLineWidthInner={5}
            webAlpha={255}
            webColor={processColor("gray")}
            webColorInner={processColor("gray")}
            

            skipWebLineCount={1}
            onSelect={this.handleSelect.bind(this)}
            onChange={(event) => console.log(event.nativeEvent)}
          />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  chart: {
    flex: 1,
  }
});



// ----------------------------Athlete Programme ------------------------

// import React from "react"
// import {SafeAreaView,View,Text,StyleSheet,TouchableOpacity,Image} from "react-native"





// export default class App extends React.Component{


//   render(){


//     return(
//       <SafeAreaView style={styles.container} >

//       <View style={styles.card} >
 
//         <View style={styles.cardItem}>

//           <Image 
//               source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_xBCRKLnDjw_o48CbyOVERfkFO0uhMSjnvw&usqp=CAU"}}
//             style={styles.image}
//           />

//           <View style={styles.itemExpressions} >
//             <Text style={styles.personFullName}>ADAMA DIAKHABY</Text>
//             <Text style={styles.startedDate}>Date début : 28/10/2020</Text>
//             {/* put here expiration Date */}
//           </View>
          
//           <Text style={styles.itemStatusOpen} >En cours</Text>

//         </View>

//       </View>

//       <View style={styles.card} >

//         <View style={styles.cardItem}>

//           <Image
//             source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR58HXKC8JQGbr3IdX2IMXCBD2AgHc7NMngpg&usqp=CAU" }}
//             style={styles.image}
//           />

//           <View style={styles.itemExpressions} >
//             <Text style={styles.personFullName}>THOMAS FONTAINE</Text>
//             <Text style={styles.startedDate}>Date début : 01/02/2020</Text>
//             {/* put here expiration Date */}
//             <Text style={styles.startedDate}>Date fin : 27/10/2020</Text>
//           </View>
          
//           <Text style={styles.itemStatusClosed} >Expiré</Text>

//         </View>

//       </View>

//       </SafeAreaView>
//     )



//   }



// }

// const styles = StyleSheet.create({

//   container : {
//     flex : 1,
//     backgroundColor  : "white",
//   },
//   card : {
//     marginTop : "2%",
//     marginBottom : "2%",
//     marginLeft : "3%",
//     marginRight : "3%",
//     borderWidth : 3,
//     borderColor : "black",
//     height : 150
//   },
//   cardItem : {
//     flexDirection : "row",
//     margin : "3%",
//     alignItems : "center"
//   },
//   image : {
//       height : 130,
//       width : 100,
//   },
//   itemExpressions : {
//     marginLeft : "8%",
//     marginTop : "-20%",
//   },
//   personFullName : {
//     fontSize : 20,
//     fontWeight : "bold",
//   },
//   startedDate : {
//     marginTop : "3%",
//     fontSize : 16,

//   },
//   itemStatusOpen : {
//      color: "green", 
//      fontSize: 14,
//      fontWeight: "bold",
//      position : "absolute",
//      top: "80%",
//      marginLeft : "80%"
//   },
//   itemStatusClosed: {
//     color: "red",
//     fontSize: 14,
//     fontWeight : "bold",
//     position: "absolute",
//     top : "80%",
//     marginLeft: "80%"
//   },


// })

//----------------------Athlete programme-----------------------



// import React from "react"
// import {SafeAreaView,View,Text,StyleSheet,TouchableOpacity,Image,ScrollView} from "react-native"
// import Icon from "react-native-vector-icons/Ionicons"

// export default class App extends React.Component{


//   render(){

//       return(

//         <SafeAreaView style={styles.container} >
    
//         <ScrollView>

//         <View style={styles.head} >
//           <Icon 
//               name="arrow-back-sharp"
//               size={24}
//               color="white"
//               style={{marginLeft : "3%"}}
//           />
//           <Text style={styles.headTitleStyle} >ADAMA DIAKHIBY</Text>
//         </View>

//             <View style={styles.ImageView} >

//               <Image
//                 source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_xBCRKLnDjw_o48CbyOVERfkFO0uhMSjnvw&usqp=CAU" }}
//                 style={styles.image}
//               />

//             </View>

//             <View style={styles.programmeView} >

//               <View style={styles.programmeItem} >

//                 <Text style={styles.itemTitle} >Lundi : </Text>

//                 <View style={styles.itemData}>

//                   <View style={styles.itemDataRow} >

//                     <View style={styles.pointViewStyle} />
//                     <Text style={styles.itemDataStyle} >Petit déjouné 9H MAX</Text>

//                   </View>
//                   <View style={styles.itemDataRow} >

//                     <View style={styles.pointViewStyle} />
//                     <Text style={styles.itemDataStyle} >Petit déjouné 9H MAX</Text>

//                   </View>
//                   <View style={styles.itemDataRow} >

//                     <View style={styles.pointViewStyle} />
//                     <Text style={styles.itemDataStyle} >Petit déjouné 9H MAX</Text>

//                   </View>
//                   <View style={styles.itemDataRow} >

//                     <View style={styles.pointViewStyle} />
//                     <Text style={styles.itemDataStyle} >Petit déjouné 9H MAX</Text>

//                   </View>
//                 </View>

//               </View>

//             </View>


//             <View style={styles.programmeView} >

//               <View style={styles.programmeItem} >

//                 <Text style={styles.itemTitle} >Mardi : </Text>

//                 <View style={styles.itemData}>

//                   <View style={styles.itemDataRow} >

//                     <View style={styles.pointViewStyle} />
//                     <Text style={styles.itemDataStyle} >Petit déjouné 9H MAX</Text>

//                   </View>
//                   <View style={styles.itemDataRow} >

//                     <View style={styles.pointViewStyle} />
//                     <Text style={styles.itemDataStyle} >Petit déjouné 9H MAX</Text>

//                   </View>
//                   <View style={styles.itemDataRow} >

//                     <View style={styles.pointViewStyle} />
//                     <Text style={styles.itemDataStyle} >Petit déjouné 9H MAX</Text>

//                   </View>
//                   <View style={styles.itemDataRow} >

//                     <View style={styles.pointViewStyle} />
//                     <Text style={styles.itemDataStyle} >Petit déjouné 9H MAX</Text>

//                   </View>
//                 </View>

//               </View>

//             </View>



//             <View style={styles.programmeView} >

//               <View style={styles.programmeItem} >

//                 <Text style={styles.itemTitle} >Mercredi : </Text>

//                 <View style={styles.itemData}>

//                   <View style={styles.itemDataRow} >

//                     <View style={styles.pointViewStyle} />
//                     <Text style={styles.itemDataStyle} >Petit déjouné 9H MAX</Text>

//                   </View>
//                   <View style={styles.itemDataRow} >

//                     <View style={styles.pointViewStyle} />
//                     <Text style={styles.itemDataStyle} >Petit déjouné 9H MAX</Text>

//                   </View>
//                   <View style={styles.itemDataRow} >

//                     <View style={styles.pointViewStyle} />
//                     <Text style={styles.itemDataStyle} >Petit déjouné 9H MAX</Text>

//                   </View>
//                   <View style={styles.itemDataRow} >

//                     <View style={styles.pointViewStyle} />
//                     <Text style={styles.itemDataStyle} >Petit déjouné 9H MAX</Text>

//                   </View>
//                 </View>

//               </View>

//             </View>




//             <View style={styles.programmeView} >

//               <View style={styles.programmeItem} >

//                 <Text style={styles.itemTitle} >Jeudi : </Text>

//                 <View style={styles.itemData}>

//                   <View style={styles.itemDataRow} >

//                     <View style={styles.pointViewStyle} />
//                     <Text style={styles.itemDataStyle} >Petit déjouné 9H MAX</Text>

//                   </View>
//                   <View style={styles.itemDataRow} >

//                     <View style={styles.pointViewStyle} />
//                     <Text style={styles.itemDataStyle} >Petit déjouné 9H MAX</Text>

//                   </View>
//                   <View style={styles.itemDataRow} >

//                     <View style={styles.pointViewStyle} />
//                     <Text style={styles.itemDataStyle} >Petit déjouné 9H MAX</Text>

//                   </View>
//                   <View style={styles.itemDataRow} >

//                     <View style={styles.pointViewStyle} />
//                     <Text style={styles.itemDataStyle} >Petit déjouné 9H MAX</Text>

//                   </View>
//                 </View>

//               </View>

//             </View>





//             <View style={styles.programmeView} >

//               <View style={styles.programmeItem} >

//                 <Text style={styles.itemTitle} >Vendredi : </Text>

//                 <View style={styles.itemData}>

//                   <View style={styles.itemDataRow} >

//                     <View style={styles.pointViewStyle} />
//                     <Text style={styles.itemDataStyle} >Petit déjouné 9H MAX</Text>

//                   </View>
//                   <View style={styles.itemDataRow} >

//                     <View style={styles.pointViewStyle} />
//                     <Text style={styles.itemDataStyle} >Petit déjouné 9H MAX</Text>

//                   </View>
//                   <View style={styles.itemDataRow} >

//                     <View style={styles.pointViewStyle} />
//                     <Text style={styles.itemDataStyle} >Petit déjouné 9H MAX</Text>

//                   </View>
//                   <View style={styles.itemDataRow} >

//                     <View style={styles.pointViewStyle} />
//                     <Text style={styles.itemDataStyle} >Petit déjouné 9H MAX</Text>

//                   </View>
//                 </View>

//               </View>

//             </View>

//         </ScrollView>

//         </SafeAreaView>

//       )

//   }


// }

// const styles = StyleSheet.create({

//   container : {
//     flex : 1,

//   },
//   head : {
//     height : 60,
//     backgroundColor: "#042f66",
//     flexDirection : "row",
//     alignItems :"center",
//     paddingTop : "3%",
//     paddingBottom : "3%"
//   },
//   headTitleStyle : {
//     fontSize :18,
//     fontWeight :"bold",
//     marginLeft : "10%",
//     color : "white"
//   },
//   ImageView : {
//     margin : "3%",
//     borderWidth : 3,
//     borderColor : "black"
//   },
//   image : {
//     height : 200,
//     width : "100%",
//   },
//   programmeView : {
//     margin : "2%",
//     borderWidth: 2,
//     borderColor: "gray",
//     borderRadius : 15,
//     backgroundColor: "#eeeee4"
    
//   },
//   programmeItem : {
//     marginLeft : "3%",
//     marginTop : "4%",
//     marginBottom : "4%",
//   },
//   itemTitle : {
//     fontSize : 22,
//     fontWeight : "bold",
//     color : "black"
//   },
//   itemData : {
//     marginLeft: "2%",
//     marginTop: "2%",
//   },
//   itemDataRow : {
//     flexDirection : "row",
//     alignItems : "center"
//   },
//   pointViewStyle : {
//     height : 5,
//     width : 5,
//     borderRadius : 5/2,
//     backgroundColor : "black",
    
//   },
//   itemDataStyle : {
//     fontSize : 16,
//     marginLeft : "5%"

//   },



// })