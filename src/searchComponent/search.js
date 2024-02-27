/* eslint-disable prettier/prettier */
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useDataContext} from '../context/dataContext';

function Search() {
  const {setCity, autoComplete} = useDataContext();
  const [showAutoComplete, setShowAutoComplete] = useState(false);

  const handleSearch = text => {
    setCity(text);
    setShowAutoComplete(true);
  };

  const handlePress = cities => {
    setCity(cities.name);
    setShowAutoComplete(false);
  };

  return (
    <View style={styles.container}>
      {/* search */}
      <TextInput
        style={styles.searchStyle}
        placeholder="Find a location"
        placeholderTextColor="#000"
        // value={city}
        onChangeText={handleSearch}
      />
      {/* autoComplete */}
      <View style={styles.autoCompleteStyle}>
        {showAutoComplete
          ? autoComplete
            ? autoComplete.length > 0
              ? autoComplete.map((cities, index) => {
                  return (
                    <TouchableOpacity
                      onPress={() => handlePress(cities)}
                      activeOpacity={0.7}
                      style={[
                        styles.autoCompleteCitiesStyle,
                        index === autoComplete.length - 1 &&
                          styles.withoutBorder,
                      ]}
                      key={index}>
                      <View style={styles.eachCityStyle}>
                        <Image
                          source={require('../../assets/other/location.png')}
                        />
                        <Text style={styles.citiesStyle}>
                          {cities.name + ','}
                        </Text>
                        <Text style={styles.citiesCountryStyle}>
                          {cities.country}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  );
                })
              : null
            : null
          : null}
      </View>
    </View>
  );
}

export default Search;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  searchStyle: {
    borderBottomWidth: 2,
    paddingLeft: 10,
    width: '100%',
    fontWeight: 'bold',
  },
  autoCompleteStyle: {
    position: 'absolute',
    top: 45,
    left: 'auto',
    right: 'auto',
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  autoCompleteCitiesStyle: {
    color: '#000',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5,
    borderBottomWidth: 1,
  },
  citiesStyle: {
    fontWeight: 'bold',
    color: '#000',
    letterSpacing: 0.3,
    paddingLeft: 10,
    fontSize: 15,
  },
  citiesCountryStyle: {
    fontWeight: '600',
    marginLeft: 5,
    fontSize: 14,
  },
  eachCityStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
  },
  withoutBorder: {
    borderBottomWidth: 0,
  },
});
