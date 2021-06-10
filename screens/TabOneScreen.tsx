import * as React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Dimensions, TouchableHighlight } from 'react-native';
import { Modal, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { TextInput } from 'react-native-gesture-handler';

import EditScreenInfo from '../components/EditScreenInfo';
import { Square } from '../components/Square';
import { Text, View } from '../components/Themed';
import { Pessoa } from '../types';

const { width } = Dimensions.get('window');

export default function TabOneScreen() {
  const [participantes, setParticipantes] = useState<Pessoa[]>([])
  const maxColumns = Math.floor(width / 110);
  let pessoa = new Pessoa(0, "#001155", "");

  useEffect(() => {
    setParticipantes([pessoa])
  }, []);
  

  const adicionarPedaco = (i: Pessoa) => {
    console.log(i);
  }

  return (
    <>
    <View style={styles.container}>
      <View style={styles.container} /*contentContainerStyle={styles.contentContainer}*/>
        {/* <FlatList 
          data={botoes} 
          style={styles.actions}
          contentContainerStyle={styles.listContainerAction}
          keyExtractor={(item, index) => index.toString()}
          horizontal={true}
          renderItem= { ({ item, index }) => item} /> */}
        <FlatList 
          style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={participantes} 
          keyExtractor={(item, index) => index.toString()}
          numColumns = {maxColumns}
          renderItem= { ({ item, index }) => Square(item, adicionarPedaco, index)} />
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'stretch',
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
  getStartedContainer: {
    width: '100%'
  },
  list :{
    width: '100%'
  },
  actions : {
    height: 120
  },
  listContainerAction: {
    justifyContent: 'space-around',
    flex: 1
  },
  listContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  row : {
    flexDirection : 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  label: {
    flex: 1,
    height: 40,
    fontSize: 20,
    alignContent: 'center',
    textAlign: 'center',
    lineHeight: 40,
    justifyContent: 'center',
  },
  textinput : {
    flex: 2,
    height: 40,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderColor: 'grey',
  }
});
