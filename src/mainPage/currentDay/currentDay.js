/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import {React} from 'react';
import {useDataContext} from '../../context/dataContext';
import {weatherIcons} from '../../../conditionIcons';
function CurrentDay() {

  const {weatherData,astroData} = useDataContext();

  const {current} = weatherData;


  return (
    <View>
      <View style={styles.calledCityInformations}>
        <View style={styles.currentDayCondition}>
          {current ? (
            <Text style={styles.degree}>{current.temp_c + '°'}</Text>
          ) : null}
          {current ? (
            <Image
              style={styles.iconStyle}
              source={weatherIcons[current.condition.text]}
            />
          ) : null}
          <Text style={styles.conditionStyle}>{current?.condition?.text}</Text>
        </View>
        <ScrollView style={styles.currentDayOtherInfo}>
          {current ? (
            <ScrollView style={styles.currentStyles}>
              <View style={styles.eachInfoStyle}>
                <Text style={styles.textStyle}>Wind</Text>
                <View style={styles.ratesStyle}>
                  <Text style={styles.textStyle}>{current?.wind_kph}</Text>
                  <Image
                    style={styles.ratesIconStyle}
                    source={require('../../../assets/icons/wind_rate.png')}
                  />
                </View>
              </View>
              <View style={styles.eachInfoStyle}>
                <Text style={styles.textStyle}>Humidity</Text>
                <View style={styles.ratesStyle}>
                  <Text style={styles.textStyle}>
                    {'%' + current?.humidity}
                  </Text>
                  <Image
                    style={styles.ratesIconStyle}
                    source={require('../../../assets/icons/humidity_rate.png')}
                  />
                </View>
              </View>
              <View style={styles.eachInfoStyle}>
                <Text style={styles.textStyle}>Cloud</Text>
                <View style={styles.ratesStyle}>
                  <Text style={styles.textStyle}>{'%' + current?.cloud}</Text>
                  <Image
                    style={styles.ratesIconStyle}
                    source={require('../../../assets/icons/cloud_rate.png')}
                  />
                </View>
              </View>
              <View style={styles.eachInfoStyle}>
                <View style={styles.sunRSStyle}>
                  <View style={styles.sunRiseAndSet}>
                    <Text style={styles.textStyle}>Sunrise</Text>
                    <View style={styles.sunSetStyle}>
                      <Image
                        style={styles.sunIconStyle}
                        source={require('../../../assets/icons/sunrise.png')}
                      />
                      <Text style={styles.textStyle}>{astroData[0]}</Text>
                    </View>
                  </View>
                  <View style={styles.sunRiseAndSet}>
                    <Text style={styles.textStyle}>Sunset</Text>
                    <View style={styles.sunSetStyle}>
                      <Image
                        style={styles.sunIconStyle}
                        source={require('../../../assets/icons/sunset.png')}
                      />
                      <Text style={styles.textStyle}>{astroData[1]}</Text>
                    </View>
                  </View>
                </View>
              </View>
            </ScrollView>
          ) : null}
        </ScrollView>
      </View>
    </View>
  );
}

export default CurrentDay;

const styles = StyleSheet.create({
  calledCityInformations: {
    padding: 10,
    alignItems: 'center',
    flex: 1,
    top: 50,
  },
  currentDayCondition: {
    alignItems: 'center',
  },
  currentStyles: {
    marginTop: 20,
    flex: 1,
    height: 300,
    width: '100%',
  },
  currentDayOtherInfo: {
    width: 400,
  },
  conditionStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
  },
  degree: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 80,
  },
  iconStyle: {
    width: 40,
    height: 40,
  },
  textStyle: {
    fontWeight: 'bold',
    color: '#000',
    marginLeft: 15,
  },
  eachInfoStyle: {
    width: '90%',
    height: 80,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 5,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  ratesStyle: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  ratesIconStyle: {
    width: 40,
    height: 40,
    marginLeft: 15,
    marginRight: 15,
  },
  sunIconStyle: {
    width: 30,
    height: 30,
    marginLeft: 15,
  },
  sunSetStyle: {
    alignItems: 'center',
    gap: 4,
  },
  sunRiseAndSet: {
    alignItems: 'center',
    gap: 2,
  },
  sunRSStyle: {
    flexDirection: 'row',
    width: '95%',
    justifyContent: 'space-between',
  },
});
