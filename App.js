import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import Header from './components/Header';
import ListItem from './components/ListItems';
import AddItem from './components/AddItems';

const App = () => {

  const [items, setItems] = useState([
    { id: 1, text: 'Fool' },
    { id: 2, text: 'Eggs' },
    { id: 3, text: 'Breads' },
    { id: 4, text: 'Apples' },
  ]);

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  }

  return (
    <View style={styles.container}>
      <Header title='Shopping List' />
      <AddItem />
      <FlatList
        data={items}
        renderItem={
          ({ item }) => <ListItem item={item} deleteItem={deleteItem} />
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