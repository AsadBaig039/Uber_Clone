import React from 'react';
import {View, Text, TouchableOpacity, Pressable} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';

const HomeSearch = props => {
  const navigation = useNavigation();
  const goToSearch = () => {
    navigation.navigate('DestinationSearch');
  };
  return (
    <View>
      {/* input box */}
      <TouchableOpacity onPress={goToSearch} style={styles.inputBox}>
        <Text style={styles.inputText}>Where To?</Text>
        <View style={styles.timeContainer}>
          <AntDesign name="clockcircle" size={16} color="#535353" />
          <Text>Now</Text>
          <MaterialIcons name="keyboard-arrow-down" size={16} />
        </View>
      </TouchableOpacity>
      {/* previous destination */}
      <View style={styles.previousDestinationContainer}>
        <View style={styles.row}>
          <View style={styles.iconContainer}>
            <AntDesign name="clockcircle" size={20} color="#535353" />
          </View>
          <Text style={styles.destinationText}>Howdy F7 Islamabad</Text>
        </View>
        {/* Home Destination */}
        <View style={styles.row}>
          <View style={[styles.iconContainer, {backgroundColor: '#346294'}]}>
            <Entypo name="home" size={20} color="#ffffff" />
          </View>
          <Text style={styles.destinationText}>Howdy F7 Islamabad</Text>
        </View>
      </View>
    </View>
  );
};

export default HomeSearch;
