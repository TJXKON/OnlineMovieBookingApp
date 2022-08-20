import React, {Component} from "react";
import {
  Button,
  TouchableHighlight,
  Image,
  StyleSheet,
  Text,
  View,
  FlatList,} from "react-native";
import {createStackNavigator} from '@react-navigation/stack';
const StackNav = createStackNavigator ();



export default class BookHome extends Component{
  constructor(props) {
    super(props)
    this.state = {
      movieList:[],
    }
  }

  componentDidMount(){
    let movieList=[
      {
      id:1,
      title:'Thor: Love and Thunder',
      description:'Thor embarks on a journey unlike anything hes ever faced -- a quest for inner peace. However...',
      poster:require('../../img/posters/thor4.jpg'),
      price:'22.00'
      },
      {
      id:2,
      title:'One Piece Film: Red',
      description:'Uta is a beloved singer, renowned for concealing her own identity when performing...',
      poster:require('../../img/posters/onePiece.jpg'),
      price:'20.00'
      }
    ];
    this.setState({movieList:movieList})
  }
  
    render(){
      

        return(
            <View style={{flex:1}}>
            <Text style={{fontSize:50}}>Book</Text>

            <FlatList
          data={this.state.movieList }
          showsVerticalScrollIndicator={ true }
          renderItem={({item}) =>
            <TouchableHighlight
              underlayColor={'#cccccc'}
              onPress={ () => {
                this.props.navigation.navigate ('BookOption', {poster: item.poster,title:item.title,price:item.price});
                //this.props.navigation.navigate ('BookOption');
              }}
            >
              <View>
                <Text style={{fontSize:20,fontWeight:"bold"}}>{item.title }</Text>
                <Image style={{width: 180, height: 240, margin: 10}} source={item.poster}></Image>
                <Text>{item.description}</Text>
                <Text>RM {item.price}</Text>
              </View>
            </TouchableHighlight>
          }
          //keyExtractor={(item) => {item.id.toString()}}
        />
            </View>

        )
    }
}