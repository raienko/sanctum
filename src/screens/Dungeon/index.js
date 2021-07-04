import React from 'react';
import {StyleSheet, View} from 'react-native';
import Text from 'src/components/Text';
import navigation from 'src/navigation';
import SideScroller from './SideScroller';

import dungeon from './dungeon_0';

export default function Dungeon() {
  return (
    <View style={styles.wrapper} testID="dungeon_screen">
      <SideScroller level={dungeon}>
        <Text
          value="Dungeon"
          onPress={() => navigation.navigate('Battle')}
          testID="dungeon_text"
        />
      </SideScroller>
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
