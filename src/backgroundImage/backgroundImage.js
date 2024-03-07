/* eslint-disable prettier/prettier */
import {View, ImageBackground, StyleSheet} from 'react-native';
import React from 'react';
import HomePage from '../main';
import {conditionImages} from '../../constants/conditionImages';
import {useDataContext} from '../context/dataContext';

function BackgroundImage() {
  const {weatherData} = useDataContext();

  const {current} = weatherData;
  return (
    <View>
      <ImageBackground
        style={styles.bg_image}
        source={conditionImages[current?.condition?.text] ?? require('../../assets/weatherconditionimgs/blizzard.jpg')}
        blurRadius={100}>
        <HomePage />
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  bg_image: {
    width: '100%',
    // backgroundColor: '#50C4ED',
    height: '100%',
  },
});

export default BackgroundImage;
