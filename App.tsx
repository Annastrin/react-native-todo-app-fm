import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { store, persistor } from './redux/store';
import HomeScreen from './components/HomeScreen';
import TaskScreen from './components/TaskScreen';
import useTheme from './hooks/useTheme';
import { colors } from './style-guide';

const Stack = createStackNavigator();

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);

function App() {
  const theme = useTheme();
  return (
    <PersistGate loading={null} persistor={persistor}>
      <NavigationContainer
        theme={theme === 'darkTheme' ? DarkTheme : LightTheme}
      >
        <Stack.Navigator initialRouteName='Todo App'>
          <Stack.Screen
            name='Todo App'
            component={HomeScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name='Task'
            component={TaskScreen}
            options={{
              title: 'Update a Task',
              headerShadowVisible: false,
              headerStyle: [
                styles.taskScreen,
                theme === 'darkTheme' && styles.taskScreenDark,
              ],
              headerTintColor: `${colors.screenHeader}`,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PersistGate>
  );
}

const styles = StyleSheet.create({
  taskScreen: {
    backgroundColor: `${colors.lightTheme.taskScreenBackground}`,
  },
  taskScreenDark: {
    backgroundColor: `${colors.darkTheme.taskScreenBackground}`,
  },
});

const LightTheme = {
  dark: false,
  colors: {
    primary: '',
    background: `${colors.lightTheme.bgColor}`,
    card: `${colors.lightTheme.bgColor}`,
    text: '',
    border: '',
    notification: '',
  },
};

const DarkTheme = {
  dark: true,
  colors: {
    primary: '',
    background: `${colors.darkTheme.bgColor}`,
    card: `${colors.darkTheme.bgColor}`,
    text: '',
    border: '',
    notification: '',
  },
};
