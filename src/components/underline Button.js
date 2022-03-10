import React from "react";
import { Text, TouchableOpacity } from "react-native";

import { underlineButtton } from "../styles/componentStyle.js";

function UnderlineButton(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Text style={underlineButtton.text}>{props.title}</Text>
    </TouchableOpacity>
  );
}

export default UnderlineButton;
