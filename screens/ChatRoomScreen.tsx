import React from 'react';

import { FlatList, Text, ImageBackground } from 'react-native';
import { useRoute } from '@react-navigation/native';

import chatRoomData from '../data/Chats';
import ChatMessage from '../components/ChatMessage';
import InputBox from '../components/InputBox';
import BG from '../data/BG.png';

const ChatRoomScreen = () => {

    const route = useRoute();

    // console.log(route.params);

    return (
        <ImageBackground style={{width: '100%', height: '100%'}} source={BG}>
            <FlatList
                data={chatRoomData.messages}
                renderItem={({ item }) => <ChatMessage message={item} />}
                inverted
            />

            <InputBox />
        </ImageBackground>
    )
};

export default ChatRoomScreen;