import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import { StyleSheet, Text, View, Image,TouchableHighlight } from 'react-native';
import SignUp from './screens/SignUp'



export default class HeaderIconExample extends Component {
  
  render() {
    return (
      <Container>
        <Header style={{backgroundColor: '#00bfff'}}>
          <Left>
            
          </Left>
          <Body>
            <Title style={styles.appName}>Mediplus</Title>
          </Body>
          <Right>
         
            <Button  transparent  onPress={() => this.props.navigation.navigate('SignUp')} >


              <Icon name='menu' />
            </Button>
         
        
          </Right>
        </Header>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  appName: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 15,
  },
});