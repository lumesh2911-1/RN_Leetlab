import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Pressable,
  ScrollView,
} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import {
  Search,
  PlayCircle,
  CalendarDays,
  Clock3,
  Gift,
} from 'lucide-react-native';
import { useTheme } from '../../context/ThemeContext';
import AppText from '../../components/AppText';

const TABS = ['All', 'Active', 'Upcoming', 'Expired'] as const;

const ChallengesScreen = () => {
  const { colors, isDark } = useTheme();
  const [activeTab, setActiveTab] = useState<(typeof TABS)[number]>('All');

  return (
    <ScrollView
      style={[styles.screen, { backgroundColor: colors.background }]}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <View
        style={[
          styles.searchWrapper,
          {
            backgroundColor: isDark ? colors.surface : '#F4F6FA',
            borderColor: isDark ? '#FFFFFF10' : '#11111110',
          },
        ]}
      >
        <Search size={moderateScale(18)} color={colors.text} />
        <TextInput
          placeholder="Search challenges..."
          placeholderTextColor={colors.text + '99'}
          style={[styles.searchInput, { color: colors.text }]}
        />
      </View>

      <View style={styles.tabRow}>
        {TABS.map(tab => {
          const active = tab === activeTab;
          return (
            <Pressable
              key={tab}
              onPress={() => setActiveTab(tab)}
              style={[
                styles.tabButton,
                active && {
                  backgroundColor: colors.primary,
                  borderColor: colors.primary,
                },
                !active && {
                  borderColor: colors.text + '15',
                },
              ]}
            >
              <AppText
                weight="semiBold"
                style={[
                  styles.tabText,
                  { color: active ? '#FFFFFF' : colors.text },
                ]}
              >
                {tab}
              </AppText>
            </Pressable>
          );
        })}
      </View>

      <View
        style={[
          styles.card,
          { backgroundColor: colors.surface, borderColor: colors.text + '10' },
        ]}
      >
        <View style={styles.cardHeader}>
          <View style={styles.headerLeft}>
            <View
              style={[
                styles.iconCircle,
                { backgroundColor: colors.primary + '15' },
              ]}
            >
              <PlayCircle size={moderateScale(24)} color={colors.primary} />
            </View>
            <View style={styles.titleColumn}>
              <AppText
                weight="medium"
                style={[styles.cardLabel, { color: colors.primary }]}
              >
                YouTube
              </AppText>
              <AppText
                weight="semiBold"
                style={[styles.cardTitle, { color: colors.text }]}
              >
                12K Fitness with ChaiCode
              </AppText>
            </View>
          </View>

          <View
            style={[
              styles.statusBadge,
              { backgroundColor: colors.primary + '15' },
            ]}
          >
            <AppText
              weight="medium"
              style={[styles.statusText, { color: colors.primary }]}
            >
              Active
            </AppText>
          </View>
        </View>

        <AppText
          weight="regular"
          style={[styles.cardDescription, { color: colors.text }]}
        >
          Code karna important hai, but long-term game sirf laptop ke saamne
          baith kar nahi jeeta jaata. This challenge is for every coder who
          wants to stay consistent.
        </AppText>

        <View style={styles.cardMetaRow}>
          <View style={styles.metaGroup}>
            <View style={styles.metaItem}>
              <CalendarDays size={moderateScale(14)} color={colors.primary} />
              <AppText style={[styles.metaText, { color: colors.text }]}>
                Jun 27, 2026 - Jul 27, 2026
              </AppText>
            </View>
            <View style={styles.metaItem}>
              <Clock3 size={moderateScale(14)} color={colors.primary} />
              <AppText style={[styles.metaText, { color: colors.text }]}>
                Daily
              </AppText>
            </View>
          </View>

          <View
            style={[
              styles.rewardTag,
              { backgroundColor: colors.primary + '10' },
            ]}
          >
            <Gift size={moderateScale(14)} color={colors.secondary} />
            <AppText style={[styles.rewardText, { color: colors.secondary }]}>
              Chai Code Swags
            </AppText>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ChallengesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: moderateScale(8),
    paddingVertical: moderateScale(5),
  },
  content: {
    paddingVertical: moderateScale(10),
  },
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: moderateScale(16),
    height: moderateScale(48),
    borderRadius: moderateScale(25),
    borderWidth: moderateScale(1),
    marginBottom: moderateScale(15),
    gap: moderateScale(10),
  },
  searchInput: {
    flex: 1,
    fontSize: moderateScale(14),
    padding: 0,
  },
  tabRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: moderateScale(8),
    marginBottom: moderateScale(15),
  },
  tabButton: {
    paddingVertical: moderateScale(6),
    paddingHorizontal: moderateScale(18),
    borderRadius: moderateScale(20),
    borderWidth: moderateScale(1),
  },
  tabText: {
    fontSize: moderateScale(12),
  },
  card: {
    borderRadius: moderateScale(15),
    padding: moderateScale(20),
    borderWidth: moderateScale(1),
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: moderateScale(16),
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flex: 1,
  },
  iconCircle: {
    width: moderateScale(44),
    height: moderateScale(44),
    borderRadius: moderateScale(14),
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleColumn: {
    flex: 1,
    marginLeft: moderateScale(12),
  },
  cardLabel: {
    fontSize: moderateScale(12),
    marginBottom: moderateScale(4),
  },
  cardTitle: {
    fontSize: moderateScale(14),
    lineHeight: moderateScale(22),
  },
  statusBadge: {
    paddingVertical: moderateScale(6),
    paddingHorizontal: moderateScale(10),
    borderRadius: moderateScale(16),
  },
  statusText: {
    fontSize: moderateScale(11),
  },
  cardDescription: {
    fontSize: moderateScale(13),
    lineHeight: moderateScale(20),
    opacity: 0.82,
    marginBottom: moderateScale(20),
  },
  cardMetaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: moderateScale(12),
  },
  metaGroup: {
    gap: moderateScale(10),
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(8),
  },
  metaText: {
    fontSize: moderateScale(12),
  },
  rewardTag: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(8),
    borderRadius: moderateScale(16),
    paddingVertical: moderateScale(8),
    paddingHorizontal: moderateScale(12),
  },
  rewardText: {
    fontSize: moderateScale(12),
    fontWeight: '700',
  },
});
