import { ImageBackground, StatusBar, View, StyleSheet } from 'react-native'
import LogoIcon from '../svgs/logo'
import { black, mainColor } from '../theme/colors'

type IProps = {
  children: React.ReactNode
}

const AppContainer: React.FC<IProps> = ({ children }) => {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.blackBg}>
        <LogoIcon />
      </ImageBackground>
      <StatusBar
        backgroundColor="transparent"
        translucent
      />
      <View style={styles.content}>{children}</View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: mainColor,
  },
  blackBg: {
    width: 375,
    height: 175,

    position: 'absolute',

    backgroundColor: black,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    paddingHorizontal: 24,

    flex: 1,
    gap: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default AppContainer
