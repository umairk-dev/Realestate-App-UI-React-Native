
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import BottomNav from './src/navigations/bottom-nav-component';

const App = () => {
  return (
      <NavigationContainer>
        <BottomNav/>
      </NavigationContainer>
  );
};

const styles = StyleSheet.create({
 
});

export default App;
