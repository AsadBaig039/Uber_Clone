import React from 'react';
import {View, Text, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeNavigator from './Home';
import CustomDrawer from './CustomDrawer';

const Drawer = createDrawerNavigator();

const DummyComponent = props => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <Image
        style={{
          height: 300,
          width: 300,
          resizeMode: 'center',
          backgroundColor: 'white',
        }}
        source={require('../assets/images/noResult.png')}
      />
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>{props.name}</Text>
    </View>
  );
};

const RootNavigator = props => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
        <Drawer.Screen name="Home" component={HomeNavigator} />

        <Drawer.Screen name="Your Trips">
          {() => <DummyComponent name="Your Trips" />}
        </Drawer.Screen>
        <Drawer.Screen name="Help">
          {() => <DummyComponent name="Help" />}
        </Drawer.Screen>
        <Drawer.Screen name="Wallet">
          {() => <DummyComponent name="Wallet" />}
        </Drawer.Screen>
        <Drawer.Screen name="Setting">
          {() => <DummyComponent name="Settings" />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
