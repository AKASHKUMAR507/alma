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

const Spot = () => {
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
          marginTop: 10,
          marginBottom:10,
        }}>
        {/* <ScrollView horizontal={true} rowGap={10}>
          <TouchableOpacity>
            <View style={styles.bitCoinName}>
              <Text>BUSD</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.bitCoinName}>
              <Text>BTS</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.bitCoinName}>
              <Text>MATIC</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.bitCoinName}>
              <Text>SOL</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.bitCoinName}>
              <Text>ETH</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.bitCoinName}>
              <Text>BNB</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.bitCoinName}>
              <Text>BNB</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.bitCoinName}>
              <Text>BNB</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.bitCoinName}>
              <Text>BNB</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.bitCoinName}>
              <Text>BNB</Text>
            </View>
          </TouchableOpacity>
        </ScrollView> */}
        <FlatList
          data={DATA}
          renderItem={({item}) => (
            <TouchableOpacity onPress={handlePress}>
              <View style={styles.bitCoinName} >
                <Text style={[styles.coinStyle, textColor]} >{item.title}</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
          horizontal={true}
          style={{
            backgroundColor: COLORS.white,
          }}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      {/* ******************************** Heading ******************************************* */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 10,
        }}>
        <View>
          <TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                columnGap: 3,
              }}>
              <Text
                style={{
                  color: COLORS.ternary,
                  fontWeight: FONTWEIGHT.large,
                }}>
                Pair/INR
              </Text>
              <Image
                source={IMAGES.drop}
                style={{height: SIZES.xSmall - 2, width: SIZES.xSmall - 2}}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                columnGap: 3,
              }}>
              <Text
                style={{
                  color: COLORS.ternary,
                  fontWeight: FONTWEIGHT.large,
                }}>
                Price
              </Text>
              <View
                style={{
                  alignItems: 'center',
                }}>
                <Image
                  source={IMAGES.drop}
                  style={{
                    height: SIZES.xSmall - 2,
                    width: SIZES.xSmall - 2,
                    transform: [{rotate: '180deg'}],
                  }}
                />
                <Image
                  source={IMAGES.drop}
                  style={{height: SIZES.xSmall - 2, width: SIZES.xSmall - 2}}
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                columnGap: 3,
              }}>
              <Text
                style={{
                  color: COLORS.ternary,
                  fontWeight: FONTWEIGHT.large,
                }}>
                24 Chg%
              </Text>
              <View>
                <Image
                  source={IMAGES.drop}
                  style={{
                    height: SIZES.xSmall - 2,
                    width: SIZES.xSmall - 2,
                    transform: [{rotate: '180deg'}],
                  }}
                />
                <Image
                  source={IMAGES.drop}
                  style={{height: SIZES.xSmall - 2, width: SIZES.xSmall - 2}}
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      {/* ******************************** DATA ******************************************* */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            marginTop: SIZES.xSmall,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          {/* ******************************** Pair/INR ******************************************* */}
          <View
            style={{
              flexDirection: 'column',
              rowGap: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                columnGap: 5,
                alignItems: 'center',
              }}>
              <Image
                source={ICONS.ftm}
                style={{
                  height: 25,
                  width: 25,
                }}
              />
              <View
                style={{
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Text style={styles.coinName}>FTM</Text>
                  <Text style={styles.councry}>{` / `}INR</Text>
                </View>
                <View>
                  <Text style={styles.values}>Vol:172.26M</Text>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                columnGap: 5,
                alignItems: 'center',
              }}>
              <Image
                source={ICONS.pnt}
                style={{
                  height: 25,
                  width: 25,
                }}
              />
              <View
                style={{
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Text style={styles.coinName}>XEC</Text>
                  <Text style={styles.councry}>{` / `}INR</Text>
                </View>
                <View>
                  <Text style={styles.values}>Vol:172.26M</Text>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                columnGap: 5,
                alignItems: 'center',
              }}>
              <Image
                source={ICONS.mir}
                style={{
                  height: 25,
                  width: 25,
                }}
              />
              <View
                style={{
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Text style={styles.coinName}>MIR</Text>
                  <Text style={styles.councry}>{` / `}INR</Text>
                </View>
                <View>
                  <Text style={styles.values}>Vol:172.26M</Text>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                columnGap: 5,
                alignItems: 'center',
              }}>
              <Image
                source={ICONS.bnb}
                style={{
                  height: 25,
                  width: 25,
                }}
              />
              <View
                style={{
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Text style={styles.coinName}>BNB</Text>
                  <Text style={styles.councry}>{` / `}INR</Text>
                </View>
                <View>
                  <Text style={styles.values}>Vol:172.26M</Text>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                columnGap: 5,
                alignItems: 'center',
              }}>
              <Image
                source={ICONS.bts}
                style={{
                  height: 25,
                  width: 25,
                }}
              />
              <View
                style={{
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Text style={styles.coinName}>BTS</Text>
                  <Text style={styles.councry}>{` / `}INR</Text>
                </View>
                <View>
                  <Text style={styles.values}>Vol:172.26M</Text>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                columnGap: 5,
                alignItems: 'center',
              }}>
              <Image
                source={ICONS.pnt}
                style={{
                  height: 25,
                  width: 25,
                }}
              />
              <View
                style={{
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Text style={styles.coinName}>PNT</Text>
                  <Text style={styles.councry}>{` / `}INR</Text>
                </View>
                <View>
                  <Text style={styles.values}>Vol:172.26M</Text>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                columnGap: 5,
                alignItems: 'center',
              }}>
              <Image
                source={ICONS.mir}
                style={{
                  height: 25,
                  width: 25,
                }}
              />
              <View
                style={{
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Text style={styles.coinName}>RFQ</Text>
                  <Text style={styles.councry}>{` / `}INR</Text>
                </View>
                <View>
                  <Text style={styles.values}>Vol:172.26M</Text>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                columnGap: 5,
                alignItems: 'center',
              }}>
              <Image
                source={ICONS.bts}
                style={{
                  height: 25,
                  width: 25,
                }}
              />
              <View
                style={{
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Text style={styles.coinName}>SOL</Text>
                  <Text style={styles.councry}>{` / `}INR</Text>
                </View>
                <View>
                  <Text style={styles.values}>Vol:172.26M</Text>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                columnGap: 5,
                alignItems: 'center',
              }}>
              <Image
                source={ICONS.bnb}
                style={{
                  height: 25,
                  width: 25,
                }}
              />
              <View
                style={{
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Text style={styles.coinName}>YTS</Text>
                  <Text style={styles.councry}>{` / `}INR</Text>
                </View>
                <View>
                  <Text style={styles.values}>Vol:172.26M</Text>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                columnGap: 5,
                alignItems: 'center',
              }}>
              <Image
                source={ICONS.ftm}
                style={{
                  height: 25,
                  width: 25,
                }}
              />
              <View
                style={{
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Text style={styles.coinName}>FTM</Text>
                  <Text style={styles.councry}>{` / `}INR</Text>
                </View>
                <View>
                  <Text style={styles.values}>Vol:172.26M</Text>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                columnGap: 5,
                alignItems: 'center',
              }}>
              <Image
                source={ICONS.bts}
                style={{
                  height: 25,
                  width: 25,
                }}
              />
              <View
                style={{
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Text style={styles.coinName}>YTL</Text>
                  <Text style={styles.councry}>{` / `}INR</Text>
                </View>
                <View>
                  <Text style={styles.values}>Vol:172.26M</Text>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                columnGap: 5,
                alignItems: 'center',
              }}>
              <Image
                source={ICONS.ftm}
                style={{
                  height: 25,
                  width: 25,
                }}
              />
              <View
                style={{
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Text style={styles.coinName}>FTM</Text>
                  <Text style={styles.councry}>{` / `}INR</Text>
                </View>
                <View>
                  <Text style={styles.values}>Vol:172.26M</Text>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                columnGap: 5,
                alignItems: 'center',
              }}>
              <Image
                source={ICONS.mir}
                style={{
                  height: 25,
                  width: 25,
                }}
              />
              <View
                style={{
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Text style={styles.coinName}>FTM</Text>
                  <Text style={styles.councry}>{` / `}INR</Text>
                </View>
                <View>
                  <Text style={styles.values}>Vol:172.26M</Text>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                columnGap: 5,
                alignItems: 'center',
              }}>
              <Image
                source={ICONS.bnb}
                style={{
                  height: 25,
                  width: 25,
                }}
              />
              <View
                style={{
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Text style={styles.coinName}>YTS</Text>
                  <Text style={styles.councry}>{` / `}INR</Text>
                </View>
                <View>
                  <Text style={styles.values}>Vol:172.26M</Text>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                columnGap: 5,
                alignItems: 'center',
              }}>
              <Image
                source={ICONS.ftm}
                style={{
                  height: 25,
                  width: 25,
                }}
              />
              <View
                style={{
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Text style={styles.coinName}>FTM</Text>
                  <Text style={styles.councry}>{` / `}INR</Text>
                </View>
                <View>
                  <Text style={styles.values}>Vol:172.26M</Text>
                </View>
              </View>
            </View>
          </View>
          {/* ******************************** Price ******************************************* */}
          <View
            style={{
              rowGap: 38,
            }}>
            <View
              style={{
                flexDirection: 'row',
                columnGap: 5,
              }}>
              <Text style={styles.dollar}>$</Text>
              <Text style={styles.prices}>246,702.26</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                columnGap: 5,
              }}>
              <Text style={styles.dollar}>$</Text>
              <Text style={styles.prices}>246,702.26</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                columnGap: 5,
              }}>
              <Text style={styles.dollar}>$</Text>
              <Text style={styles.prices}>246,702.26</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                columnGap: 5,
              }}>
              <Text style={styles.dollar}>$</Text>
              <Text style={styles.prices}>246,702.26</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                columnGap: 5,
              }}>
              <Text style={styles.dollar}>$</Text>
              <Text style={styles.prices}>246,702.26</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                columnGap: 5,
              }}>
              <Text style={styles.dollar}>$</Text>
              <Text style={styles.prices}>246,702.26</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                columnGap: 5,
              }}>
              <Text style={styles.dollar}>$</Text>
              <Text style={styles.prices}>246,702.26</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                columnGap: 5,
              }}>
              <Text style={styles.dollar}>$</Text>
              <Text style={styles.prices}>246,702.26</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                columnGap: 5,
              }}>
              <Text style={styles.dollar}>$</Text>
              <Text style={styles.prices}>246,702.26</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                columnGap: 5,
              }}>
              <Text style={styles.dollar}>$</Text>
              <Text style={styles.prices}>246,702.26</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                columnGap: 5,
              }}>
              <Text style={styles.dollar}>$</Text>
              <Text style={styles.prices}>246,702.26</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                columnGap: 5,
              }}>
              <Text style={styles.dollar}>$</Text>
              <Text style={styles.prices}>246,702.26</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                columnGap: 5,
              }}>
              <Text style={styles.dollar}>$</Text>
              <Text style={styles.prices}>246,702.26</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                columnGap: 5,
              }}>
              <Text style={styles.dollar}>$</Text>
              <Text style={styles.prices}>246,702.26</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                columnGap: 5,
              }}>
              <Text style={styles.dollar}>$</Text>
              <Text style={styles.prices}>246,702.26</Text>
            </View>
          </View>
          {/* ******************************** 24 Chg % ******************************************* */}
          <View
            style={{
              rowGap: 22,
            }}>
            <View style={[styles.priceUpDown, bgColor]}>
              <Text style={styles.pricesText}>+ 0.76%</Text>
            </View>
            <View style={[styles.priceUpDown, bgColorRed]}>
              <Text style={styles.pricesText}>- 0.76%</Text>
            </View>
            <View style={[styles.priceUpDown, bgColor]}>
              <Text style={styles.pricesText}>+ 0.76%</Text>
            </View>
            <View style={[styles.priceUpDown, bgColorRed]}>
              <Text style={styles.pricesText}>- 0.76%</Text>
            </View>
            <View style={[styles.priceUpDown, bgColorRed]}>
              <Text style={styles.pricesText}>- 0.76%</Text>
            </View>
            <View style={[styles.priceUpDown, bgColorRed]}>
              <Text style={styles.pricesText}>- 0.76%</Text>
            </View>
            <View style={[styles.priceUpDown, bgColor]}>
              <Text style={styles.pricesText}>+ 0.76%</Text>
            </View>
            <View style={[styles.priceUpDown, bgColorRed]}>
              <Text style={styles.pricesText}>- 0.76%</Text>
            </View>
            <View style={[styles.priceUpDown, bgColor]}>
              <Text style={styles.pricesText}>+ 0.76%</Text>
            </View>
            <View style={[styles.priceUpDown, bgColorRed]}>
              <Text style={styles.pricesText}>- 0.76%</Text>
            </View>
            <View style={[styles.priceUpDown, bgColorRed]}>
              <Text style={styles.pricesText}>- 0.76%</Text>
            </View>
            <View style={[styles.priceUpDown, bgColorRed]}>
              <Text style={styles.pricesText}>- 0.76%</Text>
            </View>
            <View style={[styles.priceUpDown, bgColor]}>
              <Text style={styles.pricesText}>+ 0.76%</Text>
            </View>
            <View style={[styles.priceUpDown, bgColor]}>
              <Text style={styles.pricesText}>+ 0.76%</Text>
            </View>
            <View style={[styles.priceUpDown, bgColor]}>
              <Text style={styles.pricesText}>+ 0.76%</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Spot;

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
  values: {
    fontSize: SIZES.small,
    fontWeight: FONTWEIGHT.large,
    color: COLORS.ternary,
  },
  dollar: {
    color: COLORS.ternary,
    fontWeight: FONTWEIGHT.small,
  },
  prices: {
    color: COLORS.ternary,
    fontWeight: FONTWEIGHT.large,
  },
  pricesText: {
    color: COLORS.pureWhite,
    fontWeight: FONTWEIGHT.large,
    fontSize: SIZES.medium,
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
    width: 55,
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
