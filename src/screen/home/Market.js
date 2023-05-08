import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import MarketRoutes from '../../routes/Market/MarketRoutes';
import {COLORS} from '../../assets/color';
import {Image} from 'react-native-elements';
import {ICONS, SHADOWS, SIZES} from '../../assets/color/thems';

const Market = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        paddingHorizontal: 20,
      }}>
      <View style={{
        marginTop:10,
      }}>
        <TouchableOpacity
          style={{
            position: 'absolute',
            zIndex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft:SIZES.medium,
            marginTop:SIZES.xSmall,
          }}>
          <Image source={ICONS.search} style={{height: 20, width: 20}} />
        </TouchableOpacity>
        <TextInput
          placeholder="Search coin Pairs"
          placeholderTextColor={COLORS.secondary}
          style={{
            backgroundColor: COLORS.pureWhite,
            ...SHADOWS.medium,
            paddingLeft: 50,
            paddingRight: 20,
            borderRadius: 7,
            width: '100%',
            height:40,
          }}
        />
      </View>
      <MarketRoutes />
    </SafeAreaView>
  );
};

export default Market;

const styles = StyleSheet.create({});
