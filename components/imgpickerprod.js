import React, { useState, useEffect } from "react";
import { Text, Image, View, Platform } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { TouchableOpacity } from "react-native-gesture-handler";
import Constants from '../helpers/constants'

export default function ImgPick(props) {
  const [image, setImage] = useState(null);
  async function takePhotoAndUpload() {

    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: false, // higher res on iOS
      aspect: [4, 3],
    });
  
    if (result.cancelled) {
      return;
    }
    console.log("imageicker ",JSON.stringify(result))
  
    let localUri = result.uri;
    let filename = localUri.split('/').pop();
    setImage(result.uri);
    let match = /\.(\w+)$/.exec(filename);
    let type = match ? `image/${match[1]}` : `image`;
  
    let formData = new FormData();
    formData.append('photo', { uri: localUri, name: filename, type });
  
    return await fetch('https://www.buzqart.com/phpApp/imgupload.php', {
      method: 'POST',
      body: formData,
      header: {
        'content-type': 'multipart/form-data',
      },
    })
    .then((response) => response.json())
    .then((res) => {
      // alert(JSON.stringify(res.prod_img));
      console.log("????" , res.prod_img);
      props.getval(res.prod_img);
      if(res.err != undefined){alert(res.err);setImage(null);}
    })
    .catch((error) => {
      alert("ERROR! "+error);
  });
  }

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TouchableOpacity onPress={takePhotoAndUpload} style={{ backgroundColor: '#17B1C2', paddingHorizontal: 20, paddingVertical:  10 }} >
        <Text style={{ color: '#fff', fontSize: 16  }}>Pick Product Image from camera roll</Text>
      </TouchableOpacity>
      {image && (
        <Image source={{ uri: image }} style={{ width: 200, height: 200, marginTop: 20 }} />
      )}
    </View>
  );
}
