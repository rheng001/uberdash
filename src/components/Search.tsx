import React, {useState, useContext, useRef} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  ScrollView,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {elevation} from '@common/styles';
import {viewportWidth} from '@common/styles';

import {
  GooglePlacesAutocomplete,
  GooglePlacesAutocompleteRef,
} from 'react-native-google-places-autocomplete';

import {SearchContextType, SearchContext} from '@context/SearchContext';
import {TouchableOpacity} from 'react-native-gesture-handler';

const imageWidth = Math.round((viewportWidth * 9.5) / 10);

const Search = () => {
  const {searchTerm, searchCity} = useContext(
    SearchContext,
  ) as SearchContextType;
  const [input, setInput] = useState<string>('');
  const ref = useRef<GooglePlacesAutocompleteRef>(null);

  const onFocus = () => {
    ref.current?.clear();
  };

  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{flex: 1, width: '100%', height: '100%'}}
      scrollEnabled={false}
      keyboardShouldPersistTaps={'handled'}>
      <GooglePlacesAutocomplete
        ref={ref}
        placeholder="Search"
        query={{
          key: '',
          language: 'en',
        }}
        onPress={(data, details = null) => {
          const city = data.description.split(',')[0];
          searchCity(city);
        }}
        textInputProps={{
          clearButtonMode: 'always',
          onFocus: () => onFocus(),
        }}
        styles={{
          container: {
            width: imageWidth,
          },
          textInput: {
            backgroundColor: '#eee',
            borderRadius: 20,
            fontWeight: '700',
            marginTop: 7,
          },
          textInputContainer: {
            backgroundColor: '#eee',
            borderRadius: 50,
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 10,
          },
        }}
        renderLeftButton={() => (
          <View style={{marginLeft: 10}}>
            <Ionicons name="location-sharp" size={24} color="black" />
          </View>
        )}
        // renderRightButton={() => (
        //   <View
        //     style={{
        //       flexDirection: 'row',
        //       marginRight: 8,
        //       backgroundColor: 'white',
        //       padding: 9,
        //       borderRadius: 30,
        //       alignItems: 'center',
        //     }}>
        //     <AntDesign
        //       name="clockcircle"
        //       size={11}
        //       style={{marginRight: 6}}
        //       color="black"
        //     />
        //     <Text>Clear</Text>
        //   </View>
        // )}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    marginHorizontal: 25,
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 40,
  },
  elevation,
  input: {
    fontSize: 20,
    marginLeft: 10,
  },
});

export default Search;
