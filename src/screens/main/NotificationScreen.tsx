import React from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Mail } from 'lucide-react-native';
import { moderateScale } from 'react-native-size-matters';
import AppText from '../../components/AppText';
import { useTheme } from '../../context/ThemeContext';

const notifications = [
  {
    id: '1',
    title: 'Conversations unlocked 🔥',
    subtitle: 'Chat feature dropping soon on LeetLab',
    date: '29/3/2026',
    unread: true,
  },
  {
    id: '2',
    title: 'Don’t scroll past this 👇',
    subtitle: 'Communities just dropped — join in',
    date: '25/3/2026',
    unread: true,
  },
  {
    id: '3',
    title: 'Hey, seen this yet? ✨',
    subtitle: 'Communities just went live on LeetLab',
    date: '25/3/2026',
    unread: true,
  },
  {
    id: '4',
    title: 'It’s a match waiting 😉',
    subtitle: 'Swipe Builder cards and find your next big idea',
    date: '24/3/2026',
    unread: true,
  },
  {
    id: '5',
    title: 'Build Teams is Live!',
    subtitle:
      'Improving things behind the scenes — better experience coming soon. Stay tuned ✨',
    date: '21/3/2026',
    unread: true,
  },
  {
    id: '6',
    title: "We're live",
    subtitle:
      'We’re improving your experience every day — stay tuned for what’s coming next ✨',
    date: '21/3/2026',
    unread: true,
  },
  {
    id: '7',
    title: 'Not Now',
    subtitle: 'We are getting better',
    date: '20/3/2026',
    unread: true,
  },
];

const NotificationItem = ({
  item,
  colors,
}: {
  item: (typeof notifications)[number];
  colors: ReturnType<typeof useTheme>['colors'];
}) => (
  <TouchableOpacity style={styles.item} activeOpacity={0.8}>
    <View style={[styles.iconBox, { backgroundColor: colors.surface }]}>
      <Mail size={moderateScale(18)} color={colors.primary} />
    </View>

    <View style={styles.content}>
      <AppText
        weight="semiBold"
        style={[styles.title, { color: colors.primary }]}
      >
        {item.title}
      </AppText>
      <AppText
        weight="regular"
        style={[styles.subtitle, { color: colors.text }]}
      >
        {item.subtitle}
      </AppText>
      <AppText weight="regular" style={[styles.date, { color: colors.text }]}>
        {item.date}
      </AppText>
    </View>

    {item.unread ? <View style={styles.dot} /> : null}
  </TouchableOpacity>
);

export default function NotificationScreen() {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <FlatList
        data={notifications}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <NotificationItem item={item} colors={colors} />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContent: {
    paddingHorizontal: moderateScale(16),
    paddingTop: moderateScale(8),
    paddingBottom: moderateScale(24),
  },
  item: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: moderateScale(12),
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#D9D9D9',
  },
  iconBox: {
    width: moderateScale(42),
    height: moderateScale(42),
    borderRadius: moderateScale(12),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: moderateScale(12),
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: moderateScale(13),
    marginBottom: moderateScale(2),
  },
  subtitle: {
    fontSize: moderateScale(12),
    opacity: 0.8,
    marginBottom: moderateScale(4),
  },
  date: {
    fontSize: moderateScale(11.5),
    opacity: 0.7,
  },
  dot: {
    width: moderateScale(8),
    height: moderateScale(8),
    borderRadius: moderateScale(4),
    backgroundColor: '#3B82F6',
    marginTop: moderateScale(6),
    marginLeft: moderateScale(6),
  },
});
