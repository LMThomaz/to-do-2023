import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    padding: 12,
    backgroundColor: '#262626',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#333333',
  },
  text: {
    flex: 1,
    color: '#F2F2F2',
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
  },
  textChecked: {
    color: '#808080',
    textDecorationLine: 'line-through',
  },
  buttonRemove: {
    height: 36,
    width: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
