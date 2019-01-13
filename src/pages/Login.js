import React, { Component } from 'react';
import { Platform, View, StyleSheet, Text, StatusBar } from 'react-native';

import Logo from '../components/Logo';

export default class Login extends Component  {
    render() {
      return (
          <View style={styles.container}>
            <Logo/>
          </View>
      
        );
      }
    }

    const styles = StyleSheet.create({
      container : {
        backgroundColor : '#455a64',
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center',
      }
    });