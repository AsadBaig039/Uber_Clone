import React, {useState, useEffect} from 'react';
import {View, TextInput, Text, SafeAreaView, Image} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {Input} from 'react-native-elements';
import styles from './styles';
import PlaceRow from './PlaceRow';

const GOOGLE_PLACES_API_KEY = 'AIzaSyCAEYqTWySJTJDBRBdPHropi_2L1ouvP2U';

const DestinationSearch = props => {
  const [resultText, setResultText] = useState(false);

  const [fromText, setFromText] = useState('');
  const [destinationText, setDestinationText] = useState('');

  const [originPlace, setOriginPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);

  useEffect(() => {
    if (originPlace && destinationPlace) {
      console.warn('Redirect to results');
    }
  }, [originPlace, destinationPlace]);

  const emptyListMessage = props => {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          style={styles.noResultImage}
          source={require('../../assets/images/noResult.png')}
        />
        <Text style={styles.noResultText}>No result Found</Text>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <GooglePlacesAutocomplete
          placeholder="From?"
          onPress={(data, details = null) => {
            setOriginPlace({data, details});
            console.log(data, details);
          }}
          styles={{
            textInput: styles.textInput,
            container: styles.autoCompleteContainer,
            listView: styles.listView,
            separator: styles.separator,
          }}
          textInputProps={{
            placeholderTextColor: 'grey',
            backgroundColor: '#eee',
            onChange: () => {
              setResultText(true);
            },
            onChangeText: value => {
              if (!value) {
                setResultText(false);
              }
            },
          }}
          currentLocation={true}
          currentLocationLabel="Current location"
          fetchDetails
          enablePoweredByContainer={false}
          listEmptyComponent={emptyListMessage}
          query={{
            key: GOOGLE_PLACES_API_KEY,
            language: 'en',
          }}
          renderRow={data => <PlaceRow data={data} />}
          renderDescription={data => data.description || data.vicinity}
        />

        <GooglePlacesAutocomplete
          placeholder="Where to?"
          onPress={(data, details = null) => {
            setDestinationPlace({data, details});
            console.log(data, details);
          }}
          styles={{
            textInput: styles.textInput,
            container: {...styles.autoCompleteContainer, top: 75},
            listView: {...styles.listView, top: 105},
            separator: styles.separator,
          }}
          textInputProps={{
            placeholderTextColor: 'grey',
            backgroundColor: '#eee',
            onChange: () => {
              setResultText(true);
            },
            onChangeText: value => {
              if (value === '') {
                setResultText(false);
              }
            },
          }}
          fetchDetails
          query={{
            key: GOOGLE_PLACES_API_KEY,
            language: 'en',
          }}
          renderRow={data => <PlaceRow data={data} />}
        />
        {/* {resultText && (
          <Text style={styles.searchResultsText}>Search Results</Text>
        )} */}

        {/* start point end point representation
          1. origin input point
          2. line between origin and destination input point 
          3. destination input point
         */}
        <View style={styles.circle} />
        <View style={styles.line} />
        <View style={styles.square} />
      </View>
    </SafeAreaView>
  );
};

export default DestinationSearch;
