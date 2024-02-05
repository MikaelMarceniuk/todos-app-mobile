import { createContext, useContext, useEffect, useState } from 'react'
import Todo from '../@types/Todo'
import { ToastAndroid } from 'react-native'
import { getTodos, storeTodos } from '../services/asyncStorageService'

type IDoneTodoRequest = {
  id: number
  isDone: boolean
}

type ITodoContext = {
  todos: Todo[]
  addTodo: (name: string) => Promise<boolean>
  doneTodo: (data: IDoneTodoRequest) => Promise<boolean>
  removeTodo: (id: number) => Promise<boolean>
}

const TodoContext = createContext<ITodoContext>({} as ITodoContext)

export const useTodoContext = () => useContext(TodoContext)

type IProps = {
  children: React.ReactNode
}

const TodoProvider: React.FC<IProps> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([])

  useEffect(() => {
    ;(async () => {
      setTodos(await getTodos())
    })()
  }, [])

  const addTodo = async (name: string) => {
    if (name == '') {
      ToastAndroid.show(
        'Coloque o nome da tarefa para poder adicionar.',
        ToastAndroid.LONG
      )
      return false
    }

    const newTodos = [...todos, { id: todos.length + 1, name, isDone: false }]

    if (!(await storeTodos(newTodos))) {
      ToastAndroid.show('Erro ao salvar todo.', ToastAndroid.LONG)
      return false
    }

    setTodos(newTodos)
    return true
  }

  const doneTodo = async ({ id, isDone }: IDoneTodoRequest) => {
    const newTodos = todos.map((td) => (td.id == id ? { ...td, isDone } : td))

    if (!(await storeTodos(newTodos))) {
      ToastAndroid.show('Erro ao donar todo.', ToastAndroid.LONG)
      return false
    }

    setTodos(newTodos)
    return true
  }

  const removeTodo = async (id: number) => {
    const newTodos = [...todos]
    const todoToRemoveIndex = newTodos.findIndex((td) => td.id == id)
    newTodos.splice(todoToRemoveIndex, 1)

    if (!(await storeTodos(newTodos))) {
      ToastAndroid.show('Erro ao remover todo.', ToastAndroid.LONG)
      return false
    }

    setTodos(newTodos)
    return true
  }

  return (
    <TodoContext.Provider value={{ todos, addTodo, doneTodo, removeTodo }}>
      {children}
    </TodoContext.Provider>
  )
}

export default TodoProvider
