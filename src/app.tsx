import { registerRootComponent } from 'expo'
import AppContainer from './components/appContainer'
import TodoInput from './components/todoInput'
import TodoList from './components/todoList'

const App = () => {
  return (
    <AppContainer>
      <TodoInput />
      <TodoList data={[]} />
    </AppContainer>
  )
}

export default registerRootComponent(App)
