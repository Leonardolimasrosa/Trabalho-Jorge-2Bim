import { StatusBar } from 'expo-status-bar';
import { Text, SafeAreaView, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>
        Change code in the editor and watch it change on your phone! Save to get a shareable url.
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgoundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});