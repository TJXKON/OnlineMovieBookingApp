import React, {Component} from "react";
import {Text,View,Button} from "react-native";



export default class BookOption extends Component{
    render(){
        return(
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text style={{ fontSize:50}}>BookOption</Text>
            <Text style={{ fontSize:20}}>*Select quantity,date, time and venue{'\n'}</Text>
            <Button
            title="Proceed to payment"
            onPress={() => {
              this.props.navigation.navigate ('BookPayment');
            }}
          />
            </View>

        )
    }
}