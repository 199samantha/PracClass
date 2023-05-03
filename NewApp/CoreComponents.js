import React from 'react';
import { View, Text, Image, ScrollView, TextInput } from 'react-native';

/* Here we take a look at some of the core components we can use */

export default function CoreComponents() {
  return (
    <ScrollView style={{margin: 80}}>
      <Text>Some text</Text>
      <View>
        <Text>Some more text</Text>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{ width: 200, height: 200 }}
        />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }}
        defaultValue="You can type in me"
      />
    </ScrollView>
  );
}