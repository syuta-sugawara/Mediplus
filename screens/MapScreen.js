import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Location, Permissions } from 'expo';
import {
  Container,
  Header,
  Left,
  Right,
  Button,
  Icon,
  Body,
  Title,
} from 'native-base';
import YelpService from '../services/yelp';
import Map from '../components/Map';

const deltas = {
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
  latitude: 37.3382,
  longitude: -121.8863,
};

export default class MapScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    region: null,
    hospitals: [],
  };

  componentWillMount() {
    this.getLocationAsync();
  }

  getHospitals = async () => {
    const { latitude, longitude } = this.state.region;
    const userLocation = { latitude, longitude };
    const hospitals = await YelpService.getHospitals(userLocation);
    this.setState({ hospitals });
  };

  getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status != 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }
    let location = await Location.getCurrentPositionAsync({});
    const region = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      ...deltas,
    };
    await this.setState({ region });
    await this.getHospitals();
  };

  render() {
    const { region, hospitals } = this.state;
    return (
      <Container>
        <Header style={{ backgroundColor: '#87cefa' }}>
          <Left>
            <Button transparent>
              <Icon
                name="arrow-back"
                style={{ color: 'white' }}
                onPress={() => this.props.navigation.navigate('Home2')}
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
        <Map region={this.region} places={this.state.hospitals} />
        <Button
          style={{
            width: '100%',
            backgroundColor: '#87cefa',
            justifyContent: 'center',
          }}
          onPress={() => this.props.navigation.navigate('Review')}
          >
          <Text style={{color: 'white'}}>See Review</Text>
        </Button>
      </Container>
    );
  }
}
