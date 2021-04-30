
import LinearGradient from 'react-native-linear-gradient';
import  * as firebase from 'react-native-firebase';
import {Actions} from 'react-native-router-flux';
import Routes from './component/routes';
import loading from './component/loading';
import HomeScreen from './screens/homescreen';
import CheckConn from './screens/connectivityLost'
import Conversation from './component/chatRoom'
import {createSwitchNavigator,createAppContainer} from 'react-navigation';
import {createStackNavigator } from 'react-navigation-stack';
// @refresh reset

import React ,{Component,useState,useEffect,useCallback} from 'react';
import {StyleSheet,View,Animated,TextInput,ActivityIndicator,Button,TouchableWithoutFeedback,Dimensions,Alert,PermissionsAndroid ,Keyboard,Modal,FlatList,Text,TouchableOpacity, Image} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {GiftedChat} from 'react-native-gifted-chat';
import Card from './card';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import About from './component/aboutApp';
import Icon from 'react-native-vector-icons/Ionicons';
import OptionsMenu from "react-native-option-menu";
import Test from './test'
import NetInfo from '@react-native-community/netinfo'
import { create } from 'react-test-renderer';
import { ScrollView } from 'react-native-gesture-handler';



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






 
const appStack = createStackNavigator({
  Home : {
    screen : HomeScreen,
  },
  Conversation : {
    screen : Conversation,
  },
  
 },
 

{
  defaultNavigationOptions : {
    headerShown: false,
  },
} 

);

const AuthStack = createStackNavigator({
  Login : {
    screen : Routes,
  },
},
{
 defaultNavigationOptions : {
   headerShown: false,
 },
} 

)



export default createAppContainer(
 createSwitchNavigator({
   Loading : loading,
   App : appStack,
   Auth : AuthStack,
   CheckConn : CheckConn,
 },

 {
   initialRouteName : "Loading"
 }

 )  
)








// export default function App(){


// async ()=> {
//   const data 
// }



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