import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

const CustomDrawer = props => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{backgroundColor: 'black', padding: 15}}>
        {/* User Row */}
        <View style={{flexDirection: 'row', padding: 15}}>
          <Image
            source={require('../assets/images/asad.png')}
            style={{
              backgroundColor: '#cacaca',
              width: 60,
              height: 60,
              borderRadius: 30,
              marginRight: 10,
            }}
          />
          <View>
            <TouchableOpacity
              onPress={() => {
                console.log('User Profile pressed');
              }}>
              <Text style={{color: 'white', fontSize: 24}}>Asad Baig</Text>
              <Text style={{color: 'white', fontSize: 15}}>5.00*</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Messages Row */}
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: '#919191',
            borderTopWidth: 1,
            borderTopColor: '#919191',
            paddingVertical: 5,
            marginVertical: 10,
          }}>
          <TouchableOpacity
            onPress={() => {
              console.log('Messages pressed');
            }}>
            <Text style={{color: 'white', paddingVertical: 5, fontSize: 18}}>
              Messages
            </Text>
          </TouchableOpacity>
        </View>

        {/* Do more */}
        <TouchableOpacity
          onPress={() => {
            console.log('Do More with your account pressed');
          }}>
          <Text style={{color: 'white', paddingVertical: 5, fontSize: 15}}>
            Do More with your account
          </Text>
        </TouchableOpacity>
        {/* // make money button */}
        <TouchableOpacity
          onPress={() => {
            console.log('Make money driving pressed');
          }}>
          <Text style={{color: 'white', paddingVertical: 5, fontSize: 15}}>
            Make money driving
          </Text>
        </TouchableOpacity>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
