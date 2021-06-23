import React, {useState, useEffect} from 'react';
import {View, TextInput, Text, SafeAreaView, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {Input} from 'react-native-elements';
import styles from './styles';
import PlaceRow from './PlaceRow';
import API_KEY from '../../config/API_KEY';

const homePlace = {
  description: 'Home',
  geometry: {location: {lat: 33.6007, lng: 73.0679}},
};
const workPlace = {
  description: 'Work',
  geometry: {location: {lat: 33.72148, lng: 73.04329}},
};

const DestinationSearch = props => {
  const [resultText, setResultText] = useState(false);

  const [fromText, setFromText] = useState('');
  const [destinationText, setDestinationText] = useState('');

  const [originPlace, setOriginPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);

  const navigation = useNavigation();

  const checkNavigation = () => {
    if (originPlace && destinationPlace) {
      navigation.navigate('SearchResults', {originPlace, destinationPlace});
    }
  };

  useEffect(() => {
    checkNavigation();
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
            // console.log(data, details);
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
          predefinedPlaces={[homePlace, workPlace]}
          query={{
            key: API_KEY,
            language: 'en',
          }}
          renderRow={data => <PlaceRow data={data} />}
          renderDescription={data => data.description || data.vicinity}
        />

        <GooglePlacesAutocomplete
          placeholder="Where to?"
          onPress={(data, details = null) => {
            setDestinationPlace({data, details});
            // console.log(data, details);
          }}
          styles={{
            textInput: styles.textInput,
            container: {...styles.autoCompleteContainer, top: 75},
            listView: {...styles.listView, top: 75},
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
          enablePoweredByContainer={false}
          listEmptyComponent={emptyListMessage}
          predefinedPlaces={[homePlace, workPlace]}
          query={{
            key: API_KEY,
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
