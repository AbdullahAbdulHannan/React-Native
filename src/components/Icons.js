import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet } from 'react-native'
import React from 'react'
import Email from "react-native-vector-icons/MaterialCommunityIcons"

export const IonIcon = ({name,size,color}) => {
  return (
    <Icon name={name} size={size} color={color} style={styles.Icon} />   
  )
}
export const MaterialIcon = ({name,size,color}) => {
  return (
    <Email name={name} size={size} color={color} style={styles.Icon} />   
  )
}
const styles=StyleSheet.create({
    Icon: {
        position: 'relative',
        top: -48,
        left: 40,
      },
})