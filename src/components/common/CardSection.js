import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return (
    <View style={[styles.containerStyle, props.style]}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
    elevation: 0.5,
    shadowOffset: { width: 5, height: 2, },
    shadowColor: '#000',
    shadowOpacity: 1.0,
    marginTop: 3
  }
};

export { CardSection };
