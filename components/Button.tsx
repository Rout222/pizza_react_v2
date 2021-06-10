import React from 'react';

import { Text } from "react-native";
import { StyleSheet, TouchableOpacity } from "react-native";

export function Button(backgroundcolor: string, icon: string, callback: VoidFunction) {
    return <TouchableOpacity onPress={callback} style={[styles.button, {backgroundColor: backgroundcolor}]}>
        <Text style={styles.icon}>{icon}</Text>
    </TouchableOpacity>;
}
const styles = StyleSheet.create({
    button: {
        padding: 20,
        height: 100,
        width: 100,
        marginBottom: 10,
        justifyContent: 'center',
        borderRadius: 5,
    },
    icon: {
        textAlign: 'center',
        fontSize: 20,
        color: 'white',
    }
})