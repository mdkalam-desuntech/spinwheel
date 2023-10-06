import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SpinWheelGame from './components/SpinWheelGame';
// import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  
  return (
    // <GestureHandlerRootView>

    <View style={styles.container}>

      <SpinWheelGame/>
      
      <StatusBar style="auto" />
    </View>
    // </GestureHandlerRootView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
