import { Provider } from 'react-redux';
import { store } from './redux/store';
import Screen from './components/Screen';
import Background from './components/Backgound';
import TaskList from './components/TaskList';

// TODO Persist => Async-Storage https://react-native-async-storage.github.io/async-storage/docs/install/

export default function App() {
  return (
    <Provider store={store}>
      <Screen>
        <Background />
        <TaskList />
      </Screen>
    </Provider>
  );
}
