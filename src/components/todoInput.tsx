import { TextInput, TouchableOpacity, View, StyleSheet } from 'react-native'
import PlusIcon from '../svgs/plus'
import { useState } from 'react'

type IProps = {}

const TodoInput: React.FC<IProps> = () => {
  const [todoValue, setTodoValue] = useState('')
  const [isFocused, setIsFocused] = useState(false)

  return (
    <View style={styles.container}>
      <TextInput
        style={[
          styles.txtInput,
          { borderColor: isFocused ? '#1E6F9F' : '#262626' },
        ]}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor="#808080"
        value={todoValue}
        onChangeText={setTodoValue}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <TouchableOpacity style={styles.btnContainer}>
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
    backgroundColor: '#262626',
    borderRadius: 6,
    color: '#F2F2F2',
    borderWidth: 1,
  },
  btnContainer: {
    width: 52,
    height: '100%',

    backgroundColor: '#1E6F9F',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default TodoInput
