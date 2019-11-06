// Dependencies
import React from 'react';
import {
  View,
  Dimensions,
  Image,
  Text,
  ScrollView,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
// Components
import Layout from '#components/Layout';
// Styles
import styles from './styles';

const windowWidth = Dimensions.get('window').width;
const IMAGES_PER_ROW = 3;

const calculatedSize = (big = false) => {
  const size = (windowWidth / IMAGES_PER_ROW) * (big ? 2 : 1);
  return {width: size, height: size};
};

const badges = [
  {id: 1, text: 'IGTV'},
  {id: 2, text: 'Some'},
  {id: 3, text: 'Music'},
  {id: 4, text: 'Videos'},
  {id: 5, text: 'Art'},
  {id: 6, text: 'YouTube'},
];

const images = Array.from(new Array(30)).map((item, index) => ({
  id: index + 1,
  big: (index + 1) % (Math.floor(Math.random() * (6 - 4)) + 4) === 0,
  image: `https://picsum.photos/250/250?=${index + 1}`,
}));

const chunkArray = (array, size) => {
  const results = [];
  while (array.length) {
    results.push(array.splice(0, size));
  }
  return results;
};

const Badge = props => (
  <View style={styles.badgeContainer}>
    <Text style={styles.badgeText}>{props.text}</Text>
  </View>
);

const ImageRow = ({images}) => (
  <View style={styles.imageRow}>
    {images.map(image => (
      <Image source={{uri: image.image}} style={calculatedSize()} />
    ))}
  </View>
);

const BigImageRow = ({images}) => {
  const bigIndex = images.findIndex(image => image.big);
  const bigImage = images.filter(image => image.big)[0];
  const smallImages = images.filter(image => !image.big);

  return (
    <View style={styles.imagesContainer}>
      {bigIndex === 0 ? (
        <>
          <Image source={{uri: bigImage.image}} style={calculatedSize(true)} />
          <View style={styles.column}>
            {smallImages.map(image => (
              <Image
                key={image.id}
                source={{uri: image.image}}
                style={calculatedSize()}
              />
            ))}
          </View>
        </>
      ) : (
        <>
          <View style={styles.column}>
            {smallImages.map(image => (
              <Image
                key={image.id}
                source={{uri: image.image}}
                style={calculatedSize()}
              />
            ))}
          </View>
          <Image source={{uri: bigImage.image}} style={calculatedSize(true)} />
        </>
      )}
    </View>
  );
};

const Gallery = ({images}) => {
  const chunked = chunkArray(images, 3).map(chunk => ({
    images: chunk,
    big: typeof chunk.find(image => image.big) !== 'undefined',
  }));

  return (
    <>
      {chunked.map(chunk =>
        chunk.big ? (
          <BigImageRow images={chunk.images} />
        ) : (
          <ImageRow images={chunk.images} />
        ),
      )}
    </>
  );
};

const Discover = () => (
  <Layout bgColor="#121212">
    <View style={styles.header}>
      <View style={styles.search}>
        <Icon name="ios-search" size={18} color="#8e8e92" />
        <TextInput
          placeholderTextColor="#8e8e92"
          placeholder="Cerca"
          style={styles.input}
        />
      </View>
      <Icon name="md-qr-scanner" size={26} color="#FFFFFF" />
    </View>
    <ScrollView
      contentContainerStyle={styles.badges}
      showsHorizontalScrollIndicator={false}
      horizontal={true}>
      {badges.map(badge => (
        <Badge key={badge.id} {...badge} />
      ))}
    </ScrollView>
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.content}>
      <Gallery images={images} />
    </ScrollView>
  </Layout>
);

export default Discover;
