import * as React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Dimensions, TouchableHighlight } from 'react-native';
import { Modal, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { TextInput } from 'react-native-gesture-handler';
import { Button } from '../components/Button';

import EditScreenInfo from '../components/EditScreenInfo';
import { Square } from '../components/Square';
import { Text, View } from '../components/Themed';
import { Pessoa } from '../types';

const { width } = Dimensions.get('window');

export default function TabOneScreen() {
  const [participantes, setParticipantes] = useState<Pessoa[]>([])
  const maxColumns = Math.floor(width / 110);
  var indexEdit : number;

  /**
   *  Buttons
   */

  const gera_cor = () => {
    var hexadecimais = '0123456789ABCDEF';
    var cor = '#';

    // Pega um número aleatório no array acima
    for (var i = 0; i < 6; i++) {
      //E concatena à variável cor
      cor += hexadecimais[Math.floor(Math.random() * 16)];
    }
    return cor;
  }

  const adicionarPessoa = () => {
    const pessoa = new Pessoa(0, gera_cor(), "");
    setParticipantes([...participantes, pessoa]);
  };


  const addScore = (i: number) => {
    let p = participantes
    p[i].count = p[i].count + 1
    setParticipantes([...p])
  }

  const changeName = (i: number) => {
    setModalVisible(true);
    setI(i);
    changeNome(participantes[i].name);
    changePedaco(participantes[i].count);
  }

  const [editando, setEditando] = useState(false)
  const editMode = () => {
    setEditando(!editando);
  }

  const botoes = [
    Button(editando ? "#6c757d" : "#28a745", "+", editando ? () => { } : adicionarPessoa),
    Button("#17a2b8", "Editar", editMode),
    Button(editando ? "#6c757d" : "#dc3545", "Zerar", editando ? () => { } : () => { setParticipantes([]) })
  ]

  const [modalVisible, setModalVisible] = useState(false)
  const [nome, changeNome] = useState<string>("");
  const [pedaco, changePedaco] = useState<number>(0);
  const [i_edit, setI] = useState<number>(-1)

  const finishEdition = () => {
    let p = participantes;
    p[i_edit].count = pedaco;
    p[i_edit].name = nome;
    setParticipantes([...p]);

    setModalVisible(false);
    setEditando(false)
  }


  return (
    <>

      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {}}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.row}>
              <Text style={styles.label}>
                Nome:
              </Text>
              <TextInput
                style={styles.textinput}
                onChangeText={text => changeNome(text)}
                value={nome}
              />
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>
                Quant:
              </Text>
              <TextInput
                style={styles.textinput}
                keyboardType={'numeric'}
                onChangeText={numeric => changePedaco(parseInt(numeric) | 0)}
                value={pedaco.toString()}
              />
            </View>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {finishEdition()}}
            >
              <Text style={styles.textStyle}>Confirmar</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
      <View style={styles.container}>
        <View style={[styles.container, styles.contentContainer]} >
          <FlatList
            data={botoes}
            style={styles.actions}
            contentContainerStyle={styles.listContainerAction}
            keyExtractor={(item, index) => index.toString()}
            horizontal={true}
            renderItem={({ item, index }) => item} />
          <FlatList
            style={styles.list}
            contentContainerStyle={styles.listContainer}
            data={participantes}
            keyExtractor={(item, index) => index.toString()}
            numColumns={maxColumns}
            renderItem={({ item, index }) => Square(item, () => { (editando) ? changeName(index) : addScore(index) })} />
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
  list: {
    width: '100%'
  },
  actions: {
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
  row: {
    flexDirection: 'row',
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
  textinput: {
    flex: 2,
    height: 40,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderColor: 'grey',
    backgroundColor: '#ffffff'
  }
});

