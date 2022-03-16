import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import {
  _getNoteContainerStyle,
  noteItemDimensions,
  noteItemStyle,
} from "../../styles/index";

import { screenWidth, screenHeight } from "../../config/index";

const NoteItem = ({ item, type }) => {
  console.log(item, type);
  const noteContainerStyle = _getNoteContainerStyle(item.sectionTheme);
  return (
    <TouchableOpacity
      style={[
        noteItemStyle.noteContainer,
        noteContainerStyle.BackgroundColor,
        noteContainerStyle.containerBorder,
      ]}
    >
      <View style={noteItemStyle.noteHeaderContainer}>
        {type == "section" ? (
          <View style={noteItemStyle.noteHeaderTitleContainer}>
            <Text
              style={[
                noteItemStyle.noteHeaderTitle,
                noteContainerStyle.HeaderColor,
              ]}
            >
              {item.title}
            </Text>
          </View>
        ) : (
          <TouchableOpacity
            style={[
              noteContainerStyle.sectionTagBackgroundColor,
              noteItemDimensions.noteItemSectionHeaderTagDimensions,
            ]}
          >
            <Text
              style={[
                { fontWeight: "700" },
                noteContainerStyle.sectionTagColor,
              ]}
            >
              {item.section}
            </Text>
          </TouchableOpacity>
        )}

        <View style={{ flexDirection: "row" }}>
          <Text style={noteContainerStyle.dateColor}>
            {item.timestamp.toDateString()}
          </Text>
          <TouchableOpacity style={noteItemDimensions.bergerMenuButton}>
            <FontAwesome5
              name={"ellipsis-v"}
              size={12}
              {...noteContainerStyle.bergerMenuColor}
            />
          </TouchableOpacity>
        </View>
      </View>
      {type == "latest" && (
        <View
          style={noteItemDimensions.noteItemHeaderTagDimensions}
        >
          <Text
            style={[
              noteItemStyle.noteHeaderTitle,
              noteContainerStyle.HeaderColor,
            ]}
          >
            {item.title}
          </Text>
        </View>
      )}

      <View
        style={noteItemDimensions.noteItemBodyDimensions}
      >
        <Text
          style={[
            noteItemStyle.noteBody,
            noteContainerStyle.descriptionColor,
          ]}
        >
          {item.description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export { NoteItem };
