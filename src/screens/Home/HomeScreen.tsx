import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  FlatList,
  View,
} from 'react-native';

import Header from '@components/Header';
import Search from '@components/Search';
import CategoryList from '@components/CategoryList';
import {SearchProvider} from '@context/SearchContext';
import Restaurants from '@components/Restaurants';

import PopularList from '@components/PopularList';

const HomeScreen = () => {
  return (
    <SafeAreaView style={{backgroundColor: '#eee', flex: 1}}>
      <StatusBar />
      <SearchProvider>
        <ScrollView
          horizontal={false}
          style={{flex: 1, width: '100%', height: '100%'}}
          keyboardShouldPersistTaps={'handled'}
          contentInsetAdjustmentBehavior="automatic"
          nestedScrollEnabled>
          <View style={{backgroundColor: 'white', padding: 15}}>
            <Header />
            <Search />
          </View>
          <CategoryList />
          <PopularList />
          <Restaurants />
        </ScrollView>
      </SearchProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
