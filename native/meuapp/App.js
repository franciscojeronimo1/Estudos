import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',

    };

    this.pegaNome = this.pegaNome.bind(this)
  }
  pegaNome(texto) {
    this.setState({ nome: texto })
  }

  render() {
    return (
      <View style={styles.container}>

        <TextInput
          style={styles.input}
          placeholder={'Digite seu nome?'}
          onChangeText={this.pegaNome}
        />
        <Text style={styles.texto}>Bem Vindo {this.state.nome}</Text>
      </View >
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    marginTop: 50,
    fontSize: 20,
    padding: 10,
  },
  texto: {
    textAlign: 'center',
    fontSize: 25,
  }
})

export default App