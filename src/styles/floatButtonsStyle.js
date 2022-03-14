import React from "react";
import { StyleSheet, StatusBar, Dimensions } from "react-native";

import { screenWidth, screenHeight, colorSchema } from "../config/index";

const {
  MainBackground,
  MainTxt,
  MainBtn,
  SecTxt,
  MainBtnTint,
  SecBtn,
  SecBtnTint,
  dividerTone,
  inputColor,
  MainTextTone,
  sectionBtnTint,
  pressedButtonColor,
  pressedButtonColorTint,
} = colorSchema;

const floatButtonActivator = StyleSheet.create({
  innerContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  pressed: {},
  notPressed: {},
});

const floatButtonsView = StyleSheet.create({
  container:{
    position:'absolute',
    bottom: screenHeight * 0.1, 
    left: screenWidth * 0.1,
    width: screenWidth * 0.8, 
    height:screenHeight * 0.2, 

  },
  buttonsContainer: {
    width: screenWidth * 0.8,
    height: screenHeight * 0.2,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  firstContainer: {
    width: screenWidth * 0.35,
    height: screenHeight * 0.1,
    justifyContent: "space-between",
    flexDirection:'row'
  },
  secondContainer: {
    width: screenWidth * 0.6,
    height: screenHeight * 0.1,
    justifyContent: "space-between",
    flexDirection:'row'

  },
});

const optionButton = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    borderRadius: 25,
    shadowColor: MainBtnTint,
    shadowOffset: {
      width: 15,
      height: -15,
    },
    shadowOpacity: 50,
    shadowRadius: 20,
    elevation: 3,
  },
  pressed: {},
  notPressed: {},
  innerContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});
const linearGradientFLoatButton = [MainBtn, MainBtnTint];
const linearGradientFLoatButton_Pressed = [
  pressedButtonColor,
  pressedButtonColorTint,
];

const cameraLinearGradientFLoatButton = [MainBtn, MainBtnTint];
const penLinearGradientFLoatButton = [MainBtn, MainBtnTint];
const microphoneLinearGradientFLoatButton = [MainBtn, MainBtnTint];
const videoLinearGradientFLoatButton = [MainBtn, MainBtnTint];


export {
  linearGradientFLoatButton,
  linearGradientFLoatButton_Pressed,
  floatButtonActivator,
  floatButtonsView,
  optionButton,
  cameraLinearGradientFLoatButton,
  penLinearGradientFLoatButton,
  microphoneLinearGradientFLoatButton
};
