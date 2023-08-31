
import { Button, StyleSheet, Text, TextInput, View, FlatList, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';
import Modal from './components/Modal';

export default function App() {

  const [textValue, setTextValue] = useState("")
  const [itemList, setItemList] = useState([])
  const [itemSelected, setItemSelected] = useState()
  const [modalVisible, setModalVisible] = useState(false)

  const onHandleChangeItem = (text) =>  setTextValue(text)


  const addItems = () => {

    if (textValue === "") {
      return
    }
    setItemList(prevState => [
      ...prevState, {id: Math.random(), value: textValue}
    ])
    setTextValue("")
  }

  const renderListItem = ({ item, index }) => (
    <TouchableOpacity 
    style={styles.TextContainer}
    onPress={() => onHandleModal(index)}
    > 
    <Text style={styles.Text}> {item.value} </Text>
    </TouchableOpacity>  
  )

  const onHandleDelete = () => {
    console.log(itemSelected)
    let arr = itemList
    arr.splice(itemSelected, 1)
    setItemList(arr)
    setModalVisible(false)
  }

  const onHandleModal = (index) => {
    console.log(index)
    setModalVisible(true)
    setItemSelected(index)
  }
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='item de la lista'
        style={styles.input}
        value={textValue}
        onChangeText={onHandleChangeItem}>
        </TextInput>
        <Button title= "ADD" color={"#ff0000"}
        onPress={addItems}/>
      </View>
    
      <View style={styles.listContainer}>
       <FlatList 
       data={itemList}
       renderItem={renderListItem}
       keyExtractor={item => item.id}
       />
      </View>

      <Modal modalVisible={modalVisible}
      onHandleDelete={onHandleDelete}/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  input: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    width: 200,
    height: 50,
    fontSize: 20,
    padding: 10,
  },
  listContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderColor: "#ff0000",
    borderWidth: 2,
  },
  Text: {
    fontSize: 24,
  },

  TextContainer:{
    borderColor:"#ff0000",
    alignItems: "center",
    borderWidth: 2,
    marginVertical: 20,
    padding: 10,
    width: "100%",
  }
});

