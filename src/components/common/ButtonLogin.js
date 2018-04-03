import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const ButtonLogin = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#2196f3',
    fontSize: 18,
    fontWeight: '600',
    paddingTop: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    borderColor: '#2196f3',
    borderRadius: 5,
    elevation: 2,
    height: 50,
    borderWidth: 1,
  }
};

export { ButtonLogin };
