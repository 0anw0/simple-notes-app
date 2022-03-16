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
  text: {
    fontSize: 14,
    fontWeight: "500",
    borderBottomWidth: 1,
    marginTop: screenHeight * 0.02,
    color: MainTxt,
    borderColor: MainTxt,
  },
});

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
    borderColor: dividerTone,
  },
  OR_Text: {
    marginLeft: screenWidth * 0.05,
    marginRight: screenWidth * 0.05,
    color: dividerTone,
  },
});

const dialog = StyleSheet.create({
  textContainer: {
    width: screenWidth * 0.75,
    paddingBottom: screenHeight * 0.05,
  },
  dialogStyle: { textAlign: "center", fontSize: 18, color: MainTxt },
  dialogSpace: { height: screenHeight * 0.035 },
});

const textInputComponent = StyleSheet.create({
  inputLabel: { color: MainTextTone, fontSize: 14, letterSpacing: 2 },
  inputStyle: {
    backgroundColor: inputColor,
    height: screenHeight * 0.06,
    marginVertical: screenHeight * 0.005,
    borderRadius: screenHeight * 0.015,
    paddingHorizontal: screenHeight * 0.02,
  },
});

const viewTypeComponent = StyleSheet.create({
  viewContainer: {
    justifyContent: "center",
    width: screenWidth * 0.7,
    height: screenHeight * 0.07,
    borderWidth: screenWidth * 0.008,
    borderRadius: screenWidth * 0.025,
    borderColor: MainBtn,
  },
  innerContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: screenWidth * 0.69,
    height: screenHeight * 0.07,
  },
  boxContainer: {
    justifyContent: "center",
    borderRadius: screenWidth * 0.0123,
    alignItems: "center",
    width: screenWidth * 0.312,
    height: screenHeight * 0.0425,
    marginLeft: screenHeight * 0.01,
  },
  selectedViewContainer: {
    backgroundColor: sectionBtnTint,
  },
  unselectedViewContainer: {
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 18,
    color: MainTxt,
  },
  selectedTitle: {
    fontWeight: "700",
  },
});

const sectionComponent = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    padding: screenWidth * 0.025,
    width: screenWidth * 0.85,
    height: screenHeight * 0.065,
    borderWidth: screenWidth * 0.008,
    borderRadius: screenWidth * 0.0375,
    marginBottom: screenHeight * 0.02,
  },
  sectionTitle: {
    width: screenWidth * 0.6,
  },
  counter: {
    width: screenWidth * 0.15,
    fontSize:20, 
    fontWeight:'bold'
  },
});

const linearGradientColors = [MainBtn, MainBtnTint];
const linearGradientColorsOutline = [SecBtn, SecBtnTint];

export {
  ButtonComponent,
  linearGradientColors,
  linearGradientColorsOutline,
  divider,
  underlineButtton,
  dialog,
  textInputComponent,
  viewTypeComponent,
  sectionComponent,
};
