import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  deniedWrapper: {
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#F7F8FA', 
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontWeight: '600',
    fontSize: 23,
    textAlign: 'center',
    marginBottom: 10,
  },
  list: {
    marginTop: 30,
    marginBottom: 30,
  },
  text: {
    color: '#949496',
  },
  backBtn: {
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
