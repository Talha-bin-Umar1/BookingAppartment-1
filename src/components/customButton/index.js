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
  width,
  style,
  imgPath,
  onPress,
  btnColor,
  txtColor,
  showImage,
  borderWidth,
  borderColor,
  btnHeight,
  fontWeight,
  fontSize,
  justi,
  imgMarg,
  tintColor,
  marginTop,
  marginBottom,
  disabled,
  backgroundColor,
}) => {
  // const handlePress = () => {
  //   press();
  // };

  return (
    <TouchableOpacity
      // disabled={disabled}
      onPress={onPress}
      style={[
        styles.button,
        {
          backgroundColor: btnColor,
          borderWidth: borderWidth ? 2 : 0,
          borderColor: borderColor,
          width: width ? width : '90%',
          justifyContent: justi,
          height: btnHeight ? btnHeight : 48,
          marginTop: marginTop,
          marginBottom: marginBottom,
        },
        style,
      ]}>
      {showImage && (
        <Image
          source={imgPath}
          style={{
            height: 24,
            width: 24,
            marginRight: 10,
            marginLeft: imgMarg,
            tintColor: tintColor,
            backgroundColor: backgroundColor,
          }}
        />
      )}
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
    height: 50,
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    margin: 10,
    flexDirection: 'row',
    ...Platform.select({
      ios: {
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.5,
        shadowRadius: 8,
        shadowColor: 'black',
      },
      android: {
        elevation: 10,
      },
    }),
  },
});

export default CustomButton;
