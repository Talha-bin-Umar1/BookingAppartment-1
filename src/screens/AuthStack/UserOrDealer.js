/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import Images from '../../assets';

const UserOrDealer = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('AuthStack', {
            screen: 'SignUp',
            params: {
              userType: 'client',
            },
          });
        }}
        style={styles.card}>
        <Text style={styles.title}>CLIENT</Text>
        <Image source={Images.client1} style={styles.clientImage} />
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
        style={[styles.card, styles.dealerCard]}>
        <Text style={styles.title}>DEALER</Text>
        <Image source={Images.dealer1} style={styles.dealerImage} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    height: '35%',
    width: '95%',
    borderRadius: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  dealerCard: {
    marginTop: '5%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  clientImage: {
    height: 190,
    width: 240,
    marginTop: '10%',
  },
  dealerImage: {
    height: 190,
    width: 200,
    marginTop: '10%',
  },
});

export default UserOrDealer;
