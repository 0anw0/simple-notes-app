import React from "react";
import {
  View,
  Text,
} from "react-native";

import ViewType from "../components/viewType";
import { MyNoteScr } from "../styles/styles";

class MyNote extends React.Component {
  constructor(props) {
    super(props);
    this.navigate = this.props.navigation.navigate;
    this.state = {};
  }
  render() {
    return (
      <View style={MyNoteScr.container}>
        <ViewType />
        <Text>HERE IS A TEXT</Text>
      </View>
    );
  }
}

export { MyNote };
