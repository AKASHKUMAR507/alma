import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, ICONS} from '../../assets/color/thems';
const {height, width} = Dimensions.get('screen');

const DayNight = () => {
  const [themes, setThemes] = useState('day');

  const handlePressDay = () => {
    setThemes('day');
  };
  const handlePressNight = () => {
    setThemes('night');
  };

  return (
    <View
      style={{
        backgroundColor: COLORS.pureWhite,
        height: height * 0.035,
        width: width * 0.13,
        borderRadius: 50,
        ...styles.shadow,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        onPress={handlePressDay}
        style={[
          styles.themesSwipe,
          themes === 'day' ? styles.activeBg : styles.activeBgN,
        ]}>
        <Image
          source={ICONS.day}
          style={{
            tintColor: themes === 'night' ? COLORS.primary : COLORS.pureWhite,
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handlePressNight}
        style={[
          styles.themesSwipe,
          themes === 'night' ? styles.activeBg : styles.activeBgN,
        ]}>
        <Image
          source={ICONS.night}
          style={{
            tintColor: themes === 'day' ? COLORS.primary : COLORS.pureWhite,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default DayNight;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: COLORS.black,
    shadowOffset: {
      height: 10,
      width: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 1,
  },
  themesSwipe: {
    borderRadius: 40,
    height: 25,
    width: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeBg: {
    backgroundColor: COLORS.primary,
  },
  activeBgN: {
    backgroundColor: COLORS.pureWhite,
  },
});
