import React, { Component } from 'react';
import { View, Text, CheckBox, AsyncStorage, ScrollView } from 'react-native';
import { CircularButton, Card, CardSection, Button, List } from './common';
import { ButtonGroup } from 'react-native-elements';
import { connect } from 'react-redux';
import { TodoLoadCompleteOnly, TodoComplete } from '../actions';

class CompletedTodo extends Component {
  state = {
    index: 1
  }

  onBottonPress() {
    this.props.navigation.navigate('Add');
  }

  componentDidMount() {
    this.props.TodoLoadCompleteOnly();
  }

  _onStatusChanged(idtodos, status) {
    const { token } = this.props; 
    this.props.TodoComplete(idtodos, token, status);
  }

  updateIndex = (index) => {
    this.setState({index})
    if (index === 0) {
      this.props.navigation.navigate('Main');
    }
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
    const buttons = ['Todo', 'Completed']
    return (
      <View style={{ flex: 1, padding: 4 }}>
        <ButtonGroup 
          selectedButtonStyle={{ backgroundColor: '#2196f3' }}
          selectedTextStyle={{ color: 'white' }}
          containerStyle={styles.ButtonGroupStyle} 
          selectedIndex={1}
          buttons={buttons} 
          onPress={ this.updateIndex}
          textStyle={{ color: '#000' }}
        />
        <ScrollView style={{ marginTop: 0 }}>
          {this._renderTodos()}
        </ScrollView>
        <CircularButton onPress={this.onBottonPress.bind(this)}>
          +
        </CircularButton>
      </View>
    );
  }
}

CompletedTodo.navigationOptions = {
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

const styles = {
  ButtonGroupStyle: {
    backgroundColor: '#fff', 
    width: '100%',
    marginLeft: 0,
    marginTop: 0,
    margingBottom: 0,
  }
}

const mapStatesToProps = state => {
  return {
    iduser: state.auth.iduser,
    uname: state.auth.uname,
    isLogged: state.auth.isLogged,
    token: state.auth.token,
    todoData: state.todo.todoData,
  };
};

export default connect(mapStatesToProps, { TodoLoadCompleteOnly, TodoComplete })(CompletedTodo);