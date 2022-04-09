import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useAppSelector} from '@redux/hooks';
import {cartSelector} from '@redux/slices/cartSlice';
import LottieView from 'lottie-react-native';
import MenuItems from '@components/MenuItems';
import {ScrollView} from 'react-native-gesture-handler';

//lottieFiles

interface OrderScreenProps {}

const OrderScreen: React.FC<OrderScreenProps> = ({}) => {
  const {selectedItems} = useAppSelector(cartSelector);

  const items = selectedItems.items;
  const restaurantName = selectedItems.restaurantName;

  const total = items
    .map(item => Number(item.price.replace('$', '')))
    .reduce((prev, curr) => prev + curr, 0);

  const totalUSD = total.toLocaleString('en', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <View style={styles.container}>
      <LottieView
        source={require('../../assets/animations/check-mark.json')}
        style={{height: 100, alignSelf: 'center', marginBottom: 30}}
        autoPlay
        loop={false}
        speed={0.5}
      />
      <Text style={styles.text}>
        Your order at {restaurantName} has been placed for {totalUSD}
      </Text>
      <ScrollView>
        <MenuItems resturantName={restaurantName} hideCheckbox={true} />
        <LottieView
          source={require('../../assets/animations/cooking.json')}
          style={{height: 100, alignSelf: 'center', marginBottom: 30}}
          autoPlay
          speed={0.5}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    height: '100%',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    margin: 15,
  },
});

export default OrderScreen;
