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
import ImgPick from '../components/imgpickerprod'

class AddInv extends React.Component {
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
        
            <View style={styles.imgdiv}>
              <ImgPick />
            </View>
            <Text style={styles.labelinput}>
              Product Name
            </Text>
          <TextInput
            placeholder="Name"
            style={styles.input}
            editable={false}
            value={this.state.pname}
            onChangeText={(pname) => this.setState({ pname })}
          />
            <Text style={styles.labelinput}>
              Category
            </Text>
          <TextInput
            style={styles.input}
            placeholder="Add Category"
            value={this.state.category}
            onChangeText={(category) => this.setState({ category })}
            onSubmitEditing={this._submit}
            blurOnSubmit={true}
          />
            <Text style={styles.labelinput}>
              Product Description
            </Text>
          <TextInput
            style={styles.input}
            multiline
            placeholder="Add Description"
            value={this.state.desc}
            onChangeText={(desc) => this.setState({ desc })}
            onSubmitEditing={this._submit}
            blurOnSubmit={true}
          />
            <Text style={styles.labelinput}>
              Stock
            </Text>
          <TextInput
            style={styles.input}
            placeholder="Add Stock"
            value={this.state.stocknumber}
            onChangeText={(stocknumber) => this.setState({ stocknumber })}
            onSubmitEditing={this._submit}
            blurOnSubmit={true}
          />
          <View style={{ paddingHorizontal: 20, }}>
          <TouchableOpacity
              style={styles.btnPrimary}
              onPress={this.Add}
            >
            <Text style={styles.labelbtn}>ADD</Text>
            </TouchableOpacity>
          </View>
      </View>
      </ScrollView>
    );
  }
  Add = () => {
    alert(`Saving`);
  };
}

const styles = StyleSheet.create({
  main:{height: "100%"},
  imgdiv: {
    width: "100%",
    height: 300,
  },
  labelinput: {
    textAlign: "left",
    fontSize: 16,
    marginLeft: 20,
    marginBottom: 8,
  },
  input: {
    fontSize: 18,
    color: "#000",
    paddingHorizontal: 12,
    paddingVertical: 16,
    borderColor: "#17B1C2",
    borderWidth: 1,
    borderRadius: 6,
    marginBottom: 20,
    marginHorizontal: 20,
  },
  btnPrimary: {
    borderWidth: 1,
    backgroundColor: "#17B1C2",
    borderColor: "#17B1C2",
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginTop: 20,
    alignItems: "center",
    width: "100%",
    marginBottom: 20,
  },
  labelbtn: {
    fontSize: 18,
    color: "#fff",
  },
});
export default AddInv;
