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
            title="Continue"
           />


        </View>
      );
    }

}


export class barc1 extends React.Component {
  render(){
    return(
      <View style={styles.container}>

      <Image source={require('../img/cyber.png')} style={{  height: 200}}/>

      <Text style={styles.text}>
      Where there’s hopelessness, there’s people willing to pay good money for hope.
      {"\n\n"}
      And that’s where the Infojackers come in.
      {"\n\n"}
      </Text>

      <Button
              onPress={() => {
                this.props.navigation.navigate('Third')
              }}
            color="#7B8C93"
            title="Continue"
           />

      </View>
    );
  }
}

export class barc2 extends React.Component {
  render(){
    return(
      <View style={styles.container}>

      <Image source={require('../img/infojacker.png')} style={{  height: 190, width: 350}}/>

      <Text style={styles.text}>

      Pirates of knowledge, they believe that information flows freely. That to stem information is to stem the wind that blows, the world that turns, the life that is born. 
      {"\n\n"}
      You may wonder how can they can access any information if it’s so bottled up and censored. Humans always find a way to break open a door.
      {"\n\n"}
      Remember dear reader, the Mesh is the great equalizer of mankind.
      </Text>

      <Button
          onPress={() => {
            this.props.navigation.navigate('Fourth')
          }}
          color="#7B8C93"
          title="Continue"
      />

      </View>
    );
  }
}

export class barc3 extends React.Component {
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
            this.props.navigation.navigate('Eighth')
          }}
          color="#7B8C93"
          title="Right"
      />

      </View>
    );
  }
}

export class barc4_1 extends React.Component {
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

export class barc5_1 extends React.Component {
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
          title="Continue"
      />

      </View>
    );
  }
}

export class barc6 extends React.Component {
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
        <Text style={{color: 'purple'}}>
        +1 Infoscrip
        </Text>
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

export class barc4_2 extends React.Component {
  render(){
    return(
      <View style={styles.container}>

      <Image source={require('../img/apart.png')} style={{ height: 230, width: 400}}/>

      <Text style={styles.text}>
      Your current abode.
      {"\n\n"}
      The only affordable place you could find.
      {"\n\n"}
      Thankfully your reputation precedes you and no one has tried breaking in yet.
      </Text>

      <Button
          onPress={() => {
            this.props.navigation.navigate('Ninth')
          }}
          color="#7B8C93"
          title="Continue"
      />

      </View>
    );
  }
}

export class barc4_3 extends React.Component {
  render(){
    return(
      <View style={styles.container}>

      <Image source={require('../img/corner.png')} style={{  height: 350, width: 400}}/>

      <Text style={styles.text}>
      Walking towards the corner of your room, you notice a vacuum tube deposit.
      {"\n\n"}
      Your organization has delivered you new instructions.
      {"\n\n"}
      'Clone an upper level key card. Reward: 10 c-chips.'
      </Text>

      <Button
          onPress={() => {
            Alert.alert('Not coded yet');
          }}
          color="#7B8C93"
          title="Leave"
      />

      </View>
    );
  }
}
