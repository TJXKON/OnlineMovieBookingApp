import React, {Component} from "react";
import {Text,View,Button,Switch} from "react-native";
import { set } from "react-native-reanimated";
import { PickerWithLabel } from '../../UI.js'
let SQLite = require('react-native-sqlite-storage');
let common = require('../../commonData.js');
export default class BookPayment extends Component{
  constructor(props) {
    super(props);
    this.state = {
     title:'',
     seats:'0',
     student:false,
     price:'20.00',
     method:'',
     date:'',
     time:'',
     genre:'',
     duration:'',
    };
    this._insert = this._insert.bind(this);
        this.db = SQLite.openDatabase(
          {name: 'recordDb', createFromLocation: '~db.sqlite'},
          this.openCallback,
          this.errorCallback,
        );
  }



  componentDidMount(){
    this.setState({title: this.props.route.params.title});
    this.setState({seats:this.props.route.params.seats});
    this.setState({price:this.props.route.params.price})
    this.setState({date:this.props.route.params.date});
    this.setState({time:this.props.route.params.time});
    this.setState({genre:this.props.route.params.genre});
    this.setState({duration:this.props.route.params.duration})
  }

  _insert() {
    this.db.transaction(tx => {
      tx.executeSql('INSERT INTO record(title,duration,genre,price,seat,time,date) VALUES(?,?,?,?,?,?,?)', [
        this.state.title,
        this.state.duration,
        this.state.genre,
        this.state.price,
        this.state.seat,
        this.state.time,
        this.state.date,
      ]);
    });
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
              this._insert();
              this.props.navigation.navigate ('BookComplete',{title:this.state.title,seats:this.state.seats,price:this.state.price,date:this.state.dateSlot,time:this.state.timeSlot}
              );
            }}
          />
            </View>

        )
    }
}