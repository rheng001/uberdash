import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from 'interfaces/interfaces';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import {getBusiness} from '@api/YelpApi';
import {useQuery} from 'react-query';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
import {viewportWidth, viewportHeight} from '@common/styles';
import TopBackNavigation from '@components/TopBackNavigation';

type Props = NativeStackScreenProps<RootStackParams, 'Restaurants'>;

const imageHeight = Math.round((viewportWidth * 9) / 16);

const RestaurantScreen = ({route}: Props) => {
  const {id} = route.params;
  const {data, isLoading, isError} = useQuery(['restaurant', id], getBusiness);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (isError) {
    return <Text>Error</Text>;
  }

  console.log('data is' + JSON.stringify(data));
  return (
    <View>
      <TopBackNavigation />
      <FlatList
        data={data.photos}
        keyExtractor={photos => uuidv4()}
        renderItem={({item}) => {
          return <Image source={{uri: item}} style={styles.image} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: imageHeight,
    width: viewportWidth,
  },
});

export default RestaurantScreen;
