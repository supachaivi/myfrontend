import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  ImageBackground
} from 'react-native';
import imageLogo from "./src/111111.png";
export default class LoginView extends Component {

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('./src/lobster-(1).png')}  style={styles.backgroundImage}>
        <Image source={imageLogo} style={styles.logo} />
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  logo: {
    flex: 0.55,
    width: "70%",
    resizeMode: "contain",
    alignSelf: "center"
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    resizeMode: 'stretch',
  }
});
