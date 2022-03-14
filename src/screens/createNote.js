import React from "react";
import { View, Dimensions, Text } from "react-native";
import { Button, TxtInput, NoteMediaButtons, EmptyPadding } from "../components/index";

import { EnglishLang } from "../config/index";

const { HEADLINE, DESCRIPTION, SECTION,ADD_NOTE } = EnglishLang;

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
          backgroundColor:"#fff",
          paddingTop: Dimensions.get("window").height * 0.2,
          alignItems: "center",
          flex: 1,
        }}
      >
        <View style={{ width: Dimensions.get("window").width * 0.8}}>
          <TxtInput
            label={HEADLINE}
            handleValueChange={this._handleValueChange}
            value={"headline"}
            keyboardType={"default"}
          />

          <TxtInput
            label={DESCRIPTION}
            handleValueChange={this._handleValueChange}
            value={"description"}
            keyboardType={"default"}
            multiline={true}
            numberOfLines={3}
          />
          {this.state.noteMedia && <NoteMediaItems />}
          <NoteMediaButtons />

          <TxtInput
            label={SECTION}
            handleValueChange={this._handleValueChange}
            value={"description"}
            keyboardType={"default"}
            multiline={true}
            numberOfLines={3}
          />
        </View>
        <EmptyPadding ratio={0.025} />
        <Button title={ADD_NOTE}/> 

      </View>
    );
  }
}

export { CreateNote };
