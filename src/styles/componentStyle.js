import React from "react";
import { StyleSheet, StatusBar, Dimensions } from "react-native";

import { screenWidth, screenHeight, colorSchema } from "../config/index";

import { noteItemDimensions } from "./dimensions";

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
    width: screenWidth * 0.75, //Button Width
    height: screenHeight * 0.07,//Button Height
    alignItems: "center",
    justifyContent: "center",
    borderRadius: screenHeight * 0.015, //Button border radious
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
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    padding: screenWidth * 0.025,
    height: screenHeight * 0.065,
    borderWidth: 2,
    borderRadius:15,
    marginBottom: 15,
  },
  sectionTitle: {
    width: screenWidth * 0.6,
  },
  counter: {
    width: screenWidth * 0.15,
    fontSize: 20,
    fontWeight: "bold",
  },
  sectionContainer: {
    width: screenWidth * 0.9,
  },
});

const noteItemStyle = StyleSheet.create({
  noteContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    width: screenWidth * 0.875,
    marginBottom: screenHeight * 0.01,
    borderRadius: screenHeight * 0.01,
    padding: 5,
  },
  noteHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "stretch",
    width: noteItemDimensions.noteHeaderWidth,
  },
  noteHeaderTitleContainer: {
    width: noteItemDimensions.inSectionNoteHeaderWidth,
    paddingVertical: 5,
  },
  noteHeaderTitle: { fontWeight: "bold", paddingLeft: 5 },
  noteBody: { textAlign: "justify", fontSize: 14 },
  inSectionNoteItems: {
    justifyContent: "center",
    alignItems: "center",
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
  noteItemStyle,
};
