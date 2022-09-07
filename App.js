import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

export default function App() {
  const [text, setText] = useState('');
  const [data, setData] = useState([]);

  const buttonAddPressed = () => {
    setData([...data, { key: text }]);
    setText('');
  }

  const buttonClearPressed = () => {
    setData ('');
    setText('');
  }

  return (
    <View style={styles.container}>
      
      <TextInput style={styles.input} onChangeText={text => setText(text)} value={text} />

      <View style={styles.operators}>
      <View style={styles.buttons}>
      <Button title="Add" onPress={buttonAddPressed} /></View>
      <View style={styles.buttons}>
      <Button title="Clear" onPress={buttonClearPressed} /></View>
      </View>

      <Text style={styles.header}>Shopping List</Text>
      <FlatList style={styles.list}
        data={data}
        renderItem={({ item }) =>
          <Text>{item.key}</Text>
        }
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  input: {
    marginTop: 50,
    marginBottom: 30,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1 
  },
  header: {
    marginTop: 30,
    marginBottom: 10,
    fontWeight: 'bold',
    color: 'blue'
  },
  buttons: {
    width: '20%',
    borderColor: 'black',
    borderWidth: 1,
    margin: 2,  
  },
  operators: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
 
});