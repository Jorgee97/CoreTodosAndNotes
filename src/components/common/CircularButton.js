import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const CircularButton = ({ onPress, children }) => {
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
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  },
  buttonStyle: {
    alignItems:'flex-end',
    justifyContent:'center',
    width:56,
    height:56,
    backgroundColor:'#2196f3',
    borderRadius:100,
    position: 'absolute',
    bottom:10,
    right:10,
    elevation: 6,
  }
};

export { CircularButton };
