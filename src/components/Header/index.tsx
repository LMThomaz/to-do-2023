import { Image, View } from 'react-native'
import LogoImg from '../../assets/images/logo.png'
import { styles } from './styles'

export function Header() {
  return (
    <View style={styles.container}>
      <Image source={LogoImg} style={styles.img} />
    </View>
  )
}
