import React from "react";
import { View, Text } from "react-native";

import { dialog } from "../styles/componentStyle";

function Dialog(props) {
  return (
    <View style={dialog.textContainer}>
          <Text style={dialog.dialogStyle}>{props.head}</Text>
          <View style={dialog.dialogSpace}></View>
          <Text style={dialog.dialogStyle}>{props.body}</Text>
        </View>
  );
}

export default Dialog;
