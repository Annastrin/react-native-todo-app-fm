import { View, ImageBackground, StyleSheet } from 'react-native';
import useTheme from '../hooks/useTheme';
import Header from './Header';
import AddTask from './AddTask';

export default function Background() {
  const theme = useTheme();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={
          theme === 'lightTheme'
            ? require('../assets/images/bg-mobile-light.jpg')
            : require('../assets/images/bg-mobile-dark.jpg')
        }
        style={styles.background}
      >
        <Header />
        <AddTask />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: 200,
  },
  background: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 200,
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 20,
  },
});
