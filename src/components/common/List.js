import React from 'react';
import { View, Text, CheckBox } from 'react-native';

const List = ({ children, check }) => {
  return (
    <View style={styles.listStyle}> 
      <Text style={styles.textStyle}>
        {children}
      </Text>
      <View style={styles.checkStyle}>
        {check}
      </View>
    </View>
  )
};

const styles = {
  listStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkStyle: { 
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  textStyle: {
    marginRight: 20
  }
};

export { List };