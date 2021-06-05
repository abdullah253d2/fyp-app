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
import Constants from '../helpers/constants'

class EditInv extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prod_name: "",
      prod_price: "",
      prod_desc: "",
      prod_image: "",
      // stocknumber: "",
      product_id:Constants.editProductId
    };
  }
  componentDidMount(){
    // alert(this.state.product_id);
    fetch('https://buzqart.com/phpApp/getproduct.php',
    {
        method: 'POST',
        headers: 
        {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(
        {
          product_id:Constants.editProductId,
      })
    })
      .then((response) => response.json())
      .then((res) => {
        this.setState({  prod_name: res.prod_name })
        this.setState({  prod_price: res.prod_price })
        this.setState({  prod_desc: res.prod_desc })
        // alert(res.prod_price);
        // this.props.navigation.navigate("Dashboard");
        // alert(prod_image);
      })
      .catch((error) => {
        alert("ERROR! "+error);
    });
  }
  render() {
    return (
      <ScrollView>
      <View style={styles.main}>
        
            {/* <View style={styles.imgdiv}>
              <ImgPick
              fromAdInventory = {true}
              getval =  { (val)=> this.setState({ prod_image: val })}
              />
            </View> */}
            <Text style={styles.labelinput}>
              Product Name
            </Text>
          <TextInput
            placeholder="Name"
            style={styles.input}
            value={this.state.prod_name}
            onChangeText={(prod_name) => this.setState({ prod_name })}
          />
            <Text style={styles.labelinput}>
              Price
            </Text>
          <TextInput
            style={styles.input}
            placeholder="Add Price"
            keyboardType="numeric"
            value={this.state.prod_price}
            onChangeText={(prod_price) => this.setState({ prod_price })}
            blurOnSubmit={true}
          />
            <Text style={styles.labelinput}>
              Product Description
            </Text>
          <TextInput
            style={styles.input}
            multiline
            placeholder="Add Description"
            value={this.state.prod_desc}
            onChangeText={(prod_desc) => this.setState({ prod_desc })}
            blurOnSubmit={true}
          />
            {/* <Text style={styles.labelinput}>
              Stock
            </Text>
          <TextInput
            style={styles.input}
            placeholder="Add Stock"
            value={this.state.stocknumber}
            onChangeText={(stocknumber) => this.setState({ stocknumber })}
            blurOnSubmit={true}
          /> */}
          <View style={{ paddingHorizontal: 20, }}>
          <TouchableOpacity
              style={styles.btnPrimary}
              onPress={this.Add}
            >
            <Text style={styles.labelbtn}>SAVE</Text>
            </TouchableOpacity>
          </View>
      </View>
      </ScrollView>
    );
  }
  Add = () => {
    var product_id=Constants.editProductId;
    var prod_name=this.state.prod_name;
    var prod_price=this.state.prod_price;
    var prod_desc=this.state.prod_desc;
    // var prod_image=this.state.prod_image;
    // alert(prod_image);
    if(prod_name.length=="" || prod_price.length=="" || prod_desc.length==""){
      alert("Some Missing Field");
    }
    else{
      fetch('https://buzqart.com/phpApp/editproduct.php',
      {
          method: 'POST',
          headers: 
          {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(
          {
            product_id:product_id,
            prod_name:prod_name,
            prod_price:prod_price,
            prod_desc:prod_desc,
            // prod_image:prod_image
        })
      })
        .then((response) => response.json())
        .then((res) => {
          alert(res.message);
          this.props.navigation.navigate("Dashboard");
          // alert(prod_image);
        })
        .catch((error) => {
          alert("ERROR! "+error);
      });
  }
  };
}

const styles = StyleSheet.create({
  main:{height: "100%", marginTop:20},
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
export default EditInv;
