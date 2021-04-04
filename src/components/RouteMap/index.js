import React from 'react';
import {Image, FlatList} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

import styles from './styles';

const RouteMap = ({origin, destination}) => {
  const originLoc = {
    latitude: origin.details.geometry.location.lat,
    longitude: origin.details.geometry.location.lng,
  };
  const destinationLoc = {
    latitude: destination.details.geometry.location.lat,
    longitude: destination.details.geometry.location.lng,
  };

  // // Rawalpindi location
  // const originLoc = {
  //   latitude: 33.6007,
  //   longitude: 73.0679,
  // };
  // // Islamabad Location
  // const destination = {
  //   latitude: 33.72148,
  //   longitude: 73.04329,
  // };
  const GOOGLE_MAPS_APIKEY = 'AIzaSyCAEYqTWySJTJDBRBdPHropi_2L1ouvP2U';
  return (
    <MapView
      style={styles.googleMapStyle}
      showsUserLocation={true}
      initialRegion={{
        latitude: 33.6007,
        longitude: 73.0679,
        latitudeDelta: 0.0222,
        longitudeDelta: 0.0121,
      }}>
      <MapViewDirections
        origin={originLoc}
        destination={destinationLoc}
        apikey={GOOGLE_MAPS_APIKEY}
        strokeWidth={4}
        strokeColor="black"
      />
      <Marker coordinate={originLoc} title={'Origin'} />
      <Marker coordinate={destinationLoc} title={'Destination'} />
    </MapView>
  );
};

export default RouteMap;
