
import React,{useRef,useState} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { RNCamera } from 'react-native-camera';
const FirstScreen=({navigation})=>{
const [startCheck,setStartCheck]=useState(false);
  const camera = useRef(null);
  const PendingView = () => (
    <View
      style={{
        flex: 1,
        backgroundColor: 'lightgreen',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Waiting</Text>
    </View>
  );
const Submit=async()=>{
  if(camera){
    setStartCheck(true)
    const { uri, codec = "mp4" } = await camera.current.recordAsync();
    console.info(uri);
    navigation.navigate("PreviewVideo",{videoUrl:uri})
  }
}
const Stop=()=>{
    setStartCheck(false)
  camera.current.stopRecording();
}
  const recordAsync = async () => {
    if (camera) {
      const options = { quality: 0.5, base64: true };
      const data = await camera.recordAsyncAsync(options);
      console.log(data.uri);
      
    }
  };
// }


  return(
    <View style={styles.container}>
        <RNCamera
         ref={camera}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          defaultVideoQuality={RNCamera.Constants.VideoQuality["1080p"]}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
        >
          {({ camera, status, recordAudioPermissionStatus }) => {
            if (status !== 'READY') return <PendingView />;
            return (
              <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                <TouchableOpacity disabled={startCheck} onPress={() => Submit()} style={{flex: 0,
    backgroundColor: startCheck?"#a9a9a9":'#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,}}>
                  <Text style={{ fontSize: 14 }}> Start </Text>
                </TouchableOpacity>
                <TouchableOpacity disabled={!startCheck} onPress={() => Stop()} style={styles.capture}>
                  <Text style={{ fontSize: 14 }}> Stop </Text>
                </TouchableOpacity>
              </View>
            );
          }}
        </RNCamera>
      </View>
  )
}




export default FirstScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor:'#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});



