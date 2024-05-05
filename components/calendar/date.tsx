import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import moment from 'moment';
import 'moment/locale/es';
import { colors } from '@/constants';
import { Typography } from '../typography';

interface Props {
  date: moment.Moment;
  onSelectDate: (date: string) => void;
  selected: string | null;
}

moment.locale('es');

export const Date = ({ date, onSelectDate, selected }: Props) => {
  const day =
    moment(date).format('DD-MM-YYYY') === moment().format('DD-MM-YYYY')
      ? 'Hoy'
      : moment(date).format('ddd').replace(/\.$/, '');

  const dayNumber = moment(date).format('D');

  const fullDate = moment(date).format('DD-MM-YYYY');
  return (
    <TouchableOpacity
      onPress={() => onSelectDate(fullDate)}
      style={{ height: 50, alignItems: 'center' }}
      activeOpacity={0.8}
    >
      <Typography style={{ color: colors.white }}>{day}</Typography>
      <View
        style={[
          styles.dayContainer,
          selected === fullDate && styles.selectedDay,
        ]}
      >
        <Typography
          variant={selected === fullDate ? 'h3' : 'body'}
          style={{ color: colors.white }}
        >
          {dayNumber}
        </Typography>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  dayContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    position: 'relative',
    width: 40,
    height: 50,
  },
  selectedDay: {
    backgroundColor: '#624695',
    justifyContent: 'center',
    alignItems: 'center',
    width: 36,
    height: 50,
    borderRadius: 10,
  },
  big: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  medium: {
    fontSize: 18,
    color: '#fafafacd',
    fontWeight: '600',
  },
  dayText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fafafacd',
  },
});

// style={[
//   styles.medium,
//   selected === fullDate && {
//     color: colors.white,
//     fontWeight: 'bold',
//     fontSize: 20,
//   },
// ]}

{
  /* <Text
        style={[
          styles.dayText,
          selected === fullDate && { textAlign: 'center' },
        ]}
      >
        {day}
      </Text> */
}
