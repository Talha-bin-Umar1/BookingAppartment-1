/* eslint-disable react-native/no-inline-styles */
import {View, Text, Alert} from 'react-native';
import React, {useState} from 'react';
import {useRoute} from '@react-navigation/native';
import CustomButton from '../../components/customButton';
import Header from '../../components/header';
import {Input} from '../../components/input';
import Images from '../../assets';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const SignUp = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const route = useRoute();
  const userType = route.params?.userType || 'client';

  const handleSignUp = async () => {
    if (!username || !email || !password || !confirmPassword || !phoneNumber) {
      Alert.alert('Error', 'Please fill all fields.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }

    try {
      const userCredential = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      const {uid} = userCredential.user;

      await firestore().collection('users').doc(uid).set({
        name: username,
        email,
        phone: phoneNumber,
        type: userType,
      });

      Alert.alert('Success', 'Account created successfully!');
      navigation.navigate('LogIn');
    } catch (error) {
      console.error(error);
      Alert.alert('Signup Error', error.message);
    }
  };

  return (
    <View style={{flex: 1,
     alignItems: 'center',
     }}>
      <Header onboarding={'signup'} />
      <View
        style={{
          marginTop: '5%',
          width: '100%',
          alignItems: 'center',
          height: '55%',
        }}>
        <Input
          img={Images.icon1}
          leftIcon={true}
          placeholder={'Name'}
          value={username}
          marginBottom={15}
          onChangeText={setUsername}
        />
        <Input
          leftIcon={true}
          placeholder={'Email'}
          img={Images.icon2}
          value={email}
          marginBottom={15}
          onChangeText={setEmail}
        />
        <Input
          leftIcon={true}
          placeholder={'Phone Number'}
          img={Images.phoneIcon1}
          value={phoneNumber}
          marginBottom={15}
          onChangeText={setPhoneNumber}
        />
        <Input
          leftIcon={true}
          secureTextEntry={true}
          placeholder={'Password'}
          img={Images.icon3}
          value={password}
          marginBottom={15}
          onChangeText={setPassword}
        />
        <Input
          leftIcon={true}
          secureTextEntry={true}
          placeholder={'Confirm Password'}
          marginBottom={15}
          img={Images.icon3}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
      </View>
      <Text
        style={{
          fontSize: 11,
          color: 'black',
          marginHorizontal: '8%',
          marginBottom: 20,
        }}>
        By signing up you agree to our
        <Text style={{color: '#C62300'}}> Term of use and privacy </Text>
        notice
      </Text>

      <CustomButton
        text={'Sign Up'}
        txtColor={'#fff'}
        justi={'center'}
        btnColor={'#C62300'}
        onPress={handleSignUp}
      />
    </View>
  );
};

export default SignUp;
