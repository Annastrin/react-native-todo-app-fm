import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import useTheme from '../hooks/useTheme';
import { colors } from '../style-guide';

interface ScreenProps {
  children?: JSX.Element | JSX.Element[];
}

export default function Screen({ children }: ScreenProps) {
  const theme = useTheme();
  return (
    <SafeAreaView
      style={[styles.screen, theme === 'darkTheme' && styles.screenDark]}
    >
      <StatusBar
        barStyle={theme === 'darkTheme' ? 'light-content' : 'dark-content'}
        backgroundColor={
          theme === 'darkTheme'
            ? colors.darkTheme.bgColor
            : colors.lightTheme.bgColor
        }
      />
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: `${colors.lightTheme.bgColor}`,
  },
  screenDark: {
    backgroundColor: `${colors.darkTheme.bgColor}`,
  },
});
