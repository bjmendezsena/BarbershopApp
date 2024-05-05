import { TitleHeader } from '@/components';
import { colors, spacing } from '@/constants';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Octicons from '@expo/vector-icons/Octicons';
import { Typography } from '@/components/typography';

const Info = () => {
  return (
    <View style={{ ...styles.container }}>
      <TitleHeader title="Información" backButton />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.titleContainer}>
          <Typography variant="h2" style={{ color: colors.white }}>
            Puntos
          </Typography>
          <Octicons name="star-fill" size={20} color="yellow" />
        </View>
        <View style={styles.infoContainer}>
          <Typography style={{ color: colors.white }}>
            ¡Bienvenido a nuestro programa de recompensas! En nuestra app de
            peluquería, valoramos tu lealtad y queremos premiarte por elegirnos.
          </Typography>
          <Typography style={{ color: colors.white }}>
            Cada vez que realices una reserva a través de nuestra aplicación,
            recibirás automáticamente 5 puntos. Estos puntos se irán acumulando
            en tu cuenta con cada visita que hagas a nuestro salón.
          </Typography>
          <Typography style={{ color: colors.white }}>
            ¡Pero eso no es todo! Cuando alcances los 50 puntos, te
            recompensaremos con un corte de pelo completamente gratis. Es
            nuestra forma de agradecerte por confiar en nosotros para cuidar de
            tu imagen.
          </Typography>
          <Typography style={{ color: colors.white }}>
            Puedes consultar tu saldo de puntos en cualquier momento dentro de
            la sección "Recompensas" de la app. Allí podrás ver cuántos puntos
            has acumulado y cuántos te faltan para obtener tu corte gratis.
          </Typography>
          <Typography style={{ color: colors.white }}>
            Nuestro objetivo es brindarte no solo un servicio de calidad, sino
            también una experiencia gratificante. Queremos que te sientas
            apreciado y valorado como cliente.
          </Typography>
          <Typography style={{ color: colors.white }}>
            Así que no esperes más, ¡reserva tu próxima cita a través de nuestra
            app y comienza a acumular puntos hacia tu recompensa! Estamos
            ansiosos por verte pronto y ayudarte a lucir y sentirte tu mejor
            versión.
          </Typography>
          <Typography style={{ color: colors.white }}>
            Gracias por elegir nuestra app de peluquería. ¡Valoramos tu lealtad
            y estamos comprometidos a brindarte un servicio excepcional en cada
            visita!
          </Typography>
        </View>
      </ScrollView>
    </View>
  );
};

export default Info;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: spacing.l,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  infoContainer: {
    backgroundColor: '#2F2B39',
    marginTop: spacing.s,
    borderRadius: 15,
    minHeight: 140,
    height: 'auto',
    padding: spacing.m,
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.s,
  },
  iconContainer: {
    backgroundColor: '#2F2B39',
    padding: spacing.l,
    borderRadius: 15,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.s,
    marginTop: spacing.l,
  },
});
