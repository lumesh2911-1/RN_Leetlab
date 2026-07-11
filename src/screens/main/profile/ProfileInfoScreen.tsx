import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { moderateScale } from 'react-native-size-matters';
import { Fingerprint, Mail, Shield, User } from 'lucide-react-native';
import AppText from '../../../components/AppText';
import { useTheme } from '../../../context/ThemeContext';

const profileData = {
  photo:
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
  email: 'alex.morgan@leetlab.com',
  id: 'LTB-284910',
  firstName: 'Alex',
  lastName: 'Morgan',
};

const MenuItem = ({
  icon,
  title,
  subtitle,
  colors,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  colors: ReturnType<typeof useTheme>['colors'];
}) => (
  <TouchableOpacity style={styles.menuItem} activeOpacity={0.85}>
    <View style={styles.iconBox}>{icon}</View>

    <View style={styles.textBox}>
      <AppText
        weight="semiBold"
        style={[styles.menuTitle, { color: colors.text }]}
      >
        {title}
      </AppText>
      <AppText
        weight="regular"
        style={[styles.menuSubtitle, { color: colors.text + '90' }]}
      >
        {subtitle}
      </AppText>
    </View>
  </TouchableOpacity>
);

const Divider = () => <View style={styles.divider} />;

export default function ProfileInfoScreen() {
  const { colors, isDark } = useTheme();

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <View style={styles.profileContainer}>
        <Image source={{ uri: profileData.photo }} style={styles.avatar} />
        <AppText
          weight="bold"
          style={[styles.nameText, { color: colors.text }]}
        >
          {`${profileData.firstName} ${profileData.lastName}`}
        </AppText>
        <AppText
          weight="regular"
          style={[styles.roleText, { color: colors.text }]}
        >
          Premium Learner
        </AppText>
      </View>

      <View
        style={[
          styles.card,
          { backgroundColor: colors.surface, borderColor: colors.text + '20' },
        ]}
      >
        <MenuItem
          icon={<Mail size={moderateScale(18)} color={colors.primary} />}
          title="Email"
          subtitle={profileData.email}
          colors={colors}
        />

        <Divider />

        <MenuItem
          icon={<Fingerprint size={moderateScale(18)} color={colors.primary} />}
          title="ID"
          subtitle={profileData.id}
          colors={colors}
        />

        <Divider />

        <MenuItem
          icon={<User size={moderateScale(18)} color={colors.primary} />}
          title="First Name"
          subtitle={profileData.firstName}
          colors={colors}
        />

        <Divider />

        <MenuItem
          icon={<Shield size={moderateScale(18)} color={colors.primary} />}
          title="Last Name"
          subtitle={profileData.lastName}
          colors={colors}
        />
      </View>

      <View
        style={[
          styles.infoBox,
          {
            backgroundColor: isDark ? '#1F2D24' : '#E6F4EA',
          },
        ]}
      >
        <AppText
          weight="regular"
          style={[styles.infoText, { color: isDark ? '#B7E7C0' : '#2E7D32' }]}
        >
          Your profile is managed by Google Sign-In. To update your name or
          photo, edit your Google account.
        </AppText>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: moderateScale(16),
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: moderateScale(16),
  },
  avatar: {
    width: moderateScale(88),
    height: moderateScale(88),
    borderRadius: moderateScale(44),
    marginBottom: moderateScale(10),
  },
  nameText: {
    fontSize: moderateScale(18),
    marginBottom: moderateScale(2),
  },
  roleText: {
    fontSize: moderateScale(12),
    opacity: 0.7,
  },
  card: {
    borderRadius: moderateScale(16),
    borderWidth: moderateScale(1),
    paddingVertical: moderateScale(6),
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: moderateScale(12),
    paddingHorizontal: moderateScale(14),
  },
  iconBox: {
    width: moderateScale(40),
    height: moderateScale(40),
    borderRadius: moderateScale(12),
    backgroundColor: '#FFF3E8',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: moderateScale(12),
  },
  textBox: {
    flex: 1,
  },
  menuTitle: {
    fontSize: moderateScale(13),
    marginBottom: moderateScale(2),
  },
  menuSubtitle: {
    fontSize: moderateScale(12),
    opacity: 0.75,
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#D7D7D7',
    marginHorizontal: moderateScale(14),
  },
  infoBox: {
    marginTop: moderateScale(16),
    borderRadius: moderateScale(12),
    paddingVertical: moderateScale(12),
    paddingHorizontal: moderateScale(14),
  },
  infoText: {
    fontSize: moderateScale(12.5),
    lineHeight: moderateScale(18),
    color: '#2E7D32',
  },
});
