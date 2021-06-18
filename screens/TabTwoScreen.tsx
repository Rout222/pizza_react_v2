import * as React from 'react';
import { Text, View } from '../components/Themed';
import { Button, StyleSheet } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { FontAwesome } from '@expo/vector-icons';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre o Dev</Text>
      <Text style={styles.title}>Guilherme Magno</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <FontAwesome.Button name="linkedin" backgroundColor="#1da1f2" onPress={() => {
        WebBrowser.openBrowserAsync('https://www.linkedin.com/in/guilherme-magno-0b2601a3/')
      }}>
        Meu Linkedin
      </FontAwesome.Button>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <FontAwesome.Button name="github-square" backgroundColor="#1da1f2" onPress={() => {
        WebBrowser.openBrowserAsync('https://github.com/rout222')
      }}>
        Meu GitHub
      </FontAwesome.Button>

    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#FFFFFF"
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color : "#000000"
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  button: {
    marginVertical: 10,
  },
});
