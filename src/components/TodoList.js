import React, { Component } from 'react';
import { View, Text, CheckBox, AsyncStorage, ScrollView } from 'react-native';
import { CircularButton, Card, CardSection, Button, List } from './common';
import { connect } from 'react-redux';
import { TodoLoad, TodoComplete } from '../actions';

class TodoList extends Component {
  onBottonPress() {
    this.props.navigation.navigate('Add');
  }

  componentDidMount() {
    this.props.TodoLoad(this.props.token);
  }

  _onStatusChanged(idtodos, status) {
    const { token } = this.props; 
    this.props.TodoComplete(idtodos, token, status);
  }

  _renderTodos() {
    let data = this.props.todoData;
    return data.map(item => 
      <CardSection>
        <List 
          check={
            <CheckBox 
              value={item.completed} 
              onChange={() => this._onStatusChanged(item.idtodos, !item.completed)} 
            />
          }>
          {item.text}
        </List>
      </CardSection>
    );
  }

  render() {
    return (
      <View style={{ flex: 1, padding: 5 }}>
        <ScrollView>
          {this._renderTodos()}
        </ScrollView>
        <CircularButton onPress={this.onBottonPress.bind(this)}>
          +
        </CircularButton>
      </View>
    );
  }
}

TodoList.navigationOptions = {
  title: 'TodoList',
  headerStyle: {
    backgroundColor: '#2196f3',
  },
  headerTitleStyle: {
    color: '#fff',
    textAlign: "center",
    flex: 1,
  },
  headerLeft: null,
};

const mapStatesToProps = state => {
  return {
    iduser: state.auth.iduser,
    uname: state.auth.uname,
    isLogged: state.auth.isLogged,
    token: state.auth.token,
    todoData: state.todo.todoData,
  };
};

export default connect(mapStatesToProps, { TodoLoad, TodoComplete })(TodoList);