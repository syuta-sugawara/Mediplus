import React, { Component } from 'react';
import { View, TouchableHighlight, Text, StyleSheet } from 'react-native';
import {
  Container,
  Left,
  Body,
  Right,
  H1,
  Icon,
  Content,
  Button,
} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <Container style={{ backgroundColor: '#87cefa' }}>
        <Grid>
          <Row
            style={{
              height: '20%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Content style={{ justifyContent: 'center', alignItems: 'center' }}>
              <H1 style={{ color: 'white' }}>Mediplus</H1>
            </Content>
          </Row>
          <Row style={{ height: '20%' }}>
            <Content style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Button
                large
                onPress={() => this.props.navigation.navigate('Record')}
                style={{
                  borderRadius: 25,
                  width: 250,
                  justifyContent: 'center',
                }}>
                <Icon name="clipboard" />
                <Text style={{ color: 'white' }}>Prescription Record</Text>
              </Button>
            </Content>
          </Row>
          <Row style={{ height: '20%' }}>
            <Content style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Button
                large
                style={{
                  borderRadius: 25,
                  width: 250,
                  justifyContent: 'center',
                }}
                onPress={() => this.props.navigation.navigate('MapView')}>
                <Icon name="medkit" />
                <Text style={{ color: 'white' }}>Hospital Search</Text>
              </Button>
            </Content>
          </Row>
          <Row style={{ height: '20%' }}>
            <Content style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Button
                large
                style={{
                  borderRadius: 25,
                  width: 250,
                  justifyContent: 'center',
                }}>
                <Icon name="stats" />
                <Text style={{ color: 'white' }}>Life Log</Text>
              </Button>
            </Content>
          </Row>
          <Row style={{ height: '20%' }}>
            <Content style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Button
                large
                style={{
                  borderRadius: 25,
                  width: 250,
                  justifyContent: 'center',
                }}>
                <Icon name="medical" />
                <Text style={{ color: 'white' }}>Disease History</Text>
              </Button>
            </Content>
          </Row>
        </Grid>
      </Container>
    );
  }
}
