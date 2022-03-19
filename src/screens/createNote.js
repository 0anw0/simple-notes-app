import React from "react";
import { View, Dimensions, Text, TextInput } from "react-native";
import AppLoading from "expo-app-loading";

import {
  Button,
  EmptyPadding,
  NoteArea,
  FloatButton,
} from "../components/index";

import { EnglishLang } from "../config/index";


const { ADD_NOTE } = EnglishLang;

class CreateNote extends React.Component {
  constructor(props) {
    super(props);
    this.navigate = this.props.navigation.navigate;
    this.state = {
      headline: "",
      description: "",
      noteType: false,
      loaded: false,
    };
  }

  componentDidMount() {
    let { noteType } = this.props.route.params;
    this.setState({ loaded: true, noteType });
  }

  render() {
    return (
      <View
        style={{
          backgroundColor: "#fff",
          alignItems: "center",
          flex: 1,
          paddingTop: 20,
        }}
      >
        {this.state.loaded ? (
          <View>
            <Text>title</Text>
            <TextInput style={{ borderWidth: 1 }} />
            <Text>SECTION</Text>
            <TextInput style={{ borderWidth: 1 }} />
            <EmptyPadding ratio={0.012} />
            <NoteArea />
            <EmptyPadding ratio={0.012} />
            <FloatButton navigate={this.navigate} />
          </View>
        ) : (
          <AppLoading />
        )}
      </View>
    );
  }
}

export { CreateNote };
