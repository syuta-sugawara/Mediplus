import React, { Component } from 'react';
import {
  Container,
  Header,
  Left,
  Right,
  Button,
  Icon,
  Body,
  Title,
  Content,
  Thumbnail,
  H1,
  Card,
  CardItem,
} from 'native-base';

export default class AppHeader extends Component {
  render() {
    return (
      <Header style={{ backgroundColor: '#87cefa' }}>
        <Left>
          <Button transparent>
            <Icon
              name="arrow-back"
              style={{ color: 'white' }}
              onPress={() => this.props.navigation.navigate('Home')}
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
    );
  }
}
