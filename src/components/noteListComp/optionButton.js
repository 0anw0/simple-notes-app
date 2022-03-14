import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome5 } from "@expo/vector-icons";

import {
  optionButton,
  linearGradientFLoatButton,
  linearGradientFLoatButton_Pressed,
} from "../../styles/index";

function OptionButton(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <LinearGradient
        colors={
          props.pressed
            ? linearGradientFLoatButton_Pressed
            : linearGradientFLoatButton
        }
        style={optionButton.innerContainer}
      >
        <FontAwesome5 name={props.icon} size={24} color={"white"} />
      </LinearGradient>
    </TouchableOpacity>
  );
}

export { OptionButton };
