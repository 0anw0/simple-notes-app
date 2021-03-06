import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome5 } from "@expo/vector-icons";

import {
  optionButton,
  floatButtonsView,
  floatButtonActivator,
  linearGradientFLoatButton,
  linearGradientFLoatButton_Pressed,
  cameraLinearGradientFLoatButton,
  penLinearGradientFLoatButton,
  microphoneLinearGradientFLoatButton,
  videoLinearGradientFLoatButton,
} from "../../styles/index";

import { colorSchema } from "../../config/index";

import { OptionButton } from "./optionButton";

const { MainBtn, SecBtn } = colorSchema;

function FloatButton(props) {
  const [pressed, setPressed] = useState(true);
  return (
    <View style={  floatButtonsView.container }>
      {pressed && (
        <View style={floatButtonsView.buttonsContainer}>
          <View style={floatButtonsView.firstContainer}>
            <OptionButton
              icon={"pen"}
              gredientColors={penLinearGradientFLoatButton}
              onPress={props.navigate}
              type='keyboard'
            />
            <OptionButton
              icon={"microphone"}
              gredientColors={microphoneLinearGradientFLoatButton}
              onPress={props.navigate}
              type='microphone'

            />
          </View>
          <View style={floatButtonsView.secondContainer}>
            <OptionButton
              icon={"camera"}
              gredientColors={cameraLinearGradientFLoatButton}
              onPress={props.navigate}
              type='camera'

            />
            <OptionButton
              icon={"video"}
              gredientColors={videoLinearGradientFLoatButton}
              onPress={props.navigate}           
              type='video'
               />
          </View>
        </View>
      )}
      <View style={floatButtonActivator.buttonPosition}>
        <OptionButton
          icon={pressed ? "times" : "plus"}
          onPress={() => setPressed(!pressed)}
          gredientColors={
            pressed
              ? linearGradientFLoatButton_Pressed
              : linearGradientFLoatButton
          }
          iconColor={pressed ? MainBtn : SecBtn}
        />
      </View>
    </View>
  );
}

export { FloatButton };
