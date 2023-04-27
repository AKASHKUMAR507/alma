import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './src/screen/splashScreeb';

import Test from './src/components/Test';
import Success from './src/components/alerts/Success';
import CreateAccount from './src/screen/register/CreateAccount';
import ForgotPassword from './src/screen/ForgotPassword';
import EmailVarification from './src/screen/EmailVarification';
import LoginScreen from './src/screen/LoginScreen';
import FetchApiRequest from './src/screen/FetchApiRequest';
import ApiTest from './src/components/ApiTest';
import AlmaxzAccount from './src/screen/register/AlmaxzAccount';
import TermsCondition from './src/screen/register/TermsCondition';
import PrivacyPolicy from './src/screen/register/PrivacyPolicy';
import OtpValidationForgot from './src/screen/forgotScreen/OtpValidationForgot';
import ResetPassword from './src/screen/forgotScreen/ResetPassword';
import Register from './src/screen/register/Register';
import RegisterScreenOTP from './src/screen/register/RegisterScreenOTP';
import SuccessScreen from './src/screen/register/SuccessScreen';
import Routes from './src/routes/Routes';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Test" component={Test} />
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="Success" component={Success} />
        <Stack.Screen name="CreateAccount" component={CreateAccount} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="EmailVarification" component={EmailVarification} />
        <Stack.Screen name="FetchApiRequest" component={FetchApiRequest} />
        <Stack.Screen name="ApiTest" component={ApiTest} />
        <Stack.Screen name="AlmaxzAccount" component={AlmaxzAccount} />
        <Stack.Screen name="TermsCondition" component={TermsCondition} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
        <Stack.Screen
          name="OtpValidationForgot"
          component={OtpValidationForgot}
        />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="RegisterScreenOTP" component={RegisterScreenOTP} />
        <Stack.Screen name="SuccessScreen" component={SuccessScreen} />
        <Stack.Screen name="Routes" component={Routes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
