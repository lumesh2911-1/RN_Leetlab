import React, { useMemo, useState } from 'react';
import { StyleSheet, View, TextInput, FlatList, Platform } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { Search, CheckCircle2 } from 'lucide-react-native';
import { useTheme } from '../../context/ThemeContext';
import AppText from '../../components/AppText';

const PROBLEMS = [
  {
    id: '1',
    title: 'Minimum Absolute Difference',
    difficulty: 'Easy',
    acceptance: '15.1%',
  },
  {
    id: '2',
    title: 'Add Binary',
    difficulty: 'Easy',
    acceptance: '27.4%',
  },
  {
    id: '3',
    title: 'Decode Ways',
    difficulty: 'Medium',
    acceptance: '43.5%',
  },
  {
    id: '4',
    title: 'House Robber',
    difficulty: 'Medium',
    acceptance: '34.6%',
  },
  {
    id: '5',
    title: 'Integer Break',
    difficulty: 'Hard',
    acceptance: '51.6%',
  },
];

const difficultyColor = {
  Easy: '#22C55E',
  Medium: '#F59E0B',
  Hard: '#EF4444',
} as const;

const ProblemScreen = () => {
  const { colors, isDark } = useTheme();
  const [query, setQuery] = useState('');

  const filteredProblems = useMemo(
    () =>
      PROBLEMS.filter(problem =>
        problem.title.toLowerCase().includes(query.toLowerCase()),
      ),
    [query],
  );

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <AppText
        weight="semiBold"
        style={[styles.heading, { color: colors.text }]}
      >
        Coding Problems
      </AppText>

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
          value={query}
          onChangeText={setQuery}
          placeholder="Search problems..."
          placeholderTextColor={colors.text + '66'}
          style={[styles.searchInput, { color: colors.text }]}
        />
      </View>

      <FlatList
        data={filteredProblems}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <AppText style={[styles.emptyText, { color: colors.text }]}>
            No problems found.
          </AppText>
        }
        renderItem={({ item }) => (
          <View
            style={[
              styles.card,
              {
                backgroundColor: colors.surface,
                borderColor: colors.text + '10',
              },
            ]}
          >
            <View style={styles.cardHeader}>
              <AppText
                weight="semiBold"
                style={[styles.cardTitle, { color: colors.text }]}
              >
                {item.title}
              </AppText>
              <View
                style={[
                  styles.difficultyBadge,
                  { backgroundColor: difficultyColor[item.difficulty] + '20' },
                ]}
              >
                <AppText
                  weight="medium"
                  style={[
                    styles.difficultyText,
                    { color: difficultyColor[item.difficulty] },
                  ]}
                >
                  {item.difficulty.toUpperCase()}
                </AppText>
              </View>
            </View>

            <View style={styles.cardFooter}>
              <View style={styles.acceptanceRow}>
                <CheckCircle2
                  size={moderateScale(14)}
                  color={colors.text + '88'}
                />
                <AppText
                  style={[styles.acceptanceText, { color: colors.text + '88' }]}
                >
                  {item.acceptance} acceptance
                </AppText>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default ProblemScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: moderateScale(8),
    paddingVertical: moderateScale(5),
  },
  heading: {
    fontSize: moderateScale(19),
    marginBottom: moderateScale(10),
    marginTop: moderateScale(10),
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
  list: {
    paddingBottom: moderateScale(20),
  },
  card: {
    borderRadius: moderateScale(10),
    padding: moderateScale(18),
    marginBottom: moderateScale(14),
    borderWidth: moderateScale(1),
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: moderateScale(10),
  },
  cardTitle: {
    flex: 1,
    fontSize: moderateScale(16),
    marginRight: moderateScale(12),
    lineHeight: moderateScale(22),
  },
  difficultyBadge: {
    paddingVertical: moderateScale(6),
    paddingHorizontal: moderateScale(12),
    borderRadius: moderateScale(16),
  },
  difficultyText: {
    fontSize: moderateScale(11),
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  acceptanceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(8),
  },
  acceptanceText: {
    fontSize: moderateScale(12),
  },
  emptyText: {
    marginTop: moderateScale(20),
    fontSize: moderateScale(14),
    textAlign: 'center',
  },
});
