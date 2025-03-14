import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: ''
    }

    this.entrar = this.entrar.bind(this);
  }

  entrar(nome) {
    this.setState({
      nome: nome
    })
  }

  render() {
    return (
      <View style={{ marginTop: 30 }}>
        <Button title="Entrar" onPress={() => this.entrar('Matheus')} />
        <Text style={{ fontSize: 23, color: 'red', textAlign: 'center' }}>{this.state.nome}</Text>

      </View>
    )
  }
}



export default App