

import React, {useState} from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
 

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

const {width, height} = Dimensions.get('window');
const Test = () => {
  const [value, setValue] = useState(countries[0]);
  // console.log(value.code)
  const renderItem = item => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.flag}</Text>
        <Text style={styles.textItem}>{item.code}</Text>
        <Text style={styles.textItem}>{item.name}</Text>
      </View>
    );
  };
  return (
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      iconStyle={styles.iconStyle}
      data={countries}
      containerStyle={{width:width*1.0}} 
      inputSearchStyle={{backgroundColor:'#FFFFFF' }}
      placeholder={''}
      searchPlaceholder="Search..."
      maxHeight={300}
      search
      labelField="flag"
      valueField="code" 
      value={value}
      onChange={item => {
        console.log(item)
        setValue(item);
      }}
      renderItem={renderItem}
    />
  );
};
export default Test;
const styles = StyleSheet.create({
  dropdown: {
    width: width * 0.70,
    height: height * 0.08,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#828282',
    marginTop: height * 0.03,
    paddingLeft: width * 0.05,
    paddingRight: width * 0.02,
    shadowColor: '#000',
  },
  icon: {
    marginRight: 5,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    color: '#707070',
  },
  textItem: {
    flex: 1,
    fontSize: height * 0.018,
    color:'red'
  },
  placeholderStyle: {
    fontSize: height * 0.018,
    color: '#707070',
  },
  selectedTextStyle: {
    fontSize: height * 0.018,
    color: '#707070',
    fontFamily: 'Poppins',
  },
  iconStyle: {
    width: width * 0.08,
    height: height * 0.02,
  },
  inputSearchStyle :{
    backgroundColor:'#'
  }
});



// ************************************************************************************

// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity } from 'react-native';

// const Test = ({ navigation }) => {
//   const [loginMethod, setLoginMethod] = useState('email'); // default to email login
//   const [emailOrPhone, setEmailOrPhone] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleLogin = () => {
//     // perform validation
//     if (loginMethod === 'email') {
//       if (!emailOrPhone) {
//         setError('Please enter your email address.');
//         return;
//       }
//       if (!password) {
//         setError('Please enter your password.');
//         return;
//       }
//       // TODO: perform email login with emailOrPhone and password
//     } else {
//       if (!emailOrPhone) {
//         setError('Please enter your phone number.');
//         return;
//       }
//       if (!password) {
//         setError('Please enter your password.');
//         return;
//       }
//       // TODO: perform phone number login with emailOrPhone and password
//     }

//     // if validation passes, navigate to emailValidation screen
//     navigation.navigate('emailValidation');
//   }

//   const handleLoginMethodChange = (method) => {
//     setLoginMethod(method);
//     setEmailOrPhone('');
//     setPassword('');
//     setError('');
//   }

//   const handleEmailOrPhoneChange = (value) => {
//     setEmailOrPhone(value);
//     setError('');
//   }

//   const handlePasswordChange = (value) => {
//     setPassword(value);
//     setError('');
//   }

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <View style={{ flexDirection: 'row', marginBottom: 20 }}>
//         <TouchableOpacity
//           style={{ paddingHorizontal: 20, paddingVertical: 10, backgroundColor: loginMethod === 'email' ? '#ccc' : '#fff' }}
//           onPress={() => handleLoginMethodChange('phone')}
//         >
//           <Text style={{ fontSize: 18 }}>Phone Number</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={{ paddingHorizontal: 20, paddingVertical: 10, backgroundColor: loginMethod === 'email' ? '#fff' : '#ccc' }}
//           onPress={() => handleLoginMethodChange('email')}
//         >
//           <Text style={{ fontSize: 18 }}>Email</Text>
//         </TouchableOpacity>
//       </View>
//       <View style={{ width: '80%', marginBottom: 20 }}>
//         <TextInput
//           placeholder={loginMethod === 'email' ? 'Email' : 'Phone Number'}
//           value={emailOrPhone}
//           onChangeText={handleEmailOrPhoneChange}
//           style={{ paddingHorizontal: 10, paddingVertical: 10, borderColor: '#ccc', borderWidth: 1 }}
//         />
//       </View>
//       <View style={{ width: '80%', marginBottom: 20 }}>
//         <TextInput
//           placeholder="Password"
//           value={password}
//           onChangeText={handlePasswordChange}
//           secureTextEntry={true}
//           style={{ paddingHorizontal: 10, paddingVertical: 10, borderColor: '#ccc', borderWidth: 1 }}
//         />
//       </View>
//       <TouchableOpacity
//         onPress={handleLogin}
//         style={{ width: '80%', backgroundColor: '#2196f3', padding: 10, alignItems: 'center' }}
//       >
//         <Text style={{ color: '#fff', fontSize: 18 }}>Login</Text>
//       </TouchableOpacity>
//       {error ? <Text style={{ color: 'red', marginTop: 10 }}>{error}</Text> : null}
//     </View>
//   );
// };

