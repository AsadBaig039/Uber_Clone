import React from 'react';
import {View, Text, Pressable} from 'react-native';
import UberTypeRow from '../UberTypeRow';

import typesData from '../../assets/data/types';
import styles from './styles';

const UberTypes = props => {
  const confirm = () => {
    console.warn('confirm');
  };
  return (
    <View>
      {typesData.map(type => (
        <UberTypeRow type={type} key={type.id} />
      ))}
      <View style={styles.buttonContainer}>
        <Pressable onPress={confirm} style={styles.confirmButton}>
          <Text style={styles.confirmButtonText}>Confirm Uber</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default UberTypes;
