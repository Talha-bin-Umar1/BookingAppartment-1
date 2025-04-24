/* eslint-disable react-native/no-inline-styles */
import {View, Text, Alert} from 'react-native';
import React, {useState} from 'react';
import {Input} from '../../components/input';
import Images from '../../assets';
import CustomButton from '../../components/customButton';
import HeaderDown from '../../components/headerDown';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LogIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter email and password.');
      return;
    }

    try {
      const userCredential = await auth().signInWithEmailAndPassword(
        email,
        password,
      );
      console.log('Login Successful:', userCredential); // ✅ Log full auth response

      const uid = userCredential.user.uid;

      const userDoc = await firestore().collection('users').doc(uid).get();
      const userData = userDoc.data();

      if (!userData) {
        Alert.alert('Error', 'User data not found!');
        return;
      }

      // After getting userCredential and userData
      console.log('Login Successful:', userCredential);
      console.log('User Data from Firestore:', userData);

      // Save to AsyncStorage
      await AsyncStorage.setItem(
        'userData',
        JSON.stringify({
          uid: userCredential.user.uid,
          email: userCredential.user.email,
          ...userData,
        }),
      );

      // Show success alert
      Alert.alert('Success', 'Login successful!');

      // Navigate to appropriate screen based on user type
      if (userData.type === 'dealer') {
        navigation.reset({
          index: 0,
          routes: [
            {
              name: 'AppStack',
              params: {
                screen: 'Home',
                params: {userType: 'dealer'},
              },
            },
          ],
        });
      } else if (userData.type === 'client') {
        navigation.reset({
          index: 0,
          routes: [
            {
              name: 'AppStack',
              params: {
                screen: 'Home',
                params: {userType: 'client'},
              },
            },
          ],
        });
      } else {
        Alert.alert('Error', 'Unknown user type.');
      }
    } catch (error) {
      console.error('Login Error:', error);
      Alert.alert('Login Error', error.message);
    }
  };

  return (
    <View style={{flex: 1,
     alignItems: 'center',
     }}>
      <View
        style={{
          marginTop: '20%',
          justifyContent: 'center',
          alignItems: 'center',
          height: '20%',
        }}>
        <Text
          style={{
            fontSize: 36,
            color: 'black',
            textAlign: 'center',
            fontWeight: 'bold',
          }}>
          Welcome
        </Text>
        <Text style={{color: 'gray'}}>
          Glad to meet you. Please login to use the app.
        </Text>
      </View>

      <View
        style={{
          marginTop: '10%',
          width: '100%',
        }}>
        <Input
          leftIcon={true}
          placeholder={'Email'}
          img={Images.icon2}
          marginBottom={15}
          value={email}
          onChangeText={setEmail}
        />
        <Input
          leftIcon={true}
          img={Images.icon3}
          marginBottom={15}
          secureTextEntry={true}
          placeholder={'Password'}
          value={password}
          onChangeText={setPassword}
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
          onPress={handleLogin}
          text={'Sign In'}
          txtColor={'#fff'}
          justi={'center'}
          btnColor={'#C62300'}
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
