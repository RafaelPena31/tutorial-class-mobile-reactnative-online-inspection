import { NavigationContainer, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackNavigationProp, createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack, { AuthStackParamList } from '../../../modules/auth/stack/AuthStack';
import HomeStack, { HomeStackParamList } from '../../../modules/home/stack/HomeStack';
import SplashStack, { SplashStackParamList } from '../../../modules/splash/stacks/SplashStack';

export type RootStackParamList = {
  AuthStack: NavigatorScreenParams<AuthStackParamList>;
  HomeStack: NavigatorScreenParams<HomeStackParamList>;
  SplashStack: NavigatorScreenParams<SplashStackParamList>;
};

export type RootStackNavigationProps = NativeStackNavigationProp<RootStackParamList>;

function RootStackNavigation() {
  const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name='SplashStack' component={SplashStack} />
        <Screen name='AuthStack' component={AuthStack} />
        <Screen name='HomeStack' component={HomeStack} />
      </Navigator>
    </NavigationContainer>
  );
}

export default RootStackNavigation;
