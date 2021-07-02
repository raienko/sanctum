import React from 'react';
import {StyleSheet, View} from 'react-native';
import Text from 'src/components/Text';
import navigation from 'src/navigation';

export default function Initial() {
  return (
    <View style={styles.wrapper}>
      <Text value="Initial" onPress={() => navigation.navigate('Home')} />
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
