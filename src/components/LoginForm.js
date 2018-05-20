import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Image, Keyboard } from 'react-native';
import { Card, CardSection, InputLogin, ButtonLogin, Spinner, Label } from './common';
import { LoginUser, emailChanged, passwordChanged } from '../actions';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onBottonPress() {
    const { email, password } = this.props;
    Keyboard.dismiss();
    this.props.LoginUser({ email, password });
  }

  _register() {
    // Handle navigation
    this.props.navigation.navigate('Register');
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
        Log in
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
        <View style={styles.footerStyle}>
          <Text>
            Don't have an account?<Text style={{ fontWeight: 'bold' }} onPress={this._register.bind(this)}> Sign Up</Text>
          </Text>
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
    error: state.auth.error,
    loading: state.auth.loading,
    isLogged: state.auth.isLoaded,
  };
};

LoginForm.navigationOptions = {
  title: 'Login',
  header: null,
  headerLeft: null,
  headerStyle: {
    backgroundColor: '#2196f3',
  },
  headerTitleStyle: {
    color: '#fff',
    textAlign: "center",
    flex: 1,
  },
};

export default connect(mapStateToProps, { LoginUser, passwordChanged, emailChanged })(LoginForm);
