import React, {useState,useEffect, useRef} from 'react';

// import all the components we are going to use
import {SafeAreaView, StyleSheet, Text, View,TouchableOpacity,ScrollView,Image,PermissionsAndroid} from 'react-native';

//Import React Native Video to play video
// import Video from 'react-native-video';

import VideoPlayer from 'react-native-video-controls';
import RNFetchBlob from 'rn-fetch-blob';

const ReviewKlippit = ({navigation,route}) => {
    const {videoUrl,}=route.params;
    var downloadInvoice = videoUrl;
    console.log("afterrrrrr:",videoUrl);
  var videoPlayer = useRef(null);
  const [loading,setLoading]=useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [paused, setPaused] = useState(false);
  const [postVideo,setPostVideo]=useState(false);
  // const [
  //   playerState, setPlayerState
  // ] = useState(PLAYER_STATES.PLAYING);
  // const [screenType, setScreenType] = useState('content');


  const [selectedVideo,setSelectedVideo]=useState("");
  



//   useEffect(() => {
//     setSelectedPhoto({
//       fileUri: videoUrl.uri,
//       fileName: videoUrl.fileName,
//     });
// }, []);
 
const checkPermission = async () => {
    
    // Function to check the platform
    // If iOS then start downloading
    // If Android then ask for permission
    
    if (Platform.OS === 'ios') {
      downloadImage();
    } else {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'Storage Permission Required',
            message:
              'App needs access to your storage to download Photos',
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          // Once user grant the permission start downloading
          console.log('Storage Permission Granted.');
          downloadImage();
        } else {
          // If permission denied then show alert
          alert('Storage Permission Not Granted');
        }
      } catch (err) {
        // To handle permission related exception
        console.warn(err);
      }
    }
  };


const downloadImage = () => {
    // Main function to download the image
   
    // To add the time suffix in filename
    let date = new Date();
    // Image URL which we want to download
    let image_URL = downloadInvoice;    
    // Getting the extention of the file
    let ext = getExtention(image_URL.uri);
    // ext = '.' + ext[0];
    // Get config and fs from RNFetchBlob
    // config: To pass the downloading related options
    // fs: Directory path where we want our image to download
    const { config, fs } = RNFetchBlob
    let DownloadDir = fs.dirs.DownloadDir     // this is the Downloads directory.
    let options = {
      fileCache: true,
      autorename : false,
      //  appendExt : extension, //Adds Extension only during the download, optional
       addAndroidDownloads : {
        useDownloadManager : true,      //uses the device's native download manager.
        notification : true,
        // autorename : false,
        //  mime: 'text/plain',
        title : "Crop Disease",    // Title of download notification.
        path:  DownloadDir + "/me_"+ '.' + ext, // this is the path where your download file will be in
        description : 'Downloading file.'
      }
    }
    config(options)
    .fetch('GET',downloadInvoice)
    .then((res) => {
      //console.log("Success");
      })
    .catch((err) => {console.log('error')})    // To execute when download  cancelled and other errors
  }

  const getExtention = filename => {
    // To get the file extension
    return /[.]/.exec(filename) ?
             /[^.]+$/.exec(filename) : filename;
  };





 

  return (
      <ScrollView>
    <View style={{flex: 1,width:"100%",height:"100%",justifyContent:"center"}}>
    {/* {what=="Video"?<View style={{marginTop:"10%"}}> */}
    <View style={{marginTop:"10%"}}>
         <VideoPlayer
source={ {uri: videoUrl}}
style={{ width: "85%", height: 300,alignSelf:"center" ,}}
videoStyle={{}}
tapAnywhereToPause={true}
disableFullscreen={true}
disableBack={true}
disableVolume={true}
disableSeekbar={false}
disableTimer={false}
// controls={true}
resizeMode='content'
// onFullScreen={isFullScreen}
// onPaused={onPaused}
//         onReplay={onReplay}
//         onSeek={onSeek}
//         onSeeking={onSeeking}
//         toolbar={renderToolbar()}
ref={(ref) => {
    videoPlayer = ref
    }}

/>

</View>
{/* </View>:
<View style={{marginTop:"10%"}}>

  <Image 
 source={{ uri:videoUrl}}
 style={{width: "85%", height: 300,alignSelf:"center" }}
  />
  </View>
} */}


{/* <TouchableOpacity
                activeOpacity={0.8}
                onPress={checkPermission}
                style={{ ...styles.submitButton, backgroundColor: '#075E54', borderColor: '#075E54', borderWidth: 1, marginTop: "10%" }}
              >
                
                    <Text style={{ color: 'white', fontFamily: "Nunito-Bold", textAlign: 'center', fontSize: 21 }}>Download Video</Text>
              </TouchableOpacity> */}

              {/* <TouchableOpacity
              disabled={postVideo}
                activeOpacity={0.8}
                onPress={()=> navigation.navigate("LaunchCamera")}
                style={{ ...styles.submitButton, backgroundColor: "white", borderColor: "#075E54", borderWidth: 1, marginTop: "10%" }}
              >
                
                    <Text style={{ color: '#075E54', fontFamily: "Nunito-Bold", textAlign: 'center', fontSize: 21 }}>Retry</Text>
                    
              </TouchableOpacity> */}
      
    </View>
    </ScrollView>
  );
};

export default ReviewKlippit;

const styles = StyleSheet.create({
  container: {
    width:"80%",
    height:"80%"
  },
  toolbar: {
    marginTop: 30,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
  mediaPlayer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'black',
    justifyContent: 'center',
  },
  submitButton: {
    height: 48,
    width: '85%',
    alignSelf: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    borderRadius: 5,


  },
 
});