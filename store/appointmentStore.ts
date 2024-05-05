import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Appointment {
  date: string;
  time: string;
  professionalName: string;
}

interface AppointmentState {
  appointments: Appointment[];
  addAppointment: (appointment: Appointment) => void;
  loadAppointments: () => void;
}

export const useAppointmentStore = create<AppointmentState>((set) => ({
  appointments: [],
  addAppointment: async (appointment: Appointment) => {
    set((state) => ({
      appointments: [...state.appointments, appointment],
    }));
    await AsyncStorage.setItem(
      'appointments',
      JSON.stringify([
        ...useAppointmentStore.getState().appointments,
        appointment,
      ])
    );
  },
  loadAppointments: async () => {
    const storedAppointments = await AsyncStorage.getItem('appointments');
    if (storedAppointments) {
      set({ appointments: JSON.parse(storedAppointments) });
    }
  },
}));

