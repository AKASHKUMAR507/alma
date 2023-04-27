import {TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';

export default function Back({Press}) {
  return (
    <TouchableOpacity style={styles.cross} onPress={Press}>
      <Image source={require('../../images/cross.png')} />
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  cross: {
    height: 15,
    width: 15,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    marginLeft: '95%',
  },
});
