import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  FlatList,
} from 'react-native';

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 130,
  },
});

const List = () => {
  const peopleArray = [
    { name: 'musab', age: 11 },
    { name: 'kahled', age: 51 },
    { name: 'omar', age: 61 },
    { name: 'mohamed', age: 22 },
    { name: 'sad', age: 61 },
  ];
  return (
    <>
      <FlatList
        data={peopleArray}
        renderItem={({ item }) => {
          return (
            <Text style={styles.textStyle}>
              my name is {item.name} and my age {item.age}
            </Text>
          );
        }}
        keyExtractor={(obj) => obj.name}
      />
    </>
  );
};

export default List;
