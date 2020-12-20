import React, {Fragment} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const Msg = ({incomingMsg, sentMsg, msg}) => {
    return (
        <Fragment>
            {/* Affichage utilisateur */}
            {incomingMsg && (
                <View style={styles.incomingMsgBox}>
                    <Text style={styles.incomingMsgText}>{msg}</Text>
                </View>
            )}

            {/* Affichage texte Bot */}
            {
                sentMsg && (
                    <View style={styles.sentMsgBox}>
                        <Text style={styles.sentMsgText}>{msg}</Text>
                    </View>
            )}

        </Fragment>
    )
}

export default Msg;