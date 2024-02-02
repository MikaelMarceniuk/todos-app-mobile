import { View, Text, StyleSheet } from 'react-native'
import ClipboardIcon from '../svgs/clipboard'
import { textColorDisabled } from '../theme/colors'

const EmptyListWarning = () => {
  return (
    <View style={styles.container}>
      <ClipboardIcon />
      <View>
        <Text style={[styles.txt, { fontWeight: 'bold' }]}>
          Você ainda não tem tarefas cadastradas
        </Text>
        <Text style={styles.txt}>
          Crie tarefas e organize seus itens a fazer
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 210,
    gap: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    color: textColorDisabled,
  },
})

export default EmptyListWarning
