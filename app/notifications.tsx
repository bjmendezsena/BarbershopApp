import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { TitleHeader } from '@/components';
import { spacing } from '@/constants';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Typography } from '@/components/typography';

const Notifications = () => {
  return (
    <View style={{ ...styles.container }}>
      <TitleHeader title="Notificaciones" backButton />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.notificationContainer}>
          <View style={{ width: 40 }}>
            <View style={styles.iconContainer}>
              <Ionicons name="notifications" size={24} color="#BDC3C7" />
            </View>
          </View>
          <View style={styles.messageContainer}>
            <View style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <Typography style={{ color: '#BDC3C7' }}>
                Nueva cita registrada para el día Jueves 5 de Junio a las 11:00.
              </Typography>
              <Typography style={{ color: '#BDC3C7' }}>Profesional elegido: Carlos Perez</Typography>
            </View>
            <View style={{ display: 'flex', alignItems: 'flex-end' }}>
              <Typography style={{ color: '#BDC3C7', fontSize: 12 }}>
                Hace 1 minuto
              </Typography>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25212F',
    paddingHorizontal: spacing.l,
  },
  notificationContainer: {
    backgroundColor: '#2F2B39',
    marginTop: spacing.l,
    borderRadius: 15,
    height: 'auto',
    padding: spacing.m,
    display: 'flex',
    flexDirection: 'row',
    gap: spacing.s,
  },
  iconContainer: {
    width: 34,
    height: 34,
    borderRadius: 8,
    backgroundColor: '#25212F',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  messageContainer: {
    flex: 3,
    gap: spacing.m,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});
