import React from "react";
import { View } from "react-native";
import { screenHeight } from "../config/index";

function EmptyPadding(props) {
  let r = props.ratio || 0.01;
  
  return <View style={{ paddingTop: screenHeight * r }}></View>;
}

export { EmptyPadding };
