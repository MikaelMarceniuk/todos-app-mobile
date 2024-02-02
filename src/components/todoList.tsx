import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { textColorAction, textColorDisabled } from '../theme/colors'
import EmptyListWarning from './emptyListWarning'
import TodoItem from './todoItem'
import { useTodoContext } from '../provider/todoProvider'

const TodoList: React.FC = () => {
  const { todos } = useTodoContext()

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTxt}>Criadas</Text>
        <Text style={styles.headerTxt}>Concluidas</Text>
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
    minHeight: 370,
    gap: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerTxt: {
    fontSize: 14,
    fontWeight: 'bold',
    color: textColorAction,
  },
  listContainer: {
    width: '100%',

    borderTopWidth: 1,
    borderTopColor: textColorDisabled,
  },
})

export default TodoList
