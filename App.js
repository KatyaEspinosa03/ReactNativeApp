
import { Button, StyleSheet, Text, TextInput, View, FlatList, Modal } from 'react-native';
import React, {useState} from 'react';

export default function App() {

  const [textValue, setTextValue] = useState("")
  const [itemList, setItemList] = useState([])
  const [itemSelected, setItemSelected] = useState({})
  const [modalVisible, setModalVisible] = useState(false)

  const onHandleChangeItem = (text) =>  setTextValue(text)


  const addItems = () => {
    setItemList(prevState => [
      ...prevState, {id: Math.random(), value: textValue}
    ])
  }

  const renderListItem = ({ item }) => (
    <View syles={styles.TextContainer}> 
    <Text style={styles.Text}> {item.value} </Text>
    </View>  
  )

  const onHandleDelete = () => {

  }

  const onHandleModal = () => {

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

      <Modal 
      visible={modalVisible}
      animationType="fade"
      >
        <View style={styles.modalTitle}>
          <Text> Mi modal </Text>
        </View>
        <View style={styles.modalMessage}>
          <Text> Estás seguro que quieres eliminar</Text>
        </View>
        <View style={styles.modalButton}>
          <Button 
          title="confirmar"
          onPress={onHandleDelete}/>
        </View>
      </Modal>
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
  },
  modalTitle: {
    backgroundColor: "#ccc",
    color: "#fff",
    fontSize: 18,
    },
    modalMessage: {
      marginBottom: 15,
      justifyContent: "center",
      alignItems: "center"
    },
    modalButton: {
      marginTop: 15,

    }
});

