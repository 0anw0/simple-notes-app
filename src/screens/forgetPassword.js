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

export default class ForgetPassword extends React.Component {
  constructor(props) {
    super(props);
    this.navigate = this.props.navigation.navigate;
  }
  render() {
    return (
      <View>
        <Text>HERE IS A TEXT</Text>
      </View>
    );
  }
}
