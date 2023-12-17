import { View, Text,Image, StyleSheet } from 'react-native'
import React from 'react'
const image=require("../assets/image1.png")
const AuthHeader = () => {
  return (
<View style={{margin: 10, marginTop: 48, flexDirection: 'row'}}>
        <Image source={image} style={{width: 114, height: 78}} />
        <Text style={styles.text}>
          Just <Text style={{fontWeight: '700'}}>EAT</Text>
        </Text>
      </View>
  )
}
const styles =StyleSheet.create({
    text: {
      color: '#024220',
      fontSize: 30,
      fontStyle: 'normal',
      fontWeight: '500',
      margin: 15,
      fontFamily: 'Kreon-Bold',
    },
})
export default AuthHeader