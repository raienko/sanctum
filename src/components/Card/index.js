import React from 'react';
import {Animated, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

Card.propTypes = {
  style: PropTypes.any,
};

export default function Card({style, ...rest}) {
  return (
    <Animated.View
      style={StyleSheet.compose(styles.wrapper, style)}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#ccc',
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowColor: '#999',
    elevation: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
