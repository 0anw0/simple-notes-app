import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import { sectionComponent, _getSectionContainer } from "../../styles/index";
import { NoteItem } from "./noteItem";

const Section = ({ item, type }) => {
  let styles = _getSectionContainer(item.sectionTheme);
  const [collapsible, setCollapsible] = useState(false);
  const renderNotes = ({ item }) => <NoteItem item={item} type={type} />;

  return (
    <View style={[sectionComponent.sectionContainer]}>
    {/**  ------------ Section Container --------------------*/}

      <TouchableOpacity
        style={[
          sectionComponent.container,
          styles.containerBackground,
          styles.containerBorder,
        ]}
        onPress={() => setCollapsible(!collapsible)}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {/** ----------------------- Title ----------------------------- */}
          <View style={sectionComponent.sectionTitle}>
            <Text style={styles.sectionTitle}> {item.section}</Text>
          </View>
          {/** ----------------------- Counter ----------------------------- */}

          <Text style={[styles.sectionTitle, sectionComponent.counter]}>
            {item.count}
          </Text>
          {/** ----------------------- Burger menu ------------------------- */}

          <FontAwesome5
            name={"ellipsis-h"}
            size={12}
            {...styles.bergerMenuIcon}
          />
        </View>
          {/** ------------ onSectionPress && Show section's note---------- */}

      </TouchableOpacity>
      {collapsible && (
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FlatList
            showsVerticalScrollIndicator={false}
            data={item.notes}
            renderItem={renderNotes}
            keyExtractor={(item) => item.id}
          />
        </View>
      )}
    </View>
  );
};

export { Section };
