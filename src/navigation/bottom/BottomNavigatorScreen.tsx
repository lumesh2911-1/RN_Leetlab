import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {  CodeXml, House, LucideProps, Trophy, User } from 'lucide-react-native';
import { moderateScale } from 'react-native-size-matters';
import HomeScreen from './HomeScreen';
import ProblemScreen from './ProblemScreen';
import ChallengesScreen from './ChallengesScreen';
import ProfileScreen from './ProfileScreen';
import { useTheme } from '../../context/ThemeContext';
import { FONTS } from '../../constants/fonts';

const Tab = createBottomTabNavigator();
const ICON_SIZE = moderateScale(24);

const HomeIcon = ({ color }: LucideProps) => (
  <House size={ICON_SIZE} color={color} />
);
const ProblemIcon = ({ color }: LucideProps) => (
  <CodeXml size={ICON_SIZE} color={color} />
);
const ChallengesIcon = ({ color }: LucideProps) => (
  <Trophy size={22} color={color} />
);
const ProfileIcon = ({ color }: LucideProps) => (
  <User size={ICON_SIZE} color={color} />
);

const BottomNavigatorScreen = () => {
  const { colors } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.surface, },
        headerTintColor: colors.text,
        headerTitleStyle: { fontFamily: FONTS.semiBold, },
        tabBarStyle: { backgroundColor: colors.surface, height: moderateScale(85),paddingTop: moderateScale(13),},
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.text,
        tabBarLabelStyle: { fontFamily: FONTS.medium, fontSize: moderateScale(11) },
        tabBarIconStyle: { marginBottom: moderateScale(4) },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ tabBarIcon: HomeIcon }}
      />
      <Tab.Screen
        name="Problem"
        component={ProblemScreen}
        options={{ tabBarIcon: ProblemIcon }}
      />
      <Tab.Screen
        name="Challenges"
        component={ChallengesScreen}
        options={{ tabBarIcon: ChallengesIcon }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ tabBarIcon: ProfileIcon }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigatorScreen;
