import React, { Component } from 'react';
import { View, Text, ScrollView, Image, Alert, TouchableOpacity } from 'react-native';
import { CircularButton, CardSection, Button, List, Card } from './common';
import { ButtonGroup, CheckBox } from 'react-native-elements';
import { connect } from 'react-redux';
import { NoteList, NoteDelete, NoteChangeText, NoteChangeTitle, NoteIdNOte } from '../actions';

class NotesList extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Notes',
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
    index: 1
  }

  componentDidMount() {
    this.props.NoteList(this.props.token);
  }

  updateIndex = (index) => {
    this.setState({index})
    if (index === 0) {
      this.props.navigation.navigate('Main');
    }
    if (index === 1) this.props.navigation.navigate('Completed');
  }

  onBottonPress() {
    this.props.navigation.navigate('AddNote');
  }

  _deleteNote(idnotes) {
    const { token } = this.props;
    Alert.alert(
      'Delete',
      'do you want to delete this item?',
      [
        { text: 'Cancel', onPress: () => { return }},
        { text: 'Yes', onPress: () => this.props.NoteDelete(token, idnotes) },
      ],
      { cancelable: false }
    );
  }

  _editNote(idnotes, textNote, textTitle) {
    const { token, NoteChangeText, NoteChangeTitle, NoteIdNOte } = this.props;
    NoteChangeText(textNote);
    NoteChangeTitle(textTitle);
    NoteIdNOte(idnotes);
    this.props.navigation.navigate('EditNote');
  }

  _renderNotes() {
    return this.props.notesData.map(item =>
      <Card>
        <CardSection>
          <Text style={styles.textTitle}>{item.title}</Text>
          <TouchableOpacity style={styles.imgTrash} onPress={() => this._deleteNote(item.idnotes)}>
            <Image
              source={require('../img/trashx16.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.imgEdit} onPress={() => this._editNote(item.idnotes, item.text, item.title)}>
            <Image
              source={require('../img/edit.png')}
            />
          </TouchableOpacity>
        </CardSection>
        <CardSection>
          <Text style={styles.textNote}>{item.text}</Text>
        </CardSection>
      </Card>
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
          selectedIndex={2}
          buttons={buttons}
          onPress={ this.updateIndex }
          textStyle={{ color: '#000' }}
        />
        <ScrollView style={{ marginTop: -8 }}>
          {this._renderNotes()}
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
  deleteStyle: {
    color: 'red',
    fontWeight: 'bold',
  },
  textTitle: {
    fontWeight: 'bold',
    color: '#000',
    padding: 5,
  },
  textNote: {
    color: '#000',
    padding: 5,
  },
  imgTrash: {
    marginTop: 6,
    position: "absolute",
    right: 8
  },
  imgEdit: {
    marginTop: 6,
    position: 'absolute',
    right: 40
  }
};

const MapStatesToProps = state => {
  return {
    token: state.auth.token,
    notesData: state.notes.notesData,
    noteText: state.notes.noteText,
    noteTitle: state.notes.noteTitle,
  };
};

export default connect(MapStatesToProps, { NoteList, NoteDelete, NoteChangeText, NoteChangeTitle, NoteIdNOte })(NotesList);
