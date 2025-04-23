import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUp from '../../screens/AuthStack/SignUp';
import LogIn from '../../screens/AuthStack/LogIn';
import UserOrDealer from '../../screens/AuthStack/UserOrDealer';

const Stack = createNativeStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="LogIn"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="LogIn" component={LogIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="UserOrDealer" component={UserOrDealer} />
    </Stack.Navigator>
  );
};

export default AuthStack;
