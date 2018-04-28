import React, { Component } from 'react';
import { View, Text, AsyncStorage, NetInfo } from 'react-native';
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
        <Text style={styles.logoStyle}>LOGO HERE</Text>
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
    backgroundColor: '#2196f3',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
};

Splash.navigationOptions = {
  header: null,
}

export default connect(null, { loginWithToken })(Splash);