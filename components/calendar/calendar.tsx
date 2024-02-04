import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import moment from 'moment';
import { Date } from './date';
import { sizes } from '@/constants';

interface Propos {
  onSelectDate: React.Dispatch<React.SetStateAction<string | null>>;
  selected: string | null;
}

export const Calendar = ({ onSelectDate, selected }: Propos) => {
  const [dates, setDates] = useState<moment.Moment[]>([]);
  const [currentMonth, setCurrentMonth] = useState('');

  const getDates = () => {
    const _dates = [];
    for (let i = 0; i < 7; i++) {
      const date = moment().add(i, 'days');
      _dates.push(date);
    }
    setDates(_dates);
  };

  useEffect(() => {
    getDates();
  }, []);

  useEffect(() => {
    const month = moment().format('MMMM');
    setCurrentMonth(month);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.monthText}>{currentMonth}</Text>
      </View>

      <View style={styles.daysContainer}>
        {dates.map((date, index) => (
          <Date
            key={index}
            date={date}
            onSelectDate={onSelectDate}
            selected={selected}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  monthText: {
    marginLeft: 8,
    fontSize: sizes.body,
    fontWeight: '600',
    // color: '#FAFAFA',
    textShadowColor: 'rgba(0, 0, 0, 0.10)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 0.2,
    textTransform: 'capitalize',
  },
  daysContainer: {
    height: 80,
    width: '100%',
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dayText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fafafacd',
    textShadowColor: 'rgba(0, 0, 0, 0.10)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 0.2,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
