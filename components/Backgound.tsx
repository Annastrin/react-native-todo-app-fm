import { View, ImageBackground, StyleSheet } from 'react-native';
import Header from './Header';
import AddTask from './AddTask';

export default function Background() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/images/bg-mobile-light.jpg')}
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
    paddingTop: 48,
    paddingBottom: 45,
  },
});
