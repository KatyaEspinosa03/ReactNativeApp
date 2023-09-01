
import { StyleSheet, Text, View, TouchableOpacity, Keyboard} from 'react-native';
import React, {useState} from 'react';
import Modal from './components/Modal';
import Input from './components/Input';
import Flatlist from './components/Flatlist';

export default function App() {

  const [textValue, setTextValue] = useState("")
  const [itemList, setItemList] = useState([])
  const [itemSelected, setItemSelected] = useState()
  const [modalVisible, setModalVisible] = useState(false)
  const [selectedItemName, setSelectedItemName] = useState("")

  const onHandleChangeItem = (text) =>  setTextValue(text)


  const addItems = () => {

    if (textValue === "") {
      return
    }
    setItemList(prevState => [
      ...prevState, {id: Math.random(), value: textValue}
    ])
    setTextValue("")
    Keyboard.dismiss()
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
    setSelectedItemName(itemList[index]?.value)

  }
  return (
    <View style={styles.container}>
    <View style={styles.inputContainer}>
    <Input textValue={textValue}
      onHandleChangeItem={onHandleChangeItem}
      addItems={addItems}
      setItemList={setItemList}/>
    </View>
     
    
      <View style={styles.listContainer}>
      <Flatlist itemList={itemList}
      renderListItem={renderListItem}/>

      </View>

      <Modal modalVisible={modalVisible}
      onHandleDelete={onHandleDelete}
      onHandleCancel={onHandleCancel}
      selectedItemName={selectedItemName}
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
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 10,
  },
  listContainer:{
    marginTop: 5,
  },
  Text: {
    fontSize: 24,
  },
  itemContainer: {
    flex: 1,
    height: 50,
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

