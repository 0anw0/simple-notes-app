import React, { useState } from "react";
import { View, Text, TouchableOpacity,FlatList } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import { sectionComponent, _getSectionContainer } from "../../styles/index";
import { NoteItem } from "./noteItem";

const Section = ({ item, type }) => {
  let styles = _getSectionContainer("yellow");
  const [collapsible, setCollapsible] = useState(false);
  const renderNotes = ({ item }) => <NoteItem item={item} type={type}/>;

  return (
    <View>
      <TouchableOpacity
        style={[
          sectionComponent.container,
          styles.containerBackground,
          styles.containerBorder,
        ]}
        onPress={() => setCollapsible(!collapsible)}
      >
        <View style={sectionComponent.sectionTitle}>
          <Text style={styles.sectionTitle}> {item.section}</Text>
        </View>
        <Text style={[styles.sectionTitle, sectionComponent.counter]}>
          {item.count}
        </Text>
        <FontAwesome5
          name={"ellipsis-h"}
          size={12}
          {...styles.bergerMenuIcon}
        />
      </TouchableOpacity>
      {collapsible && (
        <View>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={item.notes}
            renderItem={renderNotes}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ alignItems: "center" }}
          />
        </View>
      )}
    </View>
  );
};

export { Section };
