// Dependencies
import React from 'react';
import {Image, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
// Styles
import styles from './styles';

const Post = props => (
  <View style={styles.wrapper}>
    <View style={styles.header}>
      <View style={styles.imageContainer}>
        <Image source={{uri: props.profile_img}} style={styles.profileImage} />
      </View>
      <View style={styles.metaData}>
        <Text style={styles.user}>{props.user}</Text>
        <Text style={styles.place}>{props.place}</Text>
      </View>
      <View style={styles.headerOptions}>
        <Icon name="ios-more" size={28} color="#FFFFFF" />
      </View>
    </View>
    <Image
      source={{uri: props.media}}
      style={styles.media}
      resizeMode="cover"
    />
    <View style={styles.actions}>
      <View style={styles.leftAction}>
        <Icon name="ios-heart-empty" size={28} color="#FFFFFF" />
        <Icon name="ios-text" size={28} color="#FFFFFF" />
        <Icon name="ios-send" size={28} color="#FFFFFF" />
      </View>
      <View style={{flex: 1}} />
      <View style={styles.rightActions}>
        <Icon name="ios-bookmark" size={28} color="#FFFFFF" />
      </View>
    </View>
    <View style={styles.postBody}>
      <Text style={styles.likes}>Piace 6.080 persone</Text>
      <Text style={styles.descriptionWrapper}>
        <Text style={styles.description}>acmilan</Text> #MilanLazio: warm-up 🔙
      </Text>
      <Text style={styles.commentsCount}>
        Visualizza tutti e 940 i commenti
      </Text>
    </View>
    <View style={styles.commentRow}>
      <Image
        source={{uri: 'https://picsum.photos/100/100?=13'}}
        style={styles.userPhoto}
      />
      <View style={styles.commentWrapper}>
        <Text style={styles.addComment}>Aggiungi un commenti</Text>
      </View>
      <Text style={styles.reactions}>😍 👏🏻</Text>
      <View style={styles.moreReactions}>
        <Icon name="ios-add-circle-outline" size={24} color="#5d5d5d" />
      </View>
    </View>
    <View style={styles.footer}>
      <Text style={styles.timestamp}>49 minuti fa ·</Text>
      <Text style={styles.translate}>Visualizza traduzione</Text>
    </View>
  </View>
);

export default Post;
