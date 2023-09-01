import React from 'react'
import { Button, StyleSheet, Text, TextInput, View} from 'react-native';

const Input = ({textValue, onHandleChangeItem, addItems, setItemList}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Shopping List</Text>
        <View style={styles.inputContainer}>
        <TextInput placeholder='Agregar nuevo elemento'
        style={styles.input}
        value={textValue}
        onChangeText={onHandleChangeItem}>
        </TextInput>
        <Button title= "+ ADD" color={"#a288a6"}
        onPress={addItems}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      paddingTop: 30,
      backgroundColor: "#f1e3e4"
    },
    title: {
      fontSize: 35,
      fontWeight: "bold",
      marginBottom: 25,
      color: "#a288a6"
    },
    inputContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: 'center',
      backgroundColor: "#fff",
      borderRadius: 10,
      marginBottom: 10,
    },
    input: {
      width: 200,
      height: 50,
      fontSize: 20,
      padding: 12,
    },
  });
  
export default Input

