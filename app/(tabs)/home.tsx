import {
  View,
  StyleSheet,
} from 'react-native';
import { MainHeader } from '@/components';
import { colors, spacing } from '@/constants';
import { StatusBar } from 'expo-status-bar';
import { UpcomingAppointments } from '@/sections';

const Home = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <MainHeader />

      <UpcomingAppointments />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25212F',
    paddingHorizontal: spacing.l,
  },
  bodyContainer: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 30,
  },
});
