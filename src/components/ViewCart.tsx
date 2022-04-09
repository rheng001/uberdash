import React, {useState, useCallback, useMemo, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Modal,
} from 'react-native';
import {useAppSelector} from '@redux/hooks';
import {cartSelector} from '@redux/slices/cartSlice';
import ModalBottomSheet from '@components/ModalBottomSheet';
import {GestureHandlerRootView, ScrollView} from 'react-native-gesture-handler';
import {RootStackParams, RestaurantStackParams} from '@interfaces/interfaces';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import OrderItem from '@components/OrderItem';
// import firebase from '@helpers/firebase';
import {useNavigation} from '@react-navigation/native';

interface ViewCartProps {}

const ViewCart: React.FC<ViewCartProps> = ({}) => {
  const {selectedItems} = useAppSelector(cartSelector);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const items = selectedItems.items;
  const restaurantName = selectedItems.restaurantName;

  const total = items
    .map(item => Number(item.price.replace('$', '')))
    .reduce((prev, curr) => prev + curr, 0);

  const totalUSD = total.toLocaleString('en', {
    style: 'currency',
    currency: 'USD',
  });

  const addOrderToFirebase = () => {
    // const db = firebase.firestore();
    // db.collection('orders').add({
    //   items: items,
    //   restaurantName: restaurantName,
    //   createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    // });
    setModalVisible(false);
    navigation.navigate('HomeStack', {
      screen: 'Order',
    });
  };

  const checkoutModalContent = () => {
    return (
      <>
        <View style={styles.modalContainer}>
          <View style={styles.modalCheckoutContainer}>
            <Text style={styles.restaurantName}>{restaurantName}</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
              {items.map((item: any, index: number) => (
                <OrderItem key={index} item={item} />
              ))}
            </ScrollView>

            <View style={styles.subtotalContainer}>
              <Text style={styles.subtotalText}>Subtotal</Text>
              <Text style={{color: 'black'}}>{totalUSD}</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <TouchableOpacity
                style={{
                  marginTop: 20,
                  backgroundColor: 'black',
                  alignItems: 'center',
                  padding: 13,
                  borderRadius: 30,
                  width: 300,
                  position: 'relative',
                }}
                onPress={() => {
                  addOrderToFirebase();
                  // setModalVisible(false);
                }}>
                <Text style={{color: 'white', fontSize: 20}}>Checkout</Text>
                <Text
                  style={{
                    position: 'absolute',
                    right: 20,
                    color: 'white',
                    fontSize: 15,
                    top: 17,
                  }}>
                  {total ? totalUSD : ''}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </>
    );
  };

  return (
    <>
      {/* <ModalBottomSheet modalVisible={modalVisible} /> */}
      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}>
        {checkoutModalContent()}
      </Modal>
      {total ? (
        <View style={styles.container}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Text style={styles.textStyle}>View cart ({items.length})</Text>
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
    // zIndex: 999,
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
  //
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },

  modalCheckoutContainer: {
    backgroundColor: 'white',
    padding: 16,
    height: 500,
    borderWidth: 1,
  },

  restaurantName: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 18,
    marginBottom: 10,
  },

  subtotalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },

  subtotalText: {
    textAlign: 'left',
    fontWeight: '600',
    fontSize: 15,
    marginBottom: 10,
    color: 'black',
  },
});

export default ViewCart;
