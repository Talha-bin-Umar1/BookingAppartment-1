import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const OnboardingText = ({onboarding, splash}) => {
  const getTitle = () => {
    switch (onboarding) {
      case 'onboard':
        return [
          'Get Started with \nThe Cutting Hub',
          'Book Your Favourite \nServices',
          'Stay Relax and \nEntertained',
          'Never Miss an \nAppointment',
        ][splash];
      case 'login':
        return 'Welcome back,';
      case 'signup':
        return 'Create an account,';
      default:
        return 'Default Text for unknown onboarding';
    }
  };

  const getSubtitle = () => {
    switch (onboarding) {
      case 'onboard':
        return [
          'The Ultimate Salon Booking \nExperience.',
          "From haircuts to facials, we've got you \ncovered",
          'Games, news, and more while you \nwait.',
          'Get appointment reminders and \nupdates in real-time.',
        ][splash];
      case 'login':
        return 'Glad to meet you again!, please login to use the app.';
      case 'signup':
        return 'Please type full information bellow and we can create your account';
      default:
        return 'Default Text for unknown onboarding';
    }
  };

  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.title,
          {color: onboarding === 'onboard' ? 'white' : '#000'},
        ]}>
        {getTitle()}
      </Text>
      <View style={styles.subtitleContainer}>
        <Text
          style={{
            fontSize: onboarding === 'onboard' ? 20 : 15,
            color: onboarding === 'onboard' ? 'white' : '#000',
          }}>
          {getSubtitle()}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    paddingHorizontal: '5%',
  },
  title: {
    fontSize: 33,
    fontWeight: 'bold',
  },
  subtitleContainer: {
    marginTop: '5%',
  },
});

export default OnboardingText;
