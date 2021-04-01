import React from 'react';
import {Image, FlatList} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import styles from './styles';
import cars from '../../assets/data/cars';

const HomeMap = props => {
  // const getImage = type => {
  //   if (type === 'UberX') {
  //     return require('../../assets/images/top-UberX.png');
  //   }
  //   if (type === 'Comfort') {
  //     return require('../../assets/images/top-Comfort.png');
  //   }
  //   return require('../../assets/images/top-UberXL.png');
  // };

  return (
    <MapView
      style={styles.googleMapStyle}
      initialRegion={{
        latitude: 28.456208,
        longitude: -16.259098,
        latitudeDelta: 0.0222,
        longitudeDelta: 0.0121,
      }}>
      {cars.map(car => {
        <Marker
          key={car.id}
          coordinate={{latitude: car.latitude, longitude: car.longitude}}>
          <Image style={styles.marker} source={car.image} />
        </Marker>;
      })}
    </MapView>
  );
};

export default HomeMap;
