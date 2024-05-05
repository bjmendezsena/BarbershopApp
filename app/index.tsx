import { Redirect } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

const StartPage = () => {
  return <Redirect href="/home" />;
};

export default StartPage;
