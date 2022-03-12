import React from "react";
import {
  View,
  Text
} from "react-native";

import {ViewType, EmptyPadding} from "../components/index";
import { MyNoteScr } from "../styles/index";

class MyNote extends React.Component {
  constructor(props) {
    super(props);
    this.navigate = this.props.navigation.navigate;
  }

  render() {
    return (
      <View style={MyNoteScr.container}>
        <EmptyPadding ratio={0.025} />
        <ViewType />
        {/* <NotesList /> */}
      </View>
    );
  }
}

export { MyNote };
