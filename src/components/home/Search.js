import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLORS} from '../../assets/color';
import {ICONS, SHADOWS} from '../../assets/color/thems';

const Search = () => {
  return (
    <View>
      <TextInput
        placeholder="Search coin"
        placeholderTextColor={COLORS.secondary}
        style={{
          backgroundColor: COLORS.pureWhite,
          borderRadius: 30,
          paddingLeft: 15,
          paddingRight:27,
          height:40,
          ...SHADOWS.medium,
          color:COLORS.black
        }}
        
      />
      <TouchableOpacity
        style={{
          height: 20,
          width: 20,
          position: 'absolute',
          marginLeft: '80%',
          marginTop: 10,
          zIndex: 1,
          justifyContent:'center',
          alignItems:'center',
        }}>
        <Image
          source={ICONS.search}
          style={{
            height: 15,
            width: 15,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000000',
    shadowOffset: {
      height: 10,
      width: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 2,
  },
});
