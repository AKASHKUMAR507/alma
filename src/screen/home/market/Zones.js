import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Image} from 'react-native-elements';
import {IMAGES, SHADOWS} from '../../../assets/color/thems';
import {COLORS, FONTWEIGHT, SIZES} from '../../../assets/color';
import {ICONS} from '../../../assets/color/thems';

const Zones = () => {
  const [red, setRed] = useState('red');
  const [green, setGreen] = useState('green');
  const [blue, setBlue] = useState(false);

  const bgColor = green
    ? {
        backgroundColor: COLORS.green,
      }
    : {
        backgroundColor: COLORS.green,
      };
  const bgColorRed = red
    ? {
        backgroundColor: COLORS.red,
      }
    : {
        backgroundColor: COLORS.red,
      };

  const textColor = blue
    ? {
        color: COLORS.blue,
      }
    : {
        color: COLORS.ternary,
      };

  const DATA = [
    {
      id: '1',
      title: 'BUSD',
    },
    {
      id: '2',
      title: 'BTS',
    },
    {
      id: '3',
      title: 'MATIC',
    },
    {
      id: '4',
      title: 'SOL',
    },
    {
      id: '5',
      title: 'ETH',
    },
    {
      id: '6',
      title: 'BNB',
    },
    {
      id: '7',
      title: 'BNB',
    },
    {
      id: '8',
      title: 'BNB',
    },
    {
      id: '9',
      title: 'BNB',
    },
  ];

  const handlePress = () => {
    setBlue(!blue);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor:COLORS.white,
      }}>
      <View
        style={{
          flexDirection: 'row',
          columnGap: 10,
          marginTop: 10,
        }}>
        <TouchableOpacity>
          <View style={styles.bitCoinName}>
            <Text style={[styles.coinStyle, textColor]} onPress={handlePress}>
              All Zones
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.bitCoinName}>
            <Text style={[styles.coinStyle, textColor]} onPress={handlePress}>
              Coins
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.bitCoinName}>
            <Text style={[styles.coinStyle, textColor]} onPress={handlePress}>
              New Listing
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      {/* ******************************** Heading ******************************************* */}

      <View
        style={{
          flex: 1,
          marginTop: 27,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View>
            {/* ******************************** Name Heading ******************************************* */}
            <View>
              <Text style={styles.Text}>Name</Text>
            </View>
            {/* ******************************** DATA ******************************************* */}
            <View
              style={{
                rowGap: 35,
                marginTop: 17,
              }}>
              <Text style={styles.prices}>Innovations</Text>
              <Text style={styles.prices}>Polkadot</Text>
              <Text style={styles.prices}>DeFi</Text>
              <Text style={styles.prices}>BNB Chain</Text>
              <Text style={styles.prices}>ETF</Text>
              <Text style={styles.prices}>Fan Token</Text>
            </View>
          </View>
          <View>
            {/* ******************************** Top Gainers Heading ******************************************* */}
            <View>
              <Text style={styles.Text}>Top Gainers</Text>
            </View>
            {/* ******************************** DATA ******************************************* */}
            <View
              style={{
                rowGap: 20,
                marginTop: 17,
              }}>
              <View>
                <Text style={styles.topGainerCoin}>PHA</Text>
                <Text
                  style={{
                    color: COLORS.green,
                    fontSize: SIZES.small,
                  }}>
                  + 0.76%
                </Text>
              </View>
              <View>
                <Text style={styles.topGainerCoin}>PHA</Text>
                <Text
                  style={{
                    color: COLORS.red,
                    fontSize: SIZES.small,
                  }}>
                  - 0.76%
                </Text>
              </View>
              <View>
                <Text style={styles.topGainerCoin}>PHA</Text>
                <Text
                  style={{
                    color: COLORS.red,
                    fontSize: SIZES.small,
                  }}>
                  - 0.76%
                </Text>
              </View>
              <View>
                <Text style={styles.topGainerCoin}>PHA</Text>
                <Text
                  style={{
                    color: COLORS.green,
                    fontSize: SIZES.small,
                  }}>
                  + 0.76%
                </Text>
              </View>
              <View>
                <Text style={styles.topGainerCoin}>PHA</Text>
                <Text
                  style={{
                    color: COLORS.green,
                    fontSize: SIZES.small,
                  }}>
                  + 0.76%
                </Text>
              </View>
              <View>
                <Text style={styles.topGainerCoin}>PHA</Text>
                <Text
                  style={{
                    color: COLORS.red,
                    fontSize: SIZES.small,
                  }}>
                  - 0.76%
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* ******************************** DATA ******************************************* */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  coinName: {
    fontSize: SIZES.large,
    fontWeight: FONTWEIGHT.large,
    color: COLORS.ternary,
  },
  councry: {
    fontSize: SIZES.small,
    fontWeight: FONTWEIGHT.large,
    color: COLORS.ternary,
  },
  topGainerCoin: {
    color: COLORS.ternary,
    fontSize: SIZES.small,
    fontWeight: FONTWEIGHT.medium,
  },
  topGainerValue: {},
  prices: {
    color: COLORS.ternary,
    fontWeight: FONTWEIGHT.large,
    fontSize: SIZES.xmedium,
  },
  Text: {
    color: COLORS.ternary,
    fontWeight: FONTWEIGHT.medium,
    fontSize: SIZES.small,
  },
  priceUpDown: {
    height: 35,
    width: 100,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bitCoinName: {
    backgroundColor: COLORS.pureWhite,
    height: 30,
    width: 85,
    justifyContent: 'center',
    alignItems: 'center',
    ...SHADOWS.medium,
    borderRadius: 5,
    marginRight: 10,
  },
  coinStyle: {
    fontWeight: FONTWEIGHT.medium,
  },
});

export default Zones;
