import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Button ,Alert} from 'react-native';
import Input from './components/Input';
import Password from'./components/Password';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome to my MyApp</Text>
      <Input />
      <Password/>
      <Button
        title="Submit"
        onPress={() => alert('Simple Button pressed')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
