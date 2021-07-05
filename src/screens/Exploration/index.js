import React from 'react';
import {StyleSheet, View} from 'react-native';
import GameBoard from 'src/components/GameBoard';

export default function Exploration() {
  return (
    <View style={styles.wrapper} testID="exploration_screen">
      <GameBoard />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
