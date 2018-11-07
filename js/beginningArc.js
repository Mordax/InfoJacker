/*
  Code for the beginning arc

*/
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Alert, Image, AppRegistry, BackHandler, Animated, Easing } from 'react-native';
import AwesomeButton from 'react-native-really-awesome-button';


import styles from '../styles/styles.js';

export class begin extends React.Component {

    render() {
      return (
        <View style={styles.container}>

        <Image source={require('../img/cyber.png')} style={{  height: 200}}/>

        <Text style={{color: '#fff', letterSpacing: 0.5 , margin: 20}}>
        The year is 2XXX. {"\n\n"}
        At the beginning of the century we had limitless access to any knowledge, useful,
        mundane, terrifying. {"\n\n"}
        But thanks to the centralization of information as well as the centralization of
        technology, it’s anything but limitless. {"\n\n"}
        Isn’t it ironic how humans always manage to squander the most precious of gifts? {"\n\n"}
        </Text>

          <AwesomeButton
              onPress={() => {
                this.props.navigation.navigate('Second')
              }}
            backgroundColor="#7B8C93"
            backgroundDarker="#484848"
            width= {90}
            height={40}
            >
            ->
          </AwesomeButton>


        </View>
      );
    }

}


export class arc1 extends React.Component {
  render(){
    return(
      <View style={styles.container}>

      <Image source={require('../img/cyber.png')} style={{  height: 200}}/>

      <Text style={{color: '#fff', letterSpacing: 0.5 , margin: 20}}>
      Where there’s hopelessness, there’s people willing to pay good money for hope.
      {"\n\n"}
      And that’s where I come in.
      {"\n\n"}
      </Text>

      <AwesomeButton
          onPress={() => {
            Alert.alert('Option 2');
          }}
        backgroundColor="#7B8C93"
        backgroundDarker="#484848"
        width= {90}
        height={40}
        >
        ->
      </AwesomeButton>

      </View>
    );
  }
}
