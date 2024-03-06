/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import {React} from 'react';
import {useDataContext} from '../../context/dataContext';
import {weatherIcons} from '../../../conditionIcons';
// import AutoScrollText from '../../animatedText/AutoScrollText';
function CurrentDay() {
  const {weatherData, astroData} = useDataContext();
  const {current, location} = weatherData;
  return (
    <View>
      {/* temps, current condition, feelslike */}
      <View style={styles.calledCityInformations}>
        {/* current location */}
        <View style={styles.feelslikeAndConditionInfo}>
          {current ? (
            <View style={styles.degreesInfo}>
              <Text style={styles.degree}>{current.temp_c + '°'}</Text>

              {location ? (
                <View style={styles.currentLocationStyle}>
                  <Image
                    source={require('../../../assets/other/location.png')}
                  />
                  <Text style={styles.fontStyle}>{location?.name}</Text>
                </View>
              ) : null}
            </View>
          ) : null}
          <View style={styles.currentDayCondition}>
            {current ? (
              <View style={styles.currentConditionInfo}>
                {/* <AutoScrollText text={current?.condition?.text} /> */}
                <Text style={styles.fontStyle}>{current?.condition?.text}</Text>

                <Image
                  style={styles.iconStyle}
                  source={weatherIcons[current.condition.text]}
                />
              </View>
            ) : null}
            {current ? (
              <View style={styles.feelslikeInfo}>
                <Text style={styles.fontStyle}>Feelslike</Text>

                <Text style={styles.fontStyle}>{current?.feelslike_c}</Text>
              </View>
            ) : null}
          </View>
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
    marginTop: 15,
    flex: 1,
  },
  currentLocationStyle: {
    flexDirection: 'row',
  },
  currentDayCondition: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    right: '0',
  },
  feelslikeAndConditionInfo: {
    width: '100%',
    flexDirection: 'row',
  },
  currentConditionInfo: {
    alignItems: 'center',
    borderRadius: 20,
    paddingLeft: 10,
    paddingRight: 10,
    height: 120,
    marginBottom: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    width: '60%',
  },
  feelslikeInfo: {
    alignItems: 'center',
    borderRadius: 20,
    paddingLeft: 10,
    paddingRight: 10,
    height: 120,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    width: '60%',
  },
  feelslike: {
    fontWeight: 'bold',
    color: '#fff',
  },
  currentStyles: {
    height: 250,
    width: '100%',
  },
  currentDayOtherInfo: {
    width: 400,
    top: 25,
  },
  fontStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  degreesInfo: {
    width: '50%',
    height: 250,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    // backgroundColor: 'blue',
    marginLeft: 20,
    justifyContent: 'center',
    borderRadius: 20,
    alignItems: 'center',
  },
  degree: {
    width: '80%',
    color: '#000',
    borderRadius: 20,
    fontWeight: 'bold',
    fontSize: 90,
    paddingLeft: 5,
  },
  iconStyle: {
    width: 30,
    height: 30,
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
