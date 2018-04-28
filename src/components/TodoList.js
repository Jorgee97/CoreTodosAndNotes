import React, { Component } from 'react';
import { View, Text, AsyncStorage, ScrollView, Alert, TouchableOpacity, Image } from 'react-native';
import { CircularButton, Card, CardSection, Button, List } from './common';
import { ButtonGroup, CheckBox } from 'react-native-elements';
import { connect } from 'react-redux';
import { TodoLoad, TodoComplete, TodoDelete } from '../actions';

class TodoList extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'TodoList',
    headerStyle: {
      backgroundColor: '#2196f3',
    },
    headerTitleStyle: {
      color: '#fff',
      textAlign: 'center',
      marginLeft: 90,
    },
      headerLeft: <Text style={{color: '#fff' }} onPress={() => navigation.navigate('DrawerOpen')}> Menu</Text>,
  });
  
  state = {
    index: 0
  }

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

  updateIndex = (index) => {
    this.setState({index})
    if (index === 1) {
      this.props.navigation.navigate('Completed');
    }
    if (index === 2) {
      this.props.navigation.navigate('Notes');
    }
  }

  _deleteTodo(idtodos) {
    const { token } = this.props;
    Alert.alert(
      'Delete',
      'do you want to delete this item?',
      [
        { text: 'Cancel', onPress: () => { return }},
        { text: 'Yes', onPress: () => this.props.TodoDelete(idtodos, token)},
      ],
      { cancelable: false }
    );
  }

  _renderTodos() {
    let data = this.props.todoData;
    data = data.filter(item => item.completed !== true);
    return data.map(item => 
      <CardSection>
        <List 
          check={
            <CheckBox 
              size={22}
              checkedColor='#2196f3'
              checked={item.completed} 
              containerStyle={styles.CheckBoxStyle}
              onPress={() => this._onStatusChanged(item.idtodos, !item.completed)} 
            />
          }
          deleteOption={
            <TouchableOpacity style={styles.deleteStyle} onPress={() => this._deleteTodo(item.idtodos)}>
              <Image
                source={require('../img/trashx16.png')}
              />
            </TouchableOpacity>
          }
          >
          {item.text}
        </List>
      </CardSection>
    );
  }

  render() {
    const buttons = ['Active', 'Completed', 'Notes']
    return (
      <View style={{ flex: 1, padding: 4 }}>
        <ButtonGroup 
          selectedButtonStyle={{ backgroundColor: '#2196f3' }}
          selectedTextStyle={{ color: 'white' }}
          containerStyle={styles.ButtonGroupStyle} 
          selectedIndex={0}
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

const styles = {
  ButtonGroupStyle: {
    backgroundColor: '#fff', 
    width: '100%',
    marginLeft: 0,
    marginTop: 0,
    margingBottom: 0,
  }, 
  CheckBoxStyle: {
    backgroundColor: 'transparent', 
    borderColor: 'transparent', 
    height: 22,
    alignSelf: 'flex-end',
    marginRight: -10,
  },
  deleteStyle: {
    color: 'red',
    fontWeight: 'bold',
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

export default connect(mapStatesToProps, { TodoLoad, TodoComplete, TodoDelete })(TodoList);