import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import moment from 'moment';
import { TitleHeader } from '@/components';
import { colors, sizes, spacing } from '@/constants';
import { Calendar } from '@/components/calendar';
import { Typography } from '@/components/typography';
import { AvailableHours, ChooseBarber } from '@/sections';
import { LinearGradient } from 'expo-linear-gradient';
import { useAppointmentStore } from '@/store';
import { router } from 'expo-router';

const Dating = () => {
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedHour, setSelectedHour] = useState<string>('');
  const [selectedBarber, setSelectedBarber] = useState<string>('');
  const { addAppointment } = useAppointmentStore();

  console.log({ selectedDate, selectedHour, selectedBarber });

  useEffect(() => {
    setSelectedDate(moment().format('DD-MM-YYYY'));
  }, []);

  const handleAddAppointment = () => {
    if (!selectedDate || !selectedHour || !selectedBarber) {
      return;
    }
    const newAppointment = {
      date: selectedDate,
      time: selectedHour,
      professionalName: selectedBarber,
    };
    addAppointment(newAppointment);
    setSelectedDate('');
    setSelectedHour('');
    setSelectedBarber('');
    router.push('/(tabs)/reserves');
  };

  return (
    <View style={{ ...styles.container }}>
      <TitleHeader title="Crear nueva cita" />
      <Typography variant="h3" style={styles.title}>
        Seleccione día y hora
      </Typography>
      <Calendar onSelectDate={setSelectedDate} selected={selectedDate} />
      <AvailableHours onSelectHour={setSelectedHour} selected={selectedHour} />
      <ChooseBarber
        onSelectBarber={setSelectedBarber}
        selected={selectedBarber}
      />

      <LinearGradient
        colors={['#6a3093', '#624695']}
        style={styles.buttonContainer}
      >
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.button}
          onPress={handleAddAppointment}
        >
          <Typography style={{ fontSize: 18, color: colors.white }}>
            Guardar
          </Typography>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default Dating;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: spacing.l,
    backgroundColor: '#25212F',
  },
  title: {
    marginTop: spacing.l,
    marginBottom: spacing.m,
    fontSize: sizes.h3,
    fontWeight: 'bold',
    color: colors.white,
  },
  buttonContainer: {
    backgroundColor: '#624695',
    padding: spacing.s,
    borderRadius: 8,
    position: 'absolute',
    left: '50%',
    bottom: 10,
    transform: [{ translateX: -70 }],
    right: spacing.l,
    width: 180,
    height: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
