import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { RootStackNavigationProps } from '../../../core/ui/navigation/RootStackNavigation';
import Button from '../../../core/ui/form/Button';
import { useAuthStore } from '../state-management/AuthZustand';

function AuthScreen() {
  const { navigate } = useNavigation<RootStackNavigationProps>();

  const { updateUserId, updateUserToken } = useAuthStore();

  const onPressLogin = () => {
    const isLogin = true;

    if (isLogin) {
      updateUserId('01');
      updateUserToken('token01');

      navigate('HomeStack', { screen: 'HomeScreen' });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>O seu sistema de vistoria virtual</Text>
        <Text style={styles.subTitle}>Entre agora</Text>

        <View style={styles.form}>
          <TextInput placeholder='ID do usuário' style={styles.txtInput} />
          <TextInput placeholder='Senha' secureTextEntry style={styles.txtInput} />
        </View>
      </View>

      <Button text='Entrar' onPress={onPressLogin} />
    </View>
  );
}

export default AuthScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  header: {
    width: '100%'
  },
  title: {
    fontSize: 36,
    color: '#00f3a0',
    fontWeight: '500'
  },
  subTitle: {
    fontSize: 18,
    color: '#00ff7e50'
  },
  form: {
    width: '100%',
    marginTop: 32
  },
  txtInput: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    marginBottom: 16,
    paddingLeft: 12
  }
});
