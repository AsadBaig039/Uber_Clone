import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

const UberTypeRow = props => {
  const {type} = props;
  return (
    <View style={styles.container}>
      {/* Image */}
      <Image style={styles.image} source={type.image} />
      {/* middle container  */}
      <View style={styles.middleContainer}>
        <Text style={styles.type}>
          {type.type} {'  '}
          <Ionicons name="person" size={16} color="black" />
          {type.seats}
        </Text>
        <Text style={styles.time}>{type.dropOff} drop off </Text>
      </View>
      {/* right container  */}
      <View style={styles.rightContainer}>
        <Ionicons name="pricetag" size={18} color="#42d742" />
        <Text style={styles.price}>est. ${type.price}</Text>
      </View>
    </View>
  );
};

export default UberTypeRow;
