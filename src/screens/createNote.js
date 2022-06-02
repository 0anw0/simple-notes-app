import React from "react";
import {
  View,
  Dimensions,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import AppLoading from "expo-app-loading";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FontAwesome5 } from "@expo/vector-icons";

import {
  EmptyPadding,
  NoteArea,
  FloatButton,
  TxtInput,
  SectionSelector,
  Header,
  VoiceModal,
  TextModal,
} from "../components/index";
import { colorSchema } from "../config/index";
import { createNoteScr } from "../styles/index";
import { EnglishLang } from "../config/index";

const { MainBtn } = colorSchema;

function AddNoteIcons({ onPress }) {
  return (
    <View style={createNoteScr.buttonsContainer}>
      {icons.map((icon) => (
        <TouchableOpacity
          style={createNoteScr.buttons}
          onPress={() => onPress(icon)}
        >
          <FontAwesome5 name={icon} size={22} color={MainBtn} />
        </TouchableOpacity>
      ))}
    </View>
  );
}

const icons = ["pen", "microphone", "camera", "video"];

const { TITLE, CREATE_A_NEW_NOTE } = EnglishLang;

/*
type noteObj ={
noteId: string, 
sectionId:string, 
voice:Array<String>, 
image:Array<String>, 
image:Array<String> 
}
*/

class CreateNote extends React.Component {
  constructor(props) {
    super(props);
    this.navigate = this.props.navigation.navigate;
    this.state = {
      title: "",
      loaded: true,
      section: "",
      voiceRecordModal: false,
      textInputeModal: false,
      note: {},
    };
  }

  componentDidMount() {
    this.__storageInit();
    this.establishNewNote();
  }

  establishNewNote = () => {
    let noteId = Number(new Date());
    let note = {
      noteId: noteId,
      section: { title: "", sectionId: "" },
      text: [],
      voice: [],
      image: [],
      video: [],
      title: "",
    };

    this.setState({ note });
  };

  __storageInit = async () => {
    const value = await AsyncStorage.getItem("@initBool");
    //console.log("VALUE INIT: ", value)
    if (value == null) {
      AsyncStorage.setItem("@initBool", JSON.stringify(true));
      AsyncStorage.setItem("@uriList", JSON.stringify([]));
    }
  };

  onNavigate = (status = "failed") => {
    if (status == "success") this.navigate("Note", {});
    else this.navigate("Note");
  };

  saveToNote = (value, key, valueType) => {
    let note = this.state.note,
      update = note[`${key}`],
      updatedNote = {};

    if (valueType == "array") update.push(value);
    else if (valueType == "string") update = value;
    else if (valueType == "object") update = value;

    updatedNote = { ...note, [key]: update };
    console.log("first::", updatedNote);
    this.setState({ note });
  };

  getSection = (section) => {
    this.saveToNote(section, "section", "object");
  };

  getTitle = (key, title) => {
    this.saveToNote(title, "title", "string");
  };

  getAudio = (uri) => {
    this.saveToNote(uri, "voice", "array");
  };

  getText = (text) => {
    this.saveToNote(text, "text", "array");
  };

  getImage = (uri) => {
    this.saveToNote(uri, "image", "array");
  };

  getVideo = (uri) => {
    this.saveToNote(uri, "video", "array");
  };

  getIconFunction = (icon) => {
    switch (icon) {
      case "microphone":
        this.setState({ voiceRecordModal: true });
        break;
      case "video":
        this.navigate("Camera", { setup: "video" });
        break;
      case "pen":
        this.setState({ textInputeModal: true });
        break;

      case "camera":
        this.navigate("Camera", { setup: "camera" });
        break;
    }
  };

  render() {
    const { loaded, textInputeModal, voiceRecordModal, note } = this.state;
    return loaded ? (
      <View style={createNoteScr.container}>
        <Header
          title={CREATE_A_NEW_NOTE}
          leftIcon={"times"}
          rightIcon={"check"}
          onPressLeft={() => this.onNavigate()}
          onPressRight={() => this.onNavigate("success")}
        />

        <EmptyPadding ratio={0.0125} />
        <SectionSelector setSection={this.getSection} />
        <EmptyPadding ratio={0.0125} />

        <TxtInput
          label={TITLE}
          handleValueChange={this.getTitle}
          value={"title"}
        />

        <EmptyPadding ratio={0.012} />

        <NoteArea note={note} />
        <EmptyPadding ratio={0.012} />

        <AddNoteIcons onPress={this.getIconFunction} />
        {textInputeModal && (
          <TextModal
            setTextModalVisible={() =>
              this.setState({ textInputeModal: false })
            }
            getText={this.getText}
          />
        )}

        {voiceRecordModal && (
          <VoiceModal
            setModalVisible={() => this.setState({ voiceRecordModal: false })}
            getAudio={this.getAudio}
          />
        )}
      </View>
    ) : (
      <AppLoading />
    );
  }
}

export { CreateNote };
