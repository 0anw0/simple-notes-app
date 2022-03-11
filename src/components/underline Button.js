import React from "react";
import { Text, TouchableOpacity } from "react-native";

import { underlineButtton } from "../styles/index";

function UnderlineButton(props) {
  return (
    <TouchableOpacity onPress={()=>props.onPress()}>
      <Text style={underlineButtton.text}>{props.title}</Text>
    </TouchableOpacity>
  );
}

export {UnderlineButton};
