import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Register from './components/Register';
import Login from './components/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    // <View style={styles.container}>
    //   <Register/>
    //   <StatusBar style="auto" />
    // </View>

<NavigationContainer>
<Stack.Navigator>
  <Stack.Screen options={{ headerShown: false }} name="Register" component={Register} />
  {/* <Stack.Screen options={{ headerShown: false }} name="signup" component={Signup} /> */}
  <Stack.Screen options={{ headerShown: false }}  name="Login" component={Login} />

</Stack.Navigator>
</NavigationContainer>
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
