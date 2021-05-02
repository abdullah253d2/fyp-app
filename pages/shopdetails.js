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
import ImgPick from '../components/logoimgpicker'

class Yourdetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Shoe Store",
      url: "mas.buzcart.pk",
      TextInputDisableStatus1: false,
      city: "",
      address: "",
      bank: "",
      iban: ""
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
              Shop Name
            </Text>
          <TextInput
            style={[styles.input, { backgroundColor: this.state.TextInputDisableStatus1 ? 'transparent' : '#cecece' }]}
            editable={false}
            value={this.state.name}
            onChangeText={(name) => this.setState({ name })}
          />
            <Text style={styles.labelinput}>
              Shop URL
            </Text>
          <TextInput
            style={[styles.input, { backgroundColor: this.state.TextInputDisableStatus1 ? 'transparent' : '#cecece' }]}
            editable={false}
            value={this.state.url}
            onChangeText={(url) => this.setState({ url })}
          />
            <Text style={styles.labelinput}>
              City
            </Text>
            <TextInput
            style={styles.input}
            placeholder="City"
            value={this.state.city}
            onChangeText={(city) => this.setState({ city })}
            onSubmitEditing={this._submit}
            blurOnSubmit={true}
          />
            <Text style={styles.labelinput}>
              Shop Address
            </Text>
          <TextInput
            style={styles.input}
            placeholder="Address"
            value={this.state.address}
            onChangeText={(address) => this.setState({ address })}
            onSubmitEditing={this._submit}
            blurOnSubmit={true}
          />
            <Text style={styles.labelinput}>
              Bank Name
            </Text>
          <TextInput
            style={styles.input}
            placeholder="Bank"
            value={this.state.bank}
            onChangeText={(bank) => this.setState({ bank })}
            onSubmitEditing={this._submit}
            blurOnSubmit={true}
          />
                      <Text style={styles.labelinput}>
              IBAN Number
            </Text>
          <TextInput
            style={styles.input}
            placeholder="IBAN"
            textContentType="telephoneNumber"
            keyboardType="numeric"
            value={this.state.iban}
            onChangeText={(iban) => this.setState({ iban })}
            onSubmitEditing={this._submit}
            blurOnSubmit={true}
          />
          <View style={{ paddingHorizontal: 20, }}>
          <TouchableOpacity
              style={styles.btnPrimary}
              onPress={this.login_submit}
            >
              <Text style={styles.labelbtn}>Save</Text>
            </TouchableOpacity>
          </View>
      </View>
      </ScrollView>
    );
  }
  login_submit = () => {
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
export default Yourdetails;
