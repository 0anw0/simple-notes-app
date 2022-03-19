import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { FontAwesome5 } from "@expo/vector-icons";

const CircleButton = (props) => {
  let ratio = props.ratio || 1,
    size = props.size || 24;
  return (
    <TouchableOpacity
      onPress={props.onPress}
    >
      <LinearGradient
        colors={props.colors}
        style={{
          width: 30 * ratio,
          height: 30 * ratio,
          borderRadius: 15 * ratio,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FontAwesome5 name={props.iconName} size={size} color={"white"} />
      </LinearGradient>
    </TouchableOpacity>
  );
};

export { CircleButton };
