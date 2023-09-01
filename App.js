
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
    style={styles.itemContainer}
    onPress={() => onHandleModal(index)}
    > 
    <Text style={styles.TextItem}> {item.value} </Text>
    </TouchableOpacity>  
  )

  const onHandleDelete = () => {
    console.log(itemSelected)
    let arr = itemList
    arr.splice(itemSelected, 1)
    setItemList(arr)
    setModalVisible(false)
  }

  const onHandleCancel = () => {
    setModalVisible(false);
  }

  const onHandleModal = (index) => {
    console.log(index)
    setModalVisible(true)
    setItemSelected(index)
  }
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
    
      <View style={styles.listContainer}>
       <FlatList 
       data={itemList}
       renderItem={renderListItem}
       keyExtractor={item => item.id}
       />
      </View>

      <Modal modalVisible={modalVisible}
      onHandleDelete={onHandleDelete}
      onHandleCancel={onHandleCancel}
     />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    paddingTop: 80,
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
  },
  input: {
    width: 200,
    height: 50,
    fontSize: 20,
    padding: 12,
  },
  listContainer:{
    marginTop: 25
  },
  Text: {
    fontSize: 24,
  },
  itemContainer: {
    height: 40,
    marginVertical: 10,
    marginHorizontal: 5,
    borderRadius: 10,
    justifyContent: "center",
    backgroundColor: "#b75d69",
    shadowColor: "#1c1d21",
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },
  TextItem:{
    fontSize: 18,
    paddingLeft: 15,
    color: "#fff",
   fontWeight: "600",
   fontVariant: "no-common-ligtures"
  }
});

