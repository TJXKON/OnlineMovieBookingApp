import React, {Component} from 'react';
import {Text, Button, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import BookHome from './BookHome.js';
import BookOption from './BookOption.js';
import BookPayment from './BookPayment.js';
import BookComplete from './BookComplete.js';
import MovieDetails from './MovieDetails.js';
const StackNav = createStackNavigator();

export default class BookNav extends Component {
  render() {
    return (
      <StackNav.Navigator initialRouteName="BookHome">
        <StackNav.Screen name="BookHome" component={BookHome} />
        <StackNav.Screen name="BookOption" component={BookOption} />
        <StackNav.Screen name="BookPayment" component={BookPayment} />
        <StackNav.Screen name="BookComplete" component={BookComplete} />
        <StackNav.Screen name="MovieDetails" component={MovieDetails} />
      </StackNav.Navigator>
    );
  }
}
