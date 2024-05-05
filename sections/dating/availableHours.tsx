import { useState } from 'react';
import { StyleSheet, TouchableOpacity, View, FlatList } from 'react-native';
import { Typography } from '@/components/typography';
import { colors, spacing } from '@/constants';
import { availableHours } from '@/mockup';

type AvailableHoursProps = {
  onSelectHour: React.Dispatch<React.SetStateAction<string>>;
  selected: string;
};

export const AvailableHours = ({ selected ,onSelectHour }: AvailableHoursProps) => {
  const [selectHour, setSelectHour] = useState<string>();
  
  return (
    <View style={{ ...styles.container }}>
      <Typography variant="h3" style={{ color: colors.white }}>
        Horas disponibles
      </Typography>
      <FlatList
        scrollEnabled={false}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        numColumns={2}
        style={{ marginTop: spacing.m }}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        data={availableHours}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.8}
            style={[
              styles.itemContainer,
              {
                backgroundColor:
                selected === item.hour ? '#624695' : '#2F2B39',
              },
            ]}
            onPress={() => onSelectHour(item.hour)}
          >
            <Typography style={styles.itemText}>{item.hour}</Typography>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#25212F',
    marginTop: spacing.l,
  },
  itemContainer: {
    borderRadius: 8,
    padding: spacing.s,
    marginBottom: spacing.s,
    width: '48%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemText: {
    color: colors.white,
    fontSize: 16,
  },
});
