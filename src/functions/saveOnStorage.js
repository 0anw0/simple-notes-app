import * as React from "react";
import { AsyncStorage } from "react-native-async-storage/async-storage";

const saveDataOnStorage = async (key, data) => {
  await AsyncStorage.setItem(`${key}`, data)
    .then((res) => {
      console.log("recieved data is saved");
    })
    .catch((e) => {
      console.log("Error Saving Data! ", e);
    });
};

const getDataFromStorage = async (key) => { 
    let restoredData
    await AsyncStorage.getItem(`${key}`)
    .then((res) => {
      restoredData = JSON.parse(res)
      console.log("recieved data is saved");
    })
    .catch((e) => {
      console.log("Error Saving Data! ", e);
    });
    return restoredData
}

export {saveDataOnStorage, getDataFromStorage}