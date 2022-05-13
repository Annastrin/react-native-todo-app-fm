import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { switchTheme } from '../redux/actions';
import useTheme from '../hooks/useTheme';
import ThemeSwitch from './Icons/ThemeSwitch';
import { colors } from '../style-guide';

export function Header() {
  const theme = useTheme();
  const dispatch = useDispatch();

  return (
    <View style={styles.header}>
      <Text style={styles.logo}>Todo</Text>
      <Pressable onPress={() => dispatch(switchTheme())}>
        <ThemeSwitch theme={theme} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'flex-start',
  },
  logo: {
    fontSize: 26,
    fontWeight: '700',
    lineHeight: 26,
    letterSpacing: 10,
    textTransform: 'uppercase',
    color: `${colors.logoColor}`,
  },
});

export default Header;
