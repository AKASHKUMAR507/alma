import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect} from 'react';
import Profiles from '../../components/home/Profiles';
import Search from '../../components/home/Search';
import DayNight from '../../components/home/DayNight';
import Notification from '../../components/home/Notification';
import Scanner from '../../components/home/Scanner';
import {COLORS} from '../../assets/color';
import {FONTWEIGHT, ICONS, IMAGES, SIZES} from '../../assets/color/thems';
import {NotificationServices, requestUserPermission} from '../../utils/PushNotifications';
 

const {height, width} = Dimensions.get('screen');

const Home = () => {
  // useEffect(() =>{
  //   requestUserPermission()
  //   NotificationServices()
  // },[])
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        {/* ************************************************* HEADER ****************************** */}
        <View style={styles.item1}>
          <Profiles />
          <View
            style={{
              width: '40%',
            }}>
            <Search />
          </View>
          <DayNight />
          <Scanner />
          <Notification />
        </View>
        {/* ************************************************* HEADING IMAGES ****************************** */}
        <View style={styles.item2}>
          <Image
            source={IMAGES.mainImage}
            resizeMode="cover"
            style={{
              height: height * 0.25,
              width: width * 0.895,
              borderRadius: 10,
            }}
          />
        </View>
        {/* ************************************************* Announcement ****************************** */}
        <View style={styles.item3}>
          <Image source={ICONS.voice} />
          <Text
            style={{color: COLORS.secondary, fontSize: SIZES.xxSmall + 0.5}}>
            Announcement on the Suspennsion of the MANDOX
          </Text>
          <TouchableOpacity>
            <Image source={ICONS.menu} />
          </TouchableOpacity>
        </View>
        {/* ************************************************* Announcement ****************************** */}
        <View
          style={{
            flexDirection: 'row',
            columnGap: 10,
          }}>
          <View>
            <View
              style={{
                flexDirection: 'row',
                columnGap: 4,
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: SIZES.large - 2,
                  color: COLORS.ternary,
                  fontWeight: FONTWEIGHT.large,
                }}>
                BTC/USDT
              </Text>
              <Text
                style={{
                  fontSize: SIZES.medium - 2,
                  fontWeight: FONTWEIGHT.medium,
                  color: COLORS.error,
                }}>
                -0.50%
              </Text>
            </View>
            <Text
              style={{
                fontSize: SIZES.large - 2,
                fontWeight: FONTWEIGHT.large,
                color: COLORS.error,
              }}>
              2.1048
            </Text>
            <Text
              style={{
                fontSize: SIZES.medium - 1,
                fontWeight: FONTWEIGHT.medium,
                color:COLORS.secondary,
              }}>
              $45942.44
            </Text>
          </View>
          <View>
            <View
              style={{
                flexDirection: 'row',
                columnGap: 4,
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: SIZES.large - 2,
                  color: COLORS.ternary,
                  fontWeight: FONTWEIGHT.large,
                }}>
                BTC/USDT
              </Text>
              <Text
                style={{
                  fontSize: SIZES.medium - 2,
                  fontWeight: FONTWEIGHT.medium,
                  color: COLORS.green,
                }}>
                -0.50%
              </Text>
            </View>
            <Text
              style={{
                fontSize: SIZES.large - 2,
                fontWeight: FONTWEIGHT.large,
                color: COLORS.green,
              }}>
              2.1048
            </Text>
            <Text
              style={{
                fontSize: SIZES.medium - 1,
                fontWeight: FONTWEIGHT.medium,
                color:COLORS.secondary,
              }}>
              $45942.44
            </Text>
          </View>
          <View>
            <View
              style={{
                flexDirection: 'row',
                columnGap: 4,
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: SIZES.large - 2,
                  color: COLORS.ternary,
                  fontWeight: FONTWEIGHT.large,
                }}>
                BTC/USDT
              </Text>
              <Text
                style={{
                  fontSize: SIZES.medium - 2,
                  fontWeight: FONTWEIGHT.medium,
                  color: COLORS.green,
                }}>
                -0.50%
              </Text>
            </View>
            <Text
              style={{
                fontSize: SIZES.large - 2,
                fontWeight: FONTWEIGHT.large,
                color: COLORS.green,
              }}>
              2.1048
            </Text>
            <Text
              style={{
                fontSize: SIZES.medium - 1,
                fontWeight: FONTWEIGHT.medium,
                color:COLORS.secondary,
              }}>
              $45942.44
            </Text>
          </View>
          <View>
            <View
              style={{
                flexDirection: 'row',
                columnGap: 4,
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: SIZES.large - 2,
                  color: COLORS.ternary,
                  fontWeight: FONTWEIGHT.large,
                }}>
                BTC/USDT
              </Text>
              <Text
                style={{
                  fontSize: SIZES.medium - 2,
                  fontWeight: FONTWEIGHT.medium,
                  color: COLORS.error,
                }}>
                -0.50%
              </Text>
            </View>
            <Text
              style={{
                fontSize: SIZES.large - 2,
                fontWeight: FONTWEIGHT.large,
                color: COLORS.error,
              }}>
              2.1048
            </Text>
            <Text
              style={{
                fontSize: SIZES.medium - 1,
                fontWeight: FONTWEIGHT.medium,
                color:COLORS.secondary,
              }}>
              $45942.44
            </Text>
          </View>
          <View>
            <View
              style={{
                flexDirection: 'row',
                columnGap: 4,
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: SIZES.large - 2,
                  color: COLORS.ternary,
                  fontWeight: FONTWEIGHT.large,
                }}>
                BTC/USDT
              </Text>
              <Text
                style={{
                  fontSize: SIZES.medium - 2,
                  fontWeight: FONTWEIGHT.medium,
                  color: COLORS.error,
                }}>
                -0.50%
              </Text>
            </View>
            <Text
              style={{
                fontSize: SIZES.large - 2,
                fontWeight: FONTWEIGHT.large,
                color: COLORS.error,
              }}>
              2.1048
            </Text>
            <Text
              style={{
                fontSize: SIZES.medium - 1,
                fontWeight: FONTWEIGHT.medium,
                color:COLORS.secondary,
              }}>
              $45942.44
            </Text>
          </View>
        </View>
        {/* ************************************************* KYC ****************************** */}
        <View
          style={{
            height: 1,
            backgroundColor: COLORS.secondary,
            marginTop: height * 0.015,
          }}
        />
        <View
          style={{
            height: height * 0.05,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              textTransform: 'uppercase',
              textAlign: 'center',
              color: COLORS.secondary,
              fontSize: SIZES.large - 2,
              fontWeight: FONTWEIGHT.large,
            }}>
            complete kyc to deposite funds
          </Text>
        </View>
        {/* ************************************************* DropMenu ****************************** */}
        <View style ={{
          flexDirection:'row',
          justifyContent:'space-between',
          alignItems:'center',
          width: '100%',
          borderWidth:1
        }}>
          <View
            style={{
              height: 1,
              width:width*0.3,
              backgroundColor: COLORS.secondary,
            }}
          />
          <View>
            <Image source={ICONS.doubleDownArrow} tintColor={COLORS.primary} />
          </View>
          <View
            style={{
              height: 1,
              width:width*0.3,
              backgroundColor: COLORS.secondary,
            }}
          />

        </View>
        {/* ************************************************* Announcement ****************************** */}

        {/* ************************************************* Announcement ****************************** */}
      </View>
       
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
  },
  main: {
    flex: 1,
     
  },
  
  item1: {
    flexDirection: 'row',
    alignItems: 'center',

    justifyContent: 'space-between',
    height: height * 0.07,
  },
  item2: {
    borderRadius: 10,
  },
  item3: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: height * 0.04,
  },
});
