import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const HeaderDown = ({press}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.promptText}>Don’t have an account?</Text>
      <TouchableOpacity onPress={press}>
        <Text style={styles.switchButtonText}>Join Now</Text>
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

export default HeaderDown;
