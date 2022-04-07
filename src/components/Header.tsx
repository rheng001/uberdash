import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

interface HeaderProps {}

interface HeaderButtonProps {
  text: string;
  btnColor: string;
  textColor: string;
  activeTab: string;
  setActiveTab: (activeTab: string) => void;
}

const Header: React.FC<HeaderProps> = () => {
  const [activeTab, setActiveTab] = useState<string>('Delivery');
  return (
    <View style={styles.container}>
      <HeaderButton
        text={'Delivery'}
        btnColor="black"
        textColor="white"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        text={'Pickup'}
        btnColor="white"
        textColor="black"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
};

const HeaderButton = ({text, activeTab, setActiveTab}: HeaderButtonProps) => {
  return (
    <TouchableOpacity
      style={[text === activeTab ? styles.activeButton : styles.inActivebutton]}
      onPress={() => setActiveTab(text)}>
      <Text
        style={[text === activeTab ? styles.activeText : styles.inActiveText]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    marginHorizontal: 25,
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeButton: {
    backgroundColor: 'black',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 30,
    marginHorizontal: 15,
  },
  inActivebutton: {
    backgroundColor: 'white',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 30,
    marginHorizontal: 15,
  },
  activeText: {
    color: 'white',
    fontSize: 15,
    fontWeight: '900',
  },
  inActiveText: {
    color: 'black',
    fontSize: 15,
    fontWeight: '900',
  },
});
export default Header;
