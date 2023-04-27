import {TouchableOpacity, Text,View} from 'react-native';
import React from 'react';

export default function Btn({title, Press , BgColor}) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: BgColor,
        borderRadius: 10,
        alignItems: 'center',
        // width: 200,
        paddingVertical: 10,
        marginVertical: 20
      }}
      onPress={Press}>
      <Text style={{fontSize: 28, color: 'white'}}>{title}</Text>
    </TouchableOpacity>
  );
}
