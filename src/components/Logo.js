import React, { Component } from 'react';
import { Platform, View, StyleSheet, Text, Image } from 'react-native';



export default class Login extends Component  {
    render() {
      return (
          <View>
            <Image
          style={{width: 50, height: 50}}
          source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
        />
          </View>
      
        );
      }
    }