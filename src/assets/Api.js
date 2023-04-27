import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import countriesData from './countries.json';

export default function App() {
  const [countries, setCountries] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    const countriesList = countriesData.countries.map(country => ({
      name: country.name,
      flag: country.flag,
      code: country.code
    }));
    setCountries(countriesList);
  }, []);

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setIsDropdownOpen(false);
  };

  const renderCountry = ({ item }) => (
    <TouchableOpacity style={styles.countryContainer} onPress={() => handleCountrySelect(item)}>
      <Text style={styles.countryFlag}>{item.flag}</Text>
      <Text style={styles.countryName}>{item.name}</Text>
      <Text style={styles.countryCode}>{item.code}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.dropdownHeader} onPress={() => setIsDropdownOpen(!isDropdownOpen)}>
        {selectedCountry ? (
          <>
            <Text style={styles.countryFlag}>{selectedCountry.flag}</Text>
            <Text style={styles.selectedCountryName}>{selectedCountry.name}</Text>
            <Text style={styles.selectedCountryCode}>{selectedCountry.code}</Text>
          </>
        ) : (
          <Text>Select a country</Text>
        )}
      </TouchableOpacity>
      {isDropdownOpen && (
        <FlatList
          data={countries}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderCountry}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20
  },
  dropdownHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5
  },
  countryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  countryFlag: {
    fontSize: 20,
    marginRight: 10
  },
  countryName: {
    flex: 1,
    fontSize: 16
  },
  countryCode: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  selectedCountryName: {
    flex: 1,
    marginLeft: 10
  },
  selectedCountryCode: {
    fontWeight: 'bold'
  }
});
