import React, {Component} from 'react';
import {
  Platform,
  View,
  Text,
  TextInput,
  TouchableNativeFeedback,
  StyleSheet,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';

/**
 * InputWithLabel
 */
 class InputWithLabel extends Component {
  constructor(props) {
    super(props);

    this.orientation = this.props.orientation
      ? this.props.orientation == 'horizontal'
        ? 'row'
        : 'column'
      : 'column';
  }

  render() {
    return (
      <View style={[inputStyles.container, {flexDirection: this.orientation}]}>
        <Text style={this.props.textLabelStyle}>{this.props.label}</Text>
        <TextInput style={[this.props.textInputStyle]} {...this.props} />
      </View>
    );
  }
}
/**
 * PickerWithLabel
 */
class PickerWithLabel extends Component {
  constructor(props) {
    super(props);

    this.orientation = this.props.orientation
      ? this.props.orientation == 'horizontal'
        ? 'row'
        : 'column'
      : 'column';
  }

  render() {
    return (
      <View style={[inputStyles.container, {flexDirection: this.orientation}]}>
        <Text style={this.props.textLabelStyle}>{this.props.label}</Text>
        <Picker {...this.props}>
          {this.props.items.map((item, index) => {
            return (
              <Picker.Item
                label={item.value}
                value={item.key}
                key={item.key}
                style={this.props.pickerItemStyle}
              />
            );
          })}
        </Picker>
      </View>
    );
  }
}

const inputStyles = StyleSheet.create({
  container: {
    height: 100,
  },
});

/**
 * Export modules
 */
module.exports = {
  InputWithLabel: InputWithLabel,
  PickerWithLabel: PickerWithLabel,
};