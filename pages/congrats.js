import React from "react";
import { StyleSheet, Text, Image, View, TouchableOpacity } from "react-native";

export default function Congrats({ navigation }) {
  const onPressHandler = () => {navigation.navigate('V-Mall');}
  return (
    <View style={styles.landing}>
      {/* <Text style={styles.label}>Congrats"</Text> */}
      <Text style={styles.label}>Your Online Shop has been created!</Text>
        <Image source={require("../assets/home-img.jpg")}/>
        <View style={{paddingHorizontal: 20, width: '100%'}}>
            <TouchableOpacity style={styles.button1} onPress={onPressHandler}>
            <Text style={styles.labelb1}>Login</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity style={styles.button2}  onPress ={
             ()=>{
            console.log('clicked');
            return BackHandler.exitApp();
            }
            }>
            <Text style={styles.labelb2}>Exit App</Text>
            </TouchableOpacity> */}
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  landing: {
    paddingTop: 20,
    alignItems: "center",
    height: "100%",
    backgroundColor: '#fff',
  },
  labelb1: {
    fontSize: 18,
    color: "#fff",
  },
  labelb2: {
    fontSize: 18,
    color: "#17B1C2",
  },
  label: {
    fontSize: 22,
    color: "#000",
  },
  button1: {
    borderWidth: 1,
    backgroundColor: "#17B1C2",
    borderColor: "#17B1C2",
    paddingHorizontal: 16,
    paddingVertical: 14,
    alignItems: "center",
    width: "100%",
    marginBottom: 20
  },
  button2: {
    borderWidth: 1,
    // backgroundColor: '#17B1C2',
    borderColor: "#17B1C2",
    paddingHorizontal: 16,
    paddingVertical: 14,
    alignItems: "center",
    width: "100%",
  },
});
