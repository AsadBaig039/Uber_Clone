import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

import HomeMap from '../../components/HomeMap';
import CovidMessage from '../../components/CovidMessage';
import HomeSearch from '../../components/HomeSearch';

const HomeScreen = props => {
  return (
    <View style={styles.mainContainer}>
      <HomeMap />
      <CovidMessage />
      <HomeSearch />
    </View>
  );
};

export default HomeScreen;
