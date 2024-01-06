import { Image, StyleSheet, View } from 'react-native';
import Button from '../../../core/ui/form/Button';
import { useCameraPermission } from 'react-native-vision-camera';
import { useEffect } from 'react';
import { showMessage } from 'react-native-flash-message';
import { useNavigation } from '@react-navigation/native';
import { RootStackNavigationProps } from '../../../core/ui/navigation/RootStackNavigation';
import { useHomeStore } from '../state-management/HomeZustand';

function HomeScreen() {
  const { navigate } = useNavigation<RootStackNavigationProps>();
  const { hasPermission, requestPermission } = useCameraPermission();
  const { photo } = useHomeStore();

  useEffect(() => {
    requestPermission();
  }, [requestPermission]);

  const onPressButton = () => {
    if (hasPermission) {
      showMessage({
        message: 'Permissões',
        description: 'Você autorizou o acesso a câmera',
        type: 'success'
      });
    } else {
      showMessage({
        message: 'Permissões',
        description: 'Você não autorizou o acesso a câmera',
        type: 'danger'
      });
    }

    setTimeout(() => {
      navigate('HomeStack', { screen: 'CameraScreen' });
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <Button text='Criar vistoria' onPress={onPressButton} />
      {!!photo && <Image source={{ uri: `file://${photo.path}` }} style={{ width: 100, height: 100 }} />}
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
