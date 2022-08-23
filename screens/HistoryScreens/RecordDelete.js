import React, {Component} from 'react';
import {Text, View, Button, ScrollView, Alert} from 'react-native';
let SQLite = require('react-native-sqlite-storage');

export default class RecordDelete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      title: '', 
      duration: '', 
      genre: '', 
      price: '', 
      seat: '', 
      time: '', 
    };
    this.db = SQLite.openDatabase(
      {name: 'recordDb', createFromLocation: '~db.sqlite'},
      this.openCallback,
      this.errorCallback,
    );
  }

  componentDidMount() {
    this.setState({id: this.props.route.params.id});
    this.setState({title: this.props.route.params.title});
    this.setState({duration: this.props.route.params.duration});
    this.setState({genre: this.props.route.params.genre});
    this.setState({price: this.props.route.params.price});
    this.setState({seat: this.props.route.params.seat});
    this.setState({time: this.props.route.params.time});
  }
  openCallback() {
    console.log('database open success');
  }
  errorCallback(err) {
    console.log('Error in opening the database: ' + err);
  }
  _delete() {
    Alert.alert('Confirm to delete ?', this.state.title, [
      {
        text: 'No',
        onPress: () => {},
      },
      {
        text: 'Yes',
        onPress: () => {
          this.db.transaction(tx => {
            tx.executeSql('DELETE FROM record WHERE id = ?', [
              this.state.id,
            ]);
          });
          this.props.navigation.goBack();
        },
      },
    ]);
  }

    render() {
      return (
        <ScrollView>
          <View>
          <Text style={{fontSize: 30, fontWeight: 'bold'}}>
            The order id: {this.state.id}</Text>
            <Text style={{fontSize: 30, fontWeight: 'bold'}}>
            {this.state.title}
          </Text>
          <Text style={{fontSize: 20}}>Seats: {this.state.seat}</Text>
          <Text style={{fontSize: 20}}>Duration: {this.state.duration}</Text>
          <Text style={{fontSize: 20}}>Genre: {this.state.genre}</Text>
          <Text style={{fontSize: 20}}>Time: {this.state.time}</Text>
          <Text style={{fontSize: 20}}>Price: RM {this.state.price}</Text>
  
          <Button
            title="Delete Record"
            onPress={() => {
              this._delete();
            }}
          />
          </View>
        </ScrollView>
      );
    }
  }