import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import Screen from './components/Screen';
import Background from './components/Backgound';
import TaskList from './components/TaskList';

// TODO Persist => Async-Storage https://react-native-async-storage.github.io/async-storage/docs/install/

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Screen>
          <Background />
          <TaskList />
        </Screen>
      </PersistGate>
    </Provider>
  );
}
