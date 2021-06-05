import React, { Component } from "react";
import Navbar from "../components/navbar";
import Switching from "../components/switch";
import {
  StyleSheet,
  Switch,
  Text,
  TextInput,
  Image,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import Constants from '../helpers/constants';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // link: "mas.buzqart.pk",
      sales: "0",
    };
  }



  render() {
    return (
      <View style={styles.main}>
        <TouchableOpacity onPress={this.logout} >
        <Text style={styles.link}>Logout</Text>
        </TouchableOpacity>
        {/* <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "flex-start",
            marginTop: 20,
          }}
        >
          <TouchableOpacity
            onPress={this.state.link}
            style={{ width: "80%", paddingLeft: 20 }}
          >
            <Text style={styles.link}>https://{this.state.link}</Text>
          </TouchableOpacity>
          <Switching />
        </View> */}
        <Text style={styles.text}>Your Sales RS:</Text>
        <TextInput
          style={styles.input}
          value={this.state.sales}
          editable={false}
          selectTextOnFocus={false}
        />
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "flex-start",
            width: "100%",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={this.nav1} style={styles.btnInventory}>
          <Image style={{ height: 80, width: 80, marginBottom: 10 }} source={require("../assets/add-inv.png")}/>
            <Text style={styles.textI}>Add Inventory</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.nav2} style={styles.btnInventory}>
          <Image style={{ height: 80, width: 60, marginBottom: 10 }} source={require("../assets/edit-inv.png")}/>
            <Text style={styles.textI}>Current Inventory</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  logout = () => {
    this.props.navigation.navigate("Login");
  };
  nav1 = () => {
    this.props.navigation.navigate("Add-Inventory");
  };
  nav2 = () => {
    this.props.navigation.navigate("Current-Inventory");
  };
}

const styles = StyleSheet.create({
  link: {
    fontSize: 18,
    textAlignVertical: "center",
    textAlign: "right",
    margin: 20,
    color: "#17B1C2",
  },

  input: {
    fontSize: 34,
    fontWeight: "bold",
    color: "grey",
    paddingHorizontal: 12,
    paddingVertical: 16,
    borderColor: "#17B1C2",
    borderWidth: 1,
    marginHorizontal: 20,
  },

  text: {
    marginTop: 20,
    marginHorizontal: 20,
    paddingVertical: 12,
    paddingHorizontal: 8,
    fontSize: 20,
    color: "#fff",
    backgroundColor: "#17B1C2",
  },
  btnInventory:{
    borderColor: "#17B1C2",
    borderWidth: 2,
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginTop: 50,
    width: 150,
    alignItems: "center"
  },
  textI:{
    color: "#17B1C2"
  }
});
export default Home;
