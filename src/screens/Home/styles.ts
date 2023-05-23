import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
  },
  form: {
    marginTop: -27,
    flexDirection: 'row',
    gap: 8,
    paddingHorizontal: 24,
    width: '100%',
  },
  input: {
    backgroundColor: '#262626',
    height: 54,
    borderRadius: 6,
    padding: 16,
    flex: 1,
    fontSize: 16,
  },
  buttonAdd: {
    backgroundColor: '#1E6F9F',
    height: 54,
    width: 54,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
