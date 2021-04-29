import * as React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { View } from '../components/Themed';
import ContactsListItem from '../components/ContactsListItem';
import { API, graphqlOperation } from 'aws-amplify';
import NewMessageButton from '../components/NewMessageButton';
import { useEffect, useState } from 'react';

import { listUsers } from '../src/graphql/queries';

export default function ContactsScreen() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const userData = await API.graphql(
          graphqlOperation(
            listUsers
          )
        )
        setUsers(userData.data.listUsers.items)
      } catch(e) {
        console.log(e)
      }
    }
    fetchUsers();
  }, [])

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
