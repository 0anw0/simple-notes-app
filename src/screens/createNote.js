import React from "react";
import { View, Dimensions, Text } from "react-native";

import { Button, EmptyPadding, NoteArea, MediaButton } from "../components/index";

import { EnglishLang } from "../config/index";

const { ADD_NOTE } = EnglishLang;

class CreateNote extends React.Component {
  constructor(props) {
    super(props);
    this.navigate = this.props.navigation.navigate;
    this.state = {
      headline: "",
      description: "",
      noteMedia: false,
    };
  }
  render() {
    return (
      <View
        style={{
          backgroundColor: "#fff",
          alignItems: "center",
          flex: 1,
        }}
      >
        <EmptyPadding ratio={0.025} />
        <NoteArea />
        <EmptyPadding ratio={0.025} />
        <MediaButton /> 
        <EmptyPadding ratio={0.025} />
        <Button title={ADD_NOTE} />
      </View>
    );
  }
}

export { CreateNote };
