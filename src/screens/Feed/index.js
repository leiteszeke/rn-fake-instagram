// Dependencies
import React from 'react';
import {View, Image, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
// Components
import Layout from '#components/Layout';
import Stories from '#components/Stories';
import Post from '#components/Post';
// Images
import logo from '#images/logo.png';

const posts = [
  {
    id: 1,
    user: 'acmilan',
    place: 'San Siro Stadio',
    profile_img: 'https://picsum.photos/100/100?=1',
    story: true,
    media: 'https://picsum.photos/500/500?=5',
  },
  {
    id: 2,
    user: 'pepejonhs',
    place: 'New York, United States of America',
    profile_img: 'https://picsum.photos/100/100?=2',
    story: false,
    media: 'https://picsum.photos/500/500?=6',
  },
  {
    id: 3,
    user: 'adidasar',
    place: 'Plaza Italia',
    profile_img: 'https://picsum.photos/100/100?=3',
    story: true,
    media: 'https://picsum.photos/500/500?=7',
  },
  {
    id: 4,
    user: 'lafabrica',
    place: 'Barcelona',
    profile_img: 'https://picsum.photos/100/100?=4',
    story: false,
    media: 'https://picsum.photos/500/500?=8',
  },
];

const Feed = () => (
  <Layout bgColor="#121212">
    <View
      style={{
        height: 48,
        backgroundColor: '#121212',
        borderBottomWidth: 2,
        borderBottomColor: '#181818',
        paddingHorizontal: 12,
        flexDirection: 'row',
        justifyCenter: 'space-between',
        alignItems: 'center',
      }}>
      <Icon name="ios-camera" size={26} color="#FFFFFF" />
      <Image style={{height: 32, flex: 1}} resizeMode="contain" source={logo} />
      <Icon name="ios-send" size={26} color="#FFFFFF" />
    </View>
    <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
      <Stories />
      {posts.map(post => (
        <Post key={post.id} {...post} />
      ))}
    </ScrollView>
  </Layout>
);

export default Feed;
