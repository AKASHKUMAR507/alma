import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import { COLORS, FONT, SIZES } from '../../assets/color'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

export default function SuccessPopup({sms,bgColor}) {
  return (
    <View style = {{
        backgroundColor:bgColor,
        height:screenHeight*0.05,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:30,
        // width:screenWidth*0.7
    }}>
      <Text style ={{
        color:COLORS.pureWhite,
        fontSize:SIZES.small
      }}>{sms}</Text>
    </View>
  )
} 