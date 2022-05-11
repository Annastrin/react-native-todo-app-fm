import Svg, {
  Path,
  Circle,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';

declare interface CheckboxProps {
  checked: boolean;
}

export default function Checkbox(props: CheckboxProps) {
  return props.checked ? (
    <Svg width='100%' height='100%' viewBox='0 0 20 20' fill='none'>
      <Circle cx='10' cy='10' r='9' fill='url(#paint0_linear_3_7)' />
      <Path d='M6 10.304L8.696 13L14.696 7' stroke='white' strokeWidth='2' />
      <Defs>
        <LinearGradient
          id='paint0_linear_3_7'
          x1='0'
          y1='0'
          x2='20'
          y2='20'
          gradientUnits='userSpaceOnUse'
        >
          <Stop stopColor='#57DDFF' />
          <Stop offset='1' stopColor='#C058F3' />
        </LinearGradient>
      </Defs>
    </Svg>
  ) : (
    <Svg width='100%' height='100%' viewBox='0 0 20 20' fill='none'>
      <Circle cx='10' cy='10' r='9' stroke='#E4E5F1' />
    </Svg>
  );
}
