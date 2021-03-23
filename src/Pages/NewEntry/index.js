import React from 'react';
import { View, TextInput, Button, StyleSheet} from 'react-native';

import BalanceLabel from '../../Components/BalanceLabel';

const NewEntry = () => {
 return (
  <View style={styles.container}> 
 <BalanceLabel></BalanceLabel>
 <View>
  <TextInput style={styles.input}></TextInput>
  <TextInput style={styles.input}></TextInput>
  <Button title="GPS"/>
  <Button title="Camera"/>
 </View>
 <View>
 <Button title="Adicionar"/>
 <Button title="Cancelar"/>
 </View>
  </View>
 );
};

const styles = StyleSheet.create({
 container:{
  flex: 1,
  padding: 10,
 },
 input: {
  borderColor: '#000',
  borderWidth: 1,
 },
});

export default NewEntry; 