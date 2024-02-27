/* eslint-disable prettier/prettier */
import {View, Text, ImageBackground, StyleSheet} from 'react-native';
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
        source={conditionImages[current?.condition?.text]}
        blurRadius={100}>
        <HomePage />
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  bg_image: {
    width: '100%',
    height: '100%',
  },
});

export default BackgroundImage;
