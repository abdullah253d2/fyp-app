import React from "react";
import { StyleSheet, Text, Image, View, TouchableOpacity } from "react-native";
import { NavigationContainer, StackActions } from '@react-navigation/native';

export default function Landing({ navigation }) {
  const onPressHandler = () => {navigation.navigate('Login');}
  const onPressHandler1 = () => {navigation.navigate('Register');}
  return (
    <View style={styles.landing}>
      <Text style={styles.labelt}>Buzqart</Text>
      <Text style={styles.label}>Create your new shop here for free!</Text>
        <Image style={{ height: 480, width: '100%'}} source={require("../assets/home-img.jpg")}/>
        <View style={{paddingHorizontal: 20, width: '100%'}}>
            <TouchableOpacity style={styles.button1} onPress={onPressHandler1}>
            <Text style={styles.labelb1}>Create Shop</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2} onPress={onPressHandler}>
            <Text style={styles.labelb2}>Login</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  landing: {
    paddingTop: 15,
    alignItems: "center",
    height: "100%",
    backgroundColor: "#fff",
  },
  labelt: {
    fontSize: 50,
    marginTop: 20,
    color: "#000",
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
    fontSize: 24,
    paddingHorizontal: 20,
    color: "#000",
    backgroundColor:  "#fff",
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
