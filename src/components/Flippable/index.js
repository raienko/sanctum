import React, {useRef} from 'react';
import {Easing, Animated, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

Flippable.propTypes = {
  flipped: PropTypes.bool,
  front: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  back: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  vertical: PropTypes.bool,
  register: PropTypes.func,
  duration: PropTypes.number,
};

Flippable.defaultProps = {
  register: () => {},
  front: () => null,
  back: () => null,
  duration: 300,
};

export default function Flippable({
  flipped,
  front,
  back,
  vertical,
  register,
  duration,
  ...rest
}) {
  const Front = front;
  const Back = back;

  const progress = useRef(new Animated.Value(flipped ? 1 : 0)).current;
  let animation = useRef().current;

  const stop = () => animation?.stop();

  const flip = toValue =>
    new Promise(resolve => {
      stop();
      animation = new Animated.timing(progress, {
        toValue: toValue ? 1 : 0,
        duration,
        useNativeDriver: true,
        easing: Easing.linear,
      });
      animation.start(resolve);
    });

  register({
    flip,
  });

  const flipStyle = isFront => {
    const rotation = progress.interpolate({
      inputRange: [0, 1],
      outputRange: isFront ? ['0deg', '180deg'] : ['180deg', '360deg'],
    });
    const direction = vertical ? 'rotateX' : 'rotateY';
    const perspective = 1200;
    const scale = progress.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [1, 1.1, 1],
      extrapolate: 'clamp',
    });

    return {
      transform: [{perspective}, {[direction]: rotation}, {scale}],
    };
  };

  return (
    <Animated.View {...rest}>
      <Animated.View style={[styles.back, flipStyle(false)]}>
        <Back />
      </Animated.View>
      <Animated.View style={[styles.front, flipStyle(true)]}>
        <Front />
      </Animated.View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  front: {
    backfaceVisibility: 'hidden',
  },
  back: {
    backfaceVisibility: 'hidden',
    position: 'absolute',
    top: 0,
  },
});
