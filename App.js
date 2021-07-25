import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import Calculadora from './src/components/Calculadora';
import Footer from './src/components/Footer';
import Header from './src/components/Header';
import { styles, styleStatus } from './style/style';


export default function App() {
  return (
      <SafeAreaView  style={styles.container}>
      <Header/>
        <Calculadora/>
      <Footer/>
    </SafeAreaView>
  );
}

