import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableHighlight,Alert} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
let SQLite = require('react-native-sqlite-storage');

export default class History extends Component {
    constructor(props) {
        super(props);
        this.state = {
          record: []
        };
        this._query = this._query.bind(this);
        this.db = SQLite.openDatabase(
          {name: 'recordDb', createFromLocation: '~db.sqlite'},
          this.openCallback,
          this.errorCallback,
        );
    }
  componentDidMount() {
    this._query();
  }
  _query() {
    this.db.transaction(tx =>
      tx.executeSql('SELECT * FROM record ORDER BY date DESC', [], (tx, results) =>
        this.setState({record: results.rows.raw()}),
      ),
    );
  }
  openCallback() {
    console.log('database open success');
  }
  errorCallback(err) {
    console.log('Error in opening the database: ' + err);
  }
  render() {
    return (
        <View style={{flex: 1}}>
        <Text style={{fontSize: 50, backgroundColor: 'red'}}>History</Text>
            <FlatList
            data={this.state.record}
            extraData={this.state}
            showsVerticalScrollIndicator={true}
            renderItem={({item}) => (
                <TouchableHighlight
                underlayColor="pink"
                onPress={() => {
                  this.props.navigation.navigate('RecordDelete', {
                  id: item.id,
                  title: item.title,
                  duration: item.duration,
                  genre: item.genre,
                  price: item.price,
                  seat: item.seat,
                  time: item.time,
                  refresh: this._query,
                });
              }}>
               <View>
                <Text style={{fontSize: 30, fontWeight: 'bold'}}>
                  {item.date},{item.title}
                </Text>
                <Text style={{fontSize: 25}}>Payment: RM {item.price}</Text>
              </View>
                </TouchableHighlight>
            )}
            />
        </View>
    );
  }
}