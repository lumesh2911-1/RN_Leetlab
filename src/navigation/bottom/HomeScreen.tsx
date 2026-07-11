import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { moderateScale } from 'react-native-size-matters';
import {
  Star,
  Flame,
  Trophy,
  Code,
  Puzzle,
  User,
  MessageCircle,
  ChevronRight,
} from 'lucide-react-native';
import AppText from '../../components/AppText';
import { useTheme } from '../../context/ThemeContext';

const HomeScreen = () => {
  const { colors } = useTheme();

  const quickActions = [
    {
      id: 'challenges',
      icon: Trophy,
      title: 'Challenges',
      subtitle: 'Compete & level up',
    },
    {
      id: 'problems',
      icon: Code,
      title: 'Problems',
      subtitle: 'Sharpen your skills',
    },
    {
      id: 'quizzes',
      icon: Puzzle,
      title: 'Quizzes',
      subtitle: 'Test your knowledge',
    },
    {
      id: 'profile',
      icon: User,
      title: 'Profile',
      subtitle: 'Stats & settings',
    },
  ];

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Stats Row */}
        <View style={styles.statsRow}>
          <View
            style={[
              styles.statBox,
              {
                backgroundColor: colors.surface,
                borderColor: colors.text + '10',
              },
            ]}
          >
            <Star size={moderateScale(20)} color={colors.primary} />
            <AppText
              weight="semiBold"
              style={[styles.statValue, { color: colors.text }]}
            >
              XP 0
            </AppText>
          </View>

          <View
            style={[
              styles.statBox,
              {
                backgroundColor: colors.surface,
                borderColor: colors.text + '10',
              },
            ]}
          >
            <Flame size={moderateScale(20)} color={colors.primary} />
            <AppText
              weight="semiBold"
              style={[styles.statValue, { color: colors.text }]}
            >
              Challenges 1
            </AppText>
          </View>
        </View>

        {/* Active Challenges Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <AppText
              weight="bold"
              style={[styles.sectionTitle, { color: colors.text }]}
            >
              Active Challenges
            </AppText>
            <TouchableOpacity activeOpacity={0.7}>
              <AppText
                weight="semiBold"
                style={[styles.viewAll, { color: colors.primary }]}
              >
                View All →
              </AppText>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={[
              styles.challengeCard,
              {
                backgroundColor: colors.surface,
                borderColor: colors.text + '10',
              },
            ]}
            activeOpacity={0.85}
          >
            <View style={styles.challengeHeader}>
              <Trophy size={moderateScale(32)} color={colors.primary} />
              <View style={styles.challengeStatus}>
                <View
                  style={[
                    styles.statusBadge,
                    { backgroundColor: colors.primary + '20' },
                  ]}
                >
                  <Flame size={moderateScale(12)} color={colors.primary} />
                  <AppText
                    weight="medium"
                    style={[styles.statusText, { color: colors.primary }]}
                  >
                    Active
                  </AppText>
                </View>
              </View>
            </View>

            <AppText
              weight="bold"
              style={[styles.challengeTitle, { color: colors.text }]}
            >
              12K Fitness with ChaiCode
            </AppText>

            <View style={styles.challengeFooter}>
              <View style={styles.endDate}>
                <MessageCircle
                  size={moderateScale(14)}
                  color={colors.text + '70'}
                />
                <AppText
                  weight="regular"
                  style={[styles.endDateText, { color: colors.text }]}
                >
                  Ends Jul 27
                </AppText>
              </View>
              <ChevronRight size={moderateScale(20)} color={colors.primary} />
            </View>
          </TouchableOpacity>
        </View>

        {/* Town Halls Section */}
        <TouchableOpacity
          style={[
            styles.townHallCard,
            {
              backgroundColor: colors.surface,
              borderColor: colors.text + '10',
            },
          ]}
          activeOpacity={0.85}
        >
          <View style={styles.townHallContent}>
            <MessageCircle size={moderateScale(24)} color={colors.primary} />
            <View style={styles.townHallText}>
              <AppText
                weight="bold"
                style={[styles.townHallTitle, { color: colors.text }]}
              >
                Town Halls
              </AppText>
              <AppText
                weight="regular"
                style={[styles.townHallSubtitle, { color: colors.text + '70' }]}
              >
                Real-time community chat
              </AppText>
            </View>
          </View>

          <View style={styles.roomInfo}>
            <Flame size={moderateScale(12)} color={colors.primary} />
            <AppText
              weight="semiBold"
              style={[styles.roomCount, { color: colors.primary }]}
            >
              1 room
            </AppText>
            <ChevronRight size={moderateScale(16)} color={colors.text + '50'} />
          </View>
        </TouchableOpacity>

        {/* Quick Actions Section */}
        <View style={styles.section}>
          <AppText
            weight="bold"
            style={[
              styles.sectionTitle,
              { color: colors.text, marginBottom: moderateScale(12) },
            ]}
          >
            Quick actions
          </AppText>

          <View style={styles.actionsGrid}>
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <TouchableOpacity
                  key={action.id}
                  style={[
                    styles.actionCard,
                    {
                      backgroundColor: colors.surface,
                      borderColor: colors.text + '10',
                    },
                  ]}
                  activeOpacity={0.85}
                >
                  <Icon size={moderateScale(28)} color={colors.primary} />
                  <AppText
                    weight="bold"
                    style={[styles.actionTitle, { color: colors.text }]}
                  >
                    {action.title}
                  </AppText>
                  <AppText
                    weight="regular"
                    style={[
                      styles.actionSubtitle,
                      { color: colors.text + '70' },
                    ]}
                  >
                    {action.subtitle}
                  </AppText>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: moderateScale(20),
  },
  scrollContent: {
    paddingHorizontal: moderateScale(10),

    paddingBottom: moderateScale(24),
  },
  statsRow: {
    flexDirection: 'row',
    gap: moderateScale(12),
    marginBottom: moderateScale(20),
  },
  statBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: moderateScale(14),
    paddingVertical: moderateScale(12),
    borderRadius: moderateScale(14),
    borderWidth: moderateScale(1),
    gap: moderateScale(8),
  },
  statValue: {
    fontSize: moderateScale(13),
  },
  section: {
    marginBottom: moderateScale(20),
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: moderateScale(12),
  },
  sectionTitle: {
    fontSize: moderateScale(16),
  },
  viewAll: {
    fontSize: moderateScale(12),
  },
  challengeCard: {
    borderRadius: moderateScale(16),
    borderWidth: moderateScale(1),
    padding: moderateScale(14),
  },
  challengeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: moderateScale(10),
  },
  challengeStatus: {
    alignItems: 'flex-end',
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: moderateScale(8),
    paddingVertical: moderateScale(4),
    borderRadius: moderateScale(8),
    gap: moderateScale(4),
  },
  statusText: {
    fontSize: moderateScale(11),
  },
  challengeTitle: {
    fontSize: moderateScale(14),
    marginBottom: moderateScale(12),
  },
  challengeFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  endDate: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(6),
  },
  endDateText: {
    fontSize: moderateScale(12),
    opacity: 0.8,
  },
  townHallCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: moderateScale(16),
    borderWidth: moderateScale(1),
    paddingHorizontal: moderateScale(14),
    paddingVertical: moderateScale(14),
    marginBottom: moderateScale(20),
  },
  townHallContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    gap: moderateScale(12),
  },
  townHallText: {
    flex: 1,
  },
  townHallTitle: {
    fontSize: moderateScale(14),
    marginBottom: moderateScale(2),
  },
  townHallSubtitle: {
    fontSize: moderateScale(12),
  },
  roomInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(4),
  },
  roomCount: {
    fontSize: moderateScale(12),
  },
  actionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: moderateScale(12),
  },
  actionCard: {
    width: '48%',
    borderRadius: moderateScale(14),
    borderWidth: moderateScale(1),
    paddingVertical: moderateScale(16),
    paddingHorizontal: moderateScale(12),
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionTitle: {
    fontSize: moderateScale(13),
    marginTop: moderateScale(8),
  },
  actionSubtitle: {
    fontSize: moderateScale(11),
    marginTop: moderateScale(2),
    textAlign: 'center',
  },
});
