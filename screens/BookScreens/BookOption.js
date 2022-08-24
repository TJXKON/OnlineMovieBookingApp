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
      genre:'',
      duration:'',
    };
  }

  componentDidMount(){
    this.setState({title:this.props.route.params.title})
    this.state.poster=this.setState({poster:this.props.route.params.poster})
    this.setState({price:this.props.route.params.price})
    this.setState({genre:this.props.route.params.genre})
    this.setState({duration:this.props.route.params.duration})

    this.props.navigation.setOptions ({
      title: "Options",
    });
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
        <Text style={{ fontSize:25}}>{this.state.genre}</Text>

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
            this.props.navigation.navigate ('BookPayment',{title:this.state.title,seats:this.state.seats,price:this.state.price,genre:this.state.genre,date:this.state.dateSlot,time:this.state.timeSlot,duration:this.state.duration});
          }}
        />
      </ScrollView>

    )
  }
}