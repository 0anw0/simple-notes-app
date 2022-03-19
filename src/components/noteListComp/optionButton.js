import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome5 } from "@expo/vector-icons";

import { optionButton, linearGradientFLoatButton } from "../../styles/index";

function OptionButton(props) {
  let pressed = props.pressed || false,
    colors = props.gredientColors || linearGradientFLoatButton,
    iconColor= props.iconColor || 'white'
  return (
    <TouchableOpacity onPress={()=> {props.onPress('CreateNote', {
      noteType: props.type
    })}} style={optionButton.container}>
      <LinearGradient
        colors={colors}
        style={optionButton.innerContainer}
      >
        <FontAwesome5 name={props.icon} size={24} color={iconColor} />
      </LinearGradient>
    </TouchableOpacity>
  );
}

export { OptionButton };
