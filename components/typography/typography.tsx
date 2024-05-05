import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import { Text, TextStyle } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { colors } from '@/constants';

interface TypographyProps {
  variant?: 'body' | 'h1' | 'h2' | 'h3';
  style?: TextStyle;
  children: React.ReactNode;
}

export const Typography = ({
  variant = 'body',
  style,
  children,
}: TypographyProps) => {

  const [fontsLoaded, fontError] = useFonts({
    'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Medium': require('../../assets/fonts/Poppins-Medium.ttf'),
    'Poppins-SemiBold': require('../../assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Black': require('../../assets/fonts/Poppins-Black.ttf'),
    'Poppins-ExtraBold': require('../../assets/fonts/Poppins-ExtraBold.ttf'),
    'Poppins-Light': require('../../assets/fonts/Poppins-Light.ttf'),
    'Poppins-ExtraLight': require('../../assets/fonts/Poppins-ExtraLight.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const variantStyles: { [key: string]: TextStyle } = {
    body: {
      fontSize: 14,
      fontWeight: 'normal',
    },
    h1: {
      fontSize: 32,
      fontWeight: 'bold',
    },
    h2: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    h3: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    h4: {
      fontSize: 18,
      fontWeight: 'bold',
    },
  };

  const textStyle: TextStyle = {
    ...variantStyles[variant],
    ...style,
  };

  return (
    <Text
      style={{ ...textStyle }}
      onLayout={onLayoutRootView}
    >
      {children}
    </Text>
  );
};
