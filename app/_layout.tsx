import { Stack } from 'expo-router';

const StackLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: '#25212F' },
      }}
      initialRouteName="(tabs)"
    >
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="info" />
      <Stack.Screen name="notifications" />
      <Stack.Screen name="auth" />
    </Stack>
  );
};

export default StackLayout;
