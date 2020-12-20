import React, { useState } from 'react';
import {View, Text, FlatList, TextInput, TouchableOpacity} from 'react-native';
import Msg from './msg';
import {data} from './data';
import styles from './styles';

let chats = [];

const ChatBot = () => {
    const [msg, setMsg] = useState('');
    const [chatListe, setChatList] = useState([]);
    const getAnswer = q => {
        {/* Boucle de récupération de réponse en fonction de la question posé */}
        for (let i = 0; i < data.length; i++) {
            if (data[i].question.includes(q.toLowerCase())) {
                chats = [...chats, {msg: data[i].answer, incomingMsg:true}];
                setChatList([...chats].reverse());
                return;
            }
        }
        chats = [
            ...chats,
            {msg: "Je n'ai pas compris votre question", incomingMsg:true}
        ];
        setChatList([...chats].reverse());
        return;
    };
    const onSendMsg = () => {
        chats = [...chats,{msg: msg, sentMsg : true}]
        setChatList([...chats].reverse());
        setTimeout(()=>{
            getAnswer(msg);
        }, 1000)
        setMsg('');
    }
    return (
        <View>
            <FlatList
            style={{height: '87%',bottom: '3%'}}
            data={chatListe}
            inverted={true}
            keyExtractor={(_,index)=>index.toString}
            renderItem={({item})=>(
                <Msg
                    incomingMsg={item.incomingMsg}
                    msg={item.msg}
                    sentMsg={item.sentMsg}
                />
            )}
            />

            <View style={styles.typeMsgContainer}>
                <TextInput
                    style={styles.typeMsgBox}
                    value={msg}
                    placeholder="Entrez votre message..."
                    onChangeText={val=>setMsg(val)}
                />
                <TouchableOpacity 
                    style={[styles.sendButton, {backgroundColor: msg ? '#6495ed' : 'grey'}]}
                    disabled={msg ? false : true}
                    onPress={()=>onSendMsg()}>
                    <Text style={styles.sendText}>Send</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ChatBot;