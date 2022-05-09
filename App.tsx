import { ScrollView, StatusBar, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Background from './components/Backgound';
import { colors } from './style-guide';

// TODO Persist => Async-Storage https://react-native-async-storage.github.io/async-storage/docs/install/

export default function App() {
  return (
    <Provider store={store}>
      <ScrollView style={styles.app}>
        <StatusBar
          barStyle='dark-content'
          backgroundColor={colors.lightTheme.bgColor}
        />
        <Background />
      </ScrollView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: `${colors.lightTheme.bgColor}`,
    color: `${colors.darkTheme.textColor}`,
  },
});
