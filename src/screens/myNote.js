import React from "react";
import { View, Button } from "react-native";

import {
  ViewType,
  NoteSection,
  EmptyPadding,
  NoteLatest,
  FloatButton,
} from "../components/index";

import { MyNoteScr } from "../styles/index";
import { TakeImage } from "../functions/takeImage";
import { d_notes } from "../dommyNotes";

class MyNote extends React.Component {
  constructor(props) {
    super(props);
    this.navigate = this.props.navigation.navigate;
    this.state = {
      type: "section",
      data: d_notes,
    };
  }

  _handleTypeChange = (type) => {
    this.setState({ type });
  };

  render() {
    let { type, data } = this.state;
    return (
      <View style={MyNoteScr.container}>
        <EmptyPadding ratio={0.02} />
        <ViewType onTypeChange={this._handleTypeChange} />
        <EmptyPadding ratio={0.02} />
        {type == "latest" && (
          <View style={MyNoteScr.listContainer}>
            <NoteLatest type={"latest"} data={data} />
          </View>
        )}
        {type == "section" && (
          <View style={MyNoteScr.listContainer}>
            <NoteSection type={"section"} data={data} />
          </View>
        )}
        <FloatButton />
      </View>
    );
  }
}

export { MyNote };
