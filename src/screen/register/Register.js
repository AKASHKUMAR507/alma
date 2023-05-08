import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image,
  Dimensions,
  FlatList,
} from 'react-native';
import Btn from '../../components/buttons/Btn';
import {COLORS, FONTWEIGHT, SIZES} from '../../assets/color';
import Back from '../../components/buttons/Back';
import {ICONS, IMAGES, SHADOWS} from '../../assets/color/thems';
import CheckBox from 'react-native-check-box';
import PhoneInput from 'react-native-phone-number-input';

const countries = [
  {id: '1', name: 'India', code: '+91', flag: '🇮🇳'},
  {id: '2', name: 'Afghanistan', flag: '🇦🇫', code: '+93'},
  {id: '3', name: 'Albania', flag: '🇦🇱', code: '+355'},
  {id: '4', name: 'Algeria', flag: '🇩🇿', code: '+213'},
  {id: '5', name: 'American Samoa', flag: '🇦🇸', code: '+1-684'},
  {id: '6', name: 'Andorra', flag: '🇦🇩', code: '+376'},
  {id: '7', name: 'Angola', flag: '🇦🇴', code: '+244'},
  {id: '8', name: 'Anguilla', flag: '🇦🇮', code: '+1-264'},
  {id: '9', name: 'Antigua and Barbuda', flag: '🇦🇬', code: '+1-268'},
  {id: '10', name: 'Argentina', flag: '🇦🇷', code: '+54'},
  {id: '11', name: 'Armenia', flag: '🇦🇲', code: '+374'},
  {id: '12', name: 'Aruba', flag: '🇦🇼', code: '+297'},
  {id: '13', name: 'Australia', flag: '🇦🇺', code: '+61'},
  {id: '14', name: 'Austria', flag: '🇦🇹', code: '+43'},
  {id: '15', name: 'Azerbaijan', flag: '🇦🇿', code: '+994'},
  {id: '16', name: 'Bahamas', flag: '🇧🇸', code: '+1-242'},
  {id: '17', name: 'Bahrain', flag: '🇧🇭', code: '+973'},
  {id: '18', name: 'Bangladesh', flag: '🇧🇩', code: '+880'},
  {id: '19', name: 'Barbados', flag: '🇧🇧', code: '+1-246'},
  {id: '20', name: 'Belarus', flag: '🇧🇾', code: '+375'},
  {id: '21', name: 'Belgium', flag: '🇧🇪', code: '+32'},
  {id: '22', name: 'Belize', flag: '🇧🇿', code: '+501'},
  {id: '23', name: 'Benin', flag: '🇧🇯', code: '+229'},
  {id: '24', name: 'Bermuda', flag: '🇧🇲', code: '+1-441'},
];
const {height, width} = Dimensions.get('screen');

