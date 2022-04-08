import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageSourcePropType,
  Button,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import {elevation} from '@common/styles';

interface CategoryItemProps {
  name: string;
  imageUrl: ImageSourcePropType;
  index: number;
  active: boolean;
  handlePress: () => void;
}

const CategoryItem = ({
  name,
  imageUrl,
  index,
  active,
  handlePress,
}: CategoryItemProps) => {
  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={0.5}>
      <View
        style={[
          styles.container,
          index === 0 ? {marginLeft: 25} : {marginLeft: 15},
          // active
          //   ? {backgroundColor: 'rgb(241, 186, 87)'}
          //   : {backgroundColor: 'white'},
        ]}>
        <View
          style={[
            styles.imageContainer,
            active
              ? {backgroundColor: 'rgb(241, 186, 87)'}
              : {backgroundColor: 'white'},
          ]}>
          <Image source={imageUrl} style={[styles.image]} />
        </View>
        <Text style={styles.header}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    // width: 100,
    // height: 100,
    // marginVertical: 15,
    marginHorizontal: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  elevation,
  image: {
    width: 50,
    height: 40,
    resizeMode: 'contain',
  },
  imageContainer: {
    width: 50,
    height: 50,
    // backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginBottom: 5,
  },
  header: {
    fontWeight: '900',
    fontSize: 13,
    color: 'black',
  },
});

export default CategoryItem;
