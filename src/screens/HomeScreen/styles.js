import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  mapContainer: {
    height: Dimensions.get('window').height - 400,
    backgroundColor: '#a0abff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
