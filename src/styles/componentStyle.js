import React from "react";
import { StyleSheet, StatusBar, Dimensions } from "react-native";

import { screenWidth, screenHeight, colorSchema } from "../config/constants.js";

const {
  MainBackground,
  MainTxt,
  MainBtn,
  SecTxt,
  MainBtnTint,
  SecBtn,
  SecBtnTint,
  dividerTone
} = colorSchema;

const ButtonComponent = StyleSheet.create({
  container: {
    width: screenWidth * 0.75,
    height: screenHeight * 0.07,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: screenHeight * 0.015,
  },
  title: {
    fontWeight: "500",
    fontSize: 20,
    color: SecTxt,
    letterSpacing: 3,
  },
  outline: {
    borderWidth: screenHeight * 0.005,
    borderColor: MainBtn,
  },
  outlineTitle: {
    fontWeight: "500",
    color: MainTxt,
    fontSize: 20,
    letterSpacing: 3,
  },
});

const underlineButtton = StyleSheet.create({
  text:{
    fontSize:14, 
    fontWeight:'bold',
    letterSpacing:3, 
    borderBottomWidth: 2,
    marginTop: screenHeight * 0.025,
    marginBottom: screenHeight * 0.025, 
    color:MainTxt,
    borderColor:MainTxt
  }
})

const divider = StyleSheet.create({
  dividerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: screenHeight * 0.03,
    paddingBottom: screenHeight * 0.03,

  },
  orDivider: {
    width: screenWidth * 0.3,
    borderTopWidth: 2,
    borderColor:dividerTone
  },
  OR_Text: {
    marginLeft: screenWidth * 0.05,
    marginRight: screenWidth * 0.05,
    color:dividerTone
  },
});

const dialog = StyleSheet.create({
  textContainer: {
    width: screenWidth * 0.75,
    paddingBottom: screenHeight * 0.05
  },
  dialogStyle: { textAlign: "center", fontSize: 18, color: MainTxt },
  dialogSpace: { height: screenHeight * 0.035 },
})

const linearGradientColors = [MainBtn, MainBtnTint];
const linearGradientColorsOutline = [SecBtn, SecBtnTint];

export {
  ButtonComponent,
  linearGradientColors,
  linearGradientColorsOutline,
  divider,
  underlineButtton,
  dialog
};