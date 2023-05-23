import { AntDesign, Entypo, Feather } from '@expo/vector-icons'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'

interface ItemListProps {
  onToggleCheckToDo: (title: string) => void
  onRemoveToDo: (title: string) => void
  title: string
  checked: boolean
}

export function ItemList(props: ItemListProps) {
  const { checked, onRemoveToDo, onToggleCheckToDo, title } = props

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onToggleCheckToDo(title)}>
        {checked ? (
          <AntDesign name="checkcircle" size={24} color="#5E60CE" />
        ) : (
          <Entypo name="circle" size={24} color="#4EA8DE" />
        )}
      </TouchableOpacity>

      <Text style={[styles.text, checked ? styles.textChecked : {}]}>
        {title}
      </Text>
      <TouchableOpacity
        style={styles.buttonRemove}
        onPress={() => onRemoveToDo(title)}
      >
        <Feather name="trash-2" size={24} color="#808080" />
      </TouchableOpacity>
    </View>
  )
}
