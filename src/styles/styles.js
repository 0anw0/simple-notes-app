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
    alignItems: "center",
    width: screenWidth,
    height: screenHeight - StatusBar.currentHeight,
    backgroundColor: MainBackground,
  },
  listContainer: {
    width: screenWidth * 0.9,
    height: screenHeight * 0.775,
    borderRadius: 5,
  },
});

const createNoteScr = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    alignItems: "center",
    backgroundColor: MainBackground,
  },
  temp_ButtonBar: {
    flexDirection: "row",
    width: 350,
    height: 40,
    justifyContent: "space-around",
  },
  temp_Button: {
    width: 60,
    backgroundColor: "#679fff",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});

const CameraScrStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  cameraView: {
    flex: 1,
    width: screenWidth,
  },
  buttonSection: {
    flex: 1,
    width: screenWidth,
    backgroundColor: "transparent",
    flexDirection: "row",
  },
  optionButtonsSection: {
    position: "absolute",
    left: 5,
    top: 10,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  flashButton: {
    borderRadius: 50,
    height: screenHeight * 0.25,
    width: screenWidth * 0.25,
  },
  toggleCameraButton: {
    marginTop: 20,
    borderRadius: 50,
    height: screenWidth * 0.25,
    width: screenWidth * 0.25,
  },
  capturePictureButtonContainer: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    flex: 1,
    width: screenWidth,
    padding: 20,
    justifyContent: "space-between",
  },
  capturePictureButton:{
    width: 70,
    height: 70,
    bottom: 0,
    borderRadius: 50,
    backgroundColor: "#fff",
  }
});

export {
  welcomeScr,
  signInScr,
  forgetPasswordScr,
  MyNoteScr,
  createNoteScr,
  CameraScrStyles,
};