// export default Test;

// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

// const Test = () => {
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [phoneError, setPhoneError] = useState('');

//   const handleEmailChange = (text) => {
//     setEmail(text);
//     setEmailError('');
//   };

//   const handlePhoneChange = (text) => {
//     setPhone(text);
//     setPhoneError('');
//   };

//   const handleSubmit = () => {
//     let isValid = true;

//     if (!email) {
//       setEmailError('Email is required');
//       isValid = false;
//     } else if (!validateEmail(email)) {
//       setEmailError('Please enter a valid email');
//       isValid = false;
//     }

//     if (!phone) {
//       setPhoneError('Phone is required');
//       isValid = false;
//     } else if (!validatePhone(phone)) {
//       setPhoneError('Please enter a valid phone number');
//       isValid = false;
//     }

//     if (isValid) {
//       console.log('Email:', email);
//       console.log('Phone:', phone);
//       // You can add your own logic for handling the form submission here
//     }
//   };

//   const validateEmail = (email) => {
//     const emailRegex = /\S+@\S+\.\S+/;
//     return emailRegex.test(email);
//   };

//   const validatePhone = (phone) => {
//     const phoneRegex = /^[0-9]{10}$/;
//     return phoneRegex.test(phone);
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.label}>Email:</Text>
//       <TextInput
//         style={[styles.input, emailError && styles.error]}
//         onChangeText={handleEmailChange}
//         value={email}
//         keyboardType="email-address"
//         autoCapitalize="none"
//         autoCompleteType="email"
//         placeholder="Enter your email"
//       />
//       {emailError ? <Text style={styles.errorMessage}>{emailError}</Text> : null}

//       <Text style={styles.label}>Phone:</Text>
//       <TextInput
//         style={[styles.input, phoneError && styles.error]}
//         onChangeText={handlePhoneChange}
//         value={phone}
//         keyboardType="phone-pad"
//         placeholder="Enter your phone number"
//       />
//       {phoneError ? <Text style={styles.errorMessage}>{phoneError}</Text> : null}

//       <TouchableOpacity style={styles.button} onPress={handleSubmit}>
//         <Text style={styles.buttonText}>Submit</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 20,
//   },
//   label: {
//     alignSelf: 'flex-start',
//     marginBottom: 5,
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     padding: 10,
//     marginBottom: 5,
//     width: '100%',
//     fontSize: 16,
//   },
//   error: {
//     borderColor: 'red',
//   },
//   errorMessage: {
//     color: 'red',
//     fontSize: 14,
//     alignSelf: 'flex-start',
//     marginBottom: 10,
//   },
//   button: {
//     backgroundColor: '#007AFF',
//     borderRadius: 5,
//     padding: 10,
//     width: '100%',
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default Test

// import React,{useState} from 'react';
// import { View, TextInput, Button, StyleSheet } from 'react-native';
// import { Formik } from 'formik';
// import * as Yup from 'yup';
// import EmailVarification from '../screen/EmailVarification';

// const loginSchema = Yup.object().shape({
//   phone: Yup.string()
//     .required('Please enter your phone number')
//     .matches(/^[0-9]{10}$/, 'Please enter a valid 10-digit phone number')
// });

// const Test = ({ navigation }) => {

//   const [boolean, setBoolean] = useState(true);
//   const [otp, setOpt] = useState(['123456']);

