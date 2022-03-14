import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome5 } from "@expo/vector-icons";

import {
  floatButtonsView,
  floatButtonActivator,
  linearGradientFLoatButton,
  linearGradientFLoatButton_Pressed,
} from "../../styles/index";

import { OptionButton } from "../index";

function FloatButton(props) {
  const [pressed, setPressed] = useState(true);
  return (
    <View style={floatButtonsView.container}>
      <OptionButton
        icon={pressed ? "times" : "plus"}
        onPress={() => setPressed(!pressed)}
      />

      {pressed && (
        <View style={floatButtonsView.buttonsContainer}>
          <View style={floatButtonsView.firstContainer}>
            <OptionButton icon={"pen"} />
            <OptionButton icon={"microphone"} />
          </View>
          <View style={floatButtonsView.secondContainer}>
            <OptionButton icon={"camera"} />
            <OptionButton icon={"video"} />
          </View>
        </View>
      )}
    </View>
  );
}

export { FloatButton };
