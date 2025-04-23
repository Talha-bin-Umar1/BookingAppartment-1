/* eslint-disable react-native/no-inline-styles */
import {View, Text} from 'react-native';
import React from 'react';
import {Input} from '../../components/input';
import Header from '../../components/header';
import Images from '../../assets';
import CustomButton from '../../components/customButton';
import OrSeprator from '../../components/orSeprator';
import HeaderDown from '../../components/headerDown';

const LogIn = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <View
        style={{
          marginTop: '20%',
          justifyContent: 'center',
          alignItem: 'center',
          //   backgroundColor: 'red',
          height: '20%',
        }}>
        <Text
          style={{
            fontSize: 36,
            color: 'black',
            justifyContent: 'center',
            textAlign: 'center',
            fontWeight: 'bold',
          }}>
          Welcome
        </Text>
        <Text style={{color: 'gray'}}>
          Gland to meet you.please login to use the app
        </Text>
      </View>
      <View
        style={{
          marginTop: 30,
          width: '100%',
          //   height: '20%',
          justifyContent: 'space-around',
        }}>
        <Input
          leftIcon={true}
          placeholder={'Email'}
          img={Images.icon2}
          marginBottom={15}
          //   focusview={true}
          //   placeholderTextColor={'gray'}
        />
        <Input
          leftIcon={true}
          img={Images.icon3}
          marginBottom={15}
          secureTextEntry={true}
          placeholder={'Password'}
          focusview={true}
        />
      </View>
      <Text
        style={{
          fontSize: 11,
          color: '#C62300',
          alignSelf: 'flex-end',
          marginRight: 19,
        }}>
        Forgot password?
      </Text>
      <View style={{marginTop: 20, width: '100%', alignItems: 'center'}}>
        <CustomButton
          onPress={() => navigation.navigate('AppStack', {screen: 'Home'})}
          text={'Sign In'}
          txtColor={'#fff'}
          justi={'center'}
          btnColor={'#C62300'}
        />
        <OrSeprator />
        <CustomButton
          //   onPress={signInWithGoogle}
          text={'Sign In with Google'}
          txtColor={'#C62300'}
          btnColor={'#fff'}
          justi={'center'}
          showImage={true}
          imgPath={Images.googleIcon}
          borderColor={'#C62300'}
          borderWidth={true}
        />
      </View>
      <HeaderDown
        value={'login'}
        press={() => navigation.navigate('AuthStack', {screen: 'UserOrDealer'})}
      />
    </View>
  );
};

export default LogIn;
