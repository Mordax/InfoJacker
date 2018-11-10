import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Button, Alert, Image, AppRegistry, BackHandler, Animated, Easing } from 'react-native';
import { createStackNavigator, NavigationActions, StackNavigator} from 'react-navigation';

import styles from './styles/styles.js';
var Begin = require('./js/beginningArc.js');

//I'll use this as a starting page
class App extends React.Component {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  handleBackButton() {
    return true;
  }


  render() {

    return (
      <View style={styles.container}>

      <View>
        <Image source={require('./img/info.png')} style={{  height: 200 }}/>
      </View>

      <View>
        <Text style={{color: '#fff'}}>
          Infojacker
        </Text>
      </View>

      <Button
          onPress={() => {
            this.props.navigation.navigate('First')
          }}
        color="#7B8C93"
        title="START"
        />

      <View>
        <Button
            onPress={() => {
              Alert.alert('Option 2');
            }}
          color="#7B8C93"
          title="SETTINGS"
          />
      </View>

      </View>
    );
  }
}

export default class Home extends React.Component{
  render(){
    return <RootStack />;
  }
}


const RootStack = createStackNavigator(
  {
  Home: App,
  First: { screen: Begin.begin },
  Second: { screen: Begin.arc1 },
  Third: { screen: Begin.arc2 },
  Fourth: {screen: Begin.arc3 },
  Fifth: {screen: Begin.arc4_1},
  Sixth: {screen: Begin.arc5_1},
  Seventh: {screen: Begin.arc6}
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerLeft: null,
      header: null,
    },
    transitionConfig : () => ({
  	transitionSpec: {
  		duration: 0,
  		timing: Animated.timing,
  		easing: Easing.step0,
  	},
  }),
  }
);
