// Dependencies
import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
// Components
import Layout from '#components/Layout';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Notifications = () => (
  <Layout bgColor="#121212">
    <View
      style={{
        height: 48,
        backgroundColor: '#121212',
        paddingHorizontal: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#262626',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text
        style={{
          fontSize: 16,
          color: '#FFFFFF',
          justifyContent: 'center',
          textAlign: 'center',
          fontWeight: 'bold',
        }}>
        Attività
      </Text>
    </View>
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        flex: 1,
        backgroundColor: '#000000',
      }}>
      <View
        style={{
          height: 48,
          paddingHorizontal: 16,
          borderBottomWidth: 1,
          borderBottomColor: '#262626',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: 16,
            color: '#FFFFFF',
          }}>
          Richieste di seguirti
        </Text>
      </View>
      <View
        style={{
          height: 48,
          paddingHorizontal: 16,
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: 16,
            color: '#FFFFFF',
            fontWeight: 'bold',
          }}>
          Questa settimana
        </Text>
      </View>
      <View
        style={{
          paddingHorizontal: 16,
          flexDirection: 'row',
          minHeight: 60,
          alignItems: 'center',
        }}>
        <View
          style={{
            height: 32,
            width: 32,
            alignContent: 'center',
            justifyContent: 'center',
            marginRight: 12,
          }}>
          <Icon
            name="ios-refresh"
            size={26}
            style={{
              marginLeft: 3,
            }}
            color="#FFFFFF"
          />
        </View>
        <Text style={{color: '#FFFFFF', flex: 1, fontSize: 16}}>
          Vedi il post che hai pubblicato esattamente 4 anni fa.{' '}
          <Text style={{color: '#6a6a6a'}}> 2g</Text>
        </Text>
        <Image
          source={{uri: 'https://picsum.photos/100/100?=45'}}
          style={{height: 42, width: 42}}
        />
      </View>
      <View
        style={{
          paddingHorizontal: 16,
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'center',
          marginBottom: 12,
        }}>
        <Image
          source={{uri: 'https://picsum.photos/100/100?=45'}}
          style={{height: 32, width: 32, marginRight: 12, borderRadius: 16}}
        />
        <Text style={{color: '#FFFFFF', flex: 1, fontSize: 16}}>
          <Text style={{fontWeight: 'bold'}}>acmilan </Text> ti ha menzionato in
          un commento: "@leiteszeke"
          <Text style={{color: '#6a6a6a'}}> 2g</Text>
        </Text>
        <Image
          source={{uri: 'https://picsum.photos/100/100?=48'}}
          style={{height: 42, width: 42}}
        />
        <View
          style={{
            width: '100%',
            marginTop: 16,
            marginLeft: 44,
            height: 18,
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Icon name="ios-heart" size={16} color="#a5a7a9" />
          <Text
            style={{
              color: '#a5a7a9',
              fontSize: 16,
              textDecorationLine: 'underline',
              marginLeft: 8,
            }}>
            Rispondi
          </Text>
        </View>
      </View>
      <View
        style={{
          height: 48,
          paddingHorizontal: 16,
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: 16,
            color: '#FFFFFF',
            fontWeight: 'bold',
          }}>
          Questo mese
        </Text>
      </View>
      <View
        style={{
          paddingHorizontal: 16,
          flexDirection: 'row',
          minHeight: 60,
          alignItems: 'center',
        }}>
        <View
          style={{
            height: 32,
            width: 32,
            alignContent: 'center',
            justifyContent: 'center',
            marginRight: 12,
          }}>
          <Icon
            name="ios-refresh"
            size={26}
            style={{
              marginLeft: 3,
            }}
            color="#FFFFFF"
          />
        </View>
        <Text style={{color: '#FFFFFF', flex: 1, fontSize: 16}}>
          Vedi il post che hai pubblicato esattamente 4 anni fa.{' '}
          <Text style={{color: '#6a6a6a'}}> 2g</Text>
        </Text>
        <Image
          source={{uri: 'https://picsum.photos/100/100?=45'}}
          style={{height: 42, width: 42}}
        />
      </View>
      <View
        style={{
          paddingHorizontal: 16,
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'center',
          marginBottom: 12,
        }}>
        <Image
          source={{uri: 'https://picsum.photos/100/100?=45'}}
          style={{height: 32, width: 32, marginRight: 12, borderRadius: 16}}
        />
        <Text style={{color: '#FFFFFF', flex: 1, fontSize: 16}}>
          <Text style={{fontWeight: 'bold'}}>acmilan </Text> ti ha menzionato in
          un commento: "@leiteszeke"
          <Text style={{color: '#6a6a6a'}}> 2g</Text>
        </Text>
        <Image
          source={{uri: 'https://picsum.photos/100/100?=48'}}
          style={{height: 42, width: 42}}
        />
        <View
          style={{
            width: '100%',
            marginTop: 16,
            marginLeft: 44,
            height: 18,
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Icon name="ios-heart" size={16} color="#a5a7a9" />
          <Text
            style={{
              color: '#a5a7a9',
              fontSize: 16,
              textDecorationLine: 'underline',
              marginLeft: 8,
            }}>
            Rispondi
          </Text>
        </View>
      </View>
      <View
        style={{
          paddingHorizontal: 16,
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'center',
          minHeight: 60,
          marginBottom: 12,
        }}>
        <Image
          source={{uri: 'https://picsum.photos/100/100?=45'}}
          style={{height: 32, width: 32, marginRight: 12, borderRadius: 16}}
        />
        <Text style={{color: '#FFFFFF', flex: 1, fontSize: 16}}>
          <Text style={{fontWeight: 'bold'}}>acmilan </Text> ha iniziato a
          seguirti
          <Text style={{color: '#6a6a6a'}}> 3g</Text>
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: '#5395e9',
            height: 28,
            justifyContent: 'center',
            width: 126,
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 16,
              lineHeight: 28,
              color: '#FFFFFF',
              fontWeight: 'bold',
            }}>
            Segui
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          paddingHorizontal: 16,
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'center',
          minHeight: 60,
          marginBottom: 12,
        }}>
        <Image
          source={{uri: 'https://picsum.photos/100/100?=45'}}
          style={{height: 32, width: 32, marginRight: 12, borderRadius: 16}}
        />
        <Text style={{color: '#FFFFFF', flex: 1, fontSize: 16}}>
          <Text style={{fontWeight: 'bold'}}>acmilan </Text> ha iniziato a
          seguirti
          <Text style={{color: '#6a6a6a'}}> 3g</Text>
        </Text>
        <TouchableOpacity
          style={{
            borderColor: '#6a6a6a',
            borderWidth: 1,
            borderRadius: 4,
            height: 30,
            justifyContent: 'center',
            width: 126,
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 16,
              color: '#FFFFFF',
              fontWeight: 'bold',
            }}>
            Messagio
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  </Layout>
);

export default Notifications;
