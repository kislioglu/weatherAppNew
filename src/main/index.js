/* eslint-disable prettier/prettier */
import {StyleSheet, View} from 'react-native';
import React from 'react';
import Search from '../searchComponent/search';
import MainPage from '../mainPage/mainPage';

function HomePage() {
  return (
    <View style={styles.positionStyle}>
      <Search />
      <MainPage />
    </View>
  );
}

export default HomePage;

const styles = StyleSheet.create({
  positionStyle: {
    width: '100%',
    height: '100%',
  },
});
