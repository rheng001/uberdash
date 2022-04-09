import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

interface OrderItemProps {
  item: any;
}

const OrderItem: React.FC<OrderItemProps> = ({item}: any) => {
  const {title, price} = item;

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#999',
      }}>
      <Text style={{fontWeight: '600', fontSize: 16, color: 'black'}}>
        {title}
      </Text>
      <Text style={{opacity: 0.7, fontSize: 16, color: 'black'}}>{price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default OrderItem;
