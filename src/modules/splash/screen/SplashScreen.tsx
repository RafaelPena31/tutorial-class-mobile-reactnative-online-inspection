import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { useAuthStore } from '../../auth/state-management/AuthZustand';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { RootStackNavigationProps } from '../../../core/ui/navigation/RootStackNavigation';

function SplashScreen() {
  const { navigate } = useNavigation<RootStackNavigationProps>();
  const { userId, userToken } = useAuthStore();

  useEffect(() => {
    if (!!userId && !!userToken) {
      navigate('HomeStack', { screen: 'HomeScreen' });
    } else {
      navigate('AuthStack', { screen: 'AuthScreen' });
    }
  }, [navigate, userId, userToken]);

  return (
    <View style={styles.container}>
      <ActivityIndicator size='large' />
    </View>
  );
}

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
