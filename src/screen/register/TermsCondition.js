import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import {COLORS, SIZES, FONTWEIGHT} from '../../assets/color';
import Back from '../../components/buttons/Back';

const TermsCondition = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={{width: '11%'}}>
          <Back Press={() => navigation.navigate('AlmaxzAccount')} />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{marginTop: 20}}>
            <Text style={styles.headingText}>Terms and Conditions</Text>
          </View>
          <View style={{rowGap: 28, marginTop: 20}}>
            <View style={{rowGap: 10}}>
              <Text style={styles.textColor1}>1.INTRODUCTION</Text>
              <Text style={styles.textColor2}>
                Thank you for visiting BITBHARAT.com (“BITBHARAT”), a digital
                asset trading website, which is provided by Aux Cayes FinTech
                Co. Ltd. By visiting, accessing, or using BITBHARAT.com and
                associated application program interface or mobile applications
                (“Site”)
              </Text>
            </View>
            <View style={{rowGap: 10}}>
              <Text style={styles.textColor1}>2.INTRODUCTION</Text>
              <Text style={styles.textColor2}>
                Thank you for visiting BITBHARAT.com (“BITBHARAT”), a digital
                asset trading website, which is provided by Aux Cayes FinTech
                Co. Ltd. By visiting, accessing, or using BITBHARAT.com and
                associated application program interface or mobile applications
                (“Site”)
              </Text>
            </View>
            <View style={{rowGap: 10}}>
              <Text style={styles.textColor1}>3.INTRODUCTION</Text>
              <Text style={styles.textColor2}>
                Thank you for visiting BITBHARAT.com (“BITBHARAT”), a digital
                asset trading website, which is provided by Aux Cayes FinTech
                Co. Ltd. By visiting, accessing, or using BITBHARAT.com and
                associated application program interface or mobile applications
                (“Site”)
              </Text>
            </View>
            <View style={{rowGap: 10}}>
              <Text style={styles.textColor1}>4.INTRODUCTION</Text>
              <Text style={styles.textColor2}>
                Thank you for visiting BITBHARAT.com (“BITBHARAT”), a digital
                asset trading website, which is provided by Aux Cayes FinTech
                Co. Ltd. By visiting, accessing, or using BITBHARAT.com and
                associated application program interface or mobile applications
                (“Site”)
              </Text>
            </View>
            <View style={{rowGap: 10}}>
              <Text style={styles.textColor1}>5.INTRODUCTION</Text>
              <Text style={styles.textColor2}>
                Thank you for visiting BITBHARAT.com (“BITBHARAT”), a digital
                asset trading website, which is provided by Aux Cayes FinTech
                Co. Ltd. By visiting, accessing, or using BITBHARAT.com and
                associated application program interface or mobile applications
                (“Site”)
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default TermsCondition;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: SIZES.xmedium,
    paddingTop: '3%',
  },
  headingText: {
    color: COLORS.primary,
    fontSize: SIZES.xLarge,
    fontWeight: FONTWEIGHT.medium,
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
  textColor1: {
    color: COLORS.ternary,
  },
  textColor2: {
    color: COLORS.secondary,
  },
});
