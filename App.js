import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Alert, Image, AppRegistry, BackHandler, Animated, Easing } from 'react-native';
import { createStackNavigator, NavigationActions, StackNavigator} from 'react-navigation';
import AwesomeButton from 'react-native-really-awesome-button';

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

      <AwesomeButton
          onPress={() => {
            this.props.navigation.navigate('First')
          }}
        backgroundColor="#7B8C93"
        backgroundDarker="#484848"
        width= {90}
        height={40}
        >
      START
      </AwesomeButton>

      <View>
        <AwesomeButton
            onPress={() => {
              Alert.alert('Option 2');
            }}
          backgroundColor="#7B8C93"
          backgroundDarker="#484848"
          width= {90}
          height={40}
          >
        SETTINGS
        </AwesomeButton>
      </View>

      </View>
    );
  }
}

// Where the beginner class was
// class button extends React.component{
//   render(){
//     return(
//       <AwesomeButton
//           onPress={() => {
//             Alert.alert('Option 2');
//           }}
//         backgroundColor="#7B8C93"
//         backgroundDarker="#484848"
//         width= {90}
//         height={40}
//         >
//       </AwesomeButton>
//     );
//   }
// }

// class Arc1 extends React.Component {
//   render(){
//     return(
//       <View style={styles.container}>
//
//       <Image source={require('./img/cyber.png')} style={{  height: 200}}/>
//
//       <Text style={{color: '#fff', letterSpacing: 0.5 , margin: 20}}>
//       Hi
//       </Text>
//
//       <AwesomeButton
//           onPress={() => {
//             Alert.alert('Option 2');
//           }}
//         backgroundColor="#7B8C93"
//         backgroundDarker="#484848"
//         width= {90}
//         height={40}
//         >
//       ->
//       </AwesomeButton>
//
//       </View>
//     );
//   }
// }


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
  Third: { screen: Begin.arc2 }
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
