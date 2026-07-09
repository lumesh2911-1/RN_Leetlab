import { StyleSheet, View } from 'react-native';
import React from 'react';
import { moderateScale } from 'react-native-size-matters';
import { useTheme } from '../../context/ThemeContext';
import AppText from '../../components/AppText';

const ProfileScreen = () => {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <AppText style={[styles.text, { color: colors.text }]}>
        ProfileScreen
      </AppText>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: moderateScale(16),
  },
});
