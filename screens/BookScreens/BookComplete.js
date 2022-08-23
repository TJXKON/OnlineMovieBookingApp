import React, {Component} from "react";
import {Text,View,Button,StyleSheet} from "react-native";


export default class BookComplete extends Component{
  constructor(props) {
    super(props);
    this.state={
      refNum:'',
    }
  }

componentDidMount(){
  var RandomNumber = Math.floor(Math.random() * 10000);
  this.setState({refNum : RandomNumber})
}

    render(){
 
        return(
            <View style={{flex:1,padding:10}}>
            <Text style={{ fontSize:50}}>Your booking is successful</Text>
            <Text style={styles.text}>Movie:</Text>
            <Text style={styles.text}>Date and time:</Text>
            <Text style={styles.text}>Quantity:</Text>
            <Text style={styles.text}>Total price:</Text>
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
