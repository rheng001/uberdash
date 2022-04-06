import React, {useState, useContext} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {elevation} from '@common/styles';

import {SearchContextType, SearchContext} from '@context/SearchContext';

const Search = () => {
  const {searchTerm} = useContext(SearchContext) as SearchContextType;
  const [input, setInput] = useState<string>('');

  const handleEndEditing = () => {
    if (!input) return;
    searchTerm(input);
    setInput('');
  };

  return (
    <View style={[styles.container, styles.elevation]}>
      <Icon name="search" size={25} />
      <TextInput
        placeholder="Restaurants, foods"
        value={input}
        style={styles.input}
        onChangeText={text => {
          setInput(text);
        }}
        onEndEditing={() => {
          handleEndEditing();
        }}
      />
    </View>
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
