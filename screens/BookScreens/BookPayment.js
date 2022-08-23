import React, {Component} from "react";
import {Text,View,Button,Switch} from "react-native";
import { set } from "react-native-reanimated";
import { PickerWithLabel } from '../../UI.js'

let common = require('../../commonData.js');
export default class BookPayment extends Component{
  constructor(props) {
    super(props);
    this.state = {
     seats:'0',
     student:false,
     price:'20.00',
     method:'',
    };
  }



  componentDidMount(){
    this.setState({seats:this.props.route.params.seats});
    this.setState({price:this.props.route.params.price})
  }

    render(){
      let price;
      let student=this.state.student;
      if (student){
        price=(Number(this.state.price)-2).toString();
      }
      else{
        price=this.state.price;
      }
      let total=(Number(this.props.route.params.seats) * Number(price)).toString();
      
        return(
            <View style={{flex:1}}>
            <Text style={{ fontSize:50}}>BookPayment</Text>
            <Text style={{fontSize:25}}>Total: RM{total}</Text>
            <Text>Student</Text>
            <Switch
            onValueChange={student => {
              this.setState({student});
            }}
            value={this.state.student}
          />

          <PickerWithLabel
          label={'Payment Method'}
          items={common.method}
          mode={'dialog'}
          selectedValue={this.state.method}
          onValueChange={(itemValue, itemIndex) => {
            this.setState({method: itemValue});
          }}
          textStyle={{fontSize: 24}}
          >
          </PickerWithLabel>

            <Button
            title="Proceed to Pay"
            onPress={() => {
              this.props.navigation.navigate ('BookComplete');
            }}
          />
            </View>

        )
    }
}