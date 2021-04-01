import React, {useState, useEffect} from 'react';
import {View, TextInput, Text, SafeAreaView} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {Input} from 'react-native-elements';
import styles from './styles';

const GOOGLE_PLACES_API_KEY = 'AIzaSyCAEYqTWySJTJDBRBdPHropi_2L1ouvP2U';

const DestinationSearch = props => {
  const [fromText, setFromText] = useState('');
  const [destinationText, setDestinationText] = useState('');

  const [originPlace, setOriginPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);

  useEffect(() => {
    if (originPlace && destinationPlace) {
      console.warn('Redirect to results');
    }
  }, [originPlace, destinationPlace]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <GooglePlacesAutocomplete
          styles={{
            textInput: styles.textInput,
            predefinedPlacesDescription: {
              color: '#1faadb',
            },
          }}
          textInputProps={{
            placeholderTextColor: 'grey',
            backgroundColor: '#eee',
          }}
          placeholder="From?"
          onPress={(data, details = null) => {
            setOriginPlace({data, details});
            console.log(data, details);
          }}
          fetchDetails
          query={{
            key: GOOGLE_PLACES_API_KEY,
            language: 'en',
          }}
        />

        <GooglePlacesAutocomplete
          styles={{
            textInput: {
              height: 50,
              color: 'black',
              fontSize: 16,
            },
            predefinedPlacesDescription: {
              color: '#1faadb',
            },
          }}
          textInputProps={{
            placeholderTextColor: 'grey',
            backgroundColor: '#eee',
          }}
          placeholder="Where to?"
          onPress={(data, details = null) => {
            setDestinationPlace({data, details});
            console.log(data, details);
          }}
          fetchDetails
          query={{
            key: GOOGLE_PLACES_API_KEY,
            language: 'en',
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default DestinationSearch;
