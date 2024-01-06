import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface ButtonProps {
  text: string;
  onPress(): void;
}

function Button({ text, onPress }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}

export default Button;

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 50,
    borderRadius: 8,
    backgroundColor: '#00f3a0',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: '500'
  }
});
