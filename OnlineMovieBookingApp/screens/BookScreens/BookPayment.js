import React, {Component} from "react";
import {Text,View,Button} from "react-native";



export default class BookPayment extends Component{
    render(){
        return(
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text style={{ fontSize:50}}>BookPayment</Text>
            <Text style={{ fontSize:20}}>*Payment option{'\n'}</Text>
            <Button
            title="Pay"
            onPress={() => {
              this.props.navigation.navigate ('BookComplete');
            }}
          />
            </View>

        )
    }
}