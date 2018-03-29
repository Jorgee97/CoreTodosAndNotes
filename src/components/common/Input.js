import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ value, onChangeText, placeholder, secureTextEntry }) => {
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
        underlineColorAndroid='#2196f3'
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: '#000',
    fontSize: 18,
    lineHeight: 23,
    flex: 1,
  },
  containerStyle: {
    flexDirection: 'row',
    flex: 1,
  }
};

export { Input };
