import * as React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { View } from '../components/Themed';
import ContactsListItem from '../components/ContactsListItem';

import users from '../data/Users';
import NewMessageButton from '../components/NewMessageButton';

export default function ContactsScreen() {
  return (
    <View style={styles.container}>
      <FlatList 
        style={{width: "100%"}}
        data={users}
        renderItem={({ item }) => <ContactsListItem user={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
