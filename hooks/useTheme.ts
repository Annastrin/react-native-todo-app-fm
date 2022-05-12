import { useSelector } from 'react-redux';
import { State } from '../redux/reducers';

export default function useTheme() {
  return useSelector((state: State) => state.theme);
}