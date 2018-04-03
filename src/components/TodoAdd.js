import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Button, Card, CardSection, Input } from './common';
import { TodoChangeText, TodoAddText } from '../actions';

class TodoAdd extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerLeft: <Text onPress={() => navigation.navigate('Main')}> Back</Text>,
  })

  onTodoTextChanged(text) {
    this.props.TodoChangeText(text);
  }

  onButtonPress() {
    const { todoText, token, iduser } = this.props;
    this.props.TodoAddText(token, todoText, iduser);
  }

  render() {
    return (
      <View>
        <View style={Styles.containerStyle}>
          <Input 
            placeholder="Cook Eggs" 
            onChangeText={this.onTodoTextChanged.bind(this)} 
            value={this.props.todoText} />
        </View>
        <View style={Styles.containerStyle}>
          <Button onPress={this.onButtonPress.bind(this)}>
            Add Todo
          </Button>
        </View>
      </View>
    );
  }
}

const Styles = {
  containerStyle: {
    paddingLeft: 25,
    paddingRight: 25,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative',
    elevation: 0.5,
    marginTop: 10,
  },
}

const mapStateToProps = state => {
  return {
    todoText: state.todo.todoText,
    token: state.auth.token,
    iduser: state.auth.iduser,
  };
};

export default connect(mapStateToProps, { TodoChangeText, TodoAddText })(TodoAdd);