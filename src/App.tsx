import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import RootStackNavigation from './core/ui/navigation/RootStackNavigation';
import FlashMessage from 'react-native-flash-message';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <RootStackNavigation />
      <FlashMessage position='top' />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
