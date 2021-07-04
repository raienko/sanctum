import React, {useEffect, useRef} from 'react';
import {Animated, View, StyleSheet, Easing} from 'react-native';
import PropTypes from 'prop-types';
import {rem} from 'rn-units';
import Layer from '../Layer';

SideScroller.propTypes = {
  level: PropTypes.object.isRequired,
  children: PropTypes.node,
};

export default function SideScroller({level, children}) {
  const progress = useRef(new Animated.Value(0)).current;
  let animation = useRef().current;

  useEffect(() => {
    setTimeout(() => move(100, 5000), 100);
  }, []);

  const stop = () => animation?.stop();

  const move = (toValue, duration) =>
    new Promise(resolve => {
      stop();
      animation = Animated.timing(progress, {
        toValue,
        duration,
        easing: Easing.linear,
        useNativeDriver: true,
      });

      animation.start(resolve);
    });

  return (
    <View style={styles.wrapper}>
      <Layer
        progress={progress}
        multiplier={0.1}
        source={level?.sky}
        style={styles.sky}
      />
      <Layer
        progress={progress}
        multiplier={0.3}
        source={level?.background}
        style={styles.background}
      />
      <Layer
        progress={progress}
        multiplier={0.5}
        source={level?.middleground}
        style={styles.middleground}
      />
      <Layer
        progress={progress}
        multiplier={1}
        source={level?.ground}
        style={styles.ground}
      />
      <View style={styles.container}>{children}</View>
      <Layer
        progress={progress}
        multiplier={1.3}
        source={level?.foreground}
        style={styles.foreground}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
  container: {
    position: 'absolute',
    top: '50%',
    left: '30%',
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
  sky: {},
  background: {
    bottom: rem(150),
  },
  middleground: {
    bottom: rem(100),
  },
  ground: {
    bottom: rem(50),
  },
  foreground: {
    bottom: 0,
  },
});
