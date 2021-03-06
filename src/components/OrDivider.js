import React from "react";
import { View, Text } from "react-native";

import { divider } from "../styles/index";

function OrDivider() {
  return (
    <View style={[divider.dividerContainer]}>
      <View style={divider.orDivider}></View>
      <Text style={divider.OR_Text}>OR</Text>
      <View style={divider.orDivider}></View>
    </View>
  );
}

export {OrDivider};
