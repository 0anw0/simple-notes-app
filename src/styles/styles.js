import React from "react";
import { StyleSheet, StatusBar } from "react-native";

import { fontsLoaded } from "../assets/fonts";

import { screenWidth, screenHeight, colorSchema } from "../config/index";
const {
  MainBackground,
  MainTxt,
  MainBtn,
  SecTxt,
  MainBtnTint,
  SecBtn,
  SecBtnTint,
} = colorSchema;

const welcomeScr = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: screenWidth,
    height: screenHeight,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: MainBackground,
  },
  image: {
    resizeMode: "contain",
    position: "absolute",
    top: screenHeight * 0.15,
  },
  textCover: {
    resizeMode: "contain",
    position: "absolute",
    width: screenWidth * 0.85,
    height: screenHeight * 0.25,
    top: screenHeight * 0.38,
  },
  openningText: {
    position: "absolute",
    top: screenHeight * 0.4,
    left: screenWidth * 0.175,
    fontSize: screenWidth * 0.07,
    fontWeight: "normal",
    color: MainTxt,
  },
  buttonsContainer: {
    position: "absolute",
    top: screenHeight * 0.7,
  },
  divider: {
    height: screenHeight * 0.015,
  },
});

const signInScr = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: screenWidth,
    height: screenHeight,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: MainBackground,
  },
  normalText: {
    paddingBottom: screenHeight * 0.01,
    color: MainTxt,
  },
  textContainer: {
    width: screenWidth * 0.75,
    paddingBottom: screenHeight * 0.05,
  },
  dialogStyle: { textAlign: "center", fontSize: 18, color: MainTxt },
  dialogSpace: { height: screenHeight * 0.035 },
  emptyPadding: { paddingTop: screenHeight * 0.025 },
  inputContainer: {
    justifyContent: "flex-start",
    width: screenWidth * 0.75,
  },
});

const forgetPasswordScr = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: screenWidth,
    height: screenHeight,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: MainBackground,
  },
  inputContainer: {
    justifyContent: "flex-start",
    width: screenWidth * 0.75,
  },
});

const MyNoteScr = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: screenWidth,
    height: screenHeight,
    backgroundColor: MainBackground,
  },
  listContainer:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: screenHeight * 0.025 , 
    width: screenWidth * 0.9, 
    height: screenHeight * 0.775, 
    borderRadius:5, 
}
});

export { welcomeScr, signInScr, forgetPasswordScr, MyNoteScr };
