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
import Constants from '../helpers/constants';
import ImgPickLogo from '../components/logoimgpicker';
import ImgPickBanner from '../components/bannerimgpicker'

class Yourdetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: "",
      TextInputDisableStatus1: false,
      s_city: "",
      s_address: "",
      imgBtn: true,
      store_logo:"",
      store_banner:""
    };
  }
  componentDidMount(){
    this.setState({  s_city: Constants.s_city })
    this.setState({  s_address: Constants.s_address })
    this.setState({  user_id: Constants.user_id })
  }
  render() {
    return (
      <ScrollView>
      <View style={styles.main}>
            <View style={styles.imgdiv}>
              <ImgPickLogo
              fromAdInventory = {true}
              getval =  { (val)=> this.setState({ store_logo: val })}
              />
            </View>
            <View style={styles.imgdiv}>
              <ImgPickBanner
              fromAdInventory = {true}
              getvalu =  { (val)=> this.setState({ store_banner: val })}
              />
            </View>
            <Text style={styles.labelinput}>
              Shop Name
            </Text>
          <TextInput
            style={[styles.input, { backgroundColor: this.state.TextInputDisableStatus1 ? 'transparent' : '#cecece' }]}
            editable={false}
            value={Constants.sname}
            // onChangeText={(sname) => this.setState({ sname })}
          />
            {/* <Text style={styles.labelinput}>
              Shop URL
            </Text>
          <TextInput
            style={[styles.input, { backgroundColor: this.state.TextInputDisableStatus1 ? 'transparent' : '#cecece' }]}
            editable={false}
            value={this.state.url}
            onChangeText={(url) => this.setState({ url })}
          /> */}
            <Text style={styles.labelinput}>
              City
            </Text>
            <TextInput
            style={styles.input}
            placeholder="City"
            value={this.state.s_city}
            onChangeText={(s_city) => this.setState({ s_city })}
            // onSubmitEditing={this._submit}
            blurOnSubmit={true}
          />
            <Text style={styles.labelinput}>
              Shop Address
            </Text>
          <TextInput
            style={styles.input}
            placeholder="Address"
            multiline={true}
            value={this.state.s_address}
            onChangeText={(s_address) => this.setState({ s_address })}
            // onSubmitEditing={this._submit}
            blurOnSubmit={true}
          />
            {/* <Text style={styles.labelinput}>
              Bank Name
            </Text>
          <TextInput
            style={styles.input}
            placeholder="Bank"
            value={this.state.bank}
            onChangeText={(bank) => this.setState({ bank })}
            // onSubmitEditing={this._submit}
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
            // onSubmitEditing={this._submit}
            blurOnSubmit={true}
          /> */}
          <View style={{ paddingHorizontal: 20, }}>
          <TouchableOpacity
              style={styles.btnPrimary}
              onPress={this.ShopDetails}
            >
              <Text style={styles.labelbtn}>Save</Text>
            </TouchableOpacity>
          </View>
      </View>
      </ScrollView>
    );
  }
  ShopDetails = () => {
    var user_id=this.state.user_id;
    var s_city=this.state.s_city;
    var s_address=this.state.s_address;
    var store_logo=this.state.store_logo;
    var store_banner=this.state.store_banner;
    if(user_id.length=="" || s_city.length=="" || s_address.length==""){
      alert("Some Missing Field");
    }
    else{
          fetch('https://buzqart.com/phpApp/shopdetail.php',
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
                s_city:s_city,
                s_address:s_address,
                store_logo:store_logo,
                store_banner:store_banner
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
    }
}

const styles = StyleSheet.create({
  main:{height: "100%"},
  imgdiv: {
    marginHorizontal: 40,
    marginVertical: 30,
    alignItems: "center"
  },
  img: { height: 300, width: "100%" },
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
