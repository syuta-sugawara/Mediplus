import React, { Component } from 'react';
import { View, TouchableHighlight, Text, StyleSheet } from 'react-native';
import {
  Container,
  Left,
  Body,
  Right,
  Title,
  Subtitle,
  Header,
  Button,
  Icon,
} from 'native-base';

export default class HomeScreen2 extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <Header style={{ backgroundColor: '#87cefa' }}>
          <Left>
            <Button transparent>
              <Icon
                name="arrow-back"
                style={{ color: 'white' }}
                onPress={() => this.props.navigation.navigate('Login')}
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

        <View
          style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={styles.messageText}>Translate Your Medical Records</Text>
          <Text style={styles.messageText}>Find Local Hospitals Abroad</Text>
        </View>

        <View style={{ flex: 4 }}>
          <View style={{ flex: 1, flexDirection: 'column' }}>
            <View style={styles.buttonBox}>
              <TouchableHighlight
                style={styles.button}
                onPress={() => this.props.navigation.navigate('Record')}>
                <Text style={styles.textStyle}>Prescription Record</Text>
              </TouchableHighlight>
            </View>

            <View style={styles.buttonBox}>
              <TouchableHighlight
                style={styles.button}
                onPress={() => this.props.navigation.navigate('MapView')}>
                <Text style={styles.textStyle}>Hospital Search & Review</Text>
              </TouchableHighlight>
            </View>

            <View style={styles.buttonBox}>
              <TouchableHighlight style={styles.button}>
                <Text style={styles.textStyle}>Life log</Text>
              </TouchableHighlight>
            </View>

            <View style={styles.buttonBox}>
              <TouchableHighlight style={styles.button}>
                <Text style={styles.textStyle}>Disease history</Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  messageText: {
    color: '#00bfff',
    fontSize: 25,
    margin: 10,
    fontWeight: '300',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  buttonBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#00bfff',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: 300,
    borderRadius: 10,
  },
  textStyle: {
    color: 'white',
    fontSize: 20,
  },
});
