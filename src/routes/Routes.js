import {StyleSheet, Text, View, Image, TouchableOpacity, } from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screen/home/Home';
import Market from '../screen/home/Market';
import Trade from '../screen/home/Trade';
import Wallet from '../screen/home/Wallet';
import { ICONS } from '../assets/color/thems';
import { COLORS, FONTWEIGHT, SIZES } from '../assets/color';

const Routes = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBarOptions={{
        showLabel : false,
      }}

      >
      <Tab.Screen name="Home" component={Home} options={{
        tabBarIcon : ({focused}) => (
          <View style ={{justifyContent:'center',alignItems:'center'}}>
            <Image source={ICONS.home}
              resizeMode= 'contain'
              style ={{
                height:17,
                width:19,
                tintColor: focused ? COLORS.primary : COLORS.primary
                
              }}
            />
            <Text style ={{color:focused ? COLORS.primary : COLORS.primary, fontSize:SIZES.small,fontWeight:FONTWEIGHT.medium ,}}>Home</Text>
          </View>
        )
      }} /> 
      <Tab.Screen name="Market" component={Market} 
        options={{
        tabBarIcon : ({focused}) => (
          <View style ={{justifyContent:'center',alignItems:'center'}}>
            <Image source={ICONS.market}
              resizeMode= 'contain'
              style ={{
                height:17,
                width:19,
                tintColor: focused ? COLORS.primary : COLORS.primary
              }}
            />
            <Text style ={{color:focused ? COLORS.primary : COLORS.primary, fontSize:SIZES.small,fontWeight:FONTWEIGHT.medium}}>Market</Text>
          </View>
        )
      }}
      />
      <Tab.Screen name="Trade" component={Trade} 
        options={{
        tabBarIcon : ({focused}) => (
          <View style ={{justifyContent:'center',alignItems:'center'}}>
            <Image source={ICONS.trade}
              resizeMode= 'contain'
              style ={{
                height:17,
                width:19,
                tintColor: focused ? COLORS.primary : COLORS.primary
              }}
            />
            <Text style ={{color:focused ? COLORS.primary : COLORS.primary, fontSize:SIZES.small,fontWeight:FONTWEIGHT.medium}}>Trade</Text>
          </View>
        )
      }}
      />
      <Tab.Screen name="Wallet" component={Wallet} 
        options={{
        tabBarIcon : ({focused}) => (
          <View style ={{justifyContent:'center',alignItems:'center'}}>
            <Image source={ICONS.wallet}
              resizeMode= 'contain'
              style ={{
                height:17,
                width:19,
                tintColor: focused ? COLORS.primary : COLORS.primary
              }}
            />
            <Text style ={{color:focused ? COLORS.primary : COLORS.primary, fontSize:SIZES.small, fontWeight:FONTWEIGHT.medium}}>Wallet</Text>
          </View>
        )
      }}
      />
    </Tab.Navigator>
  );
};

export default Routes;

const styles = StyleSheet.create({});
