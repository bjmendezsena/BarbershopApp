import { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TitleHeader, Typography } from '@/components';
import { colors, spacing } from '@/constants';
import { useAppointmentStore } from '@/store';
import moment from 'moment';
import 'moment/locale/es'; // Importa la localización en español

const Reserves = () => {
  const { appointments, loadAppointments } = useAppointmentStore();

  useEffect(() => {
    loadAppointments();
  }, []);

  return (
    <View style={styles.container}>
      <TitleHeader title="Reservas" />

      <View style={{ marginTop: spacing.l }}>
        {appointments.length === 0 && (
          <Typography variant="h3" style={{ color: colors.white }}>
            No hay reservas
          </Typography>
        )}

        {appointments.map((appointment, index) => {
          const fecha = moment(appointment.date, 'DD-MM-YYYY');
          const dia = fecha.format('dddd');
          const fechaFormateada = fecha.format('DD [de] MMMM');

          const startTime = appointment.time.split(' - ')[0];

          return (
            <View key={index} style={styles.appointmentsContainer}>
              <Typography
                style={{ color: colors.white, lineHeight: 20, fontSize: 18 }}
              >
                Su próxima cita es el día {dia} {fechaFormateada} a las{' '}
                {startTime}.
              </Typography>
              <Typography style={{ color: colors.white, fontSize: 18 }}>
                Peluquero elegido: {appointment.professionalName}
              </Typography>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default Reserves;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25212F',
    paddingHorizontal: spacing.l,
  },
  appointmentsContainer: {
    backgroundColor: '#2F2B39',
    marginBottom: spacing.m,
    padding: spacing.m,
    borderRadius: 8,
    gap: 5,
  },
});
