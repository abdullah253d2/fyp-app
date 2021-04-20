import React, { Component } from "react";
import Navbar from '../components/navbar'
import Switching from '../components/switch'
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

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      link: "mas.buzcart.pk",
      sales: "5000",
    };
  }
  render() {
    return (
<View style={styles.main}>
         <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                alignItems: "flex-start",
                marginTop: 20,
              }}
            >
            <TouchableOpacity onPress={this.state.link} style={{width: "80%", paddingLeft: 20,}}><Text style={styles.link}>https://{this.state.link}</Text></TouchableOpacity>
             <Switching />
            </View>
            <Text style={styles.text}>Your Sales RS:</Text>           
            <TextInput style={styles.input}
            value={this.state.sales}
            editable={false} selectTextOnFocus={false} 
            />
            <View style={{paddingHorizontal: 20, width: '100%'}}>
                
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    link: {
    fontSize: 18,
    textAlignVertical: "center",
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
    backgroundColor:"#17B1C2",
  },
 });
export default Home;
