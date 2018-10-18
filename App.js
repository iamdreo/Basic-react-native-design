import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createDrawerNavigator } from 'react-navigation'
import HomeScreen from './screens/HomeScreen'
import ScanScreen from './screens/ScanScreen'
import InvoiceScreen from './screens/InvoiceScreen'
import TaxScreen from './screens/TaxScreen'
import TransferScreen from './screens/TransferScreen'




export default class App extends React.Component {

  render() {
    return (
      <AppDrawerNavigator />
    );
  }
}

const AppDrawerNavigator = new createDrawerNavigator({

  HomeScreen: { screen: HomeScreen },
  ScanScreen: { screen: ScanScreen},
  InvoiceScreen: { screen: InvoiceScreen},
  TaxScreen: { screen: TaxScreen},
  TransferScreen: { screen: TransferScreen}
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
