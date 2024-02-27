/* eslint-disable prettier/prettier */
import {View, StyleSheet} from 'react-native';
import {React} from 'react';

import NextDays from './nextDays/NextDays';
import CurrentDay from './currentDay/currentDay';

export default function MainPage() {
  return (
    <View style={styles.container}>
      <CurrentDay />
      <NextDays />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
