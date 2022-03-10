import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const colorSchema = {
  MainBackground: "#fff",
  MainTxt: "#3634A9",
  SecTxt: "#F7F6FF",
  MainBtn: "#3634A9",
  MainBtnTint: "#2F2CBF",
  SecBtn: "#F7F6FF",
  SecBtnTint: "#ECEBFF",
  dividerTone:'#A1A0F1'
};

export { screenHeight, screenWidth, colorSchema };
