import React from 'react';
import { View, Picker, Button} from 'react-native';

import EntryLabel from '../../Components/BalanceLabel';
import EntrySummary from '../../Components/EntrySummary';
import EntryList from '../../Components/EntryList';

const Report = () => {
 return (
  <View>
  
  <EntryLabel></EntryLabel>
  <View>
   <Picker>
    <Picker.Item label="Todas Categorias"></Picker.Item>
   </Picker>
   <Picker>
    <Picker.Item label="Últimos 7 dias"></Picker.Item>
   </Picker>
  </View>
  <EntrySummary></EntrySummary>
  <EntryList></EntryList>
  <View>
  <Button title="Salvar"/>
  <Button title="Fechar"/>
 </View>
  </View>
 );
};


export default Report;  