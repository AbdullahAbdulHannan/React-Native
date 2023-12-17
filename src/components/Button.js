import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import React from 'react';

const Button = ({text, bgColor, color,height,onPress}) => {
  return (
    <TouchableOpacity style={[styles.Button, {backgroundColor: bgColor,height:64 | height}]} onPress={onPress}>
      <Text style={[styles.buttonText, {color: color}]}>{text}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  Button: {
    width: 151,
    height: 64,
    flexShrink: 0,
    borderRadius: 40,
    backgroundColor: '#D6FFD9',
    top: 150,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  buttonText: {
    fontFamily: 'Adamina-Regular',
    // color:'#024220',
    fontSize: 25,
    fontWeight: '400',
    textAlign: 'center',
    paddingTop: 10,
  },
});
export default Button;
