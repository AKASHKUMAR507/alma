import React, {useState, Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  SafeAreaView,
  FlatList,
} from 'react-native';
import CheckBox from 'react-native-check-box';
import Success from '../components/alerts/Success';
import CreateAccount from './register/CreateAccount';
import ForgotPassword from '../screen/ForgotPassword';
import CountryDropdown from '../components/CountryDropdown';
import {IMAGES} from '../assets/color/thems';

const COUNTRY_CODE = '+91';

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
 
const LoginScreen = ({navigation}) => {
  // ############################### Input Field ######################
  const [loginMethod, setLoginMethod] = useState('email');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  // ############################### Set Error ######################
  const [emailErr, setEmailErr] = useState('');
  const [phoneErr, setPhoneErr] = useState('');
  const [passwordErr, setPasswordErr] = useState('');
  // ############################### Country List ######################
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [showCountries, setShowCountries] = useState(false);

  const toggleCountries = () => {
    setShowCountries(!showCountries);
  };

  const selectCountry = country => {
    setSelectedCountry(country);
    setShowCountries(false);
  };

  // ############################### Country List ######################

  const handleEmailValidation = text => {
    setEmail(text);
    setEmailErr('');
     
  };
  const handlePhoneValidation = text => {
    setPhone(text);
    setPhoneErr('');
  };
  const handlePasswordValidation = text => {
    setPassword(text);
    setPasswordErr('');
     
  };

  // ############################### Other ######################
  const [isChecked, setIsCkecked] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [buttonActive, setButtonActive] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [boolean, setBoolean] = useState(true);

  const [isEmail, setIsEmail] = useState(true);

  // ############################### Email Phone handle ######################
  const handleEmailClick = () => {
    setIsEmail(true);
    setBoolean(true);
    handleButtonActive();
    setLoginMethod('email');
  };

  const handlePhoneClick = () => {
    setIsEmail(false);
    setBoolean(false);
    handleButtonActive();
    setLoginMethod('phone');
  };

  const handleButtonActive = () => {
    setButtonActive(!buttonActive);
  };

  // ############################### OTP handle ######################

  const data = {
    email: boolean,
  };

  // ############################### Validation handle ######################

  const handleLogin = () => {

 
  
    // perform validation
    if (loginMethod === 'email') {
      if (!email) {
        // alert('Email is required');
        setEmailErr('*Email is required');
        return;
      }
      if (!validateEmail(email)) {
        // alert('Invalid email');
        setEmailErr('*Please enter valid email.');
        return;
      } else {
        setEmailErr('');
      }
      if (!password) {
        setPasswordErr('Password is required');
        return;
      } else if (!passwordRegex(password)) {
        setPasswordErr('Password must be strong.');
        return;
      } else {
        setPasswordErr('');
      }
 
    } else {
      if (!phone) {
        setPhoneErr('*Phone number is required');
        return;
      }
      if (!validatePhone(phone)) {
        setPhoneErr('*Please enter valid phone number.');
        return;
      } else {
        setPhoneErr('');
      }
      if (!password) {
        setPasswordErr('Password is required');
        return;
      } else if (!passwordRegex(password)) {
        setPasswordErr('Password must be strong.');
        return;
      } else {
        setPasswordErr('');
      }
    }

    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      navigation.navigate('EmailVarification', {data});
    }, 2000);
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

  return (
    <SafeAreaView style={styles.safeArea}>
      <View
        style={{
          marginLeft: 32,
          flex: 1,
          marginRight: 27,
          rowGap: 30,
        }}>
        <Text
          style={{
            color: '#092147',
            fontSize: 32,
            marginTop: '18%',
            fontWeight: 500,
          }}>
          Account Login
        </Text>
        {/* *************************************Button*************************** */}

        <View style={styles.button}>
          <View>
            <TouchableOpacity
              style={[
                styles.switchButton,
                styles.btn1,
                isEmail && styles.activeSwitchButton,
              ]}
              onPress={handleEmailClick}>
              <View style={[styles.email]}>
                <Text
                  style={[
                    styles.emailText,
                    styles.switchButtonText,
                    isEmail && styles.activeSwitchButtonText,
                  ]}>
                  Email
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={[
                styles.switchButton,
                styles.btn2,
                !isEmail && styles.activeSwitchButton,
              ]}
               
              onPress={handlePhoneClick}>
              <View style={[styles.phone]}>
                <Text
                  style={[
                    styles.phoneText,
                    styles.switchButtonText,
                    !isEmail && styles.activeSwitchButtonText,
                  ]}>
                  Phone number
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        {/* *************************************Email-Phone*************************** */}

        {loginMethod === 'email' ? (
          <>
            <View style={styles.item1}>
              <Text style={styles.e}>Email</Text>
              <View
                style={{
                  flexDirection: 'row',
                  paddingLeft: 15,
                  alignItems: 'center',
                  backgroundColor: '#fff',
                  borderColor: '#000',
                  borderRadius: 10,
                  height: 60,
                  shadowColor: '#000000',
                  shadowOffset: {
                    width: 1,
                    height: -5,
                  },
                  shadowRadius: 20,
                  elevation: 5,
                }}>
                <Image
                  source={require('../images/email.png')}
                  style={{
                    height: 15,
                    width: 15,
                    resizeMode: 'stretch',
                  }}
                />
                <Image
                  source={require('../images/Line62.png')}
                  style={{
                    marginLeft: 11,
                  }}
                />
                <TextInput
                  withShadow
                  style={styles.emailInput}
                  placeholder="Enter your email"
                  placeholderTextColor="#6C757D"
                  value={email}
                  onChangeText={handleEmailValidation}
                />
              </View>

              {emailErr ? (
                <Text style={styles.textError}>{emailErr}</Text>
              ) : null}
            </View>
          </>
        ) : (
          <>
            <View style={styles.item1}>
              <Text style={styles.e}>Phone number</Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  backgroundColor: '#fff',
                  borderColor: '#000',
                  borderRadius: 10,
                  height: 60,
                  shadowColor: '#000000',
                  shadowOffset: {
                    width: 1,
                    height: -5,
                  },
                  shadowRadius: 20,
                  elevation: 5,
              
                }}>
                <View style={{width: '30%',}}>
                  <TouchableOpacity
                    onPress={toggleCountries}
                    style={styles.list}>
                    <Text style = {{color:'#000000'}}>
                      {selectedCountry.flag}
                      {`  `}
                      {selectedCountry.code}
                    </Text>
                    <Image
                      source={IMAGES.drop}
                      style={{
                        height: 10,
                        width: 10,
                      }}
                    />
                  </TouchableOpacity>
                  {/* {showCountries && (
                    <FlatList
                      style={[styles.flatListItem]}
                      data={countries}
                      renderItem={({item}) => (
                        <TouchableOpacity
                          onPress={() => selectCountry(item)}
                          style={{padding: 10}}>
                          <Text style={{backgroundColor: '#FFFFFF',color:'#000000'}}>
                            {item.flag}
                            {'    '}
                            {item.name}
                            {'    '}
                            {item.code}
                          </Text>
                        </TouchableOpacity>
                      )}
                      keyExtractor={item => item.id}
                    />
                  )} */}
                </View>

                <Image
                  source={require('../images/Line62.png')}
                  style={{
                    resizeMode: 'stretch',
                    marginLeft: 0,
                  }}
                />

                <TextInput
                  value={phone}
                  onChangeText={handlePhoneValidation}
                  keyboardType="numeric"
                  maxLength={10}
                  placeholder="Enter your number"
                  placeholderTextColor="#6C757D"
                  style={{
                    paddingLeft: 10,
                    color: '#000',
                  }}
                />
              </View>
              {phoneErr ? (
                <Text style={styles.textError}>{phoneErr}</Text>
              ) : null}
            </View>
          </>
        )}

        {/* *************************************Password*************************** */}

        <View style={styles.item3}>
          <Text style={styles.p}>Password</Text>
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={{
              display: 'flex',
              zIndex: 2,
              marginTop: 50,
              position: 'absolute',
              marginLeft: '90%',
            }}>
            <Image
              source={require('../images/Android/GroupEyeHide.png')}
              style={{
                height: 20,
                width: 20,
              }}
            />
          </TouchableOpacity>
          <View style={styles.SectionStyle}>
            <Image
              source={require('../images/GroupLock.png')} //Change your icon image here
              style={{
                height: 15,
                width: 15,
                resizeMode: 'stretch',
              }}
            />
            <Image
              source={require('../images/Line62.png')}
              style={{
                marginLeft: 11,
              }}
            />

            <TextInput
              value={password}
              onChangeText={handlePasswordValidation}
              style={[styles.passwordInput]}
              placeholder="Enter your password"
              placeholderTextColor="#6C757D"
              secureTextEntry={!showPassword}
              maxLength={17}
            />
          </View>
          {passwordErr ? (
            <Text style={styles.textError}>{passwordErr}</Text>
          ) : null}
        </View>

        <View style={styles.item2}>
          {/* check box  */}
          <View style={styles.checkboxContainer}>
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
            />
            <Text style={styles.remember}>Remember me</Text>
          </View>

          {/* Login Button */}

          <View style={styles.loginContainer}>
            <TouchableOpacity
              style={styles.loginButton}
              // onPress={handleSuccess}
              onPress={handleLogin}>
              <View style={styles.loginItem}>
                <Text style={styles.loginText}>Log in</Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* create account  */}
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View>
              <Text
                style={styles.create}
                onPress={() => navigation.navigate(CreateAccount)}>
                Create your Almazx Account
              </Text>
            </View>
          </View>

          {/* forgot password */}
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View>
              <Text
                style={styles.forget}
                onPress={() => navigation.navigate(ForgotPassword)}>
                Forgot password?
              </Text>
            </View>
          </View>

          {/* success popup */}
          <View
            style={{
              alignItems: 'center',
            }}>
            {showSuccess && <Success />}
          </View>
        </View>

        {/* *************************************End*************************** */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // button style

  textError: {
    color: 'red',
  },

  safeArea: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },

  button: {
    display: 'flex',
    flexDirection: 'row',
    columnGap: 10,
    justifyContent: 'flex-end',
    columnGap: 10,
    marginTop: 25,
  },
  btn1: {
    borderRadius: 7,
    width: 94,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000000',
    shadowOffset: {
      width: 1,
      height: -5,
    },
    shadowRadius: 20,
    elevation: 5,
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
  button1Active: {
    backgroundColor: '#286FDB',
  },
  button2Active: {
    backgroundColor: '#FFFFFF',
  },
  emailTextActive: {
    color: '#fff',
  },
  phoneTextActive: {
    color: '#343A40',
  },

  // input field style
  inputField: {
    // borderWidth:2,
    rowGap: 6,
  },

  // password field

  p: {
    fontSize: 18,
    marginLeft: 5,
    color: '#343A40',
  },
  SectionStyle: {
    flexDirection: 'row',
    // justifyContent: 'center',
    paddingLeft: 15,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: '#000',
    borderRadius: 10,
    height: 60,
    shadowColor: '#000000',
    shadowOffset: {
      width: 1,
      height: -5,
    },
    shadowRadius: 20,
    elevation: 5,
  },
  item2: {
    display: 'flex',
    rowGap: 28,
  },
  item3: {
    display: 'flex',
    rowGap: 6,
  },
  passwordInput: {
    borderRadius: 10,
    paddingLeft: 10,
    backgroundColor: '#fff',
    color: '#000',
  },

  item1: {
    display: 'flex',
    rowGap: 6,
    
  },
  e: {
    fontSize: 18,
    marginLeft: 5,
    color: '#343A40',
    
  },
  emailInput: {
    borderRadius: 10,
    shadowColor: '#fff',
    shadowOffset: {width: 100, height: 60},
    shadowOpacity: 3.2,
    shadowRadius: 0,
    paddingLeft: 10,
    backgroundColor: '#fff',
    color: '#000',
    
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

  loginContainer: {
    display: 'flex',
    justifyContent: 'center',
    shadowColor: '#000000',
    shadowOffset: {
      width: 1,
      height: -5,
    },
    shadowRadius: 20,
    elevation: 5,
  },
  loginItem: {
    flex: 1,
    justifyContent: 'center',
  },
  loginButton: {
    backgroundColor: '#286FDB',
    height: 60,
    borderRadius: 10,
  },
  loginText: {
    color: '#fff',
    display: 'flex',
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 700,
  },

  create: {
    color: '#286FDB',
    textDecorationLine: 'underline',
  },
  forget: {
    color: '#343A40',
    textDecorationLine: 'underline',
  },
  switchButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
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
  list: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    columnGap: 10,
  },
  flatListItem: {                                                                                   
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    height: '60%',
    borderWidth: 1,
    zIndex: 3,
    position: 'absolute',
  },
});

export default LoginScreen;
