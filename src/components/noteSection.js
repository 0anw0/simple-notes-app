import React from "react";
import { FlatList } from "react-native";

import { Section } from "./noteListComp/sections";

function sortSections(data) {
  let sectionArray = [],
    sectionCounter = [],
    id = 0;
  data.forEach((e) => {
    if (!sectionArray.includes(e.section)) {
      sectionArray.push(e.section);
    }
  });

  sectionArray.forEach((e) => {
    let counter = 0,
      notes = [],
      theme = "";
    data.forEach((element) => {
      if (e == element.section) {
        counter++;
        theme = element.sectionTheme;
        notes.push({
          title: element.title,
          description: element.description,
          sectionTheme: theme,
          timestamp: element.timestamp,
          images: element.images,
          voice: element.voice,
          videos: element.videos,
        });
      }
    });

    sectionCounter.push({
      sectionTheme: theme,
      section: e,
      id: id,
      count: counter,
      notes: notes,
    });
    id++;
  });

  return sectionCounter;
}

function NoteSection(props) {
  const renderSections = ({ item }) => (
    <Section item={item} type={props.type} />
  );
  let sections = sortSections(props.data);
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={sections}
      renderItem={renderSections}
      keyExtractor={(item) => item.id}
    />
  );
}

export { NoteSection };
