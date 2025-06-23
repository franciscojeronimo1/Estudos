import {View, Text, Button} from 'react-native'
import React, {Component} from 'react'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      nome: ''
    }
    this.entrar = this.entrar.bind(this)
  }
  
  entrar(nome) {
    this.setState({
      nome: nome
    })
  }
  
  render(){

   
    return(
      <View style={{backgroundColor: 'white', height: '100%', marginTop:30}}>
        <Button title='Entrar' onPress={ () => this.entrar('Francisco')}/>
        <Text style={{fontSize:23, color:'red', textAlign: 'center'}}> 
          {this.state.nome}
          </Text>

      </View>
    )
  }


}  

export default App