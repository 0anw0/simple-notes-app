import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import { HeaderSty } from "../styles/index";

const Header = (props) => {
  let { leftIcon, rightIcon, title, onPressLeft, onPressRight } = props;
  return (
    <View style={HeaderSty.container}>
      <TouchableOpacity onPress={() => onPressLeft()}>
        {leftIcon && (
          <FontAwesome5
            name={`${leftIcon}`}
            size={24}
            color={"white"}
            onPress={() => onPressLeft()}
          />
        )}
      </TouchableOpacity>
      <View style={HeaderSty.titleContainer}>
        {title && <Text style={HeaderSty.headerTitle}>{title}</Text>}
      </View>
      <TouchableOpacity onPress={() => onPressRight()}>
        {rightIcon && (
          <FontAwesome5 name={`${rightIcon}`} size={24} color={"white"} />
        )}
      </TouchableOpacity>
    </View>
  );
};

export { Header };
