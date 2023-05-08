import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Favourite from '../../screen/home/market/Favourite';
import Spot from '../../screen/home/market/Spot';
import Zones from '../../screen/home/market/Zones';
import {COLORS, SIZES, FONTWEIGHT} from '../../assets/color';
import { color } from 'react-native-elements/dist/helpers';

const MarketRoutes = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Favourite"
      screenOptions={{
        tabBarLabelStyle: {fontSize: SIZES.medium},
        tabBarStyle: {backgroundColor: COLORS.white},
      }}
      >
      <Tab.Screen
        name="Favourite"
        component={Favourite}
        options={{
           
        }}
      />

      <Tab.Screen
        name="Spot"
        component={Spot}
        options={{tabBarLabel: 'Spot'}}
      />
      <Tab.Screen
        name="Zones"
        component={Zones}
        options={{tabBarLabel: 'Zones'}}
      />
    </Tab.Navigator>
  );
};

export default MarketRoutes;

const styles = StyleSheet.create({});
