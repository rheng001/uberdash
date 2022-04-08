import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useAppDispatch, useAppSelector} from '@redux/hooks';
import {cartSelector} from '@redux/slices/cartSlice';
interface ViewCartProps {}

const ViewCart: React.FC<ViewCartProps> = ({}) => {
  const {selectedItems} = useAppSelector(cartSelector);

  const items = selectedItems.items;
  const total = items
    .map(item => Number(item.price.replace('$', '')))
    .reduce((prev, curr) => prev + curr, 0);

  const totalUSD = total.toLocaleString('en', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <>
      {total ? (
        <View style={styles.container}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.buttonStyle}>
              <Text style={styles.textStyle}>View Cart {totalUSD}</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <></>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 60,
    zIndex: 999,
  },
  textStyle: {
    color: 'white',
    fontSize: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  buttonStyle: {
    marginTop: 20,
    backgroundColor: 'black',
    alignItems: 'center',
    padding: 13,
    borderRadius: 30,
    width: 300,
    position: 'relative',
  },
});

export default ViewCart;
