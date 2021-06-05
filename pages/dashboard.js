import  React, { useState } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./home";
import Yourdetails from "./yourdetails";
import Shopdetails from "./shopdetails";
import Constants from '../helpers/constants';

const Drawer = createDrawerNavigator();

export default function App({ navigation }) {
  const [pname, setpname] = useState(Constants.username);
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


