import AsyncStorage from '@react-native-async-storage/async-storage'
import Todo from '../@types/Todo'

const todoKey = 'todos-data'

export const storeTodos = async (data: Todo[]) => {
  try {
    await AsyncStorage.setItem(todoKey, JSON.stringify(data))
    return true
  } catch (e) {
    console.error('Unable to store todos: ', e)
    return false
  }
}

export const getTodos = async () => {
  try {
    const storageTodos = await AsyncStorage.getItem(todoKey)
    return storageTodos ? JSON.parse(storageTodos) : []
  } catch (e) {
    console.error('Unable to get todos: ', e)
    return []
  }
}
