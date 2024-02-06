import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import Todo from '../@types/Todo'
import { mainColorLight2, textColor, textColorDisabled } from '../theme/colors'
import TrashIcon from '../svgs/trash'
import { useTodoContext } from '../provider/todoProvider'
import Checkbox from './checkbox'
import Animated, { SlideInLeft, SlideOutLeft } from 'react-native-reanimated'

const TodoItem: React.FC<Todo> = ({ id, name, isDone }) => {
  const { doneTodo, removeTodo } = useTodoContext()

  return (
    <Animated.View
      entering={SlideInLeft}
      exiting={SlideOutLeft}
      style={styles.container}
    >
      <Checkbox
        isChecked={isDone}
        onPressHandler={(isDone) => doneTodo({ id, isDone })}
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
    </Animated.View>
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
