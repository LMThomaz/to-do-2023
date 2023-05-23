import { AntDesign } from '@expo/vector-icons'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Header } from '../../components/Header'
import { ItemList } from '../../components/ItemList'
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
        <View style={styles.wrapperInfo}>
          <View style={styles.info}>
            <Text style={styles.infoText}>Criadas</Text>
            <Text style={styles.infoNumber}>0</Text>
          </View>
          <View style={styles.info}>
            <Text style={[styles.infoText, styles.infoTextPurple]}>
              Concluídas
            </Text>
            <Text style={styles.infoNumber}>0</Text>
          </View>
        </View>
        <ItemList />
      </View>
    </View>
  )
}
