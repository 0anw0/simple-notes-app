import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import { CircleButton } from "./noteListComp/circleButton";
import { mediaButtonGradient } from "../config/index";

const MediaButton = () => {
  return (
    <View style={{ flexDirection: "row", justifyContent:'space-around', alignItems:'center', width:250 }}>
      <CircleButton
        colors={mediaButtonGradient.otherButton}
        iconName={"microphone"}
        ratio={2}
      />
      <CircleButton
        colors={mediaButtonGradient.middleButton}
        iconName={"camera"}
        ratio={3}
      />
      <CircleButton
        colors={mediaButtonGradient.otherButton}
        iconName={"video"}
        ratio={2}
      />
    </View>
  );
};

export { MediaButton };
