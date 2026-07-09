import React from 'react';
import { Text, TextProps } from 'react-native';
import { FONTS } from '../constants/fonts';

export type FontWeight = keyof typeof FONTS;

interface AppTextProps extends TextProps {
  weight?: FontWeight;
}

export default function AppText({
  style,
  weight = 'regular',
  ...rest
}: AppTextProps) {
  return (
    <Text style={[{ fontFamily: FONTS[weight] }, style]} {...rest} />
  );
}
