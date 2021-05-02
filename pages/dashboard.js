import  React, { useState } from "react";
import { Button, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./home";
import Yourdetails from "./yourdetails";
import Shopdetails from "./shopdetails"


const Drawer = createDrawerNavigator();
export default function App() {
  const [pname, setpname] = useState("Abdullah");
  return (
    <Drawer.Navigator
      drawerPosition="left"
      drawerType="slide"
      hideStatusBar={true}
      screenOptions={{
        headerShown: true,
        swipeEnabled: true,
        headerTintColor: "#fff",
        headerStyle:{
          backgroundColor: "#17B1C2",
        },
        headerTitleStyle:{
          fontSize: 24,
        }
      }}
      drawerStyle={{
        backgroundColor: "#fafafa",
        width: 250,
      }}
    >
      <Drawer.Screen name={pname} component={ HomeScreen } />
      <Drawer.Screen name="Your Details" component={ Yourdetails } />
      <Drawer.Screen name="Shop Details" component={ Shopdetails } />
    </Drawer.Navigator>
  );
}
