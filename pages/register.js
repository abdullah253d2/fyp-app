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
import Navbar from "../components/navbar";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pname: "",
      sname: "",
      // subdomain: "",
      email: "",
      number: "",
      password: "",
    };
  }
  render() {
    return (
      <ScrollView>
        <KeyboardAvoidingView
          // behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View style={styles.main}>
            {/* <Navbar style={styles.nav} label="Register Shop" /> */}

            <Text style={styles.labels}>
              Fill the form to Create Online Shop.
            </Text>
            <Text style={styles.labelinput}>
              Your Name<Text style={styles.red}>*</Text>
            </Text>
            <TextInput
              style={styles.input}
              value={this.state.pname}
              onChangeText={(pname) => this.setState({ pname })}
              placeholder="Name"
              // onSubmitEditing={this._submit}
              blurOnSubmit={true}
            />
            <Text style={styles.labelinput}>
              Shop Name<Text style={styles.red}>*</Text>
            </Text>
            <TextInput
              style={styles.input}
              value={this.state.sname}
              onChangeText={(sname) => this.setState({ sname })}
              placeholder="Shop Name"
              // onSubmitEditing={this._submit}
              blurOnSubmit={true}
            />
            {/* <Text style={styles.labelinput}>
              Shop Link<Text style={styles.red}>*</Text>
            </Text>
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                alignItems: "flex-start",
              }}
            >
              <TextInput
                style={styles.input2}
                value={this.state.subdomain}
                onChangeText={(subdomain) => this.setState({ subdomain })}
                placeholder="Shop Name"
                autoCapitalize="none"
                onSubmitEditing={this._submit}
                blurOnSubmit={true}
              />
              <Text style={styles.labelinput2}>.buzqart.com</Text>
            </View> */}
            <Text style={styles.labelinput}>Email</Text>
            <TextInput
              style={styles.input}
              value={this.state.email}
              onChangeText={(email) => this.setState({ email })}
              placeholder="Email"
              autoCapitalize="none"
              keyboardType="email-address"
              textContentType="emailAddress"
              // onSubmitEditing={this._submit}
              blurOnSubmit={true}
            />
            <Text style={styles.labelinput}>
              Phone Number<Text style={styles.red}>*</Text>
            </Text>
            <TextInput
              style={styles.input}
              value={this.state.number}
              onChangeText={(number) => this.setState({ number })}
              placeholder="Number"
              textContentType="telephoneNumber"
              keyboardType="numeric"
              maxLength={11}
              // onSubmitEditing={this._submit}
              blurOnSubmit={true}
            />
            <Text style={styles.labelinput}>
              Password<Text style={styles.red}>*</Text>
            </Text>
            <TextInput
              style={styles.input}
              value={this.state.password}
              onChangeText={(password) => this.setState({ password })}
              secureTextEntry={true}
              placeholder="Password"
              // onSubmitEditing={this._submit}
              blurOnSubmit={true}
            />
            <View style={{ paddingHorizontal: 20, width: "100%" }}>
              <TouchableOpacity onPress={this.registeration} style={styles.button1}>
                <Text style={styles.labelb1}>Register</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
  registeration = () => {
    var pname=this.state.pname;
    var sname=this.state.sname;
    var email=this.state.email;
    var number=this.state.number;
    var password=this.state.password;
    if(pname.length==0 || sname.length==0 || number.length==0 || password.length==0){
      alert("Required Field Is Missing");
    }
    else{
        fetch('https://buzqart.com/phpApp/register.php',
        {
            method: 'POST',
            headers: 
            {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
            {
              pname:pname,
              sname:sname,
              email:email,
              number:number,
              password:password
          })
        })
          .then((response) => response.json())
          .then((res) => {
            alert(res.message);
            this.props.navigation.navigate("Buzqart");
          })
          .catch((error) => {
            alert("ERROR! "+error);
        });
      };
    }
}

const styles = StyleSheet.create({
  form: {
    flex: 1,
    justifyContent: "space-between",
  },
  labels: {
    fontSize: 18,
    color: "#000",
    textAlign: "center",
    marginVertical: 20,
  },
  labelinput: {
    textAlign: "left",
    fontSize: 16,
    marginLeft: 20,
    marginBottom: 8,
  },
  labelinput2: {
    width: "30%",
    marginTop: 14,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "right",
  },
  red: { color: "red" },
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
  input2: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#000",
    paddingHorizontal: 12,
    paddingVertical: 16,
    borderColor: "#17B1C2",
    borderWidth: 1,
    borderRadius: 6,
    marginBottom: 20,
    marginLeft: 20,
    width: "60%",
  },

  label: {
    marginTop: 50,
    fontSize: 50,
    color: "#000",
    textAlign: "center",
  },
  button1: {
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
  labelb1: {
    fontSize: 18,
    color: "#fff",
  },
});
export default Register;
