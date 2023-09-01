import React from 'react'
import {StyleSheet, Text, View, Modal as NewModal, Button }from "react-native"

const Modal = ({modalVisible, onHandleDelete, onHandleCancel, selectedItemName}) => {

 

  return (
    <NewModal 
      visible={modalVisible}
      animationType="fade"
      transparent={true}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalTitle}>
            </View>
            <View style={styles.modalMessage}>
              <Text>Estas seguro que deseas eliminar {selectedItemName}?</Text>
            </View>
            <View style={styles.modalButton}>
            <Button title="Cancelar" 
              onPress={onHandleCancel} 
              color={"#a288a6"}/>
              <Button title="Borrar" 
              onPress={onHandleDelete} 
              color={"#a288a6"}/>
          
            </View>
          </View>
      </View>
      </NewModal>
  )

  
}

const styles = StyleSheet.create({
   modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
   },
   modalContent: {
    backgroundColor: "#f1e3e4",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
   },
   modalTitle: {
    color: "#fff",
    fontSize: 18,
   },
   modalMessage:{
    marginBottom: 15,
    justifyContent: "center",
    alignItems: "center",
   },
   modalButton: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between"
   },
  });

export default Modal