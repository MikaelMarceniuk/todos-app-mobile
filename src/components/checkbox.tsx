import { Pressable, StyleSheet } from 'react-native'
import CheckedIcon from '../svgs/checked'
import { actionColor, mainColor, purpleDark } from '../theme/colors'

interface IProps {
  isChecked: boolean
  onPressHandler: (isChecked: boolean) => void
}

const Checkbox: React.FC<IProps> = ({ isChecked, onPressHandler }) => {
  return (
    <Pressable
      style={[styles.cbBase, isChecked && styles.cbChecked]}
      onPress={() => onPressHandler(!isChecked)}
    >
      {isChecked && <CheckedIcon />}
    </Pressable>
  )
}

const styles = StyleSheet.create({
  cbBase: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    borderWidth: 2,
    borderColor: actionColor,
    backgroundColor: 'transparent',
  },
  cbChecked: {
    borderColor: purpleDark,
    backgroundColor: purpleDark,
  },
})

export default Checkbox
