import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTWEIGHT, SIZES} from '../../assets/color';
import {bool} from 'yup';
// import countries from '../../components/Countries.json';
// import {data} from '../../assets/Country';
import {dropList} from '../../images/images';
import Btn from '../../components/buttons/Btn';
 

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

const CreateAccount = ({navigation}) => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [showCountries, setShowCountries] = useState(false);

  const toggleCountries = () => {
    setShowCountries(!showCountries);
  };

  const selectCountry = country => {
    setSelectedCountry(country);
    setShowCountries(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerItem}>
        <View style={{marginTop: 50, rowGap: 16}}>
          <TouchableOpacity style={styles.cross} onPress={() => navigation.navigate('LoginScreen')} >
            <Image source={require('../../images/cross.png')} />
          </TouchableOpacity>

          <Text style={styles.heading}>Welcome to Almazx</Text>
          <Text style={styles.paragraf}>
            Before we start, please enter your current location of residence.
          </Text>
        </View>
        {/* ££££££££££££££££££££££££££££ Country/Area of Residence £££££££££££££££££££££££££££££££££££££££££££££  */}
        <View style={styles.listCountry}>
          <Text style={{color: COLORS.ternary, fontSize: SIZES.xmedium}}>
            Country/Area of Residence
          </Text>
          <View style={styles.box}>
            <TouchableOpacity onPress={toggleCountries} style={styles.icon}>
              <Text style = {{color:COLORS.secondary}}>
                {selectedCountry.flag}
                {'    '}
                {selectedCountry.name}
                
              </Text>
              <Image
                source={require('../../images/GroupDrop.png')}
                style={{}}
              />
            </TouchableOpacity>

            {showCountries && (
              <FlatList
                style={[styles.flatListItem]}
                data={countries}
                renderItem={({item}) => (
                  <TouchableOpacity
                    onPress={() => selectCountry(item)}
                    style={{padding: 10}}>
                    <Text style={{backgroundColor: '#FFFFFF',color:COLORS.secondary}}>
                      {item.flag}
                      {'    '}
                      {item.name}
                      {'    '}
                      {item.code}
                    </Text>
                  </TouchableOpacity>
                )}
                keyExtractor={item => item.id}
              />
            )}
          </View>
        </View>
        <View style = {{marginTop:25}}>
          <Text style ={{color:COLORS.secondary, fontSize:SIZES.medium}}>
            The registration process is subject to change based on the
            information you provide.
          </Text>
        </View>
        <View style ={{marginTop:'20%'}}>
          <Btn title={'Confirm'} BgColor={COLORS. blue} Press={()=> navigation.navigate('AlmaxzAccount')} />
        </View>
        {/* *************************** Last ************************ */}
      </View>
    </SafeAreaView>
  );
};

export default CreateAccount;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 26,
  },
  containerItem: {
    backgroundColor: '#F5F5F5',
    flex: 1,
    // borderWidth: 1,
  },
  heading: {
    color: COLORS.primary,
    fontSize: SIZES.xLarge,
    fontWeight: FONTWEIGHT.medium,
  },
  paragraf: {
    color: COLORS.secondary,
    fontSize: SIZES.medium,
  },
  listCountry: {
    marginTop: 60,
    rowGap: 10,
    
  },
  flatListItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    height: '60%',
  },
  box: {
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 1,
      height: -5,
    },
    shadowRadius: 20,
    elevation: 5,
  },
  icon: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
  },
  cross: {
    height: 15,
    width: 15,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    marginLeft: '95%',
  },
});
