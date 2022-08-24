import React, {Component} from "react";
import {Text,View,Button} from "react-native";
let SQLite = require('react-native-sqlite-storage');


export default class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
          record: []
        };
        this._deleteDB = this._deleteDB.bind(this);
        this.db = SQLite.openDatabase(
          {name: 'recordDb', createFromLocation: '~db.sqlite'},
          this.openCallback,
          this.errorCallback,
        );
    }
  componentDidMount() {
    //this._deleteDB();
  }
  _deleteDB() {
    SQLite.deleteDatabase(
        {name: 'recordDb', location: '~db.sqlite'},  
        () => { console.log('second db deleted');  },
        error => {
            console.log("ERROR: " + error); 
        }
    );
  }


    render(){
        return(
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text style={{ fontSize:50}}>Home</Text>
            <Button
             title="Reset db"
             onPress={() => {this._deleteDB();}}
            ></Button>
            <Text>*This is the option to reset local db for testing, will be removed in final release</Text>
            
            </View>

        )
    }
}