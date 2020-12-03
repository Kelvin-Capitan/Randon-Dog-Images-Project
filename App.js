import { Text, View, StyleSheet, FlatList, Image, SafeAreaView,TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import React, { Component } from 'react'

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { uri: 'https://images.dog.ceo/breeds/lhasa/n02098413_10590.jpg' }
  }
  render() {
      return (
        <View style={styles.container}>
        <Image
            source={this.state.uri}
            style={styles.image}
            />
          <TouchableOpacity
          style={{
                flex: 'row',
                alignSelf: 'center',
                }}
         onPress={this.LoadNewImage}
        >
         <Text>Carregar mais imagens</Text>
        </TouchableOpacity>
        </View>
      )
    }
}

function LoadNewImage(){
  return(
    getDogsFromApi
  );
}

const getDogsFromApi = () => {
  return fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => response.json())
    .then((json) => {
        this.setState({ uri: json.message });
      })
    .catch((error) => {
      console.error(error);
    });
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  image: {
    width: '100%',
    height: 250,
    resizeMode:'contain',
    justifyContent:'center'
  },
});

export default App;
