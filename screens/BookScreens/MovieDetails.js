import React, {Component} from 'react';
import {Text, View, Button, Image, ScrollView, StyleSheet} from 'react-native';

export default class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      poster: '',
      description: '',
      duration: '',
      genre: '',
      rated: '',
      price: '',
    };
  }

  componentDidMount() {
    this.setState({title: this.props.route.params.title});
    this.state.poster = this.setState({poster: this.props.route.params.poster});
    this.setState({price: this.props.route.params.price});
    this.setState({description: this.props.route.params.fulldesc});
    this.setState({duartion: this.props.route.params.duration});
    this.setState({genre: this.props.route.params.genre});
    this.setState({rated: this.props.route.params.rated});
  }

  render() {
    return (
      <ScrollView>
        <Text style={{fontSize: 20}}>MovieDetails</Text>

        <Image style={styles.poster} source={this.state.poster} />
        <Text style={{fontSize: 10}}>Rated</Text>
        <Text style={{fontSize: 10}}>{this.state.rated}</Text>
        <Text style={{fontSize: 10}}>Duration</Text>
        <Text style={{fontSize: 10}}>{this.state.duration}</Text>
        <Text style={{fontSize: 10}}>Genre</Text>
        <Text style={{fontSize: 10}}>{this.state.genre}</Text>

        <Text style={{fontSize: 20}}>{this.state.title}</Text>
        <Text style={{fontSize: 10}}>{this.state.description}</Text>

        <Text style={{fontSize: 20}}>RM {this.state.price}</Text>

        <Button
          title="Proceed to Booking"
          onPress={() => {
            this.props.navigation.navigate('BookOption', {
              poster: this.state.poster,
              title: this.state.title,
              price: this.state.price,
            });
          }}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  poster: {
    width: 180,
    height: 320,
    margin: 10,
  },
});
