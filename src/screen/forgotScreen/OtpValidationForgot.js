import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';

import SuccessPopup from '../../components/alerts/SuccessPopup';
import Cross from '../../components/buttons/Cross';
import {COLORS} from '../../assets/color';
import axios from 'axios';
import { BASE_URL } from '../../auth/BaseUrl';

const OTP_TIMEOUT = 2;

const OtpValidationForgot = ({navigation, route}) => {
  const {data} = route.params;
  const trueFalse = data.email;

  const OTP_value = '123456';
  const OTP = OTP_value.split('')

  const TEXT = trueFalse;
  const EMAIL_ID = 'Email ID';
  const PHONE_NUMBER = 'Phone number';
  const EMAIL_HEADING = 'OTP Verification';
  const PHONE_DEADING = 'OTP Verification';
  const EMAIL_VARI_TEXT = 'Enter 6-digit code';
  const PHONE_VARI_TEXT = 'Enter 6-digit code';
  const HEADING_TEXT = TEXT == true ? `${EMAIL_HEADING}` : `${PHONE_DEADING}`;
  const SET_EMAIL_PHONE = TEXT == true ? `${EMAIL_ID}` : `${PHONE_NUMBER}`;
  const EMAIL_PHONE_VARIFICATION =
    TEXT == true ? `${EMAIL_VARI_TEXT}` : `${PHONE_VARI_TEXT}`;

  const [time, setTime] = useState(OTP_TIMEOUT * 60);
  const [bgColor, setBgColor] = useState(false);
  const inputRefs = useRef([]);
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const numRegex = /^[0-9]$/;
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [invalid, setInvalid] = useState(true);
  const [text, setText] = useState();

  // set bg color to the button
  const handleButtonClick = () => {
    setBgColor(!bgColor);
  };

  let otp_Succes_Length = otp.toString().length === 11;
  const styleBgButton = otp_Succes_Length
    ? {
        backgroundColor: '#286FDB',
      }
    : {
        backgroundColor: 'rgba(40, 111, 219, 0.5)',
      };

  // time reverse
  // set time to 2 minutes in seconds
  useEffect(() => {
    // start the timer
    const timer = setTimeout(() => {
      if (time > 0) {
        setTime(time - 1);
      }
    }, 1000);
    return () => clearTimeout(timer); // cleanup function
  }, [time]);

  const handleResendOTP = () => {
    setTime(OTP_TIMEOUT * 60); // reset timer to 2 minutes
  };

  const seconds = time % 60;
  const minutes = Math.floor(time / 60);

  // otp box
  const handleOtpChange = (index, value) => {
    if (numRegex.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value.slice(0, 1);
      setOtp(newOtp);
      if (index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyPress = (event, index) => {
    if (!numRegex.test(event.nativeEvent.key)) {
      const newOtp = [...otp];
      newOtp[index] = '';
      setOtp(newOtp);
      if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  // login success pop

  const handleLoginSuccess = () => {
    setLoginSuccess(true);
    setTimeout(() => {
      setLoginSuccess(false);
      navigation.navigate('ResetPassword');
    }, 2000);
  };

  // handle press

  const handlePress = () => {
    handleButtonClick();
    if (OTP.toString() === otp.toString()) {
      handleLoginSuccess();
      setInvalid(true);
    } else {
      setInvalid(false);
    }
  };

  const errorThrow = !invalid
    ? {
        borderColor: 'red',
      }
    : {
        borderColor: '#fff',
      };

 useEffect(() => {
  console.warn(OTP)
 }, [])
 

  return (
    <ScrollView
      style={{
        flex: 1,
      }}>
      <View
        style={{
          backgroundColor: '#f5f5f5',
          width: '100%',
          height: '100%',
        }}>
        <View style={styles.container}>
          <Cross Press={() => navigation.navigate('ForgotPassword')} />
          {/* Email Varification Code(6 Digits) Test */}
          <View
            style={{
              marginTop: 30,
              rowGap: 13,
            }}>
            <View>
              <Text style={styles.headingText}>{HEADING_TEXT}</Text>
            </View>
            <View>
              <Text style={styles.infoText}>
                Please enter the 6 digits OTP sent on your registered{' '}
                {SET_EMAIL_PHONE}.
              </Text>
            </View>
          </View>

          {/* OTP Varification Code */}
          <View
            style={{
              marginTop: '13%',
              rowGap: 13,
            }}>
            <View>
              <Text style={styles.title}>{EMAIL_PHONE_VARIFICATION}</Text>
            </View>
            <View style={styles.inputContainer}>
              {otp.map((value, index) => (
                <TextInput
                  key={index}
                  ref={ref => (inputRefs.current[index] = ref)}
                  style={[styles.input, errorThrow]}
                  maxLength={1}
                  keyboardType="numeric"
                  value={value}
                  onChangeText={text => handleOtpChange(index, text)}
                  onSubmitEditing={() => {
                    if (index < inputRefs.current.length - 1) {
                      inputRefs.current[index + 1].focus();
                    }
                  }}
                  onKeyPress={event => handleKeyPress(event, index)}
                />
              ))}
            </View>
          </View>

          {/* Reverse Time */}

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                width: '50%',
              }}>
              {!invalid && (
                <Text
                  style={{
                    color: '#DC3545',
                    marginTop: 5,
                    fontSize: 12,
                  }}>
                  Please enter a valid OTP
                </Text>
              )}
            </View>
            <View
              style={{
                width: '50%',
              }}>
              {seconds != 0 ? (
                <Text
                  style={{
                    textAlign: 'right',
                    marginTop: 10,
                    color: '#343A40',
                    fontSize: 18,
                    width: '100%',

                    justifyContent: 'flex-end',
                  }}>
                  {minutes < 10 ? `0${minutes}` : minutes}:
                  {seconds < 10 ? `0${seconds}` : seconds}
                </Text>
              ) : (
                <View>
                  {time === 0 && (
                    <View style={{}}>
                      <TouchableOpacity onPress={handleResendOTP}>
                        <Text
                          style={{
                            color: '#286FDB',
                            fontSize: 16,
                            textAlign: 'right',
                            marginTop: 10,
                          }}>
                          Resend Code
                        </Text>
                      </TouchableOpacity>
                    </View>
                  )}
                </View>
              )}
            </View>
          </View>

          {/* Submit Button */}
          <View style={styles.button}>
            <TouchableOpacity
              style={[styles.submitBUtton, styleBgButton]}
              onPress={handlePress}>
              <Text
                style={{
                  fontSize: 19,
                  color: '#FFFFFF',
                }}>
                Submit
              </Text>
            </TouchableOpacity>
          </View>

          {/* Login Success popup */}
          <View
            style={{
              marginTop: '30%',
              alignSelf: 'center',
              width:'100%'
            }}>
            {loginSuccess && (
              <SuccessPopup
                sms={'Verified successfully'}
                bgColor={COLORS.primary}
              />
            )}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'f5f5f5',
    marginLeft: 25,
    marginRight: 27,
    paddingTop: 20,
    height: '100%',
  },
  backButton: {},
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
    // backgroundColor:'#000000'
  },
  headingText: {
    color: '#343A40',
    fontSize: 30,
    fontFamily: 'Karla',
    textAlign: 'left',
  },
  infoText: {
    color: '#6C757D',
    paddingRight: 45,
  },
  title: {
    fontSize: 18,
    color: '#343A40',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  input: {
    textAlign: 'center',
    fontSize: 29,
    // borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 7,
    width: '15%',
    height: 60,
    color: '#343A40',
    backgroundColor: '#FFFFFF',
    shadowColor: 'rgba(0.5, 0.5, 0.5, 0.5)',
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 2,
  },

  button: {
    marginTop: '35%',
  },
  submitBUtton: {
    height: 60,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default OtpValidationForgot;
