import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import Header from './components/header';
import ListItem from './components/listItems';

const App = () => {

  const [items, setItems] = useState([
    { id: 1, text: 'Fool' },
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
          ({ item }) => <ListItem item={item} />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10
  }
});

export default App; 