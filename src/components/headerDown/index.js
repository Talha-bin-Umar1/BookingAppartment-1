import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const AuthSwitch = ({value, press}) => {
  const getPromptText = () => {
    return value === 'login'
      ? 'Don’t have an account?'
      : 'Already have an account?';
  };

  const getSwitchButtonText = () => {
    return value === 'login' ? 'Join Now' : 'Sign In';
  };

  return (
    <View style={styles.container}>
      <Text style={styles.promptText}>{getPromptText()}</Text>
      <TouchableOpacity onPress={press}>
        <Text style={styles.switchButtonText}>{getSwitchButtonText()}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  promptText: {
    fontSize: 13,
    color: '#000',
  },
  switchButtonText: {
    fontSize: 13,
    color: '#C62300',
    marginLeft: 2,
  },
});

export default AuthSwitch;
