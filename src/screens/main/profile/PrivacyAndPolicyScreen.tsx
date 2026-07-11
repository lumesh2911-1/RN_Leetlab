import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { moderateScale } from 'react-native-size-matters';
import AppText from '../../../components/AppText';
import { useTheme } from '../../../context/ThemeContext';

const sections = [
  {
    heading: '1. Information We Collect',
    body: 'We may collect personal information such as your name, email address, profile photo, and login details when you use LeetLab. We may also collect device information, usage data, and location data to improve our services.',
  },
  {
    heading: '2. How We Use Your Information',
    body: 'Your information is used to provide, improve, and personalize our services. This includes account management, customer support, learning insights, and enhancing your experience.',
  },
  {
    heading: '3. Sharing of Information',
    body: 'We do not sell your personal information. However, we may share your data with trusted third-party services such as authentication providers, analytics tools, and support platforms to operate our app.',
  },
  {
    heading: '4. Data Security',
    body: 'We take appropriate security measures to protect your data from unauthorized access, alteration, or disclosure. However, no system is completely secure, and we cannot guarantee absolute security.',
  },
  {
    heading: '5. Your Rights',
    body: 'You have the right to access, update, or delete your personal information. You may also request account deletion or data removal by contacting our support team.',
  },
  {
    heading: '6. Cookies & Tracking',
    body: 'LeetLab may use cookies or similar technologies to enhance your experience, analyze usage, and improve app performance.',
  },
  {
    heading: '7. Third-Party Services',
    body: 'Our app may contain links or integrations with third-party services. We are not responsible for the privacy practices of those services.',
  },
  {
    heading: '8. Changes to This Policy',
    body: 'We may update this Privacy Policy from time to time. Continued use of the app after updates means you accept the revised policy.',
  },
  {
    heading: '9. Contact Us',
    body: 'If you have any questions about this Privacy Policy, please contact us at support@leetlab.com.',
  },
];

export default function PrivacyAndPolicyScreen() {
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
          LeetLab Privacy Policy
        </AppText>

        <AppText
          weight="regular"
          style={[styles.updated, { color: colors.text }]}
        >
          Last updated: July 11, 2026
        </AppText>

        {sections.map(section => (
          <React.Fragment key={section.heading}>
            <AppText
              weight="bold"
              style={[styles.heading, { color: colors.primary }]}
            >
              {section.heading}
            </AppText>
            <AppText
              weight="regular"
              style={[styles.paragraph, { color: colors.text }]}
            >
              {section.body}
            </AppText>
          </React.Fragment>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: moderateScale(16),
  },
  contentContainer: {
    paddingHorizontal: moderateScale(16),
    paddingTop: 0,
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
});
