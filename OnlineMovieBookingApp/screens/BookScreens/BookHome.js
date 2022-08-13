import React, {Component} from "react";
import {Text,Button,View} from "react-native";
import {createStackNavigator} from '@react-navigation/stack';
const StackNav = createStackNavigator ();



export default class BookHome extends Component{
    render(){
        return(
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text style={{ fontSize:50}}>Book</Text>
            <Text style={{ fontSize:20}}>*Select movie to book (Movie list){'\n'}</Text>
            <Button
            title="BookOption"
            onPress={() => {
              this.props.navigation.navigate ('BookOption');
            }}
          />
            </View>

        )
    }
}