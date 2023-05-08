import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

import CountryDropdown from '../components/CountryDropdown';
import LoginScreen from './LoginScreen';
import CreateAccount from './register/CreateAccount';
import axios from 'axios';
import {BASE_URL} from '../auth/BaseUrl';
import {COLORS, SHADOWS} from '../assets/color';
import PhoneInput from 'react-native-phone-number-input';

const ForgotPassword = ({navigation}) => {
  const [submitMethod, setSubmitMethod] = useState('email');
  const [isEmail, setIsEmail] = useState(true);
  const [boolean, setBoolean] = useState(true);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  {
    /* **************************************** Error State ***************************************** */
  }
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const handleEmailChange = text => {
    setEmail(text);
    setEmailError('');
  };
  const handlePhoneChange = text => {
    setPhone(text);
    setPhoneError('');
  };

  const data = {
    email: boolean,
  };

  const handleEmailClick = () => {
    setIsEmail(true);
    setBoolean(true);
    setSubmitMethod('email');
    clearFieldData();
  };

  const handlePhoneClick = () => {
    setIsEmail(false);
    setBoolean(false);
    setSubmitMethod('phone');
    clearFieldData();
  };

  const clearFieldData = () => {
    setEmail('');
    setPhone('');
  };

  const handleSubmit = () => {
    if (submitMethod === 'email') {
      if (!email) {
        setEmailError('*Email is required');
        return;
      }
      if (!validateEmail(email)) {
        setEmailError('*Please enter valid email id');
        return;
      }
    } else {
      if (!phone) {
        setPhoneError('Phone number is required');
        return;
      }
      if (!validatePhone(phone)) {
        setPhoneError('*Please enter valid phone number');
        return;
      }
    }

    navigation.navigate('OtpValidationForgot', {data});
    clearFieldData();
  };
  const validateEmail = email => {
    // simple email validation using regular expression
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePhone = phone => {
    // simple phone validation using regular expression
    const regex = /^\d{10}$/;
    return regex.test(phone);
  };

  // ***************************API **************************
  const sendEmailOtp = () => {
    axios({
      method: 'POST',
      url: `${BASE_URL}/user/userSignupSendEmailOTP`,
      data: {
        email: 'akash.kumar@indicchain.com',
      },
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };
  const sendPhoneOtp = () => {
    return axios({
      method: 'POST',
      url: `${BASE_URL}/user/userSignupSendMobileOTP`,
      data: {
        countryCode: '+91',
        mobileNumber: phone,
      },
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  const borderColor = emailError
    ? {
        borderColor: COLORS.error,
      }
    : {
        borderColor: COLORS.pureWhite,
      };

  const borderColorPhone = phoneError
    ? {
        borderColor: COLORS.error,
      }
    : {
        borderColor: COLORS.pureWhite,
      };

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        {/* **************************************** Heading Text ***************************************** */}
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.headingText}>Forgot Password</Text>
          {/* **************************************** Heading Button ***************************************** */}
          <TouchableOpacity onPress={() => navigation.navigate(LoginScreen)}>
            <Image
              source={require('../images/cross.png')}
              style={styles.crossButton}
            />
          </TouchableOpacity>
        </View>

        {/* **************************************** Button ***************************************** */}
        <View style={styles.switchContainer}>
          <TouchableOpacity
            style={[
              styles.switchButton,
              styles.btn1,
              isEmail && styles.activeSwitchButton,
            ]}
            onPress={handleEmailClick}>
            <Text
              style={[
                styles.switchButtonText,
                isEmail && styles.activeSwitchButtonText,
              ]}>
              Email
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.switchButton,
              styles.btn2,
              !isEmail && styles.activeSwitchButton,
            ]}
            onPress={handlePhoneClick}>
            <Text
              style={[
                styles.switchButtonText,
                !isEmail && styles.activeSwitchButtonText,
              ]}>
              Phone Number
            </Text>
          </TouchableOpacity>
        </View>

        {/* **************************************** Input Field Handle ***************************************** */}

        <View style={styles.inputFieldSet}>
          {submitMethod === 'email' ? (
            <>
              <View>
                <Text style={styles.lableText}>*Email ID</Text>
              </View>
              <View
                style={{
                  position: 'absolute',
                  flexDirection: 'row',
                  zIndex: 1,
                  columnGap: 15,
                  marginHorizontal: 15,
                  marginVertical: 45,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image source={require('../images/email.png')} />
                <Image source={require('../images/Line62.png')} />
              </View>
              <TextInput
                style={[styles.input, styles.email, borderColor]}
                placeholder="Enter your email"
                placeholderTextColor={'#6C757D'}
                value={email}
                onChangeText={handleEmailChange}
              />
              {emailError ? (
                <Text style={styles.errorMessage}>{emailError}</Text>
              ) : null}
            </>
          ) : (
            <>ß
              <Text style={styles.lableText}>*Phone Number</Text>
              <PhoneInput
                placeholder="Enter your number"
                placeholderTextColor={'#6C757D'}
                maxLength={10}
                keyboardType="numeric"
                value={phone}
                onChangeText={handlePhoneChange}
                autoFocus
                containerStyle={[styles.phoneContainer, borderColorPhone]}
                textContainerStyle={styles.textContainer}
                codeTextStyle={[styles.codeText]}
              />

              {phoneError ? (
                <Text style={styles.errorMessage}>{phoneError}</Text>
              ) : null}
            </>
          )}

          {/* **************************************** Submit Button ***************************************** */}
          <TouchableOpacity style={styles.loginButton} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>

        {/* **************************************** Sign Up ***************************************** */}
        <View style={{}}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Text style={{color: COLORS.ternary}}>
              You haven't any account?{' '}
            </Text>
            <Text
              style={styles.create}
              onPress={() => navigation.navigate(CreateAccount)}>
              Sign Up
            </Text>
          </View>
        </View>

        {/* **************************************** End ***************************************** */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  main: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    marginLeft: 32,
    marginRight: 27,
    paddingVertical: 10,
    rowGap: 25,
  },
  headingText: {
    color: '#092147',
    fontSize: 30,
    fontWeight: 600,
  },
  crossButton: {
    height: 15,
    width: 15,
    marginVertical: 10,
  },

  switchContainer: {
    flexDirection: 'row',
    columnGap: 10,
    justifyContent: 'center',
  },
  switchButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 7,
    width: 94,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn2: {
    borderRadius: 7,
    width: 122,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: {
      width: 1,
      height: -5,
    },
    shadowRadius: 20,
    elevation: 5,
  },
  btn1: {
    borderRadius: 7,
    width: 94,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: {
      width: 1,
      height: -5,
    },
    shadowRadius: 20,
    elevation: 5,
  },
  activeSwitchButton: {
    backgroundColor: '#286FDB',
  },
  switchButtonText: {
    color: '#343A40',
    fontSize: 16,
  },
  activeSwitchButtonText: {
    color: '#FFFFFF',
  },
  input: {
    borderRadius: 10,
    shadowColor: '#fff',
    shadowOffset: {width: 100, height: 60},
    shadowOpacity: 3.2,
    shadowRadius: 0,
    backgroundColor: '#fff',
    color: '#000',
    height: 60,
    shadowColor: '#000000',
    shadowOffset: {
      width: 1,
      height: -5,
    },
    shadowRadius: 20,
    elevation: 5,
    paddingLeft: 60,
    borderWidth: 1,
  },
  errorText: {
    color: 'red',
    // marginHorizontal: 10,
    // marginBottom: 5,
  },
  loginButton: {
    backgroundColor: '#286FDB',
    height: 60,
    borderRadius: 10,
    justifyContent: 'center',
    shadowColor: '#000000',
    shadowOffset: {
      width: 1,
      height: -5,
    },
    shadowRadius: 20,
    elevation: 5,
    marginTop: '60%',
  },
  buttonText: {
    color: '#fff',
    display: 'flex',
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 700,
  },
  lableText: {
    color: '#343A40',
    fontSize: 18,
    marginBottom: '2%',
    shadowColor: '#000000',
    shadowOffset: {
      width: 1,
      height: -5,
    },
    shadowRadius: 20,
    elevation: 20,
  },
  inputFieldSet: {
    // borderWidth:2
  },
  email: {
    marginBottom: '2%',
  },
  phone: {
    marginBottom: '2%',
    paddingLeft: 110,
  },
  password: {},
  checkboxContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 5,
  },
  remember: {
    color: '#343A40',
    fontSize: 16,
    fontWeight: 500,
  },
  create: {
    color: '#286FDB',
    textDecorationLine: 'underline',
  },
  forget: {
    color: '#343A40',
    textDecorationLine: 'underline',
  },
  errorMessage: {
    color: 'red',
    fontSize: 14,
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  phoneContainer: {
    height: 60,
    width: '100%',
    ...SHADOWS.medium,
    borderRadius: 10,
    borderWidth: 1,
  },
  textContainer: {
    borderRadius: 10,
    backgroundColor: COLORS.pureWhite,
    paddingVertical: 0,
  },
  codeText: {},
});

export default ForgotPassword;
