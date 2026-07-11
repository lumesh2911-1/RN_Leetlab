import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import {
  User,
  Bell,
  HelpCircle,
  FileText,
  Shield,
  LogOut,
  ChevronRight,
} from 'lucide-react-native';
import { useTheme } from '../../context/ThemeContext';
import AppText from '../../components/AppText';
import { useNavigation } from '@react-navigation/native';

const user = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  photo: 'https://i.pravatar.cc/300',
};

const accountItems = [
  {
    id: 'personalInfo',
    icon: User,
    title: 'Personal Info',
    subtitle: 'Name, email, photo',
    route: 'personalInfo',
  },
  {
    id: 'notifications',
    icon: Bell,
    title: 'Notifications',
    subtitle: 'Manage what you hear about',
    route: 'notifications',
  },
];

const chargeXItems = [
  {
    id: 'helpAndSupport',
    icon: HelpCircle,
    title: 'Help & Support',
    subtitle: 'Contact, FAQs, report issues',
    route: 'helpAndSupport',
  },
  {
    id: 'termsAndConditions',
    icon: FileText,
    title: 'Terms & Conditions',
    subtitle: 'Usage rules and agreements',
    route: 'termsAndConditions',
  },
  {
    id: 'privacyPolicy',
    icon: Shield,
    title: 'Privacy Policy',
    subtitle: 'How we handle your data',
    route: 'privacyPolicy',
  },
];

const ProfileScreen = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.background }]}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.profileContainer}>
        <View style={[styles.profileCard]}>
          <View style={styles.avatarWrapper}>
            <Image source={{ uri: user.photo }} style={styles.avatar} />
            <View style={[styles.tick, { borderColor: colors.surface }]} />
          </View>

          <AppText
            weight="extraBold"
            style={[styles.name, { color: colors.text }]}
          >
            {user.name}
          </AppText>
          <AppText
            weight="regular"
            style={[styles.subtitle, { color: colors.text + '70' }]}
          >
            Active member since 2024
          </AppText>

          <View style={[styles.badge, { borderColor: colors.text + '20' }]}>
            <AppText
              weight="medium"
              style={[styles.email, { color: colors.text + '70' }]}
            >
              {user.email}
            </AppText>
          </View>
        </View>
      </View>

      <AppText
        weight="semiBold"
        style={[styles.sectionTitle, { color: colors.text + '80' }]}
      >
        Account
      </AppText>
      <View
        style={[
          styles.card,
          { backgroundColor: colors.surface, borderColor: colors.text + '08' },
        ]}
      >
        {accountItems.map(item => (
          <React.Fragment key={item.id}>
            <MenuItem
              icon={item.icon}
              title={item.title}
              subtitle={item.subtitle}
              onPress={() => navigation.navigate(item.route as never)}
              colors={colors}
            />
            {item.id !== accountItems[accountItems.length - 1].id && (
              <Divider colors={colors} />
            )}
          </React.Fragment>
        ))}
      </View>

      <AppText
        weight="semiBold"
        style={[styles.sectionTitle, { color: colors.text + '80' }]}
      >
        LeetLab
      </AppText>
      <View
        style={[
          styles.card,
          { backgroundColor: colors.surface, borderColor: colors.text + '08' },
        ]}
      >
        {chargeXItems.map(item => (
          <React.Fragment key={item.id}>
            <MenuItem
              icon={item.icon}
              title={item.title}
              subtitle={item.subtitle}
              onPress={() => navigation.navigate(item.route as never)}
              colors={colors}
            />
            {item.id !== chargeXItems[chargeXItems.length - 1].id && (
              <Divider colors={colors} />
            )}
          </React.Fragment>
        ))}
      </View>

      <TouchableOpacity
        style={[
          styles.logoutBtn,
          { borderColor: '#FCA5A5', backgroundColor: '#FEE2E2' },
        ]}
      >
        <LogOut size={moderateScale(20)} color="#E53935" />
        <AppText weight="bold" style={styles.logoutText}>
          Logout
        </AppText>
      </TouchableOpacity>
    </ScrollView>
  );
};

const MenuItem = ({ icon: Icon, title, subtitle, onPress, colors }: any) => (
  <TouchableOpacity style={styles.menuItem} onPress={onPress}>
    <View style={[styles.iconBox, { backgroundColor: colors.surface }]}>
      <Icon size={moderateScale(22)} color={colors.primary} />
    </View>
    <View style={styles.menuText}>
      <AppText
        weight="semiBold"
        style={[styles.menuTitle, { color: colors.text }]}
      >
        {title}
      </AppText>
      <AppText
        weight="regular"
        style={[styles.menuSubtitle, { color: colors.text + '70' }]}
      >
        {subtitle}
      </AppText>
    </View>
    <ChevronRight size={moderateScale(18)} color={colors.text + '60'} />
  </TouchableOpacity>
);

const Divider = ({ colors }: { colors: any }) => (
  <View style={[styles.divider, { backgroundColor: colors.text + '10' }]} />
);

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: moderateScale(20),
    paddingBottom: moderateScale(20),
  },
  profileContainer: {
    alignItems: 'center',
  },
  profileCard: {
    width: '100%',
    borderRadius: moderateScale(24),
    alignItems: 'center',
  },
  avatarWrapper: {
    position: 'relative',
    marginBottom: moderateScale(8),
  },
  avatar: {
    width: moderateScale(70),
    height: moderateScale(70),
    borderRadius: moderateScale(45),
  },
  tick: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: moderateScale(15),
    height: moderateScale(15),
    borderRadius: moderateScale(10),
    backgroundColor: '#046227',
    borderWidth: moderateScale(2),
  },
  name: {
    fontSize: moderateScale(18),
  },
  subtitle: {
    fontSize: moderateScale(14),
    marginTop: moderateScale(6),
    marginBottom: moderateScale(12),
  },
  badge: {
    paddingHorizontal: moderateScale(20),
    paddingVertical: moderateScale(4),
    borderRadius: moderateScale(22),
    borderWidth: moderateScale(1),
  },
  email: {
    fontSize: moderateScale(12),
  },
  sectionTitle: {
    fontSize: moderateScale(15),
    marginBottom: moderateScale(12),
  },
  card: {
    borderRadius: moderateScale(15),
    borderWidth: moderateScale(1),
    marginBottom: moderateScale(18),
    overflow: 'hidden',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: moderateScale(14),
    paddingHorizontal: moderateScale(14),
  },
  iconBox: {
    width: moderateScale(44),
    height: moderateScale(44),
    borderRadius: moderateScale(14),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: moderateScale(14),
  },
  menuText: {
    flex: 1,
  },
  menuTitle: {
    fontSize: moderateScale(14),
    marginBottom: moderateScale(4),
  },
  menuSubtitle: {
    fontSize: moderateScale(12),
  },
  divider: {
    height: 1,
    marginHorizontal: moderateScale(14),
  },
  logoutBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: moderateScale(4),
    paddingVertical: moderateScale(14),
    borderRadius: moderateScale(16),
    borderWidth: moderateScale(1.2),
    gap: moderateScale(10),
  },
  logoutText: {
    fontSize: moderateScale(14),
  },
});
