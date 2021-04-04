import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import styles from './styles';
import {useRoute} from '@react-navigation/native';
import RouteMap from '../../components/RouteMap';
import UberTypes from '../../components/UberTypes';

const SearchResults = props => {
  const route = useRoute();
  const {originPlace, destinationPlace} = route.params;
  return (
    <View style={styles.mainContainer}>
      <View style={styles.mapContainer}>
        <RouteMap origin={originPlace} destination={destinationPlace} />
      </View>
      <UberTypes />
    </View>
  );
};
export default SearchResults;
