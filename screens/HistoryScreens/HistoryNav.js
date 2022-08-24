import React, {Component} from 'react';
import {Text, Button, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import HistoryMain from './HistoryMain.js';
import RecordDelete from './RecordDelete.js';
const StackNav = createStackNavigator();

export default class HistoryNav extends Component {
  render() {
    return (
      <StackNav.Navigator initialRouteName="History">
        <StackNav.Screen name="HistoryMain" component={HistoryMain} options={{
            headerShown: false,}}/>
        <StackNav.Screen name="RecordDelete" component={RecordDelete} />
      </StackNav.Navigator>
    );
  }
}
