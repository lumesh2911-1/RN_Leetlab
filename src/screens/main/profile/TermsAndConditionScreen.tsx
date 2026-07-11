import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { moderateScale } from 'react-native-size-matters';
import AppText from '../../../components/AppText';
import { useTheme } from '../../../context/ThemeContext';

const bulletPoints = [
  'Use the app for any unlawful or fraudulent activities.',
  'Attempt to hack, disrupt, or misuse the platform.',
  'Share false, misleading, or harmful information.',
  'Impersonate another person or entity.',
  'Interfere with the normal functioning of LeetLab services.',
];

export default function TermsAndConditionScreen() {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        <AppText
          weight="bold"
          style={[styles.title, { color: colors.primary }]}
        >
          LeetLab Terms of Use
        </AppText>

        <AppText
          weight="regular"
          style={[styles.updated, { color: colors.text }]}
        >
          Last updated: July 11, 2026
        </AppText>

        <AppText
          weight="bold"
          style={[styles.heading, { color: colors.primary }]}
        >
          1. Acceptance of Terms
        </AppText>
        <AppText
          weight="regular"
          style={[styles.paragraph, { color: colors.text }]}
        >
          By downloading and using LeetLab, you agree to comply with and be
          bound by these Terms of Use. If you do not agree with these terms,
          please do not use the application. These terms apply to all services
          and features provided by LeetLab.
        </AppText>

        <AppText
          weight="bold"
          style={[styles.heading, { color: colors.primary }]}
        >
          2. Eligibility
        </AppText>
        <AppText
          weight="regular"
          style={[styles.paragraph, { color: colors.text }]}
        >
          LeetLab is intended for users aged 13 years and above. By using the
          app, you confirm that you meet this requirement. Users under the age
          of 18 must have permission from a parent or legal guardian.
        </AppText>

        <AppText
          weight="bold"
          style={[styles.heading, { color: colors.primary }]}
        >
          3. User Accounts
        </AppText>
        <AppText
          weight="regular"
          style={[styles.paragraph, { color: colors.text }]}
        >
          To access certain features, you may be required to create an account.
          You are responsible for maintaining the confidentiality of your login
          credentials and for all activities under your account. LeetLab may use
          third-party authentication providers such as Google Sign-In.
        </AppText>

        <AppText
          weight="bold"
          style={[styles.heading, { color: colors.primary }]}
        >
          4. Acceptable Use
        </AppText>
        <AppText
          weight="regular"
          style={[styles.paragraph, { color: colors.text }]}
        >
          You agree not to:
        </AppText>

        <View style={styles.bulletContainer}>
          {bulletPoints.map(point => (
            <AppText
              key={point}
              weight="regular"
              style={[styles.bullet, { color: colors.text }]}
            >
              • {point}
            </AppText>
          ))}
        </View>

        <AppText
          weight="bold"
          style={[styles.heading, { color: colors.primary }]}
        >
          5. Payments & Transactions
        </AppText>
        <AppText
          weight="regular"
          style={[styles.paragraph, { color: colors.text }]}
        >
          LeetLab may facilitate payments, bookings, or transactions. All
          payments are processed through secure third-party payment gateways.
          LeetLab is not responsible for any payment failures, delays, or
          unauthorized transactions caused by external providers.
        </AppText>

        <AppText
          weight="bold"
          style={[styles.heading, { color: colors.primary }]}
        >
          6. Privacy
        </AppText>
        <AppText
          weight="regular"
          style={[styles.paragraph, { color: colors.text }]}
        >
          Your use of LeetLab is also governed by our Privacy Policy. We are
          committed to protecting your personal information and ensuring a
          secure user experience.
        </AppText>

        <AppText
          weight="bold"
          style={[styles.heading, { color: colors.primary }]}
        >
          7. Termination
        </AppText>
        <AppText
          weight="regular"
          style={[styles.paragraph, { color: colors.text }]}
        >
          We reserve the right to suspend or terminate your account at any time
          if you violate these terms or misuse the platform.
        </AppText>

        <AppText
          weight="bold"
          style={[styles.heading, { color: colors.primary }]}
        >
          8. Changes to Terms
        </AppText>
        <AppText
          weight="regular"
          style={[styles.paragraph, { color: colors.text }]}
        >
          LeetLab may update these Terms of Use from time to time. Continued use
          of the app after changes means you accept the updated terms.
        </AppText>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: moderateScale(10),
  },
  contentContainer: {
    paddingHorizontal: moderateScale(16),
    paddingTop: moderateScale(12),
    paddingBottom: moderateScale(24),
  },
  title: {
    fontSize: moderateScale(20),
    marginBottom: moderateScale(4),
  },
  updated: {
    fontSize: moderateScale(12),
    opacity: 0.7,
    marginBottom: moderateScale(12),
  },
  heading: {
    fontSize: moderateScale(14),
    marginTop: moderateScale(12),
    marginBottom: moderateScale(6),
  },
  paragraph: {
    fontSize: moderateScale(12.5),
    lineHeight: moderateScale(20),
    opacity: 0.85,
  },
  bulletContainer: {
    marginTop: moderateScale(4),
    paddingLeft: moderateScale(8),
  },
  bullet: {
    fontSize: moderateScale(12.5),
    lineHeight: moderateScale(20),
    opacity: 0.85,
    marginBottom: moderateScale(4),
  },
});
