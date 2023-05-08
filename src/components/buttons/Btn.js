import {TouchableOpacity, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTWEIGHT, SIZES} from '../../assets/color';

export default function Btn({title, Press, BgColor, disabled}) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: BgColor,
        borderRadius: 10,
        alignItems: 'center',
         
        paddingVertical: 10,
        marginVertical: 20,
      }}
      onPress={Press}
      disabled={disabled}>
      <Text
        style={{
          fontSize: SIZES.xLarge,
          color: COLORS.pureWhite,
          fontWeight: FONTWEIGHT.medium,
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
