import React from 'react';
import {Image, FlatList} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

import styles from './styles';

const RouteMap = props => {
  const origin = {
    latitude: 28.458627,
    longitude: -16.263045,
  };
  const destination = {
    latitude: 28.460127,
    longitude: -16.269045,
  };
  const GOOGLE_MAPS_APIKEY = 'AIzaSyCAEYqTWySJTJDBRBdPHropi_2L1ouvP2U';
  return (
    <MapView
      style={styles.googleMapStyle}
      initialRegion={{
        latitude: 28.458627,
        longitude: -16.263045,
        latitudeDelta: 0.0222,
        longitudeDelta: 0.0121,
      }}>
      <MapViewDirections
        origin={origin}
        destination={destination}
        apikey={GOOGLE_MAPS_APIKEY}
        strokeWidth={4}
        strokeColor="black"
      />
      <Marker coordinate={origin} title={'Origin'} />
      <Marker coordinate={destination} title={'Destination'} />
    </MapView>
  );
};

export default RouteMap;
