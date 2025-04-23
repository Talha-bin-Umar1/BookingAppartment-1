import {View, Text, Image} from 'react-native';
import React from 'react';
import Images from '../../assets';

const index = () => {
  return (
    <View
      style={{
        alignContent: 'space-between',
        flexDirection: 'row',
        //   backgroundColor: 'red',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
        width: '80%',
        // marginVertical: 30,
      }}>
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

export default index;
