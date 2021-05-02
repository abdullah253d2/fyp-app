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
import ImgPick from "../components/imgpicker";

class CurrentInv extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.main}>
          <TouchableOpacity
           style={styles.prodDiv}
           onPress={this.pdetail}>
            <Text style={styles.prodName}>IPhone X</Text>
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
              <Text style={styles.stock}>2</Text>
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
              <Text style={styles.stock}>Rs. 65,000</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
  pdetail = () => {
    this.props.navigation.navigate("Product-Detail");
  };
}

const styles = StyleSheet.create({
  main: { height: "100%", },
  prodName:{
    fontSize: 20,
    fontWeight: "bold",
  },
  prodDiv: {
    borderWidth: 2,
    borderColor: "#17B1C2",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#cae0e3"
  },
  stock:{
      fontSize: 18,
      marginTop: 10,
  }
});
export default CurrentInv;
