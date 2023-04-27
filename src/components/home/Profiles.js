import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS, ICONS, SIZES} from '../../assets/color/thems';

const Profiles = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        columnGap: 5,
        alignItems: 'center',    
      }}>
      <TouchableOpacity>
        <Image source={ICONS.profiles} style={{height: 33, width: 33}} />
      </TouchableOpacity>
      <View>
        <Text style={{color: COLORS.secondary, fontSize:SIZES.xSmall + 2}}>User ID</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            columnGap: 8,
          }}>
          <Text style={{color: COLORS.secondary,fontSize:SIZES.small-1}}>Akash12</Text>
          <TouchableOpacity>
            <Image
              source={ICONS.copy}
              style={{height: 10, width: 8, tintColor: COLORS.secondary}}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Profiles;

const styles = StyleSheet.create({});
