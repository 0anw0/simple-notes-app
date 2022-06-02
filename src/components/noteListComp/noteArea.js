import React from "react";
import { View, FlatList } from "react-native";

import { NoteAreaComponent } from "../../styles/index";

const renderItem = (item) => {
  return (
    <View style={{ borderWidth: 1 }}>
      <Text>{item.noteId}</Text>
    </View>
  );
};

const NoteArea = (props) => {
  return (
    <View style={NoteAreaComponent.container}>
      <FlatList data={props.note} renderItem={renderItem} />
    </View>
  );
};

export { NoteArea };
