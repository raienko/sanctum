import React from 'react';
import {View, StyleSheet} from 'react-native';
import Grid from 'src/components/Grid';
import PropTypes from 'prop-types';

GameBoard.propTypes = {};

GameBoard.defaultProps = {};

export default function GameBoard() {
  const grid = [
    [0, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 0, 1],
  ];
  return (
    <View style={styles.wrapper}>
      <Grid grid={grid} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: 200,
    height: 200,
    overflow: 'hidden',
    borderWidth: 2,
  },
});
