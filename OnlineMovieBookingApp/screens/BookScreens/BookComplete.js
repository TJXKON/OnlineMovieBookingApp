import React, {Component} from "react";
import {Text,View,Button,StyleSheet} from "react-native";


export default class BookComplete extends Component{
  constructor(props) {
    super(props);
    this.state={
      refNum:'',
      title:'',
      date:'',
      time:'',
      seat: '', 
      price: '', 
      
    }
  }

componentDidMount(){
  var RandomNumber = Math.floor(Math.random() * 10000);
  this.setState({refNum : RandomNumber});
  this.setState({title: this.props.route.params.title});
  this.setState({seats:this.props.route.params.seats});
  this.setState({price:this.props.route.params.price})
  this.setState({date:this.props.route.params.date});
  this.setState({time:this.props.route.params.time});
}

    render(){
 
        return(
            <View style={{flex:1,padding:10}}>
            <Text style={{ fontSize:50}}>Your booking is successful</Text>
            <Text style={styles.text}>Movie: {this.state.title}</Text>
            <Text style={styles.text}>Date and time:{this.state.date}{this.state.time}</Text>
            <Text style={styles.text}>Quantity:{this.state.seat}</Text>
            <Text style={styles.text}>Total price:{this.state.price}</Text>
            <Text style={styles.text}>Reference Number:{this.state.refNum}</Text>
            <Button
            title="Go Back"
            onPress={() => {
              this.props.navigation.navigate ('BookHome');
            }}
          />
            </View>

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
