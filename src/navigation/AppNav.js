import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Front from '../screens/FrontScreen/Front';
import Address from '../screens/AuthScreens/Address';
import Login from '../screens/AuthScreens/Login';
import Home from '../screens/Home/Home';
import AIcon from 'react-native-vector-icons/AntDesign' 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import About from '../screens/About/About';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const AppNav = () => {
function TabNav(){
return(
  <Tab.Navigator screenOptions={{
    animation:"flip"
    
  }}
  initialRouteName='Home'>
    <Tab.Screen name="Home" options={{tabBarIcon:()=>(  
          <AIcon name="home" color='red' size={25}/>  
      )  
    }  } component={Home} />
    <Tab.Screen name="About" options={{tabBarIcon:()=>(  
          <AIcon name="home" color='red' size={25}/>  
      )  
    }  } component={About} />

  </Tab.Navigator>
)
}
  return (
<NavigationContainer>
      <Stack.Navigator screenOptions={{
        animation:"flip"
      }}>
        <Stack.Screen name="Intro" options={{headerShown:false}} component={Front} />
        <Stack.Screen name="Auth" component={Address} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
        <Stack.Screen name="Nav" component={TabNav} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNav