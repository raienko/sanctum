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

  _renderCell = (x, y) => {
    const id = `${x}_${y}`;
    const {active} = this.props;
    return <Cell key={id} x={x} y={y} active={(x + y) % 2} />;
  };

  render() {
    const {grid} = this.props;
    return (
      <View style={styles.wrapper}>
        {grid.map(y => y.map(x => this._renderCell(x, y)))}
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
});
