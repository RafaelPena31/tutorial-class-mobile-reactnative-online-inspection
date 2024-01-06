import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screen/SplashScreen';

export type SplashStackParamList = {
  SplashScreen: undefined;
};

function SplashStack() {
  const { Navigator, Screen } = createNativeStackNavigator<SplashStackParamList>();

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name='SplashScreen' component={SplashScreen} />
    </Navigator>
  );
}

export default SplashStack;
