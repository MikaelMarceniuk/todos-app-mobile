import { TextInput, TouchableOpacity, View, StyleSheet } from 'react-native'
import PlusIcon from '../svgs/plus'
import { useState } from 'react'
import {
  actionColor,
  mainColorLight,
  textColor,
  textColorDisabled,
} from '../theme/colors'
import { useTodoContext } from '../provider/todoProvider'

const TodoInput: React.FC = () => {
  const [todoValue, setTodoValue] = useState('')
  const [isFocused, setIsFocused] = useState(false)
  const { addTodo } = useTodoContext()

  const onSubmitHandler = () => addTodo(todoValue) && setTodoValue('')

  return (
    <View style={styles.container}>
      <TextInput
        style={[
          styles.txtInput,
          { borderColor: isFocused ? actionColor : mainColorLight },
        ]}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor={textColorDisabled}
        value={todoValue}
        onChangeText={setTodoValue}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <TouchableOpacity
        style={styles.btnContainer}
        onPress={onSubmitHandler}
      >
        <PlusIcon />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 54,

    gap: 8,
    flexDirection: 'row',
  },
  txtInput: {
    height: '100%',
    padding: 16,

    flex: 1,
    backgroundColor: mainColorLight,
    borderRadius: 6,
    color: textColor,
    borderWidth: 1,
  },
  btnContainer: {
    width: 52,
    height: '100%',

    backgroundColor: actionColor,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default TodoInput
