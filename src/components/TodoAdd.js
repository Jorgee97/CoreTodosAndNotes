import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Button, Card, CardSection, Input } from './common';
import { TodoChangeText, TodoAddText } from '../actions';

class TodoAdd extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerLeft: <Text onPress={() => navigation.navigate('Main')}> Back</Text>,
  });

  onTodoTextChanged(text) {
    this.props.TodoChangeText(text);
  }

  onButtonPress() {
    const { todoText, token, iduser } = this.props;
    if (todoText !== '')
      this.props.TodoAddText(token, todoText, iduser);
    else
      alert(`Ups! you forgot to write your todo, let's try again`);
  }

  render() {
    return (
      <ScrollView>
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
      </ScrollView>
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
