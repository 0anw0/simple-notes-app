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
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    alignItems: "center",
    backgroundColor: MainBackground,
    height: screenHeight - StatusBar.currentHeight,
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
  buttonsContainer: {
    height: screenHeight * 0.07,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 5,
    width: 205,
  },
  buttons: {
    backgroundColor: SecBtn,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
  },
});

const CameraScrStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: StatusBar.currentHeight,
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
    flex: 1,
    position: "absolute",
    left: screenWidth * 0.025,
    top: screenHeight * 0.025,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  flashButton: {
    borderRadius: screenWidth * 0.15 * 0.5,
    height: screenWidth * 0.15,
    width: screenWidth * 0.15,
    alignItems: "center",
    justifyContent: "center",
  },
  toggleCameraButton: {
    borderRadius: screenWidth * 0.15 * 0.5,
    height: screenWidth * 0.15,
    width: screenWidth * 0.15,
    alignItems: "center",
    justifyContent: "center",
  },
  capturePictureButtonContainer: {
    flex: 1,
    position: "relative",
    alignItems: "flex-end",
    paddingBottom: 20,
    left: screenWidth * 0.4,
    flexDirection: "row",
    width: screenWidth,
  },
  capturePictureButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#fff",
  },
  onPreviewButtons: {
    width: screenWidth,
    height: screenHeight * 0.85,
  },
  buttonBar: {
    width: screenWidth * 0.75,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  retakeImageButton: {
    width: 40,
    height: 40,
    alignItems: "center",
    borderRadius: 4,
  },
  saveImageButton: {
    width: 40,
    height: 40,
    alignItems: "center",
    borderRadius: 4,
  },
  videoPreview: {
    width: screenWidth,
    height: screenHeight,
  },
});

export {
  welcomeScr,
  signInScr,
  forgetPasswordScr,
  MyNoteScr,
  createNoteScr,
  CameraScrStyles,
};
