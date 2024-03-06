/* eslint-disable prettier/prettier */
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {useDataContext} from '../../context/dataContext';
import {weatherIcons} from '../../../conditionIcons';

const NextDays = () => {
  const {weatherData} = useDataContext();
  const {forecast} = weatherData;

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal
      style={styles.scroll}>
      {forecast?.forecastday?.map((day, index) => {
        let date = new Date(day.date);
        let options = {weekday: 'long'};
        let dayName = date.toLocaleDateString('en-EN', options);
        return (
          <View style={styles.days} key={index}>
            <View style={styles.info}>
              <Text style={styles.dayName}>{dayName}</Text>
              <Image
                style={styles.eachIcon}
                source={weatherIcons[day?.day?.condition?.text]}
              />
              <View style={styles.temp}>
                <Text style={styles.dayName}>{day?.day?.mintemp_c + '°'}</Text>
                <Text style={styles.dayName}> - </Text>
                <Text style={styles.dayName}>{day?.day?.maxtemp_c + '°'}</Text>
              </View>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default NextDays;

const styles = StyleSheet.create({
  eachIcon: {
    width: 32,
    height: 32,
    marginTop: 5,
  },
  days: {
    width: 90,
    height: 100,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderRadius: 10,
    marginLeft: 10,
    flex: 1,
    justifyContent: 'center',
  },
  dayName: {
    color: '#000',
    fontWeight: '600',
  },
  scroll: {
    position: 'absolute',
    bottom: 20,
    left: 5,
  },
  info: {
    alignItems: 'center',
  },
  temp: {
    flexDirection: 'row',
  },
});
