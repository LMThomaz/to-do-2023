import {
  Inter_400Regular,
  Inter_700Bold,
  useFonts,
} from '@expo-google-fonts/inter'
import { StatusBar } from 'react-native'
import { Home } from './src/screens/Home'

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_700Bold,
    Inter_400Regular,
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <>
      <Home />
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
    </>
  )
}
