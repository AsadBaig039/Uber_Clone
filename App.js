import React from 'react';
import type {Node} from 'react';
import {StatusBar, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import HomeScreen from './src/screens/HomeScreen';
import DestinationSearch from './src/screens/DestinationSearch';
import SearchResults from './src/screens/SearchResults';

const App: () => Node = () => {
  return (
    <>
      <StatusBar barStyle="default" />
      <HomeScreen />
      {/* <DestinationSearch /> */}
      {/* <SearchResults /> */}
    </>
  );
};

export default App;
