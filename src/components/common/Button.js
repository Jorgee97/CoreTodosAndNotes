import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
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
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 5
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    borderColor: '#2196f3',
    borderRadius: 2,
    elevation: 2,
    height: 30,
    borderWidth: 1,
    backgroundColor: '#2196f3',
  }
};

export { Button };
