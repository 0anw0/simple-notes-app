import React from "react";
import { View } from "react-native";
import { screenHeight } from "../config/index";

function EmptyPadding(props) {
  let r = props.ratio;
  
  return <View style={{ paddingTop: screenHeight * r }}></View>;
}

export { EmptyPadding };
