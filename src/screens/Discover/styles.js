// Dependencies
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  badgeContainer: {
    borderWidth: 2,
    borderColor: '#262626',
    borderRadius: 8,
    height: 32,
    marginRight: 8,
    justifyContent: 'center',
    paddingHorizontal: 12,
  },

  badgeText: {color: '#FFFFFF', fontWeight: 'bold', fontSize: 14},

  imageRow: {flexDirection: 'row'},

  imagesContainer: {flexDirection: 'row'},

  column: {flexDirection: 'column'},

  header: {
    height: 48,
    backgroundColor: '#121212',
    paddingHorizontal: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },

  search: {
    backgroundColor: '#262626',
    borderRadius: 8,
    height: 36,
    flexDirection: 'row',
    marginRight: 16,
    paddingHorizontal: 12,
    flex: 1,
    alignItems: 'center',
  },

  input: {
    color: '#FFFFFF',
    height: 36,
    marginLeft: 4,
    fontSize: 18,
    paddingLeft: 8,
    flex: 1,
  },

  badges: {
    height: 40,
    marginBottom: 8,
    flexDirection: 'row',
    paddingHorizontal: 12,
  },

  content: {
    width: '100%',
  },
});

export default styles;
