// Dependencies
import React from 'react';
import {ScrollView, View, Text, Image} from 'react-native';

const users = [
  {
    id: 1,
    image: 'https://picsum.photos/100/100?=11',
    name: 'acmilan',
  },
  {id: 2, image: 'https://picsum.photos/100/100?=2', name: 'pepejonhs'},
  {id: 3, image: 'https://picsum.photos/100/100?=3', name: 'adidasar'},
  {id: 4, image: 'https://picsum.photos/100/100?=4', name: 'lafabrica'},
  {id: 5, image: 'https://picsum.photos/100/100?=9', name: 'nodejs'},
  {id: 6, image: 'https://picsum.photos/100/100?=10', name: 'reactamsterdam'},
  {id: 7, image: 'https://picsum.photos/100/100?=11', name: 'angularjs'},
  {id: 8, image: 'https://picsum.photos/100/100?=12', name: 'php_ar'},
];

const Story = ({image, name, withStory, user = false}) => (
  <View style={{width: 92, paddingHorizontal: 4, alignItems: 'center'}}>
    <View
      style={{
        borderColor: withStory ? '#fb3983' : '#5e5e5e',
        borderWidth: 2,
        width: 64,
        alignItems: 'center',
        justifyContent: 'center',
        height: 64,
        borderRadius: 32,
      }}>
      <Image
        source={{uri: image}}
        style={{borderRadius: 28, height: 56, width: 56}}
      />
    </View>
    <Text
      numberOfLines={1}
      style={{
        color: user ? '#ababab' : '#FFFFFF',
        marginTop: 6,
        textAlign: 'center',
      }}>
      {name}
    </Text>
  </View>
);

const Stories = () => (
  <ScrollView
    contentContainerStyle={{alignItems: 'center'}}
    style={{height: 100, backgroundColor: '#121212'}}
    horizontal={true}
    showsHorizontalScrollIndicator={false}
    shows>
    <Story
      {...{
        name: 'La tua storia',
        image: 'https://picsum.photos/100/100?=13',
        withStory: false,
        user: true,
      }}
    />
    {users.map(user => (
      <Story key={user.id} {...{...user, withStory: user.id % 2 !== 0}} />
    ))}
  </ScrollView>
);

export default Stories;
