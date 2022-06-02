import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import {
  textInputComponent,
  SectionSelectorComponent,
  SectionSelectorSty,
} from "../styles/index";
import { EnglishLang, colorSchema } from "../config/index";

const { addSectionColor, addSectionColorReverse } = colorSchema;

const { SECTION } = EnglishLang;
const dummySection = [
  { id: 1, title: "workkk" },
  { id: 2, title: "my lovely family" },
  { id: 3, title: "Sports" },
];
function SectionSelector(props) {
  const [addSection, setAddSection] = useState(false);
  const [selected, setSelected] = useState(0);
  const [textValue, settextValue] = useState("");
  const [secTypes, setSecTypes] = useState(dummySection);
  const [color, setColor] = useState("yellow");

  const keyboardType = props.keyboardType || "default";

  const renderSections = (item, selected, setSelected) => (
    <TouchableOpacity
      style={[
        SectionSelectorComponent.sectionBarContainer,
        selected == item.id
          ? SectionSelectorComponent.selectedSectionBar
          : SectionSelectorComponent.sectionBar,
      ]}
      onPress={() => setSelected(item.id)}
    >
      <Text
        style={{
          color: selected == item.id ? addSectionColor : addSectionColorReverse,
          fontWeight: "bold",
        }}
      >
        {item.title}
      </Text>
    </TouchableOpacity>
  );

  function addNewSection (textValue){
    let id = Number(new Date());
    let newSection = {
      id: id,
      title: textValue,
    };
    setAddSection(!addSection);
    setSecTypes([newSection, ...secTypes]);
    setSelected(id);
    props.setSection(newSection);
  }

  return (
    <View style={SectionSelectorSty.container}>
      <Text style={textInputComponent.inputLabel}>{SECTION}</Text>
      {!addSection ? (
        secTypes && (
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={SectionSelectorComponent.section_types}
          >
            <TouchableOpacity
              style={SectionSelectorComponent.addSectionBtn}
              onPress={() => {
                setSelected(0);
                setAddSection(!addSection);
              }}
            >
              <FontAwesome5
                name={"plus"}
                size={24}
                color={addSectionColorReverse}
              />
            </TouchableOpacity>
            {secTypes.map((i) => renderSections(i, selected, setSelected))}
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
              settextValue(val);
            }}
            keyboardType={keyboardType}
          />
          <TouchableOpacity
            style={[
              SectionSelectorComponent.addSectionBtn,
              { marginLeft: 7.5, backgroundColor: addSectionColorReverse },
            ]}
            onPress={() => addNewSection(textValue)}
          >
            <FontAwesome5 name={"plus"} size={24} color={addSectionColor} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

export { SectionSelector };
