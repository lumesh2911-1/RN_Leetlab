import { Image, Pressable, StyleSheet, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { moderateScale } from 'react-native-size-matters';
import { Code, Sparkles, Trophy } from 'lucide-react-native';
import { useTheme } from '../../context/ThemeContext';
import AppText from '../../components/AppText';
import AppleIcon from '../../components/icons/AppleIcon';
import { useNavigation } from '@react-navigation/native';

const FEATURE_CHIPS = [
  { icon: Trophy, label: 'Challenges' },
  { icon: Code, label: 'Problems' },
  { icon: Sparkles, label: 'Quizzes' },
] as const;

const LoginScreen = () => {
  const { colors, isDark } = useTheme();
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <View style={styles.hero}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />

        <AppText weight="extraBold" style={[styles.title, { color: colors.text }]}>
          LeetLab
        </AppText>

        <AppText
          weight="regular"
          style={[styles.subtitle, { color: colors.text }]}
        >
          Master coding with challenges that inspire
        </AppText>

        <View style={styles.chipRow}>
          {FEATURE_CHIPS.map(({ icon: Icon, label }) => (
            <View
              key={label}
              style={[styles.chip, { backgroundColor: colors.surface }]}
            >
              <Icon size={moderateScale(14)} color={colors.primary} />
              <AppText
                weight="medium"
                style={[styles.chipText, { color: colors.text }]}
              >
                {label}
              </AppText>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.footer}>
        <View style={styles.dividerRow}>
          <View style={[styles.dividerLine, { backgroundColor: colors.text }]} />
          <AppText
            weight="regular"
            style={[styles.dividerText, { color: colors.text }]}
          >
            Continue with
          </AppText>
          <View style={[styles.dividerLine, { backgroundColor: colors.text }]} />
        </View>

        <Pressable
          style={[styles.authButton, styles.googleButton , {borderWidth: moderateScale(1.5), borderColor: colors.text}]}
          android_ripple={{ color: '#E5E5E5' }}
          onPress={() => {
           navigation.navigate('bottomNavigator');
          }}
        >
          <Image
            source={require('../../assets/images/icon/google.png')}
            style={styles.authIcon}
            resizeMode="contain"
          />
          <AppText weight="semiBold" style={styles.googleButtonText}>
            Continue with Google
          </AppText>
        </Pressable>

        <Pressable
          style={[styles.authButton,  styles.googleButton, {borderWidth: moderateScale(1.5), borderColor: colors.text}]}
          android_ripple={{ color: isDark ? '#2A2A2E' : '#E5E5E5' }}
        >
          <Image
            source={require('../../assets/images/icon/github.png')}
            style={styles.authIcon}
            resizeMode="contain"
          />
          <AppText
            weight="semiBold" style={styles.googleButtonText}
          >
            Continue with GitHub
          </AppText>
        </Pressable>      
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(24),
  },
  hero: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: moderateScale(90),
    height: moderateScale(90),
    marginBottom: moderateScale(10),
  },
  title: {
    fontSize: moderateScale(28),
    letterSpacing: moderateScale(0.4),
  },
  subtitle: {
    fontSize: moderateScale(14),
    textAlign: 'center',
    opacity: 0.6,
    marginTop: moderateScale(8),
    lineHeight: moderateScale(20),
    paddingHorizontal: moderateScale(20),
  },
  chipRow: {
    flexDirection: 'row',
    marginTop: moderateScale(24),
    gap: moderateScale(8),
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: moderateScale(8),
    paddingHorizontal: moderateScale(12),
    borderRadius: moderateScale(20),
    gap: moderateScale(6),
  },
  chipText: {
    fontSize: moderateScale(12),
  },
  footer: {
    paddingBottom: moderateScale(20),
  },
  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: moderateScale(20),
    gap: moderateScale(10),
  },
  dividerLine: {
    flex: 1,
    height: moderateScale(1),
  },
  dividerText: {
    fontSize: moderateScale(13),
    
  },
  authButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: moderateScale(50),
    borderRadius: moderateScale(14),
    marginBottom: moderateScale(16),
    gap: moderateScale(10),
  },
  googleButton: {
    backgroundColor: '#FFFFFF',
  },
  authIcon: {
    width: moderateScale(20),
    height: moderateScale(20),
  },
  authButtonText: {
    fontSize: moderateScale(15),
  },
  googleButtonText: {
    fontSize: moderateScale(15),
    color: '#1F1F1F',
  },
});
