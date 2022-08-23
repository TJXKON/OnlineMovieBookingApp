import React, {Component} from 'react';
import {Text, Button, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import History from './History.js';
import RecordDelete from './RecordDelete.js';
const StackNav = createStackNavigator();

export default class HistoryNav extends Component {
  render() {
    return (
      <StackNav.Navigator initialRouteName="History">
        <StackNav.Screen name="History" component={History} />
        <StackNav.Screen name="RecordDelete" component={RecordDelete} />
      </StackNav.Navigator>
    );
  }
}
