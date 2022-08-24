import React, {Component} from "react";
import {Text,View,ScrollView,Button,StyleSheet} from "react-native";
let SQLite = require('react-native-sqlite-storage');
let common = require('../CommonData');

export default class BookComplete extends Component{
  constructor(props) {
    super(props);
    this.state={
      record:null,
    };
    this.db = SQLite.openDatabase(
      {name: 'recordDb'},
      this.openCallback,
      this.errorCallback,
    );
    this._queryByLast = this._queryByLast.bind(this);
  }

  _queryByLast() {
    this.db.transaction(tx =>
      tx.executeSql(
        'SELECT * FROM record ORDER BY ID DESC LIMIT 1',
        [],
        (tx, results) => {
          console.log(results.rows.item(0));
          this.setState({record: results.rows.item(0)});
        },
      ),
    );
  }

  openCallback() {
    console.log('database opened successfully');
  }
  errorCallback(err) {
    console.log('error in opening database: ' + err);
  }
  componentDidMount() {
    this._queryByLast();
    this.props.navigation.setOptions ({
      title: "Booking Complete",
    });
  }

    render(){
      let record = this.state.record;
        return(
            <ScrollView style={{flex:1,padding:10}}>
            <Text style={{ fontSize:50}}>Your booking is successful</Text>
            <Text style={styles.text}> Order id: {record ? record.id : ''}</Text>
            <Text style={styles.text}>Movie: {record ? record.title : ''}</Text>
            <Text style={styles.text}>Date and time: {record ? record.date : ''} {record ? record.time : ''}</Text>
            <Text style={styles.text}>Duration: {record ? record.duration : ''}</Text>
            <Text style={styles.text}>Quantity: {record ? record.seat : ''}</Text>
            <Text style={styles.text}>Total price: RM{record ? record.price : ''}</Text>

            <Button
            title="Go Back"
            onPress={() => {
              this.props.navigation.navigate ('BookHome');
            }}
          />
            </ScrollView>



        )
    }
}

const styles = StyleSheet.create ({
  text: {
    fontSize:20,
    padding: 10,
    lineHeight:30,
    color:'black',
  },
});
