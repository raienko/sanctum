import React, {PureComponent} from 'react';
import {View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import Cell from './Cell';

export default class Grid extends PureComponent {
  static propTypes = {
    grid: PropTypes.array,
    active: PropTypes.string,
  };

  static defaultProps = {
    grid: [],
    active: '',
  };

  constructor(props) {
    super(props);

    const {grid} = this.props;
    this.state = {
      cells: [],
    };

    grid.forEach((row, y) => {
      row.forEach((cell, x) => {
        this.state.cells.push({id: `${x}_${y}`, x, y});
      });
    });
  }

  _renderCell = ({x, y, id}) => {
    const {active} = this.props;
    return <Cell key={id} x={x} y={y} active={!!((x + y) % 2)} />;
  };

  render() {
    const {cells} = this.state;
    return <View style={styles.wrapper}>{cells.map(this._renderCell)}</View>;
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    borderWidth: 2,
    backgroundColor: 'yellow',
  },
});
