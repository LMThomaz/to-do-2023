import { AntDesign, Entypo, Feather } from '@expo/vector-icons'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'

export function ItemList() {
  const checked = true

  return (
    <View style={styles.container}>
      {checked ? (
        <AntDesign name="checkcircle" size={24} color="#5E60CE" />
      ) : (
        <Entypo name="circle" size={24} color="#4EA8DE" />
      )}

      <Text style={[styles.text, checked ? styles.textChecked : {}]}>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
      </Text>
      <TouchableOpacity style={styles.buttonRemove}>
        <Feather name="trash-2" size={24} color="#808080" />
      </TouchableOpacity>
    </View>
  )
}
