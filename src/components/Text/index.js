import React from 'react';
import {Text as RNText} from 'react-native';
import PropTypes from 'prop-types';

Text.propTypes = {
  text: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.node,
};

export default function Text({text, value, children, ...rest}) {
  return (
    <RNText {...rest}>
      {text}
      {value}
      {children}
    </RNText>
  );
}
