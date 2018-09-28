import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
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
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class DetailReviewScreen extends Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: '#87cefa' }}>
          <Left>
            <Button transparent>
              <Icon
                name="arrow-back"
                style={{ color: 'white' }}
                onPress={() => this.props.navigation.navigate('Review')}
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
        <Grid>
          <Col>
            <Row style={{ height: '25%', alignItems: 'center' }}>
              <Thumbnail
                square
                source={{
                  uri:
                    'http://www.bgfconlineshop.com/ticket/images/default_profile_image.png',
                }}
                style={{
                  marginLeft: '5%',
                  width: '40%',
                  height: '90%',
                  borderRadius: 25,
                }}
              />
              <Content
                style={{ alignItems: 'center', justifyContent: 'center' }}>
                <H1>John Doe</H1>
                <Text>{'\n'}Cupertino CA</Text>
                <Text>{'\n'}Rating: N/A</Text>
              </Content>
            </Row>
            <Row style={{ height: '75%' }}>
              <Card style={{ width: '100%' }}>
                <CardItem>
                  <Left>
                    <Body>
                      <Text>GFP Hospital</Text>
                      <Text note>California</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem
                  cardBody
                  style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <Text>Great Hospital! I want to visit there again</Text>
                </CardItem>
                <CardItem>
                  <Left>
                    <Button transparent>
                      <Icon active name="thumbs-up" />
                      <Text>12 Likes</Text>
                    </Button>
                  </Left>
                  <Body>
                    <Button transparent>
                      <Icon active name="chatbubbles" />
                      <Text>4 Comments</Text>
                    </Button>
                  </Body>
                  <Right>
                    <Text>11h ago</Text>
                  </Right>
                </CardItem>
              </Card>
            </Row>
          </Col>
        </Grid>
      </Container>
    );
  }
}
