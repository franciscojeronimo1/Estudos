import React, { Component } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native';

class App extends Component() {
  render() {
    return (
      <View style={styles.container}>

        <scrollView>
          <View style={styles.box1}></View>
          <View style={styles.box2}></View>
          <View style={styles.box3}></View>
          <View style={styles.box4}></View>
        </scrollView>

      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box1: {
    backgroundColor: 'red',
    height: 350,
  },
  box2: {
    backgroundColor: 'green',
    height: 350,
  },
  box3: {
    backgroundColor: 'yellow',
    height: 350,
  },
  box4: {
    backgroundColor: 'blue',
    height: 350,
  },
});

export default App;