import { useCallback } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { colors, sizes, spacing } from '../../constants';
import { Typography } from '../typography';
import { router } from 'expo-router';

export const MainHeader = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ ...styles.container, marginTop: insets.top }}>
      <View>
        <Typography variant="body" style={styles.hello}>
          Hola, 👋
        </Typography>
        <Typography style={styles.name}>
          Carlos
        </Typography>
      </View>
      <View>
        <Ionicons
          name="notifications-outline"
          size={24}
          color="white"
          onPress={() => router.push({ pathname: 'notifications' })}
        />
        <View style={styles.badgeNotification} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 70,
  },
  hello: {
    color: colors.white,
  },
  name: {
    marginTop: -5,
    color: colors.white,
    fontSize: 30,
  },
  badgeNotification: {
    position: 'absolute',
    top: -2,
    right: -2,
    borderRadius: 50,
    backgroundColor: 'red',
    width: 7,
    height: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
