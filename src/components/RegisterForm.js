import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Image } from 'react-native';
import { Card, CardSection, InputLogin, ButtonLogin, Spinner, Label } from './common';
import { emailChanged, passwordChanged, unameChange, registerUser } from '../actions';

class RegisterForm extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerLeft: <Text onPress={() => navigation.navigate('Login')}> Back</Text>,
  });

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onUnameChange(text) {
    this.props.unameChange(text);
  }

  onBottonPress() {
    const { email, password, uname } = this.props;
    this.props.registerUser({ email, password, uname });
  }

  renderError() {
    if (this.props.error) {
      return (
        <View style={{ backgroundColor: 'white' }}>
          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>
        </View>
      );
    }
  }

  renderButton() {
    if (this.props.loading) {
      return (
        <Spinner size="large" />
      );
    }

    return (
      <ButtonLogin onPress={this.onBottonPress.bind(this)}>
        Sign up
      </ButtonLogin>
    );
  }

  render() {
    return (
      <Card>
        <View style={styles.imageStyle}>
          <Image source={require('../img/CoreTodo.png')} style={{ width: 200, height: 50 }}/>
        </View>
        <View style={styles.containerStyle}>
          <InputLogin
            placeholder="Username"
            onChangeText={this.onUnameChange.bind(this)}
            value={this.props.uname}
          />
        </View>
        <View style={styles.containerStyle}>
          <InputLogin
            placeholder="Email"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </View>
        <View style={styles.containerStyle}>
          <InputLogin
            secureTextEntry
            placeholder="Password"
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
          />
        </View>
        <View style={styles.containerStyle}>
          {this.renderError()}
        </View>
        <View style={styles.containerStyle}>
          {this.renderButton()}
        </View>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    color: 'red',
    fontSize: 16,
    alignSelf: 'center',
    paddingBottom: 8,
  },
  containerStyle: {
    paddingLeft: 25,
    paddingRight: 25,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative',
    elevation: 0.5,
    marginTop: 10,
  },
  footerStyle: {
    borderTopWidth: 1,
    borderTopColor: '#bcbcbc',
    backgroundColor: '#eeeeee',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    padding: 15,
  },
  imageStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  }
};

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    uname: state.auth.uname,
    loading: state.auth.loading,
    info: state.auth.info,
  };
};


export default connect(mapStateToProps, { passwordChanged, emailChanged, unameChange, registerUser })(RegisterForm);
