import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {COLORS, FONTWEIGHT, SIZES} from '../../assets/color';
import Btn from '../../components/buttons/Btn';
import Back from '../../components/buttons/Back';

const AlmaxzAccount = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.items}>
        <View style={styles.backButton}>
          <Back Press={() => navigation.navigate('CreateAccount')} />
        </View>
        <View>
          <Text style={styles.headingText}>Create your Almaxz account</Text>
        </View>
        <View>
          <Text style={styles.companyPlatform}>
            Company is the world’s largest crypto exchange platform.
          </Text>
        </View>
        <View style={styles.itemsVectors1}>
          <View>
            <Image source={require('../../images/user_icon.png')} />
          </View>
          <View>
            <Text style={styles.createAccount}>Create Account</Text>
            <Text style={styles.createAccountText}>
              Enter your account details.
            </Text>
          </View>
        </View>
        <View style={styles.itemsVectors2}>
          <View>
            <Image source={require('../../images/Verify.png')} />
          </View>
          <View>
            <Text style={styles.verify}>Verify Identity</Text>
            <Text style={styles.verifyText}>
              Verify your identity to protect your account.
            </Text>
          </View>
        </View>
        <View style={styles.itemsVectors3}>
          <View>
            <Image
              source={require('../../images/bag_christmas_gift_market_present_icon.png')}
            />
          </View>
          <View>
            <Text style={styles._2FA}>Enable 2FA</Text>
            <Text style={styles._2FAText}>Enable 2FA from security menu.</Text>
          </View>
        </View>
        <View>
          <Text numberOfLines={5} style={styles.policy}>
            By creating an account you agree to our{' '}
            <Text
              style={styles.termsAndCondition}
              onPress={() => navigation.navigate('TermsCondition')}>
              Terms and Condition,{' '}
            </Text>
            <Text
              style={styles.termsAndCondition}
              onPress={() => navigation.navigate('PrivacyPolicy')}>
              Privacy Policy{' '}
            </Text>
            <Text style={styles.policy}>and</Text>
            <Text style={styles.termsAndCondition}>
              {' '}
              Data protection guidelines.{' '}
            </Text>
          </Text>
        </View>
        <View>
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.blue,
              height: 60,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => navigation.navigate('Register')}>
            <Text
              style={{
                color: COLORS.pureWhite,
                fontSize: SIZES.xLarge,
                fontWeight: FONTWEIGHT.medium,
              }}>
              Create Personal Account
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style = {{
        marginTop:20,
      }}>
        <Text style={[styles.policy, styles.already]}>
          Already registered?
          <Text
            style={styles.termsAndCondition}
            onPress={() => navigation.navigate('LoginScreen')}>
            {' '}
            Log in
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default AlmaxzAccount;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: SIZES.xmedium,
    paddingTop: '3%',
  },
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
  headingText: {
    color: COLORS.primary,
    fontSize: SIZES.xLarge,
    fontWeight: FONTWEIGHT.medium,
  },
  items: {
    rowGap: 30,
  },
  companyPlatform: {
    color: COLORS.secondary,
    fontSize: SIZES.medium,
  },
  createAccount: {
    color: COLORS.ternary,
    fontSize: SIZES.large,
  },
  verify: {
    color: COLORS.ternary,
    fontSize: SIZES.large,
  },
  _2FA: {
    color: COLORS.ternary,
    fontSize: SIZES.large,
  },
  createAccountText: {
    color: COLORS.secondary,
    fontSize: SIZES.small,
  },
  verifyText: {
    color: COLORS.secondary,
    fontSize: SIZES.small,
  },
  _2FAText: {
    color: COLORS.secondary,
    fontSize: SIZES.small,
  },
  itemsVectors1: {
    flexDirection: 'row',
    columnGap: 15,
    alignItems: 'center',
  },
  itemsVectors2: {
    flexDirection: 'row',
    columnGap: 15,
    alignItems: 'center',
  },
  itemsVectors3: {
    flexDirection: 'row',
    columnGap: 15,
    alignItems: 'center',
  },
  termsAndCondition: {
    color: COLORS.blue,
    fontSize: SIZES.medium,
  },
  policy: {
    color: COLORS.secondary,
    fontSize: SIZES.medium,
  },
  already: {
    textAlign: 'center',
  },
});
