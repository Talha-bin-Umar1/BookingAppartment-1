/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Images from '../../assets';

const UserOrDealer = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('AuthStack', {
            screen: 'SignUp',
            params: {
              userType: 'client',
            },
          });
        }}
        style={{
          height: '35%',
          width: '95%',
          borderRadius: 10,
          backgroundColor: '#fff',
          justifyContent: 'center',
          alignItems: 'center',
          elevation: 5,
        }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: '#000',
          }}>
          CLIENT
        </Text>
        <Image
          source={Images.client1}
          style={{
            height: 190,
            width: 240,
            marginTop: '10%',
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('AuthStack', {
            screen: 'SignUp',
            params: {
              userType: 'dealer',
            },
          });
        }}
        style={{
          height: '35%',
          width: '95%',
          borderRadius: 10,
          backgroundColor: '#fff',
          marginTop: '5%',
          justifyContent: 'center',
          alignItems: 'center',
          elevation: 5,
        }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: '#000',
          }}>
          DEALER
        </Text>
        <Image
          source={Images.dealer1}
          style={{
            height: 190,
            width: 200,
            marginTop: '10%',
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default UserOrDealer;
