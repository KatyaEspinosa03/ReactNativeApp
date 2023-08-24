import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='item de la lista'
        style={styles.input}>
        </TextInput>
        <Button title= "ADD" color={"#ff0000"}/>
      </View>
    
      <View style={styles.listContainer}>
        <View syles={styles.TextContainer}> 
          <Text style={styles.Text}> Item 1 </Text>
          </View>
        <View syles={styles.TextContainer}> 
          <Text style={styles.Text}> Item 2 </Text> 
          </View>
        <View syles={styles.TextContainer}>  
          <Text style={styles.Text}> Item 3 </Text> 
          </View>
      </View>

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
  },
  Text: {
    fontSize: 24,
  },

  TextContainer:{
    borderColor:"blue",
    alignItems: "center",
    borderWidth: 2,
    marginVertical: 20,
    padding: 10,
    width: "100%",
  }
});
