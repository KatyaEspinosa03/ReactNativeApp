import React from 'react'
import {StyleSheet, Text, View, Modal as NewModal, Button }from "react-native"

const Modal = ({modalVisible, onHandleDelete}) => {
  return (
    <NewModal 
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
      </NewModal>
  )

  
}

const styles = StyleSheet.create({
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

export default Modal