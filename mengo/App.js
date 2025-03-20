import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Image, ScrollView } from 'react-native';

const App = () => {
  // Função para exibir o alerta quando o botão for pressionado
  const alerta = () => {
    Alert.alert("Gol do Pedro / CR FLAMENGO!");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Nome do Jogador */}
      <Text style={styles.jogadorNome}>Pedro Guilherme</Text>

      {/* Informações do Jogador */}
      <Text style={styles.infoJogador}>Posição: Atacante</Text>
      <Text style={styles.infoJogador}>Idade: 27 anos</Text>
      <Text style={styles.infoJogador}>Nacionalidade: Brasileira</Text>
      <Text style={styles.infoJogador}>Clube: CR FLAMENGO</Text>
      <Text style={styles.infoJogador}>Número de gols: 135</Text>
      <Text style={styles.infoJogador}>Número de assistências: 30</Text>
      <Text style={styles.infoJogador}>Número de jogos: 263</Text>

      {/* Imagens */}
      <View style={styles.imagensContainer}>
        <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp6hUY1rDa0DtTDHiFy7MW8GbJpUToJib32w&s'}} style={styles.imagem} />
        <Image source={{uri: 'https://s2-ug.ap4r.com/image-aigc-article/seoPic/origin/b567a7ce4c0fb3d2b1a132c8efddb6fbb68be45d.jpg'}} style={styles.imagem} />
        <Image source={{uri: 'https://cloudfront-us-east-1.images.arcpublishing.com/estadao/TOW4EBW5YRD3NDQORY5BBVJWWI.jpg'}} style={styles.imagem} />
        <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcDLGf8rnDxPavFAZ2wwp0fyeg-_1T9Hn--g&s'}} style={styles.imagem} />
        <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo5ZKG9a41IG2ihJ3QZQUEcDcsGD9pdTACqg&s'}} style={styles.imagem} />
      </View>

      {/* Botão para chamar a função alerta */}
      <Button title="GOL" onPress={alerta} />
    </ScrollView>
  );
};

// Estilos personalizados
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgb(227, 19, 19)',
    alignItems: 'center',
  },
  jogadorNome: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  infoJogador: {
    fontSize: 18,
    color: '#blue',
    marginBottom: 10,
  },
  imagensContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
  imagem: {
    width: 100,
    height: 100,
    margin: 5,
    borderRadius: 8,
  },
});

export default App;
