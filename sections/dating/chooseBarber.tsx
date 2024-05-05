import { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Typography } from '@/components';
import { colors, spacing } from '@/constants';
import { barbers } from '@/mockup';
import Octicons from '@expo/vector-icons/Octicons';

type ChooseBarberProps = {
  onSelectBarber: React.Dispatch<React.SetStateAction<string>>;
  selected: string;
};

export const ChooseBarber = ({onSelectBarber, selected}: ChooseBarberProps) => {

  const handleSelectBarber = (barber: string) => {
    onSelectBarber(barber);
  };

  return (
    <View style={styles.container}>
      <Typography variant="h3" style={{ color: colors.white }}>
        Elige tu peluquero
      </Typography>

      <View style={styles.barbersContainer}>
        {barbers.map((barber) => (
          <TouchableOpacity
            key={barber.id}
            style={styles.barber}
            onPress={() => handleSelectBarber(barber.name)}
          >
            <View
              style={[
                styles.photoContainer,
                {
                  backgroundColor:
                  selected === barber.name ? '#624695' : '#2F2B39',
                },
              ]}
            >
              <Octicons name="person-fill" size={26} color="#BDC3C7" />
            </View>
            <Typography style={{ color: colors.white }}>{barber.name}</Typography>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: spacing.m,
  },
  barbersContainer: {
    flexDirection: 'row',
    marginTop: spacing.m,
    justifyContent: 'space-between',
  },
  barber: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  photoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: '#2F2B39',
  },
});
