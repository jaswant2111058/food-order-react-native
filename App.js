import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/pages/login';
import SignUp from './src/pages/signup';
import Home from './src/pages/home';
import Order from './src/pages/orders';
const Stack = createStackNavigator();
import { DataProvider } from './src/hooks/hooks';

export default function App() {
  return (
    <DataProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
          <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }}/>
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
          <Stack.Screen name="Order" component={Order} options={{ headerShown: false }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </DataProvider>
  );
}

