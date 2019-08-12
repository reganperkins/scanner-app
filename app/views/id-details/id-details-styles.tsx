import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F8FA',
    padding: 20, 
  },
  table: {
    margin: 10,
  },
  row: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    alignItems: 'flex-start',
  },
  identifier: {
    width: 120,
  },
  content: {
    flex: 1,
  },
  heading: {
    fontWeight: '600',
    fontSize: 23,
  },
  tagline: {
    color: '#949496',
  },
});

export default styles;