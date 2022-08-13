import React, {Component} from "react";
import {Text,View,Button} from "react-native";



export default class BookComplete extends Component{
    render(){
        return(
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text style={{ fontSize:50}}>BookComplete</Text>
            <Text style={{ fontSize:20}}>*Booking process done, show receipt and ref num here{'\n'}</Text>
            <Button
            title="Back"
            onPress={() => {
              this.props.navigation.navigate ('BookHome');
            }}
          />
            </View>

        )
    }
}