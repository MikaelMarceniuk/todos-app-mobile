import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Todo from '../@types/Todo'
import { mainColorLight2, textColor, textColorDisabled } from '../theme/colors'
import Checkbox from 'expo-checkbox'
import TrashIcon from '../svgs/trash'
import { useTodoContext } from '../provider/todoProvider'

const TodoItem: React.FC<Todo> = ({ id, name, isDone }) => {
  const { doneTodo, removeTodo } = useTodoContext()

  return (
    <View style={styles.container}>
      <Checkbox
        style={[styles.cbbox, styles.side]}
        color="#4EA8DE"
        value={isDone}
        onValueChange={(isDone) => doneTodo({ id, isDone })}
      />
      <Text
        style={[styles.txt, isDone && styles.txtDone]}
        numberOfLines={2}
      >
        {name}
      </Text>
      <TouchableOpacity
        style={[styles.trash, styles.side]}
        onPress={() => removeTodo(id)}
      >
        <TrashIcon />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 64,
    marginBottom: 8,
    padding: 12,

    gap: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: mainColorLight2,
    borderRadius: 8,
  },
  side: {
    width: 24,
    height: 24,
  },
  cbbox: {
    borderRadius: 16,
  },
  txt: {
    flex: 1,
    color: textColor,
  },
  txtDone: {
    textDecorationLine: 'line-through',
    color: textColorDisabled,
  },
  trash: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default TodoItem
