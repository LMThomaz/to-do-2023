import { AntDesign } from '@expo/vector-icons'
import { TextInput, TouchableOpacity, View } from 'react-native'
import { Header } from '../../components/Header'
import { styles } from './styles'

export function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#808080"
          />
          <TouchableOpacity style={styles.buttonAdd}>
            <AntDesign name="pluscircleo" size={16} color="#F2F2F2" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
