import React from 'react';
import {Animated, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {img} from 'rn-units';

Layer.propTypes = {
  source: PropTypes.any,
  style: PropTypes.any,
  progress: PropTypes.instanceOf(Animated.Value),
  multiplier: PropTypes.number,
};

export default function Layer({progress, multiplier, source, style, ...rest}) {
  if (!source) {
    return null;
  }
  const layerWidth = 300;

  const translateX = progress.interpolate({
    inputRange: [0, 100],
    outputRange: [0, -layerWidth * multiplier],
  });

  const offset = {
    transform: [{translateX}],
  };

  return (
    <Animated.Image
      source={img(source)}
      style={StyleSheet.compose([styles.wrapper, offset], style)}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    height: '100%',
  },
});
