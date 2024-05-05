import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Typography } from '@/components/typography';
import { colors } from '@/constants';
import { router } from 'expo-router';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Feather from '@expo/vector-icons/Feather';

type RootStackParamList = {
  '(tabs)': undefined;
  info: undefined;
};

export const UpcomingAppointments = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#20002c', '#624695']}
        start={[0, 0]}
        end={[1, 0]}
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'row',
          padding: 10,
          borderRadius: 15,
        }}
      >
        <View style={{ flex: 1, justifyContent: 'space-between' }}>
          <Typography style={{ color: 'white', fontSize: 32 }}>
            No tienes
          </Typography>
          <Typography style={{ color: 'white', fontSize: 32, marginTop: -10 }}>
            próximas
          </Typography>
          <Typography style={{ color: 'white', fontSize: 32, marginTop: -10 }}>
            citas
          </Typography>

          <View>
            <Typography style={{ color: 'white', fontSize: 12 }}>
              Reserva tu cita ahora y
            </Typography>
            <View
              style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}
            >
              <Typography style={{ color: 'white', fontSize: 12 }}>
                acumula puntos
              </Typography>
              <Feather
                name="info"
                size={16}
                color="white"
                onPress={() => router.push({ pathname: 'info' })}
              />
            </View>
          </View>
        </View>

        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.8}
            onPress={() => router.push('/dating')}
          >
            <Typography style={styles.btnText}>Reservar</Typography>
            <EvilIcons name="calendar" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 150,
    marginTop: 20,
    borderRadius: 15,
  },
  button: {
    gap: 3,
    padding: 10,
    borderWidth: 1,
    display: 'flex',
    borderRadius: 10,
    flexDirection: 'row',
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#624690',
  },
  btnText: {
    color: colors.white,
    fontSize: 18,
  },
});
