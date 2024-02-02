import { createContext, useContext, useState } from 'react'
import Todo from '../@types/Todo'

type IDoneTodoRequest = {
  id: number
  isDone: boolean
}

type ITodoContext = {
  todos: Todo[]
  addTodo: (name: string) => boolean
  doneTodo: (data: IDoneTodoRequest) => void
  removeTodo: (id: number) => void
}

const TodoContext = createContext<ITodoContext>({} as ITodoContext)

export const useTodoContext = () => useContext(TodoContext)

type IProps = {
  children: React.ReactNode
}

const TodoProvider: React.FC<IProps> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodo = (name: string) => {
    setTodos((oldValue) => [
      ...oldValue,
      { id: oldValue.length + 1, name, isDone: false },
    ])
    return true
  }

  const doneTodo = ({ id, isDone }: IDoneTodoRequest): void => {
    setTodos((oldValue) =>
      oldValue.map((td) => (td.id == id ? { ...td, isDone } : td))
    )
  }

  const removeTodo = (id: number) => {
    const newTodos = [...todos]
    const todoToRemoveIndex = newTodos.findIndex((td) => td.id == id)
    newTodos.splice(todoToRemoveIndex, 1)

    setTodos(newTodos)
  }

  return (
    <TodoContext.Provider value={{ todos, addTodo, doneTodo, removeTodo }}>
      {children}
    </TodoContext.Provider>
  )
}

export default TodoProvider
