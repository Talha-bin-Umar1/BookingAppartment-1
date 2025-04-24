import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.title]}>Create an account,</Text>
      <View style={styles.subtitleContainer}>
        <Text
          style={{
            fontSize: 15,
            color: '#000',
          }}>
          Please type full information bellow and we can create your account
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    paddingHorizontal: '5%',
  },
  title: {
    fontSize: 33,
    fontWeight: 'bold',
    color: '#000',
  },
  subtitleContainer: {
    marginTop: '5%',
  },
});

export default Header;
