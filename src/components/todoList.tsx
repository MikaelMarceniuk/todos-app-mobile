import { ScrollView, StyleSheet, Text, View } from 'react-native'
import {
  mainColorLight2,
  mainColorLight3,
  textColorAction,
  textColorDisabled,
} from '../theme/colors'
import EmptyListWarning from './emptyListWarning'
import TodoItem from './todoItem'
import { useTodoContext } from '../provider/todoProvider'

const TodoList: React.FC = () => {
  const { todos } = useTodoContext()

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerFilter}>
          <Text style={styles.headerTxt}>Criadas</Text>
          <View style={styles.headerFilterCount}>
            <Text style={styles.headerFilterCountText}>{todos.length}</Text>
          </View>
        </View>
        <View style={styles.headerFilter}>
          <Text style={styles.headerTxt}>Concluidas</Text>
          <View style={styles.headerFilterCount}>
            <Text style={styles.headerFilterCountText}>
              {todos.reduce((acc, todo) => (todo.isDone ? acc + 1 : acc), 0)}
            </Text>
          </View>
        </View>
      </View>
      <ScrollView
        style={[
          styles.listContainer,
          todos.length > 0 && { borderTopWidth: 0 },
        ]}
      >
        {todos.length == 0 && <EmptyListWarning />}
        {todos.length > 0 &&
          todos.map((td) => (
            <TodoItem
              key={td.id}
              {...td}
            />
          ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    gap: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerFilter: {
    gap: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTxt: {
    fontSize: 14,
    fontWeight: 'bold',
    color: textColorAction,
  },
  headerFilterCount: {
    paddingHorizontal: 8,
    backgroundColor: mainColorLight2,
    borderRadius: 999,
  },
  headerFilterCountText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: mainColorLight3,
  },
  listContainer: {
    width: '100%',

    borderTopWidth: 1,
    borderTopColor: textColorDisabled,
  },
})

export default TodoList
