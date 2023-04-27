import {TouchableOpacity, Text,Image,StyleSheet} from 'react-native';
import React from 'react';

export default function Back({Press}) {
  return (
     
      <TouchableOpacity
        style={styles.btn1}
        onPress={Press}>
        <Image
          source={require('../../images/backArrow2.jpeg')}
          style={styles.backImage}
        />
      </TouchableOpacity>
     
  );
}
const styles = StyleSheet.create({
  btn1: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 1,
      height: -5,
    },
    shadowRadius: 20,
    elevation: 20,
    height: 36,
    width: 36,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  backImage: {
    height: 20,
    width: 20,
    borderRadius: 40,
  },
});
