import { Ionicons } from '@expo/vector-icons'
import { Text, View } from 'react-native'
import { styles } from './styles'

export function EmptyList() {
  return (
    <View style={styles.container}>
      <Ionicons name="clipboard-outline" size={56} color="#252525" />
      <View style={styles.wrapperText}>
        <Text style={[styles.text, styles.textBold]}>
          Você ainda não tem tarefas cadastradas
        </Text>
        <Text style={styles.text}>
          Crie tarefas e organize seus itens a fazer
        </Text>
      </View>
    </View>
  )
}
