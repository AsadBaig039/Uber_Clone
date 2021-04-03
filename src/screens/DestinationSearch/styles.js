import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    padding: 15,
    backgroundColor: 'white',
    height: '100%',
  },
  textInput: {
    padding: 10,
    backgroundColor: '#eee',
    marginVertical: 5,
    color: 'black',
    marginLeft: 20,
  },
  searchResultsText: {
    color: 'grey',
    position: 'absolute',
    top: 150,
    marginHorizontal: 20,
    fontSize: 18,
    fontWeight: '600',
    alignSelf: 'center',
  },
  noResultImage: {
    width: 200,
    height: 200,
    resizeMode: 'center',
    marginVertical: 20,
  },
  noResultText: {
    fontSize: 18,
    color: 'grey',
    fontWeight: '600',
  },
  autoCompleteContainer: {
    position: 'absolute',
    top: 20,
    left: 10,
    right: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listView: {
    position: 'absolute',
    top: 120,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    backgroundColor: '#a2a2a2',
    padding: 5,
    borderRadius: 50,
    marginRight: 15,
  },
  locationText: {},
  separator: {
    backgroundColor: '#efefef',
    height: 1,
  },

  circle: {
    width: 5,
    height: 5,
    borderRadius: 5,
    backgroundColor: 'black',
    position: 'absolute',
    left: 15,
    top: 45,
  },
  line: {
    width: 1,
    height: 50,
    backgroundColor: 'black',
    position: 'absolute',
    left: 17,
    top: 52,
  },
  square: {
    width: 5,
    height: 5,
    backgroundColor: 'black',
    position: 'absolute',
    left: 15,
    top: 105,
  },
});

export default styles;
