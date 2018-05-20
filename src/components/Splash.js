import React, { Component } from 'react';
import { View, Text, AsyncStorage, NetInfo, Image } from 'react-native';
import { loginWithToken } from '../actions';
import { connect } from 'react-redux';

class Splash extends Component {
  componentDidMount() {
    this.getToken().done();
  }

  getToken = async () => {
    let token = await AsyncStorage.getItem('userToken');
    if (token === null)
      this.props.navigation.navigate('Login');
    else {
      this.props.loginWithToken(token);
    }
  }

  render() {
    return (
      <View style={styles.screenStyle}>
        <Image
          style={styles.imageStyle}
          source={require('../img/icono_aplicacion.png')}
         />
      </View>
    );
  }
}

const styles = {
  logoStyle: {
    fontSize: 40,
    color: '#fff',
  },
  screenStyle: {
    backgroundColor: '#00687c',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    height: 256,
    width: 256
  }
};

Splash.navigationOptions = {
  header: null,
}

export default connect(null, { loginWithToken })(Splash);