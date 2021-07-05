import React from 'react';
import {TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

Touchable.propTypes = {
  onPress: PropTypes.func,
};

Touchable.defaultProps = {
  onPress: () => {},
};

export default function Touchable({onPress, ...rest}) {
  return (
    <TouchableOpacity
      {...rest}
      onPress={() => requestAnimationFrame(onPress)}
    />
  );
}
