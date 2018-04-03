import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
  return (
    <View style={[styles.containerStyle, props.style]}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 0,
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
  }
};

export { Card };
