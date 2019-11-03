// Dependencies
import React from 'react';
import {Image, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Post = props => (
  <View style={{marginBottom: 16}}>
    <View
      style={{
        height: 54,
        alignItems: 'center',
        paddingLeft: 12,
        paddingRight: 16,
        flexDirection: 'row',
      }}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#121212',
          marginRight: 10,
          height: 32,
          borderRadius: 16,
          borderColor: '#fb3983',
          borderWidth: props.story ? 2 : 0,
          width: 32,
        }}>
        <Image
          source={{uri: props.profile_img}}
          style={{
            borderRadius: 14,
            height: 28,
            width: 28,
          }}
        />
      </View>
      <View style={{justifyContent: 'center', flex: 1}}>
        <Text
          style={{
            fontSize: 14,
            textDecorationLine: 'underline',
            fontWeight: 'bold',
            color: '#FFFFFF',
          }}>
          {props.user}
        </Text>
        <Text
          style={{
            fontSize: 14,
            textDecorationLine: 'underline',
            color: '#FFFFFF',
          }}>
          {props.place}
        </Text>
      </View>
      <View
        style={{
          height: 34,
          width: 34,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Icon name="ios-more" size={28} color="#FFFFFF" />
      </View>
    </View>
    <Image
      source={{uri: props.media}}
      style={{width: '100%', height: 375}}
      resizeMode="cover"
    />
    <View
      style={{
        height: 52,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 12,
        paddingRight: 16,
      }}>
      <View
        style={{
          width: 104,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Icon name="ios-heart-empty" size={28} color="#FFFFFF" />
        <Icon name="ios-text" size={28} color="#FFFFFF" />
        <Icon name="ios-send" size={28} color="#FFFFFF" />
      </View>
      <View style={{flex: 1}} />
      <View style={{width: 30, justifyContent: 'center', alignItems: 'center'}}>
        <Icon name="ios-bookmark" size={28} color="#FFFFFF" />
      </View>
    </View>
    <View style={{paddingHorizontal: 16}}>
      <Text
        style={{
          fontSize: 16,
          marginBottom: 12,
          fontWeight: 'bold',
          color: '#FFFFFF',
        }}>
        Piace 6.080 persone
      </Text>
      <Text style={{fontSize: 16, color: '#FFFFFF', marginBottom: 12}}>
        <Text style={{fontWeight: 'bold'}}>acmilan</Text> #MilanLazio: warm-up
        🔙
      </Text>
      <Text style={{fontSize: 16, color: '#9A9A9A'}}>
        Visualizza tutti e 940 i commenti
      </Text>
    </View>
    <View
      style={{
        paddingHorizontal: 16,
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 14,
      }}>
      <Image
        source={{uri: 'https://picsum.photos/100/100?=13'}}
        style={{
          backgroundColor: '#121212',
          borderRadius: 13,
          marginRight: 10,
          height: 26,
          width: 26,
        }}
      />
      <View style={{justifyContent: 'center', flex: 1}}>
        <Text style={{fontSize: 16, color: '#9A9A9A'}}>
          Aggiungi un commenti
        </Text>
      </View>
      <Text style={{marginRight: 4}}>😍 👏🏻</Text>
      <View
        style={{
          height: 26,
          width: 26,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Icon name="ios-add-circle-outline" size={24} color="#5d5d5d" />
      </View>
    </View>
    <View
      style={{
        paddingHorizontal: 16,
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 12,
      }}>
      <Text style={{fontSize: 16, color: '#9A9A9A', marginRight: 8}}>
        49 minuti fa ·
      </Text>
      <Text style={{fontSize: 16, fontWeight: 'bold', color: '#FFFFFF'}}>
        Visualizza traduzione
      </Text>
    </View>
  </View>
);

export default Post;
