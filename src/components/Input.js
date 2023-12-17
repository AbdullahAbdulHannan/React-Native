import {StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'

const Input = ({placeholder,keyboardType}) => {
    const [text, onChangeText] = useState('')
  return (
    <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder={placeholder}
        placeholderTextColor="#000"
        keyboardType={keyboardType}
      />
  )
}
const styles=StyleSheet.create({
    input: {
        marginHorizontal:32,
        marginVertical:5,
        width: 327,
        color:'#000',
        opacity:0.6,
        // height: 44,
        flexShrink: 0,
        backgroundColor:'#D6FFD9',
        fontFamily:"Lekton-Regular",
        fontSize:20,
        paddingHorizontal:40,
        paddingTop:20,
      },
})
export default Input