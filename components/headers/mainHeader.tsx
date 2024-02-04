import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const MainHeader = () => {
  const insets = useSafeAreaInsets();

  return (
    <View>
      <Text>MainHeader</Text>
    </View>
  );
};
