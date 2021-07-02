import React from 'react';
import {StyleSheet, View} from 'react-native';
import Text from 'src/components/Text';
import navigation from 'src/navigation';

export default function Battle() {
  return (
    <View style={styles.wrapper}>
      <Text
        value="Battle"
        onPress={() => navigation.navigate('Settings')}
        testID="battle_screen"
      />
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
