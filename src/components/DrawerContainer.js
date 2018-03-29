import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { logout } from '../actions';

class DrawerContainer extends Component {
  logoutPress() {
    alert("Hello?");
    this.getToken().done();
  }

  getToken = async () => {
    let token = await AsyncStorage.getItem('userToken');
    this.props.logout(token);
  }

  render () {
    const { navigation } = this.props;
    return (
      <View>
        <Text
          onPress={() => navigation.navigate('Main')}>
        List Todo
        </Text>
        <Text
          onPress={() => navigation.navigate('Add')}>
        Add Todo
        </Text>
        <Text
          onPress={this.logoutPress.bind(this)}>
        Logout
        </Text>
      </View>
    )
  }
}

export default connect(null, { logout })(DrawerContainer);