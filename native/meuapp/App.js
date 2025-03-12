import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: 'Matheus'
    }
  }

  render() {
    return (
      <View style={{ marginTop: 30 }}>
        <Text style={{ fontSize: 23, color: 'red' }}>{this.state.nome}</Text>

      </View>
    )
  }
}



export default App