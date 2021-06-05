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
import ImgPick from '../components/imgpicker'
import Constants from '../helpers/constants';

class Yourdetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: "",
      pname: "",
      TextInputDisableStatus1: false,
      TextInputDisableStatus: false, 
      number: "",
      email: "",
      cnic: "",
      // dob: "",
      gender: ""
    };
  }
  onEdit = () => {
  this.setState({ TextInputDisableStatus: true })
}
componentDidMount(){
  this.setState({  user_id: Constants.user_id })
  this.setState({  pname: Constants.username })
  this.setState({  number: Constants.number })
  this.setState({  email: Constants.email })
  this.setState({  cnic: Constants.cnic })
  this.setState({  gender: Constants.gender })
}
  render() {
    return (
      <ScrollView>
      <View style={styles.main}>
        
            {/* <View style={styles.imgdiv}>
              <ImgPick />
            </View> */}
            <Text style={styles.labelinput}>
              Name
            </Text>
          <TextInput
            style={[styles.input, { backgroundColor: this.state.TextInputDisableStatus1 ? 'transparent' : '#cecece' }]}
            editable={false}
            value={this.state.pname}
            // onChangeText={(pname) => this.setState({ pname })}
          />
          <View style={{ flexDirection: 'row',
        flexWrap: 'wrap', justifyContent: 'space-between',
        alignItems: 'flex-start'}}>
            <Text style={styles.labelinput}>
              Phone Number
            </Text>
            <TouchableOpacity onPress={this.onEdit}  ><Text style={{ textAlign: "right", paddingRight: 20, color: "blue" }}>edit</Text></TouchableOpacity>
            </View>
          <TextInput
            style={[styles.input, { backgroundColor: this.state.TextInputDisableStatus ? 'transparent' : '#cecece' }]}
            editable={this.state.TextInputDisableStatus}
            placeholder="Number"
            keyboardType="numeric"
            blurOnSubmit={true}
            maxLength={11}
            value={this.state.number}
            onChangeText={(number) => this.setState({ number })}
          />
            <Text style={styles.labelinput}>
              Email
            </Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={this.state.email}
            onChangeText={(email) => this.setState({ email })}
            blurOnSubmit={true}
          />
            <Text style={styles.labelinput}>
              CNIC
            </Text>
          <TextInput
            style={styles.input}
            placeholder="CNIC"
            maxLength={13}
            value={this.state.cnic}
            onChangeText={(cnic) => this.setState({ cnic })}
            blurOnSubmit={true}
          />
            {/* <Text style={styles.labelinput}>
              Date of Birth
            </Text>
          <TextInput
            style={styles.input}
            placeholder="Date"
            value={this.state.dob}
            onChangeText={(dob) => this.setState({ dob })}
            blurOnSubmit={true}
          /> */}
            <Text style={styles.labelinput}>
              Gender
            </Text>
          <TextInput
            style={styles.input}
            placeholder="Male, Female or ..."
            value={this.state.gender}
            onChangeText={(gender) => this.setState({ gender })}
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
    var user_id=this.state.user_id;
    var number=this.state.number;
    var email=this.state.email;
    var cnic=this.state.cnic;
    var gender=this.state.gender;
    if(number.length=="" || email.length=="" || cnic.length=="" || gender.length==""){
      alert("Some Missing Field");
    }
    else{
      fetch('https://buzqart.com/phpApp/yourdetail.php',
      {
          method: 'POST',
          headers: 
          {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(
          {
            user_id:user_id,
            number:number,
            email:email,
            cnic:cnic,
            gender:gender
        })
      })
        .then((response) => response.json())
        .then((res) => {
          alert(res.message);
        })
        .catch((error) => {
          alert("ERROR! "+error);
      });
    }
  };
}

const styles = StyleSheet.create({
  main:{height: "100%",marginTop:20},
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
