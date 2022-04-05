import React from "react";
import {
  View,
  Dimensions,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import AppLoading from "expo-app-loading";

import {
  EmptyPadding,
  NoteArea,
  FloatButton,
  TxtInput,
  SectionSelector,
  Header,
} from "../components/index";

import { createNoteScr } from "../styles/index";
import { EnglishLang } from "../config/index";
import { TakeImage } from "../functions/takeImage";

const { TITLE, CREATE_A_NEW_NOTE } = EnglishLang;

class CreateNote extends React.Component {
  constructor(props) {
    super(props);
    this.navigate = this.props.navigation.navigate;
    this.state = {
      headline: "",
      description: "",
      noteType: false,
      loaded: true,
      section: "",
      openCamera: true,
    };
  }

  componentDidMount() {
    /*let { noteType } = this.props.route.params;
    this.setState({ loaded: true, noteType });*/
  }

  render() {
    return this.state.loaded ? (
      <View style={createNoteScr.container}>
        <Header title={CREATE_A_NEW_NOTE} />
        <EmptyPadding ratio={0.012} />
        <TxtInput
          label={TITLE}
          handleValueChange={this._handleValueChange}
          value={"title"}
        />
        <EmptyPadding ratio={0.012} />
        <SectionSelector />
        <EmptyPadding ratio={0.012} />
        <NoteArea />
        <EmptyPadding ratio={0.012} />
        {/********************** TEMP BUTTONS ********************* */}
        <View style={createNoteScr.temp_ButtonBar}>
          <TouchableOpacity style={createNoteScr.temp_Button}>
            <Text> NOTE </Text>
          </TouchableOpacity>
          <TouchableOpacity style={createNoteScr.temp_Button}>
            <Text> VOICE </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={createNoteScr.temp_Button}
            onPress={() => this.navigate('Camera')}
          >
            <Text> Photo </Text>
          </TouchableOpacity>
          <TouchableOpacity style={createNoteScr.temp_Button}>
            <Text> Video </Text>
          </TouchableOpacity>
        </View>
      </View>
    ) : (
      <AppLoading />
    );
  }
}

export { CreateNote };
