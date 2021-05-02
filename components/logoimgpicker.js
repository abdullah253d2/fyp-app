import React, { useState, useEffect } from "react";
import { Text, Image, View, Platform } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function ImagePickerExample() {
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TouchableOpacity onPress={pickImage} style={{ backgroundColor: '#17B1C2', paddingHorizontal: 20, paddingVertical:  10 }} >
        <Text style={{ color: '#fff', fontSize: 16  }}>Pick shop logo from camera roll</Text>
      </TouchableOpacity>
      {image && (
        <Image source={{ uri: image }} style={{ width: 200, height: 200, marginTop: 20 }} />
      )}
    </View>
  );
}
