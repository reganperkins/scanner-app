import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F8FA', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  introText: {
    marginTop: 40,
    marginBottom: 20,
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 30,
  },
  heading: {
    fontWeight: '600',
  },
  tagline: {
    color: '#949496',
    textAlign: 'center',
  },
  startBtn: {
    backgroundColor: '#EE5B54',
    borderRadius: 20,
    alignItems: 'center',
    alignSelf: 'stretch',
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10,
  },
  btnText: {
    color: '#FFFFFF',
    padding: 10,
  },
});

export default styles;