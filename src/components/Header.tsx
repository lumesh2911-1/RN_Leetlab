import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { moderateScale } from 'react-native-size-matters';
import { Bell, Sun, Moon, BellDot } from 'lucide-react-native';
import { useTheme } from '../context/ThemeContext';
import AppText from './AppText';
import { FONTS } from '../constants/fonts';
import { useNavigation } from '@react-navigation/native';

type Props = {
  navigation?: any;
  route?: any;
  options?: any;
  back?: any;
};

const Header = ({ route, options }: Props) => {
  const { colors, isDark, toggleMode } = useTheme();
  const title = options?.title ?? route?.name ?? '';

  const borderColor = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)';
  const logoBg = isDark ? colors.surface : colors.background;

  const navigation = useNavigation();
  return (
    <SafeAreaView
      edges={['top']}
      style={[
        styles.container,
        { backgroundColor: colors.surface, borderBottomColor: borderColor },
      ]}
    >
      <View style={styles.inner}>
        <View style={styles.left}>
          <View style={[styles.logoWrapper, { backgroundColor: logoBg }]}>
            <Image
              source={require('../assets/images/logo.png')}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>

          <AppText
            weight="semiBold"
            style={[styles.title, { color: colors.text }]}
          >
            {title}
          </AppText>
        </View>

        <View style={styles.right}>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => navigation.navigate('notification')}
          >
            <BellDot size={moderateScale(20)} color={colors.text} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconButton} onPress={toggleMode}>
            {isDark ? (
              <Moon size={moderateScale(20)} color={colors.text} />
            ) : (
              <Sun size={moderateScale(20)} color={colors.text} />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: moderateScale(80),
    paddingHorizontal: moderateScale(16),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  inner: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: moderateScale(14),
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: moderateScale(35),
    height: moderateScale(35),
  },
  logoWrapper: {
    width: moderateScale(40),
    height: moderateScale(40),
    borderRadius: moderateScale(10),
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: moderateScale(4),
  },
  title: {
    fontSize: moderateScale(16),
    fontFamily: FONTS.semiBold,
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    padding: moderateScale(8),
    marginLeft: moderateScale(1),
  },
});
