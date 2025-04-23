import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Images from '../../assets';

const UserOrDealer = ({navigation}) => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        onPress={() => {
          console.log('Button Pressed');
          navigation.navigate('AuthStack', {
            screen: 'SignUp',
            params: {
              userType: 'Client',
            },
          });
        }}
        style={{
          height: '35%',
          width: '95%',
          borderRadius: 10,
          backgroundColor: '#fff',
          marginTop: '25%',
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
              userType: 'Dealer',
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
          alignContent: 'center',
          alignItems: 'center',
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.6,
          shadowRadius: 4,
          // Shadow for Android
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
