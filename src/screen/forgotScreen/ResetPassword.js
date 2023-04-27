import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Cross from '../../components/buttons/Cross';
import Btn from '../../components/buttons/Btn';
import {COLORS, FONTWEIGHT, SIZES} from '../../assets/color';
import SuccessPopup from '../../components/alerts/SuccessPopup';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const ResetPassword = ({navigation}) => {
  const [submitMethod, setSubmitMethod] = useState('pass');
  const [success, setSuccess] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordAgain, setPasswordAgain] = useState('');
  const [showHide, setShowHide] = useState(true);
  const [showHideAgain, setShowHideAgain] = useState(true);
  const [passwordError, setPasswordError] = useState('');
  const [passwordAgainError, setPasswordAgainError] = useState('');

  const handlePassword = text => {
    setPassword(text);
    setPasswordError('');
    
  };
  const handlePasswordAgain = text => {
    setPasswordAgain(text);
    setPasswordAgainError('');
 
  };

  const borderColor = passwordError ? {
    borderColor:COLORS.error
  }:{
    borderColor:COLORS.pureWhite
  }
  const borderColor2 = passwordAgainError ? {
    borderColor:COLORS.error
  }:{
    borderColor:COLORS.pureWhite
  }

  const handleSubmit = () => {
    if(submitMethod === 'pass'){
      if (!password) {
        setPasswordError('Please enter your password');
        return;
      }
      if(!passwordRegex(password)){
        setPasswordError(`Password must contain at least,
        * one lowercase
        * one uppercase
        * one numeric
        * one special character
        * and password must be 8 characters or longer.`);
        return;
      }
      if (!passwordAgain) {
        setPasswordAgainError('Please enter your password');
        return;
      }
      if(password != passwordAgain){
        setPasswordAgainError('Passwords must be same');
        return;
      }
      
    }

    setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
  };

  const passwordRegex = (password) =>{
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
    return regex.test(password)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.secondContainer}>
        <View>
          <Cross Press={() => navigation.navigate('ForgotPassword')} />
        </View>
        <View style={styles.textHeading}>
          <Text style={styles.heading}>Reset Password</Text>
          <Text style={styles.title}>Please enter your New Password</Text>
        </View>
        <View style={styles.inputField}>
          {submitMethod === 'pass' ? (
            <>
              <View style={{rowGap: 5}}>
                <Text style={styles.textPassword}>New Password</Text>
                <TouchableOpacity
                  style={styles.hideIcon}
                  onPress={() => setShowHide(!showHide)}>
                  <Image source={require('../../images/GroupEye.png')} />
                </TouchableOpacity>
                <TextInput
                  style={[styles.password, borderColor]}
                  placeholder="**************"
                  value={password}
                  onChangeText={handlePassword}
                  secureTextEntry={showHide}
                  placeholderTextColor={COLORS.secondary}
                />
                {passwordError ? <Text style ={styles.error}>{passwordError}</Text> : null}
              </View>

              <View style={{rowGap: 5}}>
                <Text style={styles.textPassword}>Confirm Password</Text>
                <TouchableOpacity
                  style={styles.hideIcon2}
                  onPress={() => setShowHideAgain(!showHideAgain)}>
                  <Image source={require('../../images/GroupEye.png')} />
                </TouchableOpacity>
                <TextInput
                  placeholder="**************"
                  style={[styles.password, borderColor2]}
                  value={passwordAgain}
                  onChangeText={handlePasswordAgain}
                  secureTextEntry={showHideAgain}
                  placeholderTextColor={COLORS.secondary}
                />
                {passwordAgainError ? <Text style ={styles.error}>{passwordAgainError}</Text> : null}
              </View>
            </>
          ) : (
            null
          )}
        </View>
        <View style={styles.btn}>
          <Btn title={'Submit'} BgColor={COLORS.blue} Press={handleSubmit} />
        </View>
        <View style={styles.createAccount}>
          <Text style = {{color:COLORS.secondary}}>
            You haven't any account?
            <Text
              style={{color: COLORS.blue}}
              onPress={() => navigation.navigate('LoginScreen')}>
              {' '}
              Sign Up
            </Text>
          </Text>
        </View>
        <View style={{marginTop: '10%'}}>
          {success && (
            <SuccessPopup
              sms={'Your password has been changed successfully'}
              bgColor={COLORS.primary}
            />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 27,
    paddingTop: 25,
  },
  textHeading: {
    marginTop: '20%',
  },
  secondContainer: {},
  heading: {
    fontSize: SIZES.xxLarge,
    color: COLORS.primary,
    fontWeight: FONTWEIGHT.medium,
  },
  title: {
    color:COLORS.secondary
  },
  inputField: {
    rowGap: 40,
    marginTop: 30,
    
  },
  password: {
    backgroundColor: COLORS.pureWhite,
    shadowColor: '#000000',
    shadowOffset: {
      width: 1,
      height: -5,
    },
    shadowRadius: 20,
    elevation: 5,
    borderRadius: 5,
    height: 60,
    paddingLeft: 20,
    borderWidth:1,
    color:COLORS.black
  },
  hideIcon: {
    position: 'absolute',
    marginTop: 50,
    zIndex: 1,
    marginLeft: '90%',
  },
  hideIcon2: {
    position: 'absolute',
    marginTop: 50,
    zIndex: 1,
    marginLeft: '90%',
  },
  textPassword: {
    color: COLORS.ternary,
    fontSize: SIZES.xmedium,
  },
  btn: {
    marginTop: '30%',
  },
  createAccount: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  error:{
    color:COLORS.error,
    fontSize:SIZES.small
  },
});
