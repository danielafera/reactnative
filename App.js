import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Hello Word</Text>
      <Text style={styles.texto}>A Fera Está Na Área</Text>
      <Text style={styles.texto1}>Uma Hora Eu Aprendo!</Text>
      <Text style={styles.texto1}>gustavo paga a breja hoje ?</Text>
      
      <View>
      <TouchableOpacity style={styles.caixa}>
        <Button title='Sim' style={styles.botao}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.caixa}>
        <Button title='Não' style={styles.botao}/>
      </TouchableOpacity>
      </View>
      
      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color: '#fff',
    fontSize: 15 ,
  },
  texto1:{
    color: '#999',
    fontSize: 25,

  },
  caixa: {
    width: '100px',
    height: '150px'
  },
  botao: {
    width :'100px' ,
    height: '150px' ,

  } ,
  container2: {
    width:'300px' ,
    height:'300px' ,
    direction: 'column'
    }

});
