import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import {
  Container,
  Header,
  Footer,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Thumbnail,
  Content,
  List,
  ListItem,
  H1,
} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class ReviewScreen extends Component {
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
                onPress={() => this.props.navigation.navigate('MapView')}
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
                    'http://envirosystems.com.au/wp-content/uploads/2017/07/Gold-Coast-University-Hospital-500x500.jpeg',
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
                <H1>GFP Hospital</H1>
                <Text>{'\n'}12345 Foothill Dr</Text>
                <Text>Cupertino CA USA</Text>
                <Text>123-456-7890</Text>
              </Content>
            </Row>
            <Row style={{ height: '75%' }}>
              <ScrollView>
                <Content>
                  <List>
                    <ListItem avatar>
                      <Left>
                        <Thumbnail
                          source={{
                            uri:
                              'http://www.bgfconlineshop.com/ticket/images/default_profile_image.png',
                          }}
                        />
                      </Left>
                      <Body>
                        <Text>John Doe</Text>
                        <Text
                          note
                          onPress={() =>
                            this.props.navigation.navigate('DetailReview')
                          }>
                          Great Hospital! I want to visit there again . .
                        </Text>
                      </Body>
                      <Right>
                        <Text note>3:43 pm</Text>
                      </Right>
                    </ListItem>
                    <ListItem avatar>
                      <Left>
                        <Thumbnail
                          source={{
                            uri:
                              'http://www.bgfconlineshop.com/ticket/images/default_profile_image.png',
                          }}
                        />
                      </Left>
                      <Body>
                        <Text>John Doe</Text>
                        <Text
                          note
                          onPress={() =>
                            this.props.navigation.navigate('DetailReview')
                          }>
                          Great Hospital! I want to visit there again . .
                        </Text>
                      </Body>
                      <Right>
                        <Text note>4:43 pm</Text>
                      </Right>
                    </ListItem>
                    <ListItem avatar>
                      <Left>
                        <Thumbnail
                          source={{
                            uri:
                              'http://www.bgfconlineshop.com/ticket/images/default_profile_image.png',
                          }}
                        />
                      </Left>
                      <Body>
                        <Text>John Doe</Text>
                        <Text
                          note
                          onPress={() =>
                            this.props.navigation.navigate('DetailReview')
                          }>
                          Great Hospital! I want to visit there again . .
                        </Text>
                      </Body>
                      <Right>
                        <Text note>5:43 pm</Text>
                      </Right>
                    </ListItem>
                    <ListItem avatar>
                      <Left>
                        <Thumbnail
                          source={{
                            uri:
                              'http://www.bgfconlineshop.com/ticket/images/default_profile_image.png',
                          }}
                        />
                      </Left>
                      <Body>
                        <Text>John Doe</Text>
                        <Text
                          note
                          onPress={() =>
                            this.props.navigation.navigate('DetailReview')
                          }>
                          Great Hospital! I want to visit there again . .
                        </Text>
                      </Body>
                      <Right>
                        <Text note>6:43 pm</Text>
                      </Right>
                    </ListItem>
                    <ListItem avatar>
                      <Left>
                        <Thumbnail
                          source={{
                            uri:
                              'http://www.bgfconlineshop.com/ticket/images/default_profile_image.png',
                          }}
                        />
                      </Left>
                      <Body>
                        <Text>John Doe</Text>
                        <Text
                          note
                          onPress={() =>
                            this.props.navigation.navigate('DetailReview')
                          }>
                          Great Hospital! I want to visit there again . .
                        </Text>
                      </Body>
                      <Right>
                        <Text note>7:43 pm</Text>
                      </Right>
                    </ListItem>
                    <ListItem avatar>
                      <Left>
                        <Thumbnail
                          source={{
                            uri:
                              'http://www.bgfconlineshop.com/ticket/images/default_profile_image.png',
                          }}
                        />
                      </Left>
                      <Body>
                        <Text>John Doe</Text>
                        <Text
                          note
                          onPress={() =>
                            this.props.navigation.navigate('DetailReview')
                          }>
                          Great Hospital! I want to visit there again . .
                        </Text>
                      </Body>
                      <Right>
                        <Text note>8:43 pm</Text>
                      </Right>
                    </ListItem>
                    <ListItem avatar>
                      <Left>
                        <Thumbnail
                          source={{
                            uri:
                              'http://www.bgfconlineshop.com/ticket/images/default_profile_image.png',
                          }}
                        />
                      </Left>
                      <Body>
                        <Text>John Doe</Text>
                        <Text
                          note
                          onPress={() =>
                            this.props.navigation.navigate('DetailReview')
                          }>
                          Great Hospital! I want to visit there again . .
                        </Text>
                      </Body>
                      <Right>
                        <Text note>9:43 pm</Text>
                      </Right>
                    </ListItem>
                    <ListItem avatar>
                      <Left>
                        <Thumbnail
                          source={{
                            uri:
                              'http://www.bgfconlineshop.com/ticket/images/default_profile_image.png',
                          }}
                        />
                      </Left>
                      <Body>
                        <Text>John Doe</Text>
                        <Text
                          note
                          onPress={() =>
                            this.props.navigation.navigate('DetailReview')
                          }>
                          Great Hospital! I want to visit there again . .
                        </Text>
                      </Body>
                      <Right>
                        <Text note>10:43 pm</Text>
                      </Right>
                    </ListItem>
                  </List>
                </Content>
              </ScrollView>
            </Row>
          </Col>
        </Grid>
      </Container>
    );
  }
}
