/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
  Platform,
} from 'react-native';

const CustomButton = ({
  text,
  style,
  onPress,
  btnColor,
  txtColor,
  fontWeight,
  fontSize,
  justi,
  marginTop,
  marginBottom,
}) => {

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        {
          backgroundColor: btnColor,
          justifyContent: justi,
          height:  48,
          marginTop: marginTop,
          marginBottom: marginBottom,
        },
        style,
      ]}>
      <Text
        style={{color: txtColor, fontWeight: fontWeight, fontSize: fontSize}}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '90%',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
        elevation: 10,

  },
});

export default CustomButton;
