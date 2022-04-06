import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  FlatList,
} from 'react-native';

import Header from '@components/Header';
import Search from '@components/Search';
import CategoryList from '@components/CategoryList';
import {SearchProvider} from '@context/SearchContext';
import Restaurants from '@components/Restaurants';

const HomeScreen2 = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <SearchProvider>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          nestedScrollEnabled>
          <Header />
          <Search />
          <CategoryList />
          <Restaurants />
        </ScrollView>
      </SearchProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen2;
