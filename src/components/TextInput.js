import React from "react";
import { View, Text, TextInput } from "react-native";

import { textInputComponent } from "../styles/componentStyle.js";

function TxtInput(props) {
  return (
    <View>
      <Text style={textInputComponent.inputLabel}>{props.label}</Text>
      <TextInput  style={textInputComponent.inputStyle} />
    </View>
  );
}

export default TxtInput;
