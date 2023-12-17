import { View, Text,StyleSheet } from 'react-native'
import React, { useEffect, useRef } from 'react'
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
  {
    key: 1,
    title: 'Free Delivery Offers',
    text: 'Free delivery for new customers via credit card and other payment method',
    backgroundColor: '#59b2ab',
  },
  {
    key: 2,
    title: 'Fastest Delivery',
    text: 'We prioritize the fastest delivery for our valued customers, ensuring swift and efficient service.',
    backgroundColor: '#febe29',
  },
  {
    key: 3,
    title: 'Quality Products',
    text: 'We are committed to delivering exceptional product quality to meet and exceed the expectations of our discerning customers.',
    backgroundColor: '#22bcb5',
  }
]

export const IntroSlider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const autoplay = setInterval(() => {
      if (sliderRef.current) {
        const currentIndex = sliderRef.current.state.activeIndex;
        const nextIndex = (currentIndex + 1) % slides.length;
        sliderRef.current.goToSlide(nextIndex);
      }
    }, 3000); 

    return () => clearInterval(autoplay);
  }, []);

  return (
<View style={{flex:1,}}>

<AppIntroSlider ref={sliderRef} showNextButton={false} activeDotStyle={{backgroundColor:'green',paddingHorizontal:8,marginTop:20}} dotStyle={{paddingHorizontal:8,backgroundColor:'rgba(0,0,0,0.2)',marginTop:25}} style={{marginTop:'20%'}}  data={slides} renderItem={({item})=><View>
<Text style={styles.heading}>{item.title}</Text>
<Text style={styles.intro}>{item.text}</Text>
</View>
}/>
</View>
  )
}
export const AuthIntroSlider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const autoplay = setInterval(() => {
      if (sliderRef.current) {
        const currentIndex = sliderRef.current.state.activeIndex;
        const nextIndex = (currentIndex + 1) % slides.length;
        sliderRef.current.goToSlide(nextIndex);
      }
    }, 3000); 

    return () => clearInterval(autoplay);
  }, []);

  return (
<View style={{flex:1,marginTop:'90%'}}>

<AppIntroSlider ref={sliderRef} showNextButton={false} activeDotStyle={{backgroundColor:'green',paddingHorizontal:8,marginTop:20}} dotStyle={{paddingHorizontal:8,backgroundColor:'rgba(0,0,0,0.2)',marginTop:25}}   data={slides} renderItem={({item})=><View>
<Text style={styles.heading}>{item.title}</Text>
<Text style={styles.intro}>{item.text}</Text>
</View>
}/>
</View>
  )
}
const styles=StyleSheet.create({
    heading:{
    //   marginHorizontal:40,
      // marginVertical:50,
      textAlign:'center',
//   width: 368,
//   height: 70,
//   flexShrink: 0,
  color:'#024220',
  fontSize: 40,
  fontStyle: 'normal',
  fontWeight: '700',
    },
    intro:{
  width: 368,
  height: 152,
margin:25,
//   flexShrink: 0,
  color: '#024220',
  textAlign: 'center',
  fontSize: 25,
  fontStyle: 'normal',
  fontWeight: '300',
//   marginHorizontal:25,
  // marginVertical:2,
  opacity:0.6
    },
  })