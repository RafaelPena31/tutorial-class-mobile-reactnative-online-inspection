import { Camera, useCameraDevices } from 'react-native-vision-camera';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useRef } from 'react';
import { useHomeStore } from '../state-management/HomeZustand';
import { useNavigation } from '@react-navigation/native';
import { RootStackNavigationProps } from '../../../core/ui/navigation/RootStackNavigation';

function CameraScreen() {
  const cameraRef = useRef<Camera>(null);
  const devices = useCameraDevices();
  const { goBack } = useNavigation<RootStackNavigationProps>();

  const { updatePhoto } = useHomeStore();

  const onPressTakePhoto = async () => {
    try {
      const photo = await cameraRef.current?.takePhoto();
      console.log(photo);
      if (photo) {
        updatePhoto(photo);
        goBack();
      }
    } catch (err) {
      console.log(err);
    }
  };

  if (devices == null || !devices.length)
    return (
      <View style={styles.container}>
        <Text>Câmera indisponível</Text>
      </View>
    );
  return (
    <View style={styles.container}>
      <Camera
        ref={cameraRef}
        style={StyleSheet.absoluteFill}
        device={devices.find(dev => dev.name.toLowerCase().includes('back')) ?? devices[0]}
        isActive
        photo
      />

      <TouchableOpacity style={styles.cameraButton} onPress={onPressTakePhoto} />
    </View>
  );
}

export default CameraScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  cameraButton: {
    position: 'absolute',
    bottom: 24,
    width: 56,
    height: 56,
    borderRadius: 28,
    borderWidth: 4,
    borderColor: '#ffffff'
  }
});
