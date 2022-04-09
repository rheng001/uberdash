import React, {useCallback, useMemo, useRef, useEffect} from 'react';
import {View, Text, StyleSheet, Button, Alert} from 'react-native';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {viewportWidth, viewportHeight} from '@common/styles';

const ModalBottomSheet = ({modalVisible}: any) => {
  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleCloseModalPress = useCallback(() => {
    bottomSheetModalRef.current?.close();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const openModal = () => {
    if (modalVisible) {
    }
  };

  useEffect(() => {
    if (modalVisible) {
      handlePresentModalPress();
      // Alert.alert('opened');
    } else {
      handleCloseModalPress();
      // Alert.alert('closed');
    }
  }, [modalVisible]);

  // renders
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <BottomSheetModalProvider>
        <View style={styles.container}>
          <Button
            onPress={handlePresentModalPress}
            title="Present Modal"
            color="black"
          />
          <Button
            onPress={handleCloseModalPress}
            title="Close Modal"
            color="black"
          />
          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={1}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}>
            <View style={styles.contentContainer}>
              <Text>Awesome 🎉</Text>
            </View>
          </BottomSheetModal>
        </View>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: 'gray',
    // position: 'absolute',
    // bottom: 150,
    position: 'relative',
    zIndex: 9999,
  },
  contentContainer: {
    // flex: 1,
    alignItems: 'center',
  },
});

export default ModalBottomSheet;
