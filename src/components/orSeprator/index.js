/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import Images from '../../assets';

const index = () => {
  return (
    <View style={styles.container1}>
      <Image
        source={Images.lineIcon1}
        style={{
          width: 130,
          height: 3,
        }}
      />
      <Text
        style={{
          fontSize: 16,
          color: 'black',
        }}>
        or
      </Text>
      <Image
        source={Images.lineIcon1}
        style={{
          height: 3,
          width: 130,
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container1: {
    alignContent: 'space-between',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    width: '80%',
  },
});
export default index;
