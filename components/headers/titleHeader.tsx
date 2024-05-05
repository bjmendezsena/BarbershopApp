import { View, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Typography } from '../typography';
import { colors } from '@/constants';

interface Props {
  title: string;
  backButton?: boolean;
}

export const TitleHeader = ({ title, backButton }: Props) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ ...styles.container, marginTop: insets.top }}>
      {backButton && (
        <Ionicons
          name="arrow-back-outline"
          size={24}
          color="white"
          onPress={() => router.back()}
        />
      )}
      <Typography variant="h2" style={{ color: colors.white }}>
        {title}
      </Typography>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 15,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
