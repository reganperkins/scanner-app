import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
  },
  id: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderColor: '#27374A',
    borderWidth: 3,
    borderRadius: 10,
    width: 200,
    height: 130,
    backgroundColor: '#fff'
  },
  province: {
    borderColor: '#27374A',
    borderWidth: 3,
    width: '80%',
    height: 13,
    marginTop: 15,
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
    width: '80%',
  },
  photo: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#27374A',
    borderWidth: 3,
    height: 70,
    width: 50,
    overflow: 'hidden',
  },
  userHead: {
    position: 'absolute',
    top: 16,
    width: 20,
    height: 20,
    borderColor: '#27374A',
    borderWidth: 3,
    borderRadius: 50,
    backgroundColor: '#27374A',
  },
  userBody: {
    position: 'absolute',
    top: 35,
    width: '80%',
    height: '80%',
    borderWidth: 3,
    borderColor: '#27374A',
    borderRadius: 50,
    backgroundColor: '#27374A',
  },
  textContainer: {
    flex: 1,
    marginLeft: 15,
    borderTopWidth: 3,
    borderTopColor: '#27374A',
    height: 70,
  },
  text: {
    marginTop: 8,
    height: 5,
    width: '60%',
    borderTopWidth: 3,
    borderTopColor: '#27374A',
    borderBottomColor: '#27374A',
    borderBottomWidth: 3,
  },
});

export default styles;
