import React from 'react';
import {View, StyleSheet} from 'react-native';

import BalancePanel from '../../Components/BalancePanel';
import EntrySummary from '../../Components/EntrySummary';
import EntryList from '../../Components/EntryList';

const Main = ( ) => {
return (
<View style={styles.container}>
 <BalancePanel></BalancePanel>
 <EntrySummary></EntrySummary>
 <EntryList></EntryList>
</View>
);
};

const styles = StyleSheet.create({
container: {
flex: 1,
padding: 10,
},
});

export default Main;