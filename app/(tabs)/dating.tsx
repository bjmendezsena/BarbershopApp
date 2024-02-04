import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TitleHeader } from '@/components';
import { sizes, spacing } from '@/constants';
import { Calendar } from '@/components/calendar';

const Dating = () => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  useEffect(() => {
    setSelectedDate(moment().format('YYYY-MM-DD'));
  }, []);

  return (
    <View style={{ ...styles.container }}>
      <TitleHeader title="Crear nueva cita" />

      <Text style={styles.title}>Seleccione un día</Text>
      <Calendar onSelectDate={setSelectedDate} selected={selectedDate} />
    </View>
  );
};

export default Dating;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: spacing.l,
    backgroundColor: '#566573',
  },
  title: {
    marginVertical: spacing.l,
    fontSize: sizes.h3,
    fontWeight: 'bold',
  },
});
