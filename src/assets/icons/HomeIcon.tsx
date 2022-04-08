import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface Props {
  color: string;
  size: number;
}

const HomeIcon = (props: Props) => {
  return <Icon name="home" size={props.size} color={props.color} />;
};

const styles = StyleSheet.create({});

export default HomeIcon;
