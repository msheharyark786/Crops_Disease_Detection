import React, { useState, useEffect } from "react";
import {
  CommonActions,
  NavigationContainer,
  useRoute,
} from "@react-navigation/native";
import {
  createStackNavigator,
  HeaderBackButton,
} from "@react-navigation/stack";
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  NativeModules,
  processColor,
  Image,
  View,
  TouchableOpacity
} from "react-native";

import { Component } from "react";
import "react-native-gesture-handler";

import FirstScreen from '../screens/FirstScreen';
import LaunchCamera from '../screens/LaunchCamera';
import PreviewVideo from '../screens/PreviewVideo';
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import DrawerContent from "./Drawer/DrawerContent";

const Stack = createStackNavigator();
function MyStack() {





  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="FirstScreen"
          component={FirstScreen}
          options={{
            headerShown: true,
            title: "Crops Disease Detection",
            headerTitleStyle: {
              color: "white",
              alignSelf: "center",
            },
            headerStyle: {
              backgroundColor: "#075E54",
            },
            headerTintColor: "#ffffff",

          }}
        />

        <Stack.Screen
          name="LaunchCamera"
          component={LaunchCamera}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PreviewVideo"
          component={PreviewVideo}
          options={{
            headerShown: true,
            title: "PREVIEW",
            headerTitleStyle: {
              color: "white",
              // alignSelf: "center",
            },
            headerStyle: {
              backgroundColor: "#075E54",
            },
            headerTintColor: "#ffffff",

          }}
        />
        {/* <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: true,
            title: "PROFILE",
            headerTitleStyle: {
              color: "white",
              alignSelf: "center",
            },
            headerStyle: {
              backgroundColor: Colors.themeColor,
            },
            headerTintColor: "#ffffff",
            headerRight: () => (
              <Image
                source={require("../assets/colorLogo.png")}
                style={{
                  width: Platform.OS == "ios" ? 40 : 50,
                  height: Platform.OS == "ios" ? 40 : 50,
                }}
              />
            ),
          }}
        /> */}



        {/* <Stack.Screen
          name="MyDrawer"
          component={MyDrawer}
          options={{ headerShown: false }}
        /> */}


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStack;

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
