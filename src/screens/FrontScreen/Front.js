import { View, Text, Image, StyleSheet, TouchableOpacity,SafeAreaView, StatusBar, FlatList } from 'react-native'
import React from 'react'
import { IntroSlider } from './IntroSlider'
const image=require("../../assets/image1.png")
const Front = ({navigation}) => {

  const handleGetStarted = () => {
    navigation.navigate('Auth');
  };
  return (
    <SafeAreaView style={{flex:1,backgroundColor:'white'}} >
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'}/>
    <View style={{flex:1,backgroundColor:'white'}}>
      <Image source={image} style={{
        width: 439,
height: 277,
flexShrink: 0,borderRadius: 396.5,marginHorizontal:-23,marginTop:116,marginBottom:69,}}/>
</View>
<IntroSlider/>
<TouchableOpacity style={styles.button} onPress={handleGetStarted}><Text style={styles.buttontext}>Get Started</Text></TouchableOpacity>
</SafeAreaView>
  )
}
const styles=StyleSheet.create({
  button:{
flexShrink: 0,
borderRadius: 30,
backgroundColor: '#024220',
marginVertical:50,
marginHorizontal:55,
paddingTop:'3%',
paddingBottom:'4%'
},
buttontext:{
  // marginHorizontal:38,
  // marginVertical:30,
  // width: 368,
// height: 102,
flexShrink: 0,
color: '#FBFFFD',
textAlign: 'center',
fontSize: 30,
fontStyle: 'normal',
fontWeight:'700',
letterSpacing: 1.5,
}
})
export default Front