import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  Image,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";

class Pdetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pname: "",
      category: "",
      desc: "",
      stocknumber: "",
    };
  }
  render() {
    return (
      <ScrollView>
      <View style={styles.main}>
        <View style={[styles.row, { justifyContent: "space-evenly",marginBottom: 20 }]}>
          <View  style={styles.btn}><TouchableOpacity onPress={this.edit}><Text style={{ fontWeight: "400", fontSize: 16, textAlign: "center", color: "#17B1C2", }} >Edit</Text></TouchableOpacity></View>
          <View  style={styles.btn}><TouchableOpacity onPress={this.delt}><Text style={{ fontWeight: "400", fontSize: 16, textAlign: "center", color: "#17B1C2", }} >Delete</Text></TouchableOpacity></View>
        </View>
        <View style={[styles.row, { justifyContent: "flex-start" }]}>
          <Image style={{ height: 80, width: 80, marginBottom: 10, borderRadius: 50, borderWidth: 1, borderColor: "#cecece" }} source={require("../assets/home-img.jpg")}/>
          <Text style={{ fontWeight: "bold", fontSize: 18, marginLeft: 20 }} >Iphone X{"\n"}<Text style={{ fontWeight: "300", fontSize: 14, color: "#212121", lineHeight: 24 }} >RS. 65000</Text></Text>
        </View>
        <TouchableOpacity
           style={styles.prodDiv}
           onPress={this.pdetail}>
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-between",
                alignItems: "flex-end",
              }}
            >
            <View
            style={{
                flexDirection: "column",
                flexWrap: "wrap",
                justifyContent: "space-between",
                alignItems: "flex-end",
                alignItems: "center"
                }}>
              <Text style={styles.stock}>
                Stock:
              </Text>
              <Text style={styles.stockv}>2</Text>
              </View>
              <View
                style={{
                    flexDirection: "column",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                    alignItems: "center"
                    }}>
              <Text style={styles.stock}>
                Stock Value:
              </Text>
              <Text style={styles.stockv}>Rs. 65,000</Text>
              </View>
            </View>
          </TouchableOpacity>
      </View>
      </ScrollView>
    );
  }
  edit = () => {
    this.props.navigation.navigate("Add-Inventory");
  };
}

const styles = StyleSheet.create({
  main:{height: "100%", paddingHorizontal: 20, paddingVertical:  20},
  row:{
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    width: "100%",
    alignItems: "center",
  },
  btn:{
    borderWidth: 1,
    borderColor: "#212121",
    borderRadius: 6,
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: 120,
    borderColor: "#17B1C2",
  },
  prodDiv: {
    marginTop: 20,
    backgroundColor: "#cecece",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  stock:{
      fontSize: 18,
      fontWeight: "700",
      lineHeight: 24,
  },
  stockv:{
    fontSize: 18,
    fontWeight: "400",
    lineHeight: 24,
}
});
export default Pdetail;
