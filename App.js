import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator, Stack } from '@react-navigation/stack';
import Navbar from './components/navbar';
import Landing from './pages/landingpage';
import Congrats from './pages/congrats';
import Login from './pages/login';
import Register from './pages/register';
import Dashboard from './pages/dashboard';
import Ainvent from './pages/addInventory';
import Cinvent from './pages/currentInventory';
import Pdetail from './pages/ProductDetail';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Buzcart"
        component={Landing}
        options={{header: () => null}}
        />
        <Stack.Screen 
        name="Login"
        component={Login}
        />
        <Stack.Screen 
        name="Register"
        component={Register}
        />
        <Stack.Screen 
        name="Congratulations"
        component={Congrats}
        options={{headerLeft: () => null}}
        />
        <Stack.Screen 
        name="Dashboard"
        component={Dashboard}
        options={{header: () => null}}
        />
        <Stack.Screen 
        name="Add-Inventory"
        component={Ainvent}
        />
        <Stack.Screen 
        name="Current-Inventory"
        component={Cinvent}
        />
        <Stack.Screen 
        name="Product-Detail"
        component={Pdetail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
