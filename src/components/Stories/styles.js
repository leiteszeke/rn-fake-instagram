// Dependencies
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {alignItems: 'center'},
  content: {height: 100, backgroundColor: '#121212'},

  wrapper: {width: 92, paddingHorizontal: 4, alignItems: 'center'},
  imageWrapper: {
    borderWidth: 2,
    width: 64,
    alignItems: 'center',
    justifyContent: 'center',
    height: 64,
    borderRadius: 32,
  },

  image: {borderRadius: 28, height: 56, width: 56},
  user: {
    marginTop: 6,
    textAlign: 'center',
  },
});

export default styles;
