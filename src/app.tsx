import { registerRootComponent } from 'expo'
import AppContainer from './components/appContainer'
import TodoInput from './components/todoInput'

const App = () => {
  return (
    <AppContainer>
      <TodoInput />
    </AppContainer>
  )
}

export default registerRootComponent(App)
