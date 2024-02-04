import { View, Text, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { sizes, spacing } from '@/constants';

interface Props {
  title: string;
}

export const TitleHeader = ({ title }: Props) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ ...styles.container, marginTop: insets.top }}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: sizes.h2,
    fontWeight: 'bold',
  },
});
