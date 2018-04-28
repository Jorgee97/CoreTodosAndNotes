import React from 'react';
import { TextInput, View, Text } from 'react-native';

const TextBox = ({ value, onChangeText, placeholder }) => {
  return (
    <View style={styles.containerStyle}>
      <TextInput
        multiline={true}
        numberOfLines={10}
        style={styles.textBoxStyle}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        underlineColorAndroid='transparent'
      />
    </View>
  );
};

const styles = {
  textBoxStyle: {
    color: '#000',
    fontSize: 16,
    borderColor: '#2196f3',
    borderWidth: 1,
    borderRadius: 2,
    textAlignVertical: 'top',
    flex: 1,
  },
  containerStyle: {
    flexDirection: 'row',
    padding: 5,
    flex: 1,
  }
};

export { TextBox }
