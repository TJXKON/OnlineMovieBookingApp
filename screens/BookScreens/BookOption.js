import React, {Component} from "react";
import {Text,View,Button,Image,ScrollView,} from "react-native";
import { PickerWithLabel } from '../../UI.js'
import { InputWithLabel } from '../../UI.js'

let common = require('../../commonData.js');
export default class BookOption extends Component{
  constructor(props) {
    super(props);
    this.state = {
      title:'title',
      dateSlot:'01',
      timeSlot:'01',
      seats:'1',
      poster:'',
      price:'',
    };
  }

  componentDidMount(){
    this.setState({title:this.props.route.params.title})
    this.state.poster=this.setState({poster:this.props.route.params.poster})
    this.setState({price:this.props.route.params.price})
  }
  
  render(){

 
    return(
      <ScrollView>
        <Text style={{ fontSize:30}}>BookOption</Text>

        <Image
          style={{width: 180, height: 320, margin: 10}}
          source={this.state.poster}
 
        />

        <Text style={{ fontSize:30}}>{this.state.title}</Text>

        <PickerWithLabel
          label={'Date'}
          items={common.dateSlot}
          mode={'dialog'}
          selectedValue={this.state.dateSlot}
          onValueChange={(itemValue, itemIndex) => {
            this.setState({dateSlot: itemValue});
          }}
          textStyle={{fontSize: 24}}
          >
          </PickerWithLabel>

          <PickerWithLabel
          label={'Time'}
          items={common.timeSlot}
          mode={'dialog'}
          selectedValue={this.state.timeSlot}
          onValueChange={(itemValue, itemIndex) => {
            this.setState({timeSlot: itemValue});
          }}
          textStyle={{fontSize: 24}}
          >
          </PickerWithLabel>

          <InputWithLabel
          label={'Number of seats'}
          onChangeText={(seats) => this.setState({seats})}
          value={this.state.seats}
          placeholder={''}
          keyboardType={'numeric'}
          ></InputWithLabel>
          


        <Button
          title="Proceed to payment"
          onPress={() => {
            this.props.navigation.navigate ('BookPayment',{seats:this.state.seats,price:this.state.price});
          }}
        />
      </ScrollView>

    )
  }
}