import React, { useState } from 'react';
import {
  LayoutAnimation,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { moderateScale } from 'react-native-size-matters';
import { ChevronDown, Headphones } from 'lucide-react-native';
import AppText from '../../../components/AppText';
import { useTheme } from '../../../context/ThemeContext';

const faqItems = [
  {
    question: 'How do I join a hackathon?',
    answer:
      'Open the challenges section, choose a hackathon, and tap Join to reserve your spot.',
  },
  {
    question: 'How is my learning roadmap generated?',
    answer:
      'LeetLab analyzes your skill level and progress to suggest a custom path and daily practice plan.',
  },
  {
    question: 'Can I have multiple playbooks?',
    answer:
      'Yes, you can create and switch between multiple playbooks for different goals or topics.',
  },
  {
    question: 'How do I find teammates?',
    answer:
      'Use the community section or challenge details to connect with other learners and form a team.',
  },
  {
    question: 'How do I delete my account?',
    answer:
      'Visit your profile settings and choose Delete Account to start the account removal process.',
  },
];

export default function HelpAndSupportScreen() {
  const { colors } = useTheme();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setActiveIndex(current => (current === index ? null : index));
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={[styles.supportCard, { backgroundColor: colors.primary }]}>
        <Headphones size={moderateScale(24)} color="#FFFFFF" />

        <AppText
          weight="bold"
          style={[styles.supportTitle, { color: '#FFFFFF' }]}
        >
          Need help with LeetLab?
        </AppText>

        <AppText
          weight="regular"
          style={[styles.supportSubtitle, { color: '#FFFFFF' }]}
        >
          Our support team usually replies within 24 hours.
        </AppText>

        <View style={[styles.emailBox, { backgroundColor: '#FFFFFF' }]}>
          <AppText
            weight="bold"
            style={[styles.emailText, { color: colors.primary }]}
          >
            Email: support@leetlab.com
          </AppText>
        </View>
      </View>

      <AppText weight="bold" style={[styles.faqTitle, { color: colors.text }]}>
        FREQUENTLY ASKED
      </AppText>

      {faqItems.map((item, index) => {
        const isOpen = activeIndex === index;

        return (
          <TouchableOpacity
            key={item.question}
            style={[
              styles.faqItem,
              {
                backgroundColor: colors.surface,
                borderColor: colors.text + '20',
              },
            ]}
            onPress={() => toggleFAQ(index)}
            activeOpacity={0.85}
          >
            <View style={styles.faqRow}>
              <AppText
                weight="semiBold"
                style={[styles.faqText, { color: colors.text }]}
              >
                {item.question}
              </AppText>
              <ChevronDown
                size={moderateScale(18)}
                color={colors.text}
                style={{
                  transform: [{ rotate: isOpen ? '180deg' : '0deg' }],
                }}
              />
            </View>

            {isOpen ? (
              <AppText
                weight="regular"
                style={[styles.answerText, { color: colors.text }]}
              >
                {item.answer}
              </AppText>
            ) : null}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: moderateScale(16),
    paddingHorizontal: moderateScale(6),
  },
  listContent: {
    paddingHorizontal: moderateScale(16),
    paddingTop: moderateScale(8),
    paddingBottom: moderateScale(24),
  },
  supportCard: {
    borderRadius: moderateScale(16),
    padding: moderateScale(18),
    marginBottom: moderateScale(16),
  },
  supportTitle: {
    fontSize: moderateScale(18),
    marginTop: moderateScale(8),
  },
  supportSubtitle: {
    fontSize: moderateScale(13),
    marginTop: moderateScale(4),
    marginBottom: moderateScale(14),
    opacity: 0.9,
  },
  emailBox: {
    borderRadius: moderateScale(12),
    paddingVertical: moderateScale(12),
    alignItems: 'center',
  },
  emailText: {
    fontSize: moderateScale(13),
  },
  faqTitle: {
    fontSize: moderateScale(11),
    marginBottom: moderateScale(10),
    letterSpacing: moderateScale(1),
  },
  faqItem: {
    borderRadius: moderateScale(12),
    marginBottom: moderateScale(10),
    borderWidth: moderateScale(1),
    paddingVertical: moderateScale(14),
    paddingHorizontal: moderateScale(14),
  },
  faqRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  faqText: {
    fontSize: moderateScale(14),
    width: '88%',
  },
  answerText: {
    marginTop: moderateScale(10),
    fontSize: moderateScale(12),
    lineHeight: moderateScale(18),
    opacity: 0.8,
  },
});
