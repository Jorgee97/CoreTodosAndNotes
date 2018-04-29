import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Button, Input, TextBox } from './common';
import { connect } from 'react-redux';
import { NoteChangeText, NoteChangeTitle, NoteCreateNote  } from '../actions';

class NotesAdd extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerLeft: <Text onPress={() => navigation.navigate('Notes')}> Back</Text>,
  });

  onTitleChange(text) {
    this.props.NoteChangeTitle(text);
  };

  onTextChange(text){
    this.props.NoteChangeText(text);
  }

  onButtonPress() {
    const { noteText, noteTitle, token } = this.props;
    if (noteText !== '')
      this.props.NoteCreateNote(token, noteTitle, noteText);
    else
      alert(`Ups! you forgot to write your note, let's try again`);
  }

  render() {
    return (
      <ScrollView>
        <View style={Styles.containerStyle}>
          <Input
            placeholder="Title"
            onChangeText={this.onTitleChange.bind(this)}
            value={this.props.noteTitle} />
        </View>
        <View style={Styles.containerStyle}>
          <TextBox
            placeholder="Note"
            onChangeText={this.onTextChange.bind(this)}
            value={this.props.noteText}
          />
        </View>
        <View style={Styles.containerStyle}>
          <Button onPress={this.onButtonPress.bind(this)}>
            Add Note
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

const MapStatesToProps = state => {
  return {
    token: state.auth.token,
    notesData: state.notes.notesData,
    noteText: state.notes.noteText,
    noteTitle: state.notes.noteTitle,
  };
};

export default connect(MapStatesToProps, { NoteChangeText, NoteChangeTitle, NoteCreateNote })(NotesAdd);
