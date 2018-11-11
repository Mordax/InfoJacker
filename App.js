import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Button, Alert, Image, AppRegistry, BackHandler, Animated, Easing } from 'react-native';
import { createStackNavigator, NavigationActions, StackNavigator} from 'react-navigation';

import styles from './styles/styles.js';
var Begin = require('./js/beginningArc.js');

class App extends React.Component {
  /* componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  handleBackButton() {
    return true;
  } */


  render() {

    return (
      <View style={styles.container}>

      <View>
        <Image source={require('./img/info.png')} style={{  height: 200 }}/>
      </View>
      
      <View style={{flexDirection: "row"}}>
        <Button 
            onPress={() => {
              this.props.navigation.navigate('First')
            }}
          color="#7B8C93"
          title="START"
          />
          <Button
              onPress={() => {
                Alert.alert('Image credits: Liam Reid and Greg Girard.');
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
  Second: { screen: Begin.barc1 },
  Third: { screen: Begin.barc2 },
  Fourth: {screen: Begin.barc3 },
  Fifth: {screen: Begin.barc4_1},
  Sixth: {screen: Begin.barc5_1},
  Seventh: {screen: Begin.barc6},
  Eighth: {screen: Begin.barc4_2},
  Ninth:{screen: Begin.barc4_3}
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
