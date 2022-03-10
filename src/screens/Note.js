import React from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  Text,
  Alert,
} from "react-native";

export default class Note extends React.Component {
  constructor(props) {
    super(props);
    this.navigate = this.props.navigation.navigate;
  }
  render() {
    return (
      <View
        style={{
          paddingTop: Dimensions.get("window").height * 0.2,
          alignItems: "center",
          flex: 1,
        }}
      >
        <Text>HERE IS A TEXT</Text>
      </View>
    );
  }
}
