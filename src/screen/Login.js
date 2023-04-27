// import React, {createContext, useState} from 'react';
// import {View, Text, TouchableOpacity, TextInput, Image, StyleSheet} from 'react-native';
// import {styles} from './Style_Login';
// import CheckBox from 'react-native-check-box';
// import Success from '../components/alerts/Success';

// const EmailField = () => {
//   return (
//     <>
//     <View style = {styles.item1}>
//         <Text style={styles.e}>Email</Text>

//         <View style={
//           {
//             flexDirection: 'row',
//             paddingLeft:15,
//             alignItems: 'center',
//             backgroundColor: '#fff',
//             borderColor: '#000',          
//             borderRadius: 10,
//           }
//         }>
//           <Image
//             source={require('../images/email.png')}
//             style = {{
//               height: 15,
//               width: 15,
//               resizeMode: 'stretch',
//             }}
//           />
//           <Image
//             source={require('../images/Line62.png')}
//             style = {{
//                 marginLeft:11,
//             }}
//           />
//           <TextInput
//             withShadow
//             style={styles.emailInput}
//             placeholder="Enter your email"
//             placeholderTextColor="#6C757D"
//           />
//         </View>
//     </View>
//     </>
//   );
// };
// const PhoneField = () => {
//   return (
//     <>
//       <View style={styles.item1}>
//         <Text style={styles.e}>Phone number</Text>
//         <View 
//           style = {{
//             flexDirection: 'row',
//             paddingLeft:10,
//             alignItems: 'center',
//             backgroundColor: '#fff',
//             borderColor: '#000',          
//             borderRadius: 10,
//           }}
//         >
//           <Image
//             source={require('../images/countryLogo.png')}
//             style ={{
//               resizeMode: 'stretch',
//             }}
//           />
//           <Text
//             style = {
//               {
//                 marginLeft:10,
//               }
//             }
//           >+91</Text>
//           <Image
//             source={require('../images/drop.png')}
//             style ={{
//               resizeMode: 'stretch',
//               height:10,
//               width:10,
//               marginLeft:10,
//             }}
//           />
//           <Image
//             source={require('../images/Line62.png')}
//             style ={{
//               resizeMode: 'stretch',
//               marginLeft:10,
//             }}
//           />
          
//           <TextInput
//             withShadow
//             style={{
//               paddingLeft:10,
//             }}
//             placeholder="Enter your number"
//             placeholderTextColor="#6C757D"
//           />
//         </View>
//       </View>
//     </>
//   );
// };

// const Login = ({navigation}) => {
//   const [isChecked, setIsCkecked] = useState(false);
//   const [phone, setPhone] = useState(true);
//   const [activeButton, setActiveButton] = useState(1);
  
//   const [showSuccess, setShowSuccess] = useState(false);

//   const handleSuccess = () => {
//     setShowSuccess(true);
//     setTimeout(() => setShowSuccess(false), 3000);
   
//   };

//   const handlePress = buttonNumber => {
//     setActiveButton(buttonNumber);
//   };

//   const handalButtonPress = () => {
//     setPhone(!phone);
//   };

//   const handalButtonPress2 = () => {
//     setPhone(!phone);
//   };

  

//   return (
//     <View style={styles.conmainer}>
//       <View style={styles.wrap_container}>
//         <Text style={styles.company_name}> Account Login</Text>
//         {/* ----------------------------------Button-------------------------- */}
//         <View style={styles.button}>
//           <TouchableOpacity
//             style={styles.btn1}
//             withShadow
//             onPress={handalButtonPress2}>
//             <View style={styles.btn1Email}>
//               <Text style={styles.email}>Email</Text>
//             </View>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={styles.btn2}
//             withShadow
//             onPress={handalButtonPress}>
//             <View style={styles.btn2Phone}>
//               <Text style={styles.phone_number}>Phone number</Text>
//             </View>
//           </TouchableOpacity>
//         </View>
//         {/* ----------------------------------Input-------------------------- */}
//         <View style={styles.inputContainer}>
//           <View style={styles.item1}>
//             {phone === true ? <EmailField /> : <PhoneField />}
//           </View>
//           <View style={styles.item2}>
//             <Text style={styles.p}>Password</Text>
//             <View style={styles.SectionStyle}>
//               <Image 
//                 source={require('../images/GroupLock.png')} //Change your icon image here
//                 style={styles.ImageStyle}
//               />
//               <Image 
//                 source={require('../images/Line62.png')}
//                 style ={{
//                   marginLeft:11,
//                 }}   
//               />
//               <TextInput
//                 withShadow
//                 style={styles.passwordInput}
//                 placeholder="Enter your password"
//                 placeholderTextColor="#6C757D"
//                 secureTextEntry={true}
//               />
//               <Image 
//                 source={require('../images/GroupEye.png')}
//                 style ={{
//                     alignItems:'flex-end',
//                     marginLeft:'27%',
//                 }}
//               />

//             </View>
//           </View>
//           <View style={styles.checkboxContainer}>
//             <CheckBox
//               isChecked={isChecked}
//               onClick={() => setIsCkecked(!isChecked)}
//               rightTextStyle={{
//                 fontSize: 19,
//                 color: 'black',
//                 fontWeight: 'bold',
//               }}
//               checkedCheckBoxColor="#286FDB"
//               uncheckedCheckBoxColor="#343A40"
//             />
//             <Text style={styles.remember}>Remember me</Text>
//           </View>
//           <View style={styles.loginContainer}>
              
//             <TouchableOpacity style={styles.loginButton} withShadow
//               onPress={handleSuccess}
//             >
//               <View style={styles.loginItem}>
//                 <Text style={styles.loginText}
//                  onPress = {navigation.navigate(EmailValidation)}
//                 >Log in</Text>
//               </View>
//             </TouchableOpacity>
//           </View>

//           <View style={styles.accountDetails}>
//             <View>
//               <Text style={styles.create}
//                 // onPress = {navigation.navigate(createContext)}  
//               >Create your Almazx Account</Text>
//             </View>
//             <View>
//               <Text style={styles.forget}
//               //  onPress = {navigation.navigate(ForgotPassword)}
//               >Forgot password?</Text>
//             </View>
//         </View>

//           <View
//                 style ={{
//                   alignItems:'center',
//                 }}
//               >
//                 {showSuccess && (
//                   <Success/>
//                 )}
//           </View>

//         </View>
//       </View>
        
//     </View>
//   );
// };


// const table = StyleSheet.create({})

// export default Login;



import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Login = () => {
  return (
    <View>
      <Text>Login</Text>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})