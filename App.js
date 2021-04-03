import React, {useEffect} from 'react';
import type {Node} from 'react';
import {StatusBar, View, PermissionsAndroid, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Geolocation from '@react-native-community/geolocation';
navigator.geolocation = require('@react-native-community/geolocation');

import HomeScreen from './src/screens/HomeScreen';
import DestinationSearch from './src/screens/DestinationSearch';
import SearchResults from './src/screens/SearchResults';

const App: () => Node = () => {
  const androidPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Uber Clone App Location Permission',
          message:
            'Uber Clone App needs access to your Location ' +
            'so that you can take rides.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the location');
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    if (Platform.OS === 'android') {
      androidPermission();
    } else {
      // for ios Permission
      Geolocation.requestAuthorization();
    }
  }, []);
  return (
    <>
      <StatusBar barStyle="default" />
      {/* <HomeScreen /> */}
      <DestinationSearch />
      {/* <SearchResults /> */}
    </>
  );
};

export default App;
