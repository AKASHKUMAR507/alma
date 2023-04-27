import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {COLORS} from '../../assets/color';
import {FONTWEIGHT, IMAGES, SIZES} from '../../assets/color/thems';

const {height, width} = Dimensions.get('screen');

const SuccessScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <View style={styles.item}>
          <Image source={IMAGES.accountCreateSucces} style={styles.image} />
          <Text style={styles.text}>Account Created</Text>
          <Text style={styles.text}>Successfully</Text>
        </View>
      </View>
      <View style={styles.btn}>
        <TouchableOpacity
          style={{
            backgroundColor: COLORS.blue,
            height: 56,
            borderRadius: 7,
            justifyContent: 'center',
            alignItems: 'center',
            width:width*0.5,
          }}
          onPress={() => navigation.navigate('LoginScreen')}>
          <Text
            style={{
              fontSize: SIZES.medium,
              fontWeight: FONTWEIGHT.medium,
              color: COLORS.pureWhite,
            }}>
            Continue to Login
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SuccessScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 40,
  },
  item: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  text: {
    fontSize: SIZES.xLarge,
    fontWeight: FONTWEIGHT.medium,
    color: COLORS.primary,
  },
  btn: {
    marginBottom: 80,
    justifyContent:'center',
    alignItems:'center'
  },
});
