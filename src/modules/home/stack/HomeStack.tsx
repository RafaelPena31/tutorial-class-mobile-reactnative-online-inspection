import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import CameraScreen from '../screens/CameraScreen';

export type HomeStackParamList = {
  HomeScreen: undefined;
  CameraScreen: undefined;
};

function HomeStack() {
  const { Navigator, Screen } = createNativeStackNavigator<HomeStackParamList>();

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name='HomeScreen' component={HomeScreen} />
      <Screen name='CameraScreen' component={CameraScreen} />
    </Navigator>
  );
}

export default HomeStack;
