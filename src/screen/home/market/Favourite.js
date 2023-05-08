import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useState } from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Image} from 'react-native-elements';
import {IMAGES} from '../../../assets/color/thems';
import {COLORS, FONTWEIGHT, SIZES} from '../../../assets/color';
import {ICONS} from '../../../assets/color/thems';

const Favourite = () => {

  const [red, setRed] = useState('red')
  const [green, setGreen] = useState('green')

  const bgColor = green ? {
    backgroundColor:COLORS.green,
  }:{
    backgroundColor:COLORS.green,
  }
  const bgColorRed = red ? {
    backgroundColor:COLORS.red,
  }:{
    backgroundColor:COLORS.red,
  }
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor:COLORS.white,
      }}>
      {/* ******************************** Heading ******************************************* */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 15,
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
      <ScrollView showsVerticalScrollIndicator = {false}>
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
          <View style = {{
            rowGap:38,
          }}>
            <View style = {{
              flexDirection:'row',
              columnGap:5,
            }}>
              <Text style = {styles.dollar}>$</Text>
              <Text style = {styles.prices}>246,702.26</Text>
            </View>
            <View style = {{
              flexDirection:'row',
              columnGap:5,
            }}>
              <Text style = {styles.dollar}>$</Text>
              <Text style = {styles.prices}>246,702.26</Text>
            </View>
            <View style = {{
              flexDirection:'row',
              columnGap:5,
            }}>
              <Text style = {styles.dollar}>$</Text>
              <Text style = {styles.prices}>246,702.26</Text>
            </View>
            <View style = {{
              flexDirection:'row',
              columnGap:5,
            }}>
              <Text style = {styles.dollar}>$</Text>
              <Text style = {styles.prices}>246,702.26</Text>
            </View>
            <View style = {{
              flexDirection:'row',
              columnGap:5,
            }}>
              <Text style = {styles.dollar}>$</Text>
              <Text style = {styles.prices}>246,702.26</Text>
            </View>
            <View style = {{
              flexDirection:'row',
              columnGap:5,
            }}>
              <Text style = {styles.dollar}>$</Text>
              <Text style = {styles.prices}>246,702.26</Text>
            </View>
            <View style = {{
              flexDirection:'row',
              columnGap:5,
            }}>
              <Text style = {styles.dollar}>$</Text>
              <Text style = {styles.prices}>246,702.26</Text>
            </View>
            <View style = {{
              flexDirection:'row',
              columnGap:5,
            }}>
              <Text style = {styles.dollar}>$</Text>
              <Text style = {styles.prices}>246,702.26</Text>
            </View>
            <View style = {{
              flexDirection:'row',
              columnGap:5,
            }}>
              <Text style = {styles.dollar}>$</Text>
              <Text style = {styles.prices}>246,702.26</Text>
            </View>
            <View style = {{
              flexDirection:'row',
              columnGap:5,
            }}>
              <Text style = {styles.dollar}>$</Text>
              <Text style = {styles.prices}>246,702.26</Text>
            </View>
            <View style = {{
              flexDirection:'row',
              columnGap:5,
            }}>
              <Text style = {styles.dollar}>$</Text>
              <Text style = {styles.prices}>246,702.26</Text>
            </View>
            <View style = {{
              flexDirection:'row',
              columnGap:5,
            }}>
              <Text style = {styles.dollar}>$</Text>
              <Text style = {styles.prices}>246,702.26</Text>
            </View>
            <View style = {{
              flexDirection:'row',
              columnGap:5,
            }}>
              <Text style = {styles.dollar}>$</Text>
              <Text style = {styles.prices}>246,702.26</Text>
            </View>
            <View style = {{
              flexDirection:'row',
              columnGap:5,
            }}>
              <Text style = {styles.dollar}>$</Text>
              <Text style = {styles.prices}>246,702.26</Text>
            </View>
            <View style = {{
              flexDirection:'row',
              columnGap:5,
            }}>
              <Text style = {styles.dollar}>$</Text>
              <Text style = {styles.prices}>246,702.26</Text>
            </View>
          </View>
          {/* ******************************** 24 Chg % ******************************************* */}
          <View style ={{
            rowGap:22,
          }}>
            <View style = {[styles.priceUpDown, bgColor]}>
              <Text style = {styles.pricesText}>+ 0.76%</Text>
            </View>
            <View style = {[styles.priceUpDown, bgColorRed]}>
              <Text style = {styles.pricesText}>- 0.76%</Text>
            </View>
            <View style = {[styles.priceUpDown, bgColor]}>
              <Text style = {styles.pricesText}>+ 0.76%</Text>
            </View>
            <View style = {[styles.priceUpDown, bgColorRed]}>
              <Text style = {styles.pricesText}>- 0.76%</Text>
            </View>
            <View style = {[styles.priceUpDown, bgColorRed]}>
              <Text style = {styles.pricesText}>- 0.76%</Text>
            </View>
            <View style = {[styles.priceUpDown, bgColorRed]}>
              <Text style = {styles.pricesText}>- 0.76%</Text>
            </View>
            <View style = {[styles.priceUpDown, bgColor]}>
              <Text style = {styles.pricesText}>+ 0.76%</Text>
            </View>
            <View style = {[styles.priceUpDown, bgColorRed]}>
              <Text style = {styles.pricesText}>- 0.76%</Text>
            </View>
            <View style = {[styles.priceUpDown, bgColor]}>
              <Text style = {styles.pricesText}>+ 0.76%</Text>
            </View>
            <View style = {[styles.priceUpDown, bgColorRed]}>
              <Text style = {styles.pricesText}>- 0.76%</Text>
            </View>
            <View style = {[styles.priceUpDown, bgColorRed]}>
              <Text style = {styles.pricesText}>- 0.76%</Text>
            </View>
            <View style = {[styles.priceUpDown, bgColorRed]}>
              <Text style = {styles.pricesText}>- 0.76%</Text>
            </View>
            <View style = {[styles.priceUpDown, bgColor]}>
              <Text style = {styles.pricesText}>+ 0.76%</Text>
            </View>
            <View style = {[styles.priceUpDown, bgColor]}>
              <Text style = {styles.pricesText}>+ 0.76%</Text>
            </View>
            <View style = {[styles.priceUpDown, bgColor]}>
              <Text style = {styles.pricesText}>+ 0.76%</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Favourite;

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
  dollar:{
    color:COLORS.ternary,
    fontWeight:FONTWEIGHT.small,
  },
  prices:{
    color:COLORS.ternary,
    fontWeight:FONTWEIGHT.large,
  },
  pricesText:{
    color:COLORS.pureWhite,
    fontWeight:FONTWEIGHT.large,
    fontSize:SIZES.medium
  },
  priceUpDown:{
    height:35,
    width:100,
    borderRadius:5,
    justifyContent:'center',
    alignItems:'center',
  },

});
