import React, { Component } from 'react';
import { View, Text, AsyncStorage, Image } from 'react-native';
import { connect } from 'react-redux';
import { logout } from '../actions';

class DrawerContainer extends Component {
  logoutPress() {
    this.getToken().done();
  }

  getToken = async () => {
    let token = await AsyncStorage.getItem('userToken');
    this.props.logout(token);
  }

  render () {
    const { navigation } = this.props;
    const { container, containerLogo, textStyle, logoStyle, footerStyle } = styles;
    return (
      <View>
        <View style={containerLogo}>
          <Image source={require('../img/CoreTodo.png')} style={logoStyle}/>
        </View>
        <Text
          style={textStyle}
          onPress={this.logoutPress.bind(this)}>
        Logout
        </Text>
        <Text
          style={textStyle}>
          Settings      
        </Text>
        <Text
          style={textStyle}>
          Get Premium        
        </Text>
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  containerLogo: {
    height: 180,
    backgroundColor: '#2696f3',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  textStyle: {
    color: '#000',
    fontSize: 14,
    paddingLeft: 20,
    paddingTop: 10,
  },
  logoStyle: { 
    width: 200, 
    height: 50,
    alignSelf: 'center', 
  },
}

export default connect(null, { logout })(DrawerContainer);