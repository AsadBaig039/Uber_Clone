import React from 'react';
import {Image} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import styles from './styles';
import cars from '../../assets/data/cars';
import uberX from '../../assets/images/top-UberX.png';
import MapMarkerView from '../MapMakerView';

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

  const origin = {
    latitude: 33.6007,
    longitude: 73.0679,
  };
  const destination = {
    latitude: 33.72148,
    longitude: 73.04329,
  };

  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      style={styles.googleMapStyle}
      showsUserLocation={true}
      initialRegion={{
        latitude: 33.6007,
        longitude: 73.0679,
        latitudeDelta: 0.0222,
        longitudeDelta: 0.0121,
      }}>
      {cars.map(car => {
        <Marker key={car.id} coordinate={car.location} />;
        {
          /* <Image
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
          /> */
        }
      })}
    </MapView>
  );
};

export default HomeMap;
