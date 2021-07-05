import React, {PureComponent} from 'react';
import {View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import Cell from './Cell';

export default class Grid extends PureComponent {
  static propTypes = {
    grid: PropTypes.array,
    children: PropTypes.node,
  };

  static defaultProps = {
    grid: [],
    children: null,
  };

  _renderCell = (x, y) => {
    const id = `${x}_${y}`;
    return <Cell key={id} x={x} y={y} active={(x + y) % 2} />;
  };

  render() {
    const {grid, children} = this.props;
    return (
      <View style={styles.wrapper}>
        {grid.map(y => y.map(x => this._renderCell(x, y)))}
        {children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    borderWidth: 2,
    backgroundColor: 'yellow',
  },
  cell: {
    position: 'absolute',
    backgroundColor: 'green',
    borderWidth: 1,
  },
  active: {
    backgroundColor: 'orange',
  },
});
