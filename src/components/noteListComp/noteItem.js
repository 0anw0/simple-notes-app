import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import {
  _getNoteContainerStyle,
  noteItemDimensions,
  noteItemStyle,
} from "../../styles/index";

const NoteItem = ({ item, type }) => {
  const noteContainerStyle = _getNoteContainerStyle(item.sectionTheme);
  return (
    <TouchableOpacity
      style={[
        noteItemStyle.noteContainer,
        noteContainerStyle.BackgroundColor,
        noteContainerStyle.containerBorder,
      ]}
    >
      {/* --------------------------Note Container-------------------------- */}
      <View style={noteItemStyle.noteHeaderContainer}>
        {/* ---Rendering Note Item while Section View is selected--- */}
        {/* ---Otherwise, Render Regular note--- */}
        {/* ___________________________________________________________________ */}
        {/* --------------------------Note Header-------------------------- */}

        {type == "section" ? (
          //Note Title ( if true )
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
          // Note sectionTag (if false)
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
        {/* ------------------------------------------------------- */}
        {/** Rendering Date and Time & Burger menu button */}

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

      {/* ___________________________________________________________________ */}
      {/** ------------------------------- Note Body ---------------------------- */}
      {/** ----------- Render Header if in latest View --------------- */}

      {type == "latest" && (
        <View style={noteItemDimensions.noteItemHeaderTagDimensions}>
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
      {/** -----------Body of the Note --------------- */}

      <View style={noteItemDimensions.noteItemBodyDimensions}>
        <Text
          style={[noteItemStyle.noteBody, noteContainerStyle.descriptionColor]}
        >
          {item.description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export { NoteItem };
