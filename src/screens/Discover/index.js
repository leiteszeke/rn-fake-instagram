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
  <View
    style={{
      borderWidth: 2,
      borderColor: '#262626',
      borderRadius: 8,
      height: 32,
      marginRight: 8,
      justifyContent: 'center',
      paddingHorizontal: 12,
    }}>
    <Text style={{color: '#FFFFFF', fontWeight: 'bold', fontSize: 14}}>
      {props.text}
    </Text>
  </View>
);

const ImageRow = ({images}) => (
  <View style={{flexDirection: 'row'}}>
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
    <View style={{flexDirection: 'row'}}>
      {bigIndex === 0 ? (
        <>
          <Image source={{uri: bigImage.image}} style={calculatedSize(true)} />
          <View style={{flexDirection: 'column'}}>
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
          <View style={{flexDirection: 'column'}}>
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
    <View
      style={{
        height: 48,
        backgroundColor: '#121212',
        paddingHorizontal: 12,
        flexDirection: 'row',
        justifyCenter: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
      }}>
      <View
        style={{
          backgroundColor: '#262626',
          borderRadius: 8,
          height: 36,
          flexDirection: 'row',
          marginRight: 16,
          paddingHorizontal: 12,
          flex: 1,
          alignItems: 'center',
        }}>
        <Icon name="ios-search" size={18} color="#8e8e92" />
        <TextInput
          placeholderTextColor="#8e8e92"
          placeholder="Cerca"
          style={{
            color: '#FFFFFF',
            height: 36,
            marginLeft: 4,
            fontSize: 18,
            paddingLeft: 8,
            flex: 1,
          }}
        />
      </View>
      <Icon name="md-qr-scanner" size={26} color="#FFFFFF" />
    </View>
    <ScrollView
      contentContainerStyle={{
        height: 40,
        marginBottom: 8,
        flexDirection: 'row',
        paddingHorizontal: 12,
      }}
      showsHorizontalScrollIndicator={false}
      horizontal={true}>
      {badges.map(badge => (
        <Badge key={badge.id} {...badge} />
      ))}
    </ScrollView>
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        width: '100%',
      }}>
      <Gallery images={images} />
    </ScrollView>
  </Layout>
);

export default Discover;
