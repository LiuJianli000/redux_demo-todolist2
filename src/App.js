import './App.css';
import TodoList from './pages/TodoList'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    // 提供器，包裹所有要使用 store 的组件
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
}

export default App;