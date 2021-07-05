import React from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet} from 'react-native';
import grid from 'src/constants/grid';

export default class Cell extends React.PureComponent {
  static propTypes = {
    x: PropTypes.number,
    y: PropTypes.number,
    active: PropTypes.bool,
  };

  static defaultProps = {
    x: 0,
    y: 0,
    active: false,
  };

  render() {
    const {x, y, active} = this.props;
    const cell = grid[y][x];

    if (!cell) {
      return null;
    }

    const position = {
      left: cell.x1,
      bottom: cell.y1,
      width: cell.width,
      height: cell.height,
    };

    return <View style={[styles.wrapper, active && styles.active, position]} />;
  }
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    backgroundColor: 'green',
    borderWidth: 1,
  },
  active: {
    backgroundColor: 'orange',
  },
});
