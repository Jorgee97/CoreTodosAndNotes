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
    const { todoText } = this.props;
    this.props.TodoAddText(todoText);
    this.props.navigation.navigate('Main');
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input 
            label="TODO" 
            placeholder="Cook Eggs" 
            onChangeText={this.onTodoTextChanged.bind(this)} 
            value={this.props.todoText} />
          <Button onPress={this.onButtonPress.bind(this)}>
            Add
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    todoText: state.todo.todoText,
  };
};

export default connect(mapStateToProps, { TodoChangeText, TodoAddText })(TodoAdd);