import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthScreen from '../screens/AuthScreen';

export type AuthStackParamList = {
  AuthScreen: undefined;
};

function AuthStack() {
  const { Navigator, Screen } = createNativeStackNavigator<AuthStackParamList>();

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name='AuthScreen' component={AuthScreen} />
    </Navigator>
  );
}

export default AuthStack;
