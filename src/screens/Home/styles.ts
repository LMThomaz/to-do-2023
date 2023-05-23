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
    fontFamily: 'Inter_400Regular',
  },
  buttonAdd: {
    backgroundColor: '#1E6F9F',
    height: 54,
    width: 54,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapperInfo: {
    paddingTop: 32,
    paddingBottom: 20,
    marginHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#333333',
    borderBottomWidth: 1,
  },
  info: {
    flexDirection: 'row',

    gap: 8,
  },
  infoText: {
    color: '#4EA8DE',
    fontFamily: 'Inter_700Bold',
    fontSize: 14,
  },
  infoTextPurple: {
    color: '#8284FA',
  },
  infoNumber: {
    backgroundColor: '#333333',
    fontFamily: 'Inter_700Bold',
    justifyContent: 'center',
    alignItems: 'center',
    height: 20,
    fontSize: 12,
    paddingHorizontal: 8,
    borderRadius: 999,
    color: '#D9D9D9',
  },
})
