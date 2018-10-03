import React, { Component } from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import {
  Container,
  Header,
  Left,
  Right,
  Button,
  Icon,
  Body,
  Title,
  Text,
} from 'native-base';
import RNImagePicker from 'react-native-image-picker';
import firebase from '../config/firebase';

export default class Add extends React.Component {
  state = {
    uri: '',
  };

  static navigationOptions = {
    header: null,
  };

  openPicker = () => {
    RNImagePicker.showImagePicker({}, res => {
      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else {
        let source = { uri: res.uri };
        this.setState(source);
      }
    });
  };

  upload = () => {
    firebase
      .storage()
      .ref('images/' + new Date().getTime())
      .putFile(this.state.uri, { contentType: 'image/jpeg' })
      .then(({ downloadURL }) =>
        firebase
          .database()
          .ref('images/' + new Date().getTime())
          .set({ downloadURL })
      )
      .then(e => {
        alert('Uploaded');
      })
      .catch(e => {
        alert('Error');
      });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Header style={{ backgroundColor: '#87cefa' }}>
            <Left>
              <Button transparent>
                <Icon
                  name="arrow-back"
                  style={{ color: 'white' }}
                  onPress={() => this.props.navigation.navigate('Record')}
                />
              </Button>
            </Left>
            <Body style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <Icon name="pulse" style={{ color: 'white' }} />
              <Title style={{ color: 'white' }}>Mediplus</Title>
            </Body>
            <Right>
              <Button transparent>
                <Icon name="menu" style={{ color: 'white' }} />
              </Button>
            </Right>
          </Header>
        </View>
        <View style={{ flex: 1 }}>
          <View style={styles.image}>
            <Image source={{ uri: this.state.uri }} style={styles.image} />
          </View>

          <View
            style={{
              flex: 1,
              position: 'relative',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View style={{ flex: 4 }}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => this.openPicker()}>
                <Text style={styles.textStyle}>take image</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button}>
                <Text style={styles.textStyle}>Recognition</Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                flex: 1,
                position: 'absolute',
                bottom: 0,
                width: '100%',
              }}>
              <Button full info onPress={() => this.upload()}>
                <Text>Add</Text>
              </Button>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    margin: 10,
    width: '100%',
    height: 200,
    backgroundColor: '#EEE',
  },

  button: {
    backgroundColor: '#00bfff',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: 300,
    borderRadius: 10,
    margin: 30,
  },
  textStyle: {
    color: 'white',
  },
});
