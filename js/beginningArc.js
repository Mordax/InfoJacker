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

        <Text style={styles.text}>
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

      <Text style={styles.text}>
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

      <Image source={require('../img/cyber.png')} style={{  height: 230}}/>

      <Text style={styles.text}>

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

      <Text style={styles.text}>
      ....
      {"\n\n"}
      You find yourself in a dilapidated hall.
      {"\n\n"}
      Which way do you wish to go?
      </Text>

      <Button
          onPress={() => {
            this.props.navigation.navigate('Fifth')
          }}
          color="#7B8C93"
          title="Forward"
      />
      <Button
          onPress={() => {
            Alert.alert('Not coded yet');
          }}
          color="#7B8C93"
          title="Right"
      />

      </View>
    );
  }
}

export class arc4_1 extends React.Component {
  render(){
    return(
      <View style={styles.container}>

      <Image source={require('../img/2.png')} style={{  height: 230}}/>

      <Text style={styles.text}>
      You continue along the dilapidated hallway.
      {"\n\n"}
      You hear a muffled conversation coming from one of the rooms.
      {"\n\n"}
     
      </Text>

      <Button
          onPress={() => {
            this.props.navigation.navigate('Sixth')
          }}
          color="#7B8C93"
          title="Listen in"
      />
      <Button
          onPress={() => {
            Alert.alert('Not coded yet');
          }}
          color="#7B8C93"
          title="Continue forward"
      />
      <Button
          onPress={() => {
            this.props.navigation.navigate('Fourth')
          }}
          color="#7B8C93"
          title="Go back"
      />

      </View>
    );
  }
}

export class arc5_1 extends React.Component {
  render(){
    return(
      <View style={styles.container}>

      <Image source={require('../img/2.png')} style={{  height: 230}}/>

      <Text style={styles.text}>
      You quietly approach the door and switch your recorder on.  
      {"\n\n"}
      Two people are arguing. A woman yells.
      {"\n\n"}
      "You're a goddamn prick, you know that?!
      You keep trying to give up our water resources 
      to those damn children and we'll be dead within three days!"
      {"\n\n"}
      "...We can't just do as they want and lose our humanity like they want us to."
      {"\n\n"}
      You hear a sound of something falling over and some crying.
      </Text>

      <Button
          onPress={() => {
            this.props.navigation.navigate('Seventh')
          }}
          color="#7B8C93"
          title="Right"
      />

      </View>
    );
  }
}

export class arc6 extends React.Component {
  render(){
    return(
      <View style={styles.container}>

      <Image source={require('../img/2.png')} style={{  height: 230}}/>

      <Text style={styles.text}>
      You've collected an Infoscrip. Infoscrips are collected data about people that can be sold, traded or used to exploit others. 
      {"\n\n"}
      The more metadata you gather on an Infoscrip, the more money and the more damage you can do. 
      {"\n\n"}
      You can access the Mesh to match photos, sound bites and other forms of data collection to real world people, events and other useful information.
      {"\n\n"}
      +1 Infoscrip
      </Text>

      <Button
          onPress={() => {
            Alert.alert('Not coded yet');
          }}
          color="#7B8C93"
          title="Continue"
      />

      </View>
    );
  }
}
