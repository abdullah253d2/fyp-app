import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator, Stack } from '@react-navigation/stack';
import Navbar from './components/navbar';
import Landing from './pages/landingpage';
import Congrats from './pages/congrats';
import Login from './pages/login';
import Register from './pages/register';
import Dashboard from './pages/dashboard';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="V-Mall"
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
