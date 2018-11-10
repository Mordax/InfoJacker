/*
  Code for the beginning arc

*/
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Alert, Image, AppRegistry, BackHandler, Animated, Easing } from 'react-native';

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

          <Button
              onPress={() => {
                this.props.navigation.navigate('Second')
              }}
            color="#7B8C93"
            title="->"
           />


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

      <Button
              onPress={() => {
                this.props.navigation.navigate('Third')
              }}
            color="#7B8C93"
            title="->"
           />

      </View>
    );
  }
}

export class arc2 extends React.Component {
  render(){
    return(
      <View style={styles.container}>

      <Image source={require('../img/jay.png')} style={{  height: 230}}/>

      <Text style={{color: '#fff', letterSpacing: 0.5 , margin: 20}}>
      I’m a pirate of knowledge. I believe information flows freely. That to stem information is to stem the wind that blows, the world that turns, the life that is born. 
      {"\n\n"}
      You may wonder how can you access information if it’s so bottled up and censored. Wretched humans always find a way to break open a door.
      {"\n\n"}
      Remember dear reader, the Internet is the great equalizer of mankind.
      </Text>

      <Button
          onPress={() => {
            this.props.navigation.navigate('Fourth')
          }}
          color="#7B8C93"
          title="->"
      />

      </View>
    );
  }
}

export class arc3 extends React.Component {
  render(){
    return(
      <View style={styles.container}>

      <Image source={require('../img/1.png')} style={{  height: 230}}/>

      <Text style={{color: '#fff', letterSpacing: 0.5 , margin: 20}}>
      ....
      {"\n\n"}
      You find yourself in a dilapidated hall.
      {"\n\n"}
      Which way do you wish to go?
      </Text>

      <Button
          onPress={() => {
            Alert.alert('Option 2');
          }}
          color="#7B8C93"
          title="Forward"
      />
      <Button
          onPress={() => {
            Alert.alert('Option 2');
          }}
          color="#7B8C93"
          title="Right"
      />

      </View>
    );
  }
}

