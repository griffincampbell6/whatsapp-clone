import moment from 'moment';
import React from 'react';

import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { User } from "../../types"
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

export type ContactsListItemProps = {
    user: User;
}

const ContactsListItem = (props: ContactsListItemProps) => {

    const { user } = props;

    const navigation = useNavigation();

    const onClick = () => {
        
    }

    return (

        <TouchableWithoutFeedback onPress={onClick}>

            <View style={styles.container}>

                <View style={styles.leftContainer}>

                    <Image source={{ uri: user.imageUri }} style={styles.avatar} />

                    <View style={styles.midContainer}>
                        <Text style={styles.username} >{user.name}</Text>
                        <Text style={styles.status} >{user.status}</Text>
                    </View>

                </View>

            </View> 
        </TouchableWithoutFeedback>

        
    )
};

export default ContactsListItem;