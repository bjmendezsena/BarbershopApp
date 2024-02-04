import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useNavigation, Link } from 'expo-router';
// import {
//   Header,
//   ScreenHeader,
//   TopPlacesCarousel,
//   SectionHeader,
//   TripsList,
// } from '../../components';
import { colors } from '../../constants';

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* <Header />
      <ScreenHeader />
      <ScrollView showsVerticalScrollIndicator={false}>
        <TopPlacesCarousel list={TOP_PLACES} />
        <SectionHeader title="Lugares populares" buttonTitle="Ver todos" />
        <TripsList list={PLACES} />
      </ScrollView> */}
      <Link href="profile">
        <Text>Profile</Text>
      </Link>
      {/* <Text>Home</Text> */}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