const Register = ({navigation}) => {

  const [strong, setStrong] = useState(false);
  const [length, setLength] = useState(false);
  const [digit, setDigit] = useState(true);
  const [latter, setLatter] = useState(false);
  const [specialCharacter, setSpecialCharacter] = useState(false);

  const [loginMethod, setLoginMethod] = useState('email'); // default to email login
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [emailUpdates, setEmailUpdates] = useState(false);
  const [shareData, setShareData] = useState(false);
 
  // ***************************Error Set ********************************

  const [emailError, setEmailError] = useState('');
  const [userNameError, setUserNameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [boolean, setBoolean] = useState(true);

  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [showCountries, setShowCountries] = useState(false);

  const toggleCountries = () => {
    setShowCountries(!showCountries);
  };

  const selectCountry = country => {
    setSelectedCountry(country);
    setShowCountries(false);
  };

  const data = {
    email: boolean,
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

  const passwordRegex = password => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    return regex.test(password);
  };

  const handleNext = () => {
    if (loginMethod === 'email') {
      if (!emailOrPhone) {
        setEmailError('Enter your email address.');
      }

      if (!userName) {
        setUserNameError('Username required');
      }

      if (!password) {
        setPasswordError('Password is required');
      }

      if (!confirmPassword) {
        setConfirmPasswordError('Password is required');
      } else {
        navigation.navigate('RegisterScreenOTP', {data});
        clearFieldData();
      }
    } else {
      if (!phone) {
        setPhoneError('Phone number is require');
      }

      if (!userName) {
        setUserNameError('Username required');
      }
      if (!password) {
        setPasswordError('Password is required');
      }

      if (!confirmPassword) {
        setConfirmPasswordError('Password is required');
      } else {
        navigation.navigate('RegisterScreenOTP', {data});
        clearFieldData();
      }
    }
  };

  const handleLoginMethodChange = method => {
    setLoginMethod(method);
    clearFieldData();
    setBoolean(false);
  };

  const handleEmailOrPhoneChange = text => {
    setEmailOrPhone(text);
    if (!text) {
      setEmailError('Enter your email address.');
    } else if (!validateEmail(text)) {
      setEmailError('Enter valid email');
    } else {
      setEmailError('');
    }
  };

  const handlePhone = text => {
    setPhone(text);
    if (!text) {
      setPhoneError('Phone number is require.');
    } else if (!validatePhone(text)) {
      setPhoneError('Enter valid phone number');
    } else {
      setPhoneError('');
    }
  };

  const handleUserName = text => {
    setUserName(text);
    if (!text) {
      setUserNameError('Username required');
    } else {
      setUserNameError('');
    }
  };

  const handlePasswordChange = text => {
    
    setPassword(text);
    if (!text) {
      setPasswordError('Password is required');
    } else if (!passwordRegex(text)) {
      setPasswordError(
        <View style={styles.errorList}>
          <View style={{flexDirection: 'row', columnGap: 10}}>
            <View
              style={{
                height: 20,
                width: 20,
                borderRadius: 10,
                backgroundColor: shareData ? COLORS.green : COLORS.gray2,
              }}></View>
            <Text style={styles.error}>Password Strenth : STRONG</Text>
          </View>
          <View style={{flexDirection: 'row', columnGap: 10}}>
            <View
              style={{
                height: 20,
                width: 20,
                borderRadius: 10,
                backgroundColor: shareData ? COLORS.green : COLORS.gray2,
              }}></View>
            <Text style={styles.error}>
              Password should contains at least 8 Characters & max 16.
            </Text>
          </View>
          <View style={{flexDirection: 'row', columnGap: 10}}>
            <View
              style={{
                height: 20,
                width: 20,
                borderRadius: 10,
                backgroundColor: shareData ? COLORS.green : COLORS.gray2,
              }}></View>
            <Text style={styles.error}>
              Password should contains at least 1 number.
            </Text>
          </View>
          <View style={{flexDirection: 'row', columnGap: 10}}>
            <View
              style={{
                height: 20,
                width: 20,
                borderRadius: 10,
                backgroundColor: shareData ? COLORS.green : COLORS.gray2,
              }}></View>
            <Text style={styles.error}>
              Password should contains at least one lowercase & one uppercase
              letter.
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              columnGap: 10,
            }}>
            <View
              style={{
                height: 20,
                width: 20,
                borderRadius: 10,
                backgroundColor: shareData ? COLORS.green : COLORS.gray2,
              }}></View>
            <Text style={styles.error}>
              Password should contains at least one special character.
            </Text>
          </View>
        </View>,
      );
    } else {
      setPasswordError('');
    }
  };
  const handleConfirmPassword = text => {
    setConfirmPassword(text);
    if (!text) {
      setConfirmPasswordError('Password is required');
    } else if (text != password) {
      setConfirmPasswordError('Password does not match.');
    } else {
      setConfirmPasswordError('');
    }
  };
 
  const clearFieldData = () => {
    setEmailOrPhone('');
    setPhone('');
    setUserName('');
    setPassword('');
    setConfirmPassword('');
  };

  const borderColorEmail = emailError
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
  const borderColorUser = userNameError
    ? {
        borderColor: COLORS.error,
      }
    : {
        borderColor: COLORS.pureWhite,
      };
  const borderColorPass1 = passwordError
    ? {
        borderColor: COLORS.error,
      }
    : {
        borderColor: COLORS.pureWhite,
      };
  const borderColorPass2 = confirmPasswordError
    ? {
        borderColor: COLORS.error,
      }
    : {
        borderColor: COLORS.pureWhite,
      };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{}}>
        <View style={{rowGap: 40}}>
          <View style={{flexDirection: 'row', columnGap: 20}}>
            <Back Press={() => navigation.navigate('LoginScreen')} />
            <Text style={styles.heading}>Enter Account Details</Text>
          </View>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.button}>
            <TouchableOpacity
              style={{
                shadowColor: '#000000',
                shadowOffset: {
                  width: 1,
                  height: -5,
                },
                shadowRadius: 20,
                elevation: 2,
                backgroundColor:
                  loginMethod === 'email' ? COLORS.blue : COLORS.pureWhite,
                height: 40,
                width: 94,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => handleLoginMethodChange('email')}>
              <Text
                style={{
                  fontSize: 15,
                  color:
                    loginMethod === 'email'
                      ? COLORS.pureWhite
                      : COLORS.secondary,
                }}>
                Email
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                shadowColor: '#000000',
                shadowOffset: {
                  width: 1,
                  height: -5,
                },
                shadowRadius: 20,
                elevation: 2,
                backgroundColor:
                  loginMethod === 'email' ? COLORS.pureWhite : COLORS.blue,
                height: 40,
                width: 122,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => handleLoginMethodChange('phone')}>
              <Text
                style={{
                  fontSize: 15,
                  color:
                    loginMethod === 'email'
                      ? COLORS.secondary
                      : COLORS.pureWhite,
                }}>
                Phone Number
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.inputItem}>
            {loginMethod === 'email' ? (
              <>
                <View style={styles.textInputItems}>
                  <Text style={styles.lable}>Email</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      position: 'absolute',
                      zIndex: 1,
                      marginTop: 45,
                      columnGap: 10,
                      marginLeft: 20,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Image
                      source={require('../../images/email.png')}
                      style={{}}
                    />
                    <Image
                      source={require('../../images/Line62.png')}
                      style={{}}
                    />
                  </View>
                  <TextInput
                    placeholder={'Email'}
                    value={emailOrPhone}
                    onChangeText={handleEmailOrPhoneChange}
                    style={[styles.inputBoxes2, borderColorEmail]}
                    placeholderTextColor={COLORS.secondary}
                    // maxLength={20}
                  />
                  {emailError ? (
                    <Text style={styles.error}>{emailError}</Text>
                  ) : null}
                </View>
              </>
            ) : (
              <>
                <View style={styles.textInputItems}>
                  <Text style={styles.lable}>Mobile Number</Text>

                  <PhoneInput
                    placeholder="Phone number"
                    value={phone}
                    onChangeText={handlePhone}
                    containerStyle={[styles.phoneContainer, borderColorPhone]}
                    textContainerStyle={styles.textContainer}
                    autoFocus
                    codeTextStyle={[styles.codeText]}
                  />
                  {phoneError ? (
                    <Text style={styles.error}>{phoneError}</Text>
                  ) : null}
                </View>
              </>
            )}

            <View style={styles.textInputItems}>
              <Text style={styles.lable}>Choose your username</Text>

              <TextInput
                placeholder="Enter user name"
                style={[styles.inputBoxesUser, borderColorUser]}
                value={userName}
                onChangeText={handleUserName}
                placeholderTextColor={COLORS.secondary}
                maxLength={20}
              />
              {userNameError ? (
                <Text style={styles.error}>{userNameError}</Text>
              ) : null}
            </View>
            <View style={styles.textInputItems}>
              <Text style={styles.lable}>Password</Text>
              <View
                style={{
                  marginLeft: '90%',
                  marginTop: 52,
                  position: 'absolute',
                  zIndex: 1,
                }}>
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}>
                  <Image source={require('../../images/GroupEye.png')} />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  position: 'absolute',
                  zIndex: 1,
                  marginTop: 45,
                  columnGap: 10,
                  marginLeft: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image source={require('../../images/GroupLock.png')} />
                <Image source={require('../../images/Line62.png')} />
              </View>

              <TextInput
                placeholder="Enter your password"
                style={[styles.inputBoxes, borderColorPass1]}
                value={password}
                onChangeText={handlePasswordChange}
                secureTextEntry={!showPassword}
                placeholderTextColor={COLORS.secondary}
                maxLength={16}
              />
              {passwordError ? (
                <Text style={styles.error}>{passwordError}</Text>
              ) : null}
            </View>
            <View style={styles.textInputItems}>
              <Text style={styles.lable}>Confirm Password</Text>
              <View
                style={{
                  marginLeft: '90%',
                  marginTop: 52,
                  position: 'absolute',
                  zIndex: 1,
                }}>
                <TouchableOpacity
                  onPress={() => setShowConfirmPass(!showConfirmPass)}>
                  <Image source={require('../../images/GroupEye.png')} />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  position: 'absolute',
                  zIndex: 1,
                  marginTop: 45,
                  columnGap: 10,
                  marginLeft: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image source={require('../../images/GroupLock.png')} />
                <Image source={require('../../images/Line62.png')} />
              </View>

              <TextInput
                placeholder="Enter confirm password"
                style={[styles.inputBoxes, borderColorPass2]}
                value={confirmPassword}
                onChangeText={handleConfirmPassword}
                secureTextEntry={!showConfirmPass}
                placeholderTextColor={COLORS.secondary}
                maxLength={16}
              />
              {confirmPasswordError ? (
                <Text style={styles.error}>{confirmPasswordError}</Text>
              ) : null}
            </View>
            <View style={styles.textInputItems}>
              <View
                style={{
                  flexDirection: 'row',
                  columnGap: 5,
                  alignItems: 'center',
                }}>
                <Text style={styles.lable}>Referral ID (Optional)</Text>
                <TouchableOpacity>
                  <Image source={IMAGES.drop} style={{height: 15, width: 15}} />
                </TouchableOpacity>
              </View>
              <TextInput style={styles.inputBoxesUser2} maxLength={10} />
            </View>
          </View>

          <View style={{rowGap: 15, marginTop: 21}}>
            <View style={{flexDirection: 'row', columnGap: 20}}>
              <TouchableOpacity onPress={() => setEmailUpdates(!emailUpdates)}>
                <View
                  style={{
                    height: 20,
                    width: 20,
                    borderRadius: 10,
                    backgroundColor: emailUpdates ? COLORS.green : COLORS.gray2,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={ICONS.whiteTick}
                    tintColor={emailUpdates ? COLORS.pureWhite : COLORS.gray2}
                    style={{height: 9, width: 13}}
                  />
                </View>
              </TouchableOpacity>
              <Text style={styles.condition} numberOfLines={2}>
                I agree to receive email updates from Company
              </Text>
            </View>
            <View style={{flexDirection: 'row', columnGap: 20}}>
              <TouchableOpacity onPressIn={() => setShareData(!shareData)}>
                <View
                  style={{
                    height: 20,
                    width: 20,
                    borderRadius: 10,
                    backgroundColor: shareData ? COLORS.green : COLORS.gray2,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={ICONS.whiteTick}
                    tintColor={shareData ? COLORS.pureWhite : COLORS.gray2}
                    style={{height: 9, width: 13}}
                  />
                </View>
              </TouchableOpacity>
              <Text style={styles.condition} numberOfLines={2}>
                I agree to share data for marketing purposes
              </Text>
            </View>
          </View>
          {/* <View style={styles.checkboxContainer}>
            <CheckBox
              isChecked={isChecked}
              onClick={() => setIsCkecked(!isChecked)}
              rightTextStyle={{
                fontSize: 19,
                color: 'black',
                fontWeight: 'bold',
              }}
              checkedCheckBoxColor="#286FDB"
              uncheckedCheckBoxColor="#343A40"
              style = {{borderWidth:1,borderRadius:200}}
            />
            <Text style={styles.remember}>Remember me</Text>
          </View> */}

          <View style={{marginBottom: 40}}>
            <Btn title={'Next'} BgColor={COLORS.blue} Press={handleNext} />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 27,
    backgroundColor: COLORS.white,
    paddingTop: 10,
  },
  heading: {
    color: COLORS.primary,
    fontSize: SIZES.xLarge,
    fontWeight: FONTWEIGHT.large,
  },
  inputItem: {
    rowGap: 16,
  },
  textInputItems: {
    rowGap: 6,
  },
  inputBoxes: {
    backgroundColor: COLORS.pureWhite,
    shadowColor: '#000000',
    shadowOffset: {
      width: 1,
      height: -5,
    },
    shadowRadius: 10,
    elevation: 2,
    borderRadius: 5,
    height: 60,
    paddingLeft: 60,
    borderWidth: 1,
    // borderColor: COLORS.pureWhite,
    color: COLORS.black,
  },
  inputBoxesPhone: {
    backgroundColor: COLORS.pureWhite,
    shadowColor: '#000000',
    shadowOffset: {
      width: 1,
      height: -5,
    },
    shadowRadius: 10,
    elevation: 2,
    borderRadius: 5,
    height: 60,
    paddingLeft: 100,
    borderWidth: 1,
    // borderColor: COLORS.pureWhite,
    color: COLORS.black,
  },
  inputBoxes2: {
    backgroundColor: COLORS.pureWhite,
    shadowColor: '#000000',
    shadowOffset: {
      width: 1,
      height: -5,
    },
    shadowRadius: 10,
    elevation: 2,
    borderRadius: 5,
    height: 60,
    paddingLeft: 60,
    borderWidth: 1,
    // borderColor: COLORS.pureWhite,
    color: COLORS.black,
  },
  inputBoxesUser: {
    backgroundColor: COLORS.pureWhite,
    shadowColor: '#000000',
    shadowOffset: {
      width: 1,
      height: -5,
    },
    shadowRadius: 10,
    elevation: 2,
    borderRadius: 5,
    height: 60,
    paddingLeft: 20,
    borderWidth: 1,
    // borderColor: COLORS.pureWhite,
    color: COLORS.black,
  },
  inputBoxesUser2: {
    backgroundColor: COLORS.pureWhite,
    shadowColor: '#000000',
    shadowOffset: {
      width: 1,
      height: -5,
    },
    shadowRadius: 10,
    elevation: 2,
    borderRadius: 5,
    height: 60,
    paddingLeft: 20,
    borderWidth: 1,
    borderColor: COLORS.pureWhite,
    color: COLORS.black,
  },
  lable: {
    color: COLORS.ternary,
    fontSize: SIZES.xmedium,
  },
  button: {
    flexDirection: 'row',
    marginBottom: 20,
    marginTop: 40,
    justifyContent: 'center',
    columnGap: 10,
  },
  error: {
    color: COLORS.error,
    fontSize: SIZES.small,
  },
  errorList: {
    rowGap: 7,
    width: width * 0.85,
  },
  icon: {
    flexDirection: 'row',
    // justifyContent:'center',
    alignItems: 'center',
    columnGap: 5,
  },
  flatListItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    height: '50%',
    borderWidth: 1,
    width: '100%',
  },
  condition: {
    color: COLORS.ternary,
  },
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

export default Register;
// {error ? <Text style={{ color: 'red', marginTop: 10 }}>{error}</Text> : null}
