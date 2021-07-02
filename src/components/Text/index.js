import React from 'react';
import {Text as RNText} from 'react-native';

export default function Text({text, value, children, ...rest}) {
  return (
    <RNText {...rest}>
      {text}
      {value}
      {children}
    </RNText>
  );
}
