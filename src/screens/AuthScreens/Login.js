import {View, Text, SafeAreaView, KeyboardAvoidingView, ScrollView} from 'react-native';
import React from 'react';
import AuthHeader from '../../components/AuthHeader';
import Input from '../../components/Input';
import {MaterialIcon} from '../../components/Icons';
import Button from '../../components/Button';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {AuthIntroSlider} from '../FrontScreen/IntroSlider';
const Login = ({navigation}) => {
const handleLogin=()=>{
  navigation.navigate('Nav')
}
  return (
      <ScrollView>
    <KeyboardAvoidingView style={{flex:1,backgroundColor:'white'}} behavior='position'>
      <ScrollView>
      
        {/* <AuthIntroSlider/> */}
      <AuthHeader />
      <View style={{flex:0.6}}>
        <Input placeholder={'Enter Your Email Address'} keyboardType='email-address'/>
        <MaterialIcon name="email" size={25} color="#000" />
        <Input placeholder={'Enter Your Email Address'} keyboardType='email-address'/>
        <MaterialIcon name="email" size={25} color="#000" />
        <Input placeholder={'Enter Your Email Address'} keyboardType='email-address'/>
        <MaterialIcon name="email" size={25} color="#000" />
        <Input placeholder={'Enter Your Email Address'} keyboardType='email-address'/>
        <MaterialIcon name="email" size={25} color="#000" />
        <Input placeholder={'Password'}  />
        <MaterialIcon name="lock-outline" size={25} color="#000" />
        <Text style={{fontFamily: 'Lekton-Regular', fontSize: 20, left: 30}}>
          Forgot Password
        </Text>
      </View>
      <View style={{alignSelf: 'center'}} >
        <Button text="Login" bgColor={'#D6FFD9'} color="#024220" onPress={handleLogin}/>
        <Icon
          name="user-alt"
          style={{
            position: 'relative',
            top: 100,
            left: 10,
            fontSize: 25,
            paddingHorizontal: -10,
          }}
          color="#024220"
          />
      </View>
      <View style={{alignSelf: 'center'}}>
        <Button text="SignUp Now"  bgColor={'#024220'} height={94} color="#fbf8f8" />
      </View>
          </ScrollView>
          </KeyboardAvoidingView>
          </ScrollView>
  );
};

export default Login;
