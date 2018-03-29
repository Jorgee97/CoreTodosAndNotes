import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { Card, CardSection, Input, Button, Spinner, Label } from './common';
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
    this.props.LoginUser({ email, password });
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
      <Button onPress={this.onBottonPress.bind(this)}>
        Login
      </Button>
    );
  }

  render() {
    return (
      <Card>
        <Text style={{
          alignSelf: 'center',
          fontSize: 30,
          color: '#000',
        }}>TODOS LOGO</Text>
        <CardSection>
          <Input
            placeholder="Email"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            placeholder="Password"
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
          />
        </CardSection>
        <CardSection>
          {this.renderError()}
        </CardSection>
        <CardSection>
          {this.renderButton()}
        </CardSection>
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
