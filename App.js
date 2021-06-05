import React, { useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from "react-native";
import MyStack from "./src/navigation/MyStack";
const App = () => {
  return (
    <>
      
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor='#075E54'
      />
     
        <MyStack />
     
    </>
  );
};
const styles = StyleSheet.create({
  topSafeArea: {
    flex: 0,
    // backgroundColor: 'blue'
  },
  bottomSafeArea: {
    flex: 1,
    // backgroundColor: 'red'
  },
});

export default App;
