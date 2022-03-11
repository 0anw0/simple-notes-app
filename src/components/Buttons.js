import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import {
  ButtonComponent,
  linearGradientColors,
  linearGradientColorsOutline,
} from "../styles/componentStyle.js";

function Button(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <LinearGradient
        colors={
          props.type == "outline"
            ? linearGradientColorsOutline
            : linearGradientColors
        }
        style={[
          ButtonComponent.container,
          props.type == "outline"
            ? ButtonComponent.outline
            : ButtonComponent.fill,
        ]}
      >
        <Text
          style={
            props.type != "outline"
              ? ButtonComponent.title
              : ButtonComponent.outlineTitle
          }
        >
          {props.title}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

export {Button};

