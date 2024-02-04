import { TitleHeader } from '@/components';
import { View, Text, StyleSheet } from 'react-native';

const Reserves = () => {
  return (
    <View style={styles.container}>
      <TitleHeader title="Reservas" />
    </View>
  );
};

export default Reserves;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
