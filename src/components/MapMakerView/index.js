import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const MapMarkerView = car => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 30}}>{car.type}</Text>
    </View>
  );
};

export default MapMarkerView;
