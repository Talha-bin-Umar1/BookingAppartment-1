/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import Images from '../../assets';

const Input = ({
  img,
  img2,
  value,
  leftIcon,
  imgWidth,
  rightIcon,
  placeholder,
  onChangeText,
  imgBorderRadius,
  secureTextEntry,
  marginHorizontal,
  marginLeftImg2,
  height,
  tintcolor,
  marginBottom,
  placeholderTextColor,
}) => {
  const [show, setShow] = useState(false);

  return (
    <View style={[styles.mainContainer]}>
      {leftIcon && (
        <Image
          source={img}
          tintColor={tintcolor}
          style={[
            styles.leftIconStyle,
            {
              width: imgWidth ? imgWidth : 18,
              borderRadius: imgBorderRadius,
            },
          ]}
        />
      )}
      <TextInput
        value={value}
        secureTextEntry={secureTextEntry && !show ? true : false}
        placeholder={placeholder}
        style={styles.inputStyle}
        onChangeText={onChangeText}
        placeholderTextColor={placeholderTextColor}
      />
      {secureTextEntry &&
        (show ? (
          <TouchableOpacity
            onPress={() => {
              setShow(!show);
            }}>
            <Image
              tintColor={'#C62300'}
              source={Images.eyeClose}
              style={[styles.eyeIconStyle, {width: 23, height: 23}]}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              setShow(!show);
            }}>
            <Image
              tintColor={'#C62300'}
              source={Images.eye}
              style={[styles.eyeIconStyle, {width: 25, height: 25}]}
              resizeMode="contain"
            />
          </TouchableOpacity>
        ))}
      {rightIcon && (
        <TouchableOpacity>
          <Image
            source={img2}
            tintColor={'#C62300'}
            style={[
              styles.rightIconStyle,
              {marginLeft: marginLeftImg2 ? marginLeftImg2 : 15},
            ]}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: '95%',
    borderRadius: 10,
    marginBottom: 15,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    height: 50,
    backgroundColor: 'white',
    ...Platform.select({
      ios: {
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0,
        shadowRadius: 0,
        shadowColor: 'black',
      },
      android: {
        elevation: 0,
      },
    }),
  },
  mainContainer2: {
    width: '95%',
    borderRadius: 10,
    marginBottom: 15,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: 'white',
    ...Platform.select({
      ios: {
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.3,
        shadowRadius: 8,
        shadowColor: 'black',
      },
      android: {
        elevation: 10,
      },
    }),
    borderWidth: 1,
    borderColor: '#C62300',
  },
  leftIconStyle: {
    height: 20,
    marginLeft: 5,
    marginRight: 5,
  },
  inputStyle: {
    // height: 40,
    padding: 0,
    width: '78%',
    marginLeft: 10,
    height: '100%',
    color: 'gray',
  },
  eyeIconStyle: {
    width: 24,
    height: 16,
    marginLeft: 15,
  },
  rightIconStyle: {
    width: 24,
    height: 24,

    marginRight: 5,
  },
});

export {Input};
