import React from "react";
import { FlatList } from "react-native";

import { NoteItem } from "./noteListComp/noteItem";
import { EmptyPadding } from "../components/emptyPadding";

function NoteList(props) {
  const renderNotes = ({ item }) => <NoteItem item={item} />;

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={props.data}
      renderItem={renderNotes}
      keyExtractor={(item) => item.id}
    />
  );
}

export { NoteList };
