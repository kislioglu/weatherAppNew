/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';
import {DataProvider} from './src/context/dataContext';
import BackgroundImage from './src/backgroundImage/backgroundImage';

function App() {
  return (
    <View>
      <DataProvider>
        <BackgroundImage />
      </DataProvider>
    </View>
  );
}

// const styles = StyleSheet.create({
//   bg_image: {
//     width: '100%',
//     height: '100%',
//   },
// });

export default App;
