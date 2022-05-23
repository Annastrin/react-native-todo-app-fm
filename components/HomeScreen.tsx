import Screen from './Screen';
import Background from './Backgound';
import TaskList from './TaskList';

export default function HomeScreen() {
  return (
    <Screen>
      <Background />
      <TaskList />
    </Screen>
  );
}
