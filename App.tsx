import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  const [valor, setValor] = useState(0);

  function somar(){
    console.log("somou!");  
    setValor(valor + 1);
  }

  function subtrair(){
    console.log("subtraiu!");
    if(valor > 0){
      setValor(valor - 1);
    }else{
      alert("não há como diminuir o valor!");
    }
  }

  function resetar(){
    if(valor === 0){
      alert("não há como resetar um valor igual à 0")
    }
    setValor(0);
  }

  return (
    <View style={styles.container}>
      <Text>{valor}</Text>
      <Button title='Somar' onPress={somar} />
      <Button title='Subtrair' onPress={subtrair} />
      <Button title='Resetar' onPress={resetar} />
      <StatusBar style="auto" />
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
