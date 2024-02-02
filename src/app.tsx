import { registerRootComponent } from 'expo'
import AppContainer from './components/appContainer'
import TodoInput from './components/todoInput'
import TodoList from './components/todoList'
import TodoProvider from './provider/todoProvider'

const App = () => {
  return (
    <AppContainer>
      <TodoProvider>
        <TodoInput />
        <TodoList />
      </TodoProvider>
    </AppContainer>
  )
}

export default registerRootComponent(App)
