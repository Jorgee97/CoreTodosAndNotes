import React from 'react';
import { Text } from 'react-native';

const Label = ({label}) => {
  return (
    <Text style={styles.labelStyle}>
    {label}
    </Text>
  );
};

const styles = {
  labelStyle: {
    fontSize: 14,
    paddingTop: 8,
  }
};

export { Label };
