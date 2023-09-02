import React from 'react'
import {Checkbox as PaperCheckbox} from "react-native-paper"
import {StyleSheet} from "react-native"

const Checkbox = ({checked, onToggle}) => {
  return (
    <PaperCheckbox
    style= {styles.checkbox}
    status={checked ? "checked": "unchecked"}
    onPress={onToggle}/>
  )
}

const styles = StyleSheet.create({
    checkbox:{   
        backgroundColor: "transparent",
        borderColor: "#fff",
        borderWidth: 2,
    }
})
export default Checkbox