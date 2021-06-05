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
import Constants from '../helpers/constants'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: "",
      password: "",
    };
  }
  componentDidMount(){
    Constants.user_id="";
    Constants.username="";
    Constants.sname = "";
    Constants.s_city = "";
    Constants.s_address = "";
    Constants.number="";
    Constants.email="";
    Constants.cnic="";
    Constants.gender="";
  }
  render() {
    return (
<View style={styles.main}>
         {/* <Navbar label="Login" /> */}
         <Text style={styles.label}>Buzqart</Text>
         <Text style={styles.labels}>Welcome to your online shop.</Text>
           
            <TextInput  style={styles.input}
            placeholder="Number"
            keyboardType="numeric"
            onSubmitEditing={this._submit}
            blurOnSubmit={true}
            maxLength={11}
            value={this.state.number}
            onChangeText={(number) => this.setState({ number })}
            />
          <TextInput style={styles.input}
            secureTextEntry={true}
            placeholder="Password"
            value={this.state.password}
            onChangeText={(password) => this.setState({ password })}
            onSubmitEditing={this._submit}
            blurOnSubmit={true}
          />
                <View style={{paddingHorizontal: 20, width: '100%'}}>
                    <TouchableOpacity style={styles.button1} onPress={this.login_submit}>
                    <Text style={styles.labelb1}>Login</Text>
                    </TouchableOpacity>
                </View>
        </View>
    );
  }
  login_submit = () => {
    var number=this.state.number;
    var password=this.state.password;
    if(number.length==0 || password.length==0){
      alert("Required Field Is Missing");
    }
    else{
      fetch('https://buzqart.com/phpApp/login.php',
      {
          method: 'POST',
          headers: 
          {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(
          {
            number:number,
            password:password,
        })
      })
        .then((response) => response.json())
        .then((res) => {
          if(res.message == "Sorry there was an error!"){
            alert(res.message);
          }
          else{
            Constants.user_id=res.user_id;
            Constants.username=res.username;
            Constants.sname=res.sname;
            Constants.s_city=res.s_city;
            Constants.s_address=res.s_address;
            Constants.number=res.number;
            Constants.email=res.email;
            Constants.cnic=res.cnic;
            Constants.gender=res.gender;
            alert(res.message);
            this.props.navigation.navigate("Dashboard");
          }
        })
        .catch((error) => {
          alert("ERROR! "+error);
      });
    }
    
  };
}

const styles = StyleSheet.create({
  labels: {
    fontSize: 18,
    color: "#000",
    textAlign: 'center',
  },

  input: {
    fontSize: 18,
    color: "#000",
    paddingHorizontal: 12,
    paddingVertical: 16,
    borderColor: "#17B1C2",
    borderWidth: 1,
    borderRadius: 6,
    marginTop: 20,
    marginHorizontal: 20,
  },

  label: {
    marginTop: 50,
    fontSize: 50,
    color: "#000",
    textAlign: 'center',
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
export default Login;
