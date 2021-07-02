import React from 'react';
import {StyleSheet, View} from 'react-native';
import Text from 'src/components/Text';
import navigation from 'src/navigation';

export default function Initial() {
  return (
    <View style={styles.wrapper} testID="initial_screen">
      <Text
        value="Initial"
        testID="initial_text"
        onPress={() => navigation.navigate('Home')}
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
