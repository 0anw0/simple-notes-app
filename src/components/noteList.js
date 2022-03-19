import React from "react";
import { FlatList } from "react-native";

import { NoteItem } from "./noteListComp/noteItem";

function sortByTimestamp(data) {
  let myArr = data;
  myArr.sort(function (x, y) {
    return y.timestamp - x.timestamp;
  });
  return myArr;
}

function NoteLatest(props) {
  let data = sortByTimestamp(props.data);
  const renderNotes = ({ item }) => <NoteItem item={item} type={props.type} />;

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={data}
      renderItem={renderNotes}
      keyExtractor={(item) => item.id}
    />
  );
}

export { NoteLatest };
