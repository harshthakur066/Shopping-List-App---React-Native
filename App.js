import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { uuid } from 'uuidv4';

import Header from './components/header';

const App = () => {

  const [items, setItems] = useState([
    { id: 1, text: 'Milk' },
    { id: 2, text: 'Eggs' },
    { id: 3, text: 'Breads' },
    { id: 4, text: 'Apples' },
  ])

  return (
    <View style={styles.container}>
      <Header title='Shopping List' />
      <FlatList
        data={items}
        renderItem={
          ({ item }) => <Text> {item.text} </Text>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60
  }
});

export default App; 