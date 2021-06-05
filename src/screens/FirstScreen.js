
import React, {useState, useRef } from 'react';

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    TouchableOpacity,
    Image
} from 'react-native';

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { RNCamera } from 'react-native-camera';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
  } from 'react-native-responsive-screen';
  import DocumentPicker from "react-native-document-picker";


const FirstScreen = (props) => {
  
    const [photoState, setPhotoState] = useState("");



    const handleChoosePhoto = async () => {
        const options = {
          noData: true,
        };
        // var base64 = require('base-64');
        var res = 0;
        try {
          res = await DocumentPicker.pick({
            type: [DocumentPicker.types.video],
          });
          setPhotoState({ photo: res });
          props.navigation.navigate("PreviewVideo",{videoUrl:res.uri})
    
         
          console.log(res.uri, "Imageee");
        } catch (err) {
          if (DocumentPicker.isCancel(err)) {
            // User cancelled the picker, exit any dialogs or menus and move on
          } else {
            throw err;
          }
        }
    
        // const base64File = await RNFS.readFile(res.uri, "base64");
      };


    // }


    return (
        <View style={styles.container}>
            {/* <View style={{marginTop:"28%"}}> 
                <Image
                    style={styles.img}
                    source={{
                        uri: 'https://play-lh.googleusercontent.com/sPetRfv294J3QgFlosO_UMS-DyD_6vFXgo6SXiAZHTNDdAn_DT4WuESslqDCodXNrg',
                    }}
                />
            </View> */}

            {/* https://play-lh.googleusercontent.com/sPetRfv294J3QgFlosO_UMS-DyD_6vFXgo6SXiAZHTNDdAn_DT4WuESslqDCodXNrg */}
            <TouchableOpacity
                activeOpacity={0.4}
                onPress={()=>props.navigation.navigate("LaunchCamera")}
                // onPress={() => navigation.navigate("Login")}
                style={{
                    ...styles.findFriendsButton,
                    backgroundColor: '#075E54',
                    alignSelf: 'center',
                }}

            >

                <Text style={styles.findText}>Record Video</Text>
            </TouchableOpacity>


            <TouchableOpacity
                activeOpacity={0.4}
                onPress={handleChoosePhoto}
                style={{
                    ...styles.findFriendsButton,
                    backgroundColor: '#075E54',
                    alignSelf: 'center',
                }}

            >

                <Text style={styles.findText}>Choose Video</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity
                activeOpacity={0.4}
                // onPress={() => navigation.navigate("Login")}
                style={{
                    ...styles.findFriendsButton,
                    backgroundColor: '#075E54',
                    alignSelf: 'center',
                }}

            >

                <Text style={styles.findText}>Download Video</Text>
            </TouchableOpacity> */}
        </View>
    )
}




export default FirstScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: "100%",
        width: "100%",
        justifyContent: "center"

    },
    findFriendsButton: {
        height: 48,
        width: '75%',
        alignSelf: 'center',
        justifyContent: 'center',
        marginVertical: 50,

        // marginBottom:10,
        borderRadius: 5,
    },
    findText: {
        color: '#fff',
        textAlign: "center",
        fontSize: 21,
        fontFamily: "Nunito-Bold"
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
    },
    img: {
        height:hp(30),
        width: "100%",
        alignSelf: 'center',
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,

    },
});



