import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    incomingMsgBox: {
        backgroundColor: '#82c98f',
        maxWidth: '70%',
        borderRadius: 10,
        padding: 5,
        alignSelf: 'flex-start',
        marginVertical: 5,
        marginHorizontal: 5
    },
    incomingMsgText: {
        color: 'white',
        fontSize: 16
    },
    sentMsgBox: {
        backgroundColor: '#6495ed',
        maxWidth: '70%',
        borderRadius: 10,
        padding: 5,
        alignSelf: 'flex-end',
        marginVertical: 5,
        marginHorizontal: 5
    },
    sentMsgText: {
        color: 'white',
        fontSize: 16
    },
    typeMsgContainer:{
        flexDirection:'row',
        marginHorizontal: 5,
    },
    typeMsgBox: {
        borderWidth: 0.8,
        borderColor: '#999',
        padding: 10,
        width:'80%',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10
    },
    sendButton: {
        width: '20%',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10
    },
    sendText: {
        color: 'white'
    }
})

export default styles;