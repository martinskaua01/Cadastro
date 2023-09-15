import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import Icon from 'react-native-vector-icons/FontAwesome';
import Iconn from 'react-native-vector-icons/Entypo';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';


export default function App() {

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastro de Usuário</Text>
       
      <View style={styles.containerInput}>
        <Icon name="user" size={20} color="black" />
        <TextInput
          style={styles.input}
          placeholder='Primeio Nome'
        />
      </View>
      <View style={styles.containerInput}>
        <Icon name="user" size={20} color="black" />
        <TextInput
          style={styles.input}
          placeholder='Sobrenome'
        />
      </View>
      <View style={styles.containerInput}>
        <Iconn name="email" size={20} color="black" />
        <TextInput
          style={styles.input}
          placeholder='E-mail'
        />
      </View>
      <View style={styles.containerInput}>
        <Icon name="unlock-alt" size={20} color="black" />
        <TextInput
          style={styles.input}
          placeholder='Senha'
          secureTextEntry
        />
      </View>
      <View style={styles.containerInput}>
        <Icon name="unlock-alt" size={20} color="black" />
        <TextInput
          style={styles.input}
          placeholder='Confirmar Senha'
          secureTextEntry
        />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          Cadastrar
        </Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    marginBottom: 40,
    marginTop: 40,
    fontWeight: "bold",
    fontSize: 30,
  },
  containerInput: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    borderBottomWidth: 1,
    padding: 10,
    marginLeft: 5
  },
  button: {
    backgroundColor: 'black',
    width: '30%',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});
