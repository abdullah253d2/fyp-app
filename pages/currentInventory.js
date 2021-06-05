import React, { Component  } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  Image,
  View,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import Constants from '../helpers/constants';

export default class CurrentInv extends React.Component {
  state = {
    user_id:"",
    data: []
  };

  componentDidMount() {
    // this.state = { user_id: Constants.user_id };
    // alert(user_id);
    this.fetchData();
  }
  fetchData = async () => {
    const response = await fetch("https://buzqart.com/phpApp/currentinv.php",
    {
      method: 'POST',
      headers: 
      {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(
      {
        user_id:Constants.user_id,
    })
  })
    const json = await response.json();
    this.setState({ data: json });
  };
  render() {
    return (
  <View style={styles.main}>
    <FlatList 
      data={this.state.data}
      renderItem={({ item }) =>(
        <View
                style={styles.prodDiv}
                >
                <Text style={styles.prodName}>{item.prod_name}</Text>
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
                    Stock Value:
                  </Text>
                  <Text style={styles.stock}>Rs. {item.prod_price}</Text>
                  </View>
                <View
                style={{
                    flexDirection: "column",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                    alignItems: "center"
                    }}>
                  
                  <TouchableOpacity onPress={() => this.del(item.product_id)}><Image style={{ marginBottom: 20, marginRight:20 }} source={require("../assets/trash.png")}/></TouchableOpacity>
                  <TouchableOpacity onPress={() => this.edit(item.product_id)}><Image style={{ marginRight:20 }} source={require("../assets/edit.png")}/></TouchableOpacity>
                  
                  <Text style={styles.stock}></Text>
                  </View>

                </View>
              </View>
      )}
      keyExtractor={(item, index) => index.toString()}
      
    />
    {/* <TouchableOpacity onPress={this.a}><Text>hello</Text></TouchableOpacity> */}
  </View>
    );
  }
  edit(value){
    Constants.editProductId=value;
    this.props.navigation.navigate("Edit-Product");
  }
  del(val){
    Alert.alert(
      "Delete Product",
      "Are you sure you want to delete this product?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          // style: "cancel"
        },
        { text: "Yes", onPress: () => {
          fetch('https://buzqart.com/phpApp/delproduct.php',
          {
              method: 'POST',
              headers: 
              {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(
              {
                product_id:val,
            })
          })
            .then((response) => response.json())
            .then((res) => {
              alert(res.message);
              this.props.navigation.navigate("Dashboard");
            })
            .catch((error) => {
              alert("ERROR! "+error);
          });
        } 
      }
      ]
    );
  }
}

const styles = StyleSheet.create({
  main: { height: "100%" },
  prodName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#777"
  },
  prodDiv: {
    borderWidth: 1,
    borderColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#f8f8f8",
  },
  stock: {
    fontSize: 18,
    marginTop: 10,
    color: "#000"
  },
});
// export default CurrentInv;
