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
  addSectionColorReverse,
  createNoteContainer,
  createNoteContainerBorder,
} = colorSchema;

const ButtonComponent = StyleSheet.create({
  container: {
    width: screenWidth * 0.75, //Button Width
    height: screenHeight * 0.07, //Button Height
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
  inputLabel: {
    color: MainBtn,
    fontSize: 16,
    letterSpacing: 2,
    fontWeight: "700",
    paddingBottom:3, 
  },
  inputStyle: {
    backgroundColor: SecBtn,
    width: screenWidth * 0.9,
    height: screenHeight * 0.065,
    marginVertical: screenHeight * 0.005,
    borderRadius: 10,
    paddingHorizontal: screenHeight * 0.01,
  },
  container:{
    height: screenHeight * 0.1,
  }
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
    borderRadius: 15,
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

const NoteAreaComponent = StyleSheet.create({
  container: {
    width: screenWidth * 0.9,
    height: screenHeight * 0.55,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: SecBtnTint,
    backgroundColor: createNoteContainer,
  },
});

const SectionSelectorComponent = StyleSheet.create({
  sectionBarContainer: {
    height: screenHeight * 0.065,
    justifyContent: "center",
    alignItems: "center",
    marginRight: screenWidth * 0.01,
    paddingHorizontal: screenHeight * 0.0125,
    borderRadius: 10,
  },
  sectionBar: {
    backgroundColor: SecBtn,
  },
  selectedSectionBar: {
    backgroundColor: addSectionColorReverse,
  },
  addSectionBtn: {
    width: screenHeight * 0.065,
    height: screenHeight * 0.065,
    backgroundColor: SecBtn,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginRight: screenWidth * 0.01,
  },
  section_types: {
    flexDirection: "row",
    width: screenWidth * 0.9,
    height: screenHeight * 0.065,
  },
  sectionAddProcess: {
    flexDirection: "row",
    width: screenWidth * 0.9,
    height: screenHeight * 0.065,
    alignItems: "center",
    paddingTop: 10,
  },
  sectionTxtInput: { width: screenWidth * 0.75 },
});

const Modals = StyleSheet.create({
  textInputModal: {
    height: screenHeight * 0.525,
    width: screenWidth * 0.95,
    backgroundColor: SecBtnTint,
    borderRadius: 15,
  },
  saveBtn: {
    height: screenHeight * 0.065,
    width: screenWidth * 0.825,
    backgroundColor: MainBtn,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
  saveBtnTitle: {
    fontSize: 18,
    color: SecBtnTint,
  },
  headerComponent: {
    height: screenHeight * 0.085,
    width: screenWidth * 0.95,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  modalView: {
    width: screenWidth,
    height: screenHeight * 0.52,
    borderRadius: 15,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  textModalView: {
    width: screenWidth,
    height: screenHeight * 0.65,
    borderRadius: 15,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  closeBtnContainer: {
    width: 50,
    height: 50,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  gcs: { justifyContent: "center", alignItems: "center" },
  recordBtnContainer: {
    width: screenWidth * 0.9,
    height: screenHeight * 0.4,
  },
  timeCounter: {
    paddingBottom: 20,
    fontSize: 24,
    fontWeight: "bold",
    color: MainBtn,
  },
  recordBtn: {
    width: 200,
    height: 200,
    backgroundColor: MainBtn,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  timeCounterLabel: {
    color: MainBtn,
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 20,
  },
  recordIndicator: {
    margin: 10,
    backgroundColor: MainBtn,
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  timerContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 120,
  },
  editHeight: {
    height: screenHeight * 0.075,
  },
});

export const standardsStylesObject = {
  backgroundColor: "white",
  borderColor: "grey",
  color: "black",
  borderRadius: 5,
  borderWidth: 0.5,
  fontSizeNormal: 17,
};

const audioSlider = StyleSheet.create({
  StandardText: {
    fontSize: standardsStylesObject.fontSizeNormal,
    padding: 6,
    color: standardsStylesObject.color,
  },
  StandardContainer: {
    borderRadius: standardsStylesObject.borderRadius,
    borderWidth: standardsStylesObject.borderWidth,
    borderColor: standardsStylesObject.borderColor,
    backgroundColor: standardsStylesObject.backgroundColor,
    marginLeft: 10,
    marginRight: 10,
  },
});

const HeaderSty = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: screenHeight * 0.075,
    backgroundColor: MainBtn,
    width: screenWidth,
  },
  headerTitle: {
    color: SecBtn,
    fontWeight: "700",
    fontSize: 16,
    letterSpacing: 3,
  },
  titleContainer: {
    width: screenWidth * 0.7,
    justifyContent: "center",
    alignItems: "center",
  },
});

const SectionSelectorSty = StyleSheet.create({
  container: { height: screenHeight * 0.1,},
});

const linearGradientColors = [MainBtn, MainBtnTint];
const linearGradientColorsOutline = [SecBtn, SecBtnTint];

export {
  SectionSelectorSty,
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
  NoteAreaComponent,
  SectionSelectorComponent,
  Modals,
  audioSlider,
  HeaderSty,
};