//   function OTP() {
//     return Math.floor(100000 + Math.random() * 900000);
//   }

//   const data = {
//     email: boolean,
//   };
//   const DataOTP = {
//     otp: otp,
//   };

//   return (
//     <View style={styles.container}>
//       <Formik
//         initialValues={{ phone: '' }}
//         validationSchema={loginSchema}
//         onSubmit={values => {
//           navigation.navigate('EmailVarification', {data, DataOTP});
//         }}
//       >
//         {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
//           <>
//             <TextInput
//               style={styles.input}
//               onChangeText={handleChange('phone')}
//               onBlur={handleBlur('phone')}
//               value={values.phone}
//               placeholder="Phone number"
//               keyboardType="phone-pad"
//             />
//             {errors.phone && touched.phone && <Text style={styles.error}>{errors.phone}</Text>}
//             <Button title="Login" onPress={handleSubmit} disabled={!values.phone || Object.keys(errors).length > 0} />
//           </>
//         )}
//       </Formik>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 20
//   },
//   input: {
//     height: 50,
//     width: '100%',
//     borderWidth: 1,
//     borderColor: '#ccc',
//     paddingHorizontal: 10,
//     marginBottom: 10
//   },
//   error: {
//     color: 'red',
//     marginBottom: 10
//   }
// });

// export default Test;

// *******************************************************
// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity } from 'react-native';
// import Test from './Test';

// const Test = ({ navigation }) => {
//   const [loginMethod, setLoginMethod] = useState('email'); // default to email login
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     // perform validation
//     if (loginMethod === 'email') {
//       if (!email) {
//         alert('Email is required');
//         return;
//       }
//       if (!validateEmail(email)) {
//         alert('Invalid email');
//         return;
//       }
//     } else {
//       if (!phone) {
//         alert('Phone number is required');
//         return;
//       }
//       if (!validatePhone(phone)) {
//         alert('Invalid phone number');
//         return;
//       }
//     }
//     if (!password) {
//       alert('Password is required');
//       return;
//     }

//     //navigation to next screen
//     navigation.navigate('Home');
//   };

//   const validateEmail = (email) => {
//     // simple email validation using regular expression
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return regex.test(email);
//   };

//   const validatePhone = (phone) => {
//     // simple phone validation using regular expression
//     const regex = /^\d{10}$/;
//     return regex.test(phone);
//   };

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text style={{ fontSize: 20, marginBottom: 20 }}>Login</Text>
//       <View style={{ flexDirection: 'row', marginBottom: 20 }}>
//         <TouchableOpacity onPress={() => setLoginMethod('email')}>
//           <Text style={{ fontSize: 16, marginRight: 20, fontWeight: loginMethod === 'email' ? 'bold' : 'normal' }}>Email</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => setLoginMethod('phone')}>
//           <Text style={{ fontSize: 16, fontWeight: loginMethod === 'phone' ? 'bold' : 'normal' }}>Phone Number</Text>
//         </TouchableOpacity>
//       </View>
//       {loginMethod === 'email' ? (
//         <>
//           <TextInput
//             placeholder="Email"
//             value={email}
//             onChangeText={setEmail}
//             keyboardType="email-address"
//             autoCapitalize="none"
//             style={{ borderWidth: 1, borderColor: 'gray', marginBottom: 10, paddingHorizontal: 10, paddingVertical: 5 }}
//           />
//         </>
//       ) : (
//         <>
//           <TextInput
//             placeholder="Phone Number"
//             value={phone}
//             onChangeText={setPhone}
//             keyboardType="numeric"
//             style={{ borderWidth: 1, borderColor: 'gray', marginBottom: 10, paddingHorizontal: 10, paddingVertical: 5 }}
//           />
//         </>
//       )}
//       <TextInput
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry={true}
//         style={{ borderWidth: 1, borderColor: 'gray', marginBottom: 10, paddingHorizontal: 10, paddingVertical: 5 }}
//       />
//       <TouchableOpacity onPress={handleLogin} style={{ backgroundColor: 'blue', paddingHorizontal: 20, paddingVertical: 10, borderRadius: 5 }}>
//         <Text style={{ color: 'white', fontSize: 16 }}>Login</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default Test;
