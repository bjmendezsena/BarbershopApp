import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { TitleHeader, Typography } from '@/components';
import { colors, spacing } from '@/constants';
import AntDesign from '@expo/vector-icons/AntDesign';

const Settings = () => {
  return (
    <View style={styles.container}>
      <TitleHeader title="Ajustes" />

      <TouchableOpacity
        style={styles.menuItem}
        activeOpacity={0.8}
        onPress={() => router.push('/auth')}
      >
        <AntDesign name="login" size={24} color="white" />
        <Typography variant="h3" style={{ color: colors.white }}>
          Iniciar sesión
        </Typography>
      </TouchableOpacity>
      <View style={styles.divider} />
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#25212F',
    paddingHorizontal: spacing.l,
    flex: 1,
  },
  divider: {
    height: 1,
    backgroundColor: '#3f3a4c',
    marginTop: spacing.m,
  },
  menuItem: {
    marginTop: spacing.xl,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.m,
    paddingHorizontal: spacing.m,
  },
});
