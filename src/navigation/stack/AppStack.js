import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../screens/AppStack/Home';

const Stack = createNativeStackNavigator();
const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      {/* <Stack.Screen name="SignUp" component={SignUp} /> */}
      {/* <Stack.Screen name="UserOrDealer" component={UserOrDealer} /> */}
    </Stack.Navigator>
  );
};

export default AppStack;
