import { AntDesign } from '@expo/vector-icons'
import { useState } from 'react'
import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { EmptyList } from '../../components/EmptyList'
import { Header } from '../../components/Header'
import { ItemList } from '../../components/ItemList'
import { styles } from './styles'

interface ItemToDo {
  title: string
  checked: boolean
}

export function Home() {
  const [textInput, setSetTextInput] = useState('')
  const [toDoList, setToDoList] = useState<ItemToDo[]>([])

  function handleAddToDo() {
    if (textInput.length === 0) {
      Alert.alert('Ops!', 'Preencha o campo para adicionar uma tarefa')
      return
    }

    const itemInList = toDoList.find((item) => item.title === textInput)
    if (itemInList) {
      Alert.alert('Ops!', 'Esta tarefa já está na lista')
      return
    }

    setToDoList((oldValue) => [
      { title: textInput, checked: false },
      ...oldValue,
    ])

    setSetTextInput('')
  }

  function handleRemoveToDo(title: string) {
    setToDoList((oldValue) => [
      ...oldValue.filter((item) => item.title !== title),
    ])
  }

  function handleToggleCheckToDo(title: string) {
    setToDoList((oldValue) => [
      ...oldValue.map((item) => {
        if (item.title !== title) return item

        return {
          ...item,
          checked: !item.checked,
        }
      }),
    ])
  }

  const numberAllToDo = toDoList.length
  const numberCheckedToDo = toDoList.filter((item) => item.checked).length

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#808080"
            onChangeText={setSetTextInput}
            value={textInput}
          />
          <TouchableOpacity style={styles.buttonAdd} onPress={handleAddToDo}>
            <AntDesign name="pluscircleo" size={16} color="#F2F2F2" />
          </TouchableOpacity>
        </View>
        <View style={styles.wrapperInfo}>
          <View style={styles.info}>
            <Text style={styles.infoText}>Criadas</Text>
            <Text style={styles.infoNumber}>{numberAllToDo}</Text>
          </View>
          <View style={styles.info}>
            <Text style={[styles.infoText, styles.infoTextPurple]}>
              Concluídas
            </Text>
            <Text style={styles.infoNumber}>{numberCheckedToDo}</Text>
          </View>
        </View>
        {toDoList.length === 0 ? (
          <EmptyList />
        ) : (
          <FlatList
            contentContainerStyle={{
              paddingHorizontal: 24,
            }}
            data={toDoList}
            keyExtractor={({ title }) => title}
            renderItem={({ item }) => (
              <ItemList
                checked={item.checked}
                title={item.title}
                onRemoveToDo={handleRemoveToDo}
                onToggleCheckToDo={handleToggleCheckToDo}
              />
            )}
          />
        )}
      </View>
    </View>
  )
}
