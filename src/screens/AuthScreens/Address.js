import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
} from 'react-native';
import React from 'react';
import Location from '../../assets/Location.js';
import Input from '../../components/Input.js';
import { IonIcon } from '../../components/Icons.js';
import AuthHeader from '../../components/AuthHeader.js';
import Button from '../../components/Button.js';
import Icon from 'react-native-vector-icons/FontAwesome5'
const Address = ({navigation}) => {
  const handleLogin=()=>{
    navigation.navigate('Login')
  }
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
<AuthHeader/>
      <Text style={styles.text}>Satisfy Your Cravings with a Click</Text>
      <Input placeholder="Enter Develivery Address" />
      <Location width={48} style={styles.Icon} />
      <Input placeholder="Deliver now"/>
      <IonIcon name="alarm" size={25} color="#000"/>
      <View style={{flexDirection:"row",justifyContent:'space-around',marginHorizontal:'10%'}}>
      <Button text='Login' bgColor={'#D6FFD9'} color='#024220' onPress={handleLogin}/>
      <Icon name='user-alt'style={{position:'relative',top:160,fontSize:25,left:-140,paddingHorizontal:-10}} color="#024220" />
      <Button text='SignUp' bgColor={'#024220'} color='#fbf8f8'/>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  text: {
    // width: 317,
    // height: 102,
    flexShrink: 0,
    color: 'black',
    fontFamily: 'Kadwa-Bold',
    fontSize: 30,
    fontWeight: '600',
    marginVertical: 30,
    marginHorizontal: 25,
  },
  Icon: {
    position: 'relative',
    top: -45,
    left: 40,
  },
});
export default Address;
