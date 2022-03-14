import React from "react";
import { View, Text, TextInput } from "react-native";

import { textInputComponent } from "../styles/index";

function TxtInput(props) {
  //const [value, setValue] = useState('');
  const keyboardType = props.keyboardType || "default";
  const secureTextEntry = props.secureTextEntry || false;
  const multiline = props.multiline || false;
  const numberOfLines = props.numberOfLines || 1
  return (
    <View>
      <Text style={textInputComponent.inputLabel}>{props.label}</Text>
      <TextInput
        style={textInputComponent.inputStyle}
        onChangeText={(val) => {
          props.handleValueChange(props.value, val);
        }}
        keyboardType={keyboardType}
        multiline={multiline}
        numberOfLines={numberOfLines}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}

export {TxtInput};
