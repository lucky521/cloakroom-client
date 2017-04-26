import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
  Alert,
  StatusBar,
  Navigator
} from 'react-native';


export default class cloakroomclient extends Component {

  render() {

    let pic = {
      uri: 'http://localhost/image/restapi/get/977e65f6f1f429a201e05a7ccfe922ed'
    };

    const onPressLearnMore = () => {
        Alert.alert('Button has been pressed!');
    };

    return (
      <View>

      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Lucky React Native!
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <Image source={pic} style={{width: 193, height: 110}}/>
        <Button
          onPress={onPressLearnMore}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"/>
      </View>

        <ScrollView>
          <Text style={{fontSize:96}}>Scroll me plz</Text>
          <Image source={require('./image/favicon.png')} />
          <Image source={require('./image/favicon.png')} />
          <Image source={require('./image/favicon.png')} />
          <Image source={require('./image/favicon.png')} />
          <Image source={require('./image/favicon.png')} />
          <Text style={{fontSize:96}}>If you like</Text>
          <Image source={require('./image/favicon.png')} />
          <Image source={require('./image/favicon.png')} />
          <Image source={require('./image/favicon.png')} />
          <Image source={require('./image/favicon.png')} />
          <Image source={require('./image/favicon.png')} />
          <Text style={{fontSize:96}}>Scrolling down</Text>
          <Image source={require('./image/favicon.png')} />
          <Image source={require('./image/favicon.png')} />
          <Image source={require('./image/favicon.png')} />
          <Image source={require('./image/favicon.png')} />
          <Image source={require('./image/favicon.png')} />
          <Text style={{fontSize:96}}>What's the best</Text>
          <Image source={require('./image/favicon.png')} />
          <Image source={require('./image/favicon.png')} />
          <Image source={require('./image/favicon.png')} />
          <Image source={require('./image/favicon.png')} />
          <Image source={require('./image/favicon.png')} />
          <Text style={{fontSize:96}}>Framework around?</Text>
          <Image source={require('./image/favicon.png')} />
          <Image source={require('./image/favicon.png')} />
          <Image source={require('./image/favicon.png')} />
          <Image source={require('./image/favicon.png')} />
          <Image source={require('./image/favicon.png')} />
          <Text style={{fontSize:80}}>React Native</Text>
        </ScrollView>
        </View>
    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('cloakroomclient', () => cloakroomclient);
