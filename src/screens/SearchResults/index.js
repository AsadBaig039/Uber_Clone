import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import styles from './styles';

import RouteMap from '../../components/RouteMap';
import UberTypes from '../../components/UberTypes';

const SearchResults = props => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.mapContainer}>
        <RouteMap />
      </View>
      <UberTypes />
    </View>
  );
};
export default SearchResults;
