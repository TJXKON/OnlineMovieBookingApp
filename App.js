import React, {Component} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {LogBox} from 'react-native';

import Home from './screens/Home.js';
import BookNav from './screens/BookScreens/BookNav.js';
import HistoryNav from './screens/HistoryScreens/HistoryNav.js';
import Profile from './screens/Profile.js';


LogBox.ignoreLogs (['EventEmitter.removeListener']);
const Tab = createBottomTabNavigator ();
const StackNav = createStackNavigator ();

export default class App extends Component {
  render () {
    return (
      <NavigationContainer>

      <Tab.Navigator
        initialRouteName={'Home'}
        screenOptions={{
          tabBarActiveTintColor: '#e91e63',
          tabBarActiveBackgroundColor: 'pink',
          // inactiveBackgroundColor: 'white',
          tabBarLabelStyle: {
            fontSize: 22,
          },
          tabBarStyle: {
           backgroundColor: 'lightgrey',
          borderRadius:50
        },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: () => {
              return <Ionicons name="home" size={20} color={'red'} />;
            },
          }}
        />
        <Tab.Screen
          name="Book"
          component={BookNav}
          options={{
            headerShown: false,
            tabBarIcon: () => {
              return <Ionicons name="book" size={20} color={'blue'} />;
            },
          }}
        />
        <Tab.Screen
          name="History"
          component={HistoryNav}
          options={{
            headerShown: false,
            tabBarIcon: () => {
              return <Ionicons name="time" size={20} color={'#228B22'} />;
            },
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: false,
            tabBarIcon: () => {
              return <Ionicons name="person" size={20} color={'#8B8000'} />;
            },
          }}
        />
        
      </Tab.Navigator>

    </NavigationContainer>
    )

  }
}