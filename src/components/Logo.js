import React, { Component } from 'react';
import { Platform, View, StyleSheet, Text, Image } from 'react-native';



export default class Login extends Component  {
    render() {
      return (
          <View>
            <Image
          style={{width: 70, height: 70}}
          source={require('../images/Logo.png')}
        />
          </View>
      
        );
      }
    }