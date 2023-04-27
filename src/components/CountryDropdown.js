import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import countriesData from './Countries.json';

export default function App() {
  const [countries, setCountries] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    const countriesList = countriesData.countries.map(country => ({
      name: country.name,
      flag: country.flag,
      code: country.code,
    }));
    setCountries(countriesList);
  }, []);

  const handleCountrySelect = country => {
    setSelectedCountry(country);
    setIsDropdownOpen(false);
  };

  const renderCountry = ({item}) => (
    <TouchableOpacity
      style={styles.countryContainer}
      onPress={() => handleCountrySelect(item)}>
      <Text style={styles.countryFlag}>{item.flag}</Text>
      <Text style={styles.countryCode}>{item.code}</Text>
      {/* <Text style={styles.countryName}>{item.name}</Text> */}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container} accessibilityElementsHidden>
      <TouchableOpacity
        style={styles.dropdownHeader}
        onPress={() => setIsDropdownOpen(!isDropdownOpen)}>
        {selectedCountry ? (
          <>
            <Text style={styles.countryFlag}>{selectedCountry.flag}</Text>
            <Text style={styles.selectedCountryCode}>{selectedCountry.code}</Text>
            <Image source={require('../images/drop.png')} style ={{height:10, width:10,marginLeft:5,alignSelf:'center'}} />
          </>
        ) : (
          <View style ={{flexDirection:'row', columnGap:10,marginTop:5}}>
            <Image source={require('../images/countryLogo.png')} style = {{height:20, width:20}}/>
            <Text style={{color:'#000'}}>+91</Text>
            <Image source={require('../images/drop.png')} style ={{height:10, width:10,alignSelf:'center'}} />
          </View>
        )}
      </TouchableOpacity>
      {/* {isDropdownOpen && (
        <FlatList
          data={countries}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderCountry}
          style ={styles.list}
        />
      )} */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
  },
  dropdownHeader: {
    flexDirection: 'row',
    
    padding: 12,
    paddingTop:15,
    borderRadius: 10, 
    backgroundColor: '#ffffff',
  },
  list:{
    // borderWidth:1,
    borderRadius:10,
  
  },
  countryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    height:50,
    backgroundColor:'#FFF'
  },
  countryFlag: {
    fontSize: 20,
    marginRight: 10,
    alignSelf:'center'
  },
  countryName: {
    flex: 1,
    fontSize: 16,
    marginLeft:30
  },
  countryCode: {
    fontSize: 16,
    fontWeight: 'bold',
    color:'#000'
  },
  selectedCountryName: {
    flex: 1,
    marginLeft: 10,
  },
  selectedCountryCode: {
    fontWeight: 'bold',
    color:'#000',
    alignSelf:'center'
  },
});
