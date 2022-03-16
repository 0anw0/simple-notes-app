import React from "react";
import { FlatList } from "react-native";

import { NoteItem } from "./noteListComp/noteItem";

function NoteLatest(props) {
  const renderNotes = ({ item }) => <NoteItem item={item} type={props.type}/>;

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={props.data}
      renderItem={renderNotes}
      keyExtractor={(item) => item.id}
    />
  );
}

export { NoteLatest };
