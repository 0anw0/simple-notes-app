import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import { textInputComponent, SectionSelectorComponent } from "../styles/index";
import { EnglishLang, colorSchema } from "../config/index";

const { addSectionColor, addSectionColorReverse } = colorSchema;

const { SECTION } = EnglishLang;

function SectionSelector(props) {
  const [addSection, setAddSection] = useState(false);
  const [selected, setSelected] = useState({ id: 0 });
  const [textValue, settextValue] = useState('');
  const [color, setColor] = useState('yellow');

  const keyboardType = props.keyboardType || "default";
  const sectionTypes = props.sections || [
    { id: 1, title: "workkk" },
    { id: 2, title: "my lovely family" },
    { id: 3, title: "Sports" },
  ];

  const renderSections = (item, selected, setSelected) => (
    <TouchableOpacity
      style={[
        SectionSelectorComponent.sectionBarContainer,
        selected.id == item.id
          ? SectionSelectorComponent.selectedSectionBar
          : SectionSelectorComponent.sectionBar,
      ]}
      onPress={() => setSelected(item)}
    >
      <Text
        style={{
          color:
            selected.id == item.id ? addSectionColor : addSectionColorReverse,
          fontWeight: "bold",
        }}
      >
        {item.title}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ height: 60 }}>
      <Text style={textInputComponent.inputLabel}>{SECTION}</Text>
      {!addSection ? (
        sectionTypes && (
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={SectionSelectorComponent.section_types}
          >
            <TouchableOpacity
              style={SectionSelectorComponent.addSectionBtn}
              onPress={() => {
                setSelected({ id: 0 });
                setAddSection(!addSection);
              }}
            >
              <FontAwesome5
                name={"plus"}
                size={24}
                color={addSectionColorReverse}
              />
            </TouchableOpacity>
            {sectionTypes.map((i) => renderSections(i, selected, setSelected))}
          </ScrollView>
        )
      ) : (
        <View style={SectionSelectorComponent.sectionAddProcess}>
          <TextInput
            style={[
              textInputComponent.inputStyle,
              SectionSelectorComponent.sectionTxtInput,
            ]}
            onChangeText={(val) => {
              settextValue(val)
            }}
            keyboardType={keyboardType}
          />
          <TouchableOpacity
            style={[
              SectionSelectorComponent.addSectionBtn,
              { marginLeft: 7.5, backgroundColor: addSectionColorReverse },
            ]}
            onPress={() => {
              setAddSection(!addSection);
              sectionTypes.push({
                id: sectionTypes.length + 1,
                item: textValue,
                color: color,
              });
            }}
          >
            <FontAwesome5 name={"plus"} size={24} color={addSectionColor} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

export { SectionSelector };
