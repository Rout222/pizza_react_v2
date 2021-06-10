import * as React from 'react';

import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Pessoa } from '../types';

export function Square(pessoa: Pessoa, callback: Function, index: number) {
    const avatar = <Image source={{ uri: `https://avatars.dicebear.com/api/human/${index.toString()}.svg` }} style={styles.image} />;
    let name = <Text adjustsFontSizeToFit style={styles.number}>{pessoa.name}</Text>
    console.log(pessoa);
    return <TouchableOpacity onPress={() => callback(index)}>
        <View style={[styles.qd, {backgroundColor: pessoa.color}]}>
            {(!!pessoa.name && pessoa.name.length) > 0 ? name : <></>}
            {avatar}
            <Text style={styles.text}>{pessoa.count}</Text>
        </View>
    </TouchableOpacity>;
}

const styles = StyleSheet.create({
    number: {
        fontSize: 9,
        textAlign: 'center',
        width: '100%',
        borderRadius: 5,
        borderColor: 'grey',
        backgroundColor: 'white',
        borderWidth: 1,
    },
    qd: {
        padding: 20,
        height: 100,
        width: 100,
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 5,
        marginRight: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    text: {
        textAlign: 'center',
        fontSize: 20,
        backgroundColor: 'white',
        borderColor: 'grey',
        borderRadius: 10,
        borderWidth: 1,
        width: '100%',
        color: 'black',
    },
    image: {
        height: 40,
        width: 40,
        borderRadius: 5,
        justifyContent: 'center',
        borderColor: 'grey',
        backgroundColor: 'white',
        borderWidth: 1,
    }
})