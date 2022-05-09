import { View, Text, Pressable, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';

export interface HeaderCallback {
  onSwitchTheme?: () => void;
}

export function Header(props: HeaderCallback) {
  const switchTheme = () => {
    props.onSwitchTheme?.();
  };
  return (
    <View style={styles.header}>
      <Text style={styles.logo}>Todo</Text>
      <Pressable onPress={switchTheme}>
        <Svg width='26' height='26'>
          <Path
            fill='#FFF'
            fillRule='evenodd'
            d='M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z'
          />
        </Svg>
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
    color: '#fff',
  },
});

export default Header;
