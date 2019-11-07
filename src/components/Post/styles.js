// Dependencies
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 16,
  },

  header: {
    height: 54,
    alignItems: 'center',
    paddingLeft: 12,
    paddingRight: 16,
    flexDirection: 'row',
  },

  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#121212',
    marginRight: 10,
    height: 32,
    borderRadius: 16,
    borderColor: '#fb3983',
    width: 32,
  },

  profileImage: {
    borderRadius: 14,
    height: 28,
    width: 28,
  },

  metaData: {
    justifyContent: 'center',
    flex: 1,
  },

  user: {
    fontSize: 14,
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

  place: {
    fontSize: 14,
    textDecorationLine: 'underline',
    color: '#FFFFFF',
  },

  headerOptions: {
    height: 34,
    width: 34,
    alignItems: 'center',
    justifyContent: 'center',
  },

  media: {
    width: '100%',
    height: 375,
  },

  actions: {
    height: 52,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 12,
    paddingRight: 16,
  },

  leftActions: {
    width: 104,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  rightActions: {
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

  postBody: {
    paddingHorizontal: 16,
  },

  likes: {
    fontSize: 16,
    marginBottom: 12,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

  descriptionWrapper: {
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 12,
  },

  description: {
    fontWeight: 'bold',
  },

  commentsCount: {
    fontSize: 16,
    color: '#9A9A9A',
  },

  commentRow: {
    paddingHorizontal: 16,
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 14,
  },

  userPhoto: {
    backgroundColor: '#121212',
    borderRadius: 13,
    marginRight: 10,
    height: 26,
    width: 26,
  },

  commentWrapper: {
    justifyContent: 'center',
    flex: 1,
  },

  addComment: {
    fontSize: 16,
    color: '#9A9A9A',
  },

  reactions: {
    marginRight: 4,
  },

  moreReactions: {
    height: 26,
    width: 26,
    alignItems: 'center',
    justifyContent: 'center',
  },

  footer: {
    paddingHorizontal: 16,
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 12,
  },

  timestamp: {
    fontSize: 16,
    color: '#9A9A9A',
    marginRight: 8,
  },

  translate: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

export default styles;
