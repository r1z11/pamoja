import React from 'react';
import { Text } from 'react-native';

export function MonoText(props) {
  return (
    <Text {...props} style={[{ fontFamily: 'space-mono' }]} />
  );
}
