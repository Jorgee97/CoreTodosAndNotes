import React from 'react';
import { TextInput, View, Text } from 'react-native';

const InputLogin = ({ value, onChangeText, placeholder, secureTextEntry }) => {
  const { inputStyle, containerStyle } = styles;
  return (
    <View style={containerStyle}>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
        underlineColorAndroid='transparent'
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: '#000',
    fontSize: 18,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#bcbcbc',
    height: 50,
    flex: 1,
    backgroundColor: '#eeeeee',
  },
  containerStyle: {
    flexDirection: 'row',
    flex: 1,
  }
};

export { InputLogin };
