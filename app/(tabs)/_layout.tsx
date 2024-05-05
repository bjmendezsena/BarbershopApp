import { Animated, StyleSheet, View } from 'react-native';
import { Tabs } from 'expo-router';
import Feather from '@expo/vector-icons/Feather';
import { colors, sizes } from '@/constants';
import { useRef } from 'react';
import { TabsInterface } from '@/types';

const tabs: TabsInterface[] = [
  {
    name: 'home',
    icon: 'home',
  },
  {
    name: 'dating',
    icon: 'calendar',
  },
  {
    name: 'reserves',
    icon: 'clipboard',
  },
  {
    name: 'settings',
    icon: 'settings',
  },
];

export default () => {
  const offsetAnimation = useRef(new Animated.Value(0)).current;

  return (
    <>
      <Tabs
        initialRouteName="home"
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: colors.white,
          tabBarInactiveTintColor: colors.lightGray,
          tabBarStyle: {
            backgroundColor: '#2B293A',
            borderTopColor: 'transparent',
            height: 90,
          },
        }}
      >
        {tabs.map(({ name, icon }, index) => (
          <Tabs.Screen
            key={name}
            name={name}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Feather name={icon} size={size} color={color} />
              ),
            }}
            listeners={{
              focus: () => {
                Animated.spring(offsetAnimation, {
                  toValue: index * (sizes.width / tabs.length),
                  useNativeDriver: true,
                }).start();
              },
            }}
          />
        ))}
      </Tabs>
      <Animated.View
        style={{
          ...styles.indicator,
          transform: [{ translateX: offsetAnimation }],
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  indicator: {
    position: 'absolute',
    width: 10,
    height: 2,
    left: sizes.width / 4 / 2 - 5,
    bottom: 30,
    backgroundColor: colors.white,
    zIndex: 100,
  },
});
