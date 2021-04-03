import React from 'react';
import {Image} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import styles from './styles';
import cars from '../../assets/data/cars';
import uberX from '../../assets/images/top-UberX.png';

const HomeMap = props => {
  const getImage = type => {
    if (type === 'UberX') {
      return uberX;
    }
    if (type === 'Comfort') {
      return require('../../assets/images/top-Comfort.png');
    }
    return require('../../assets/images/top-UberXL.png');
  };

  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      style={styles.googleMapStyle}
      initialRegion={{
        latitude: 28.450627,
        longitude: -16.263045,
        latitudeDelta: 0.0222,
        longitudeDelta: 0.0121,
      }}>
      {cars.map(car => {
        <Marker
          key={car.id}
          coordinate={{latitude: car.latitude, longitude: car.longitude}}>
          <Image
            styles={{
              width: 70,
              height: 70,
              resizeMode: 'contain',
              transform: [
                {
                  rotate: `${car.heading}deg`,
                },
              ],
            }}
            source={getImage(car.type)}
          />
        </Marker>;
      })}
    </MapView>
  );
};

export default HomeMap;
