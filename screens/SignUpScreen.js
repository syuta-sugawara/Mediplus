import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {
  Container,
  Header,
  Form,
  Input,
  Item,
  Button,
  Label,
  Content,
  Thumbnail,
} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import firebase from '../config/firebase';

export default class SignUp extends Component {
  state = {
    email: '',
    password: '',
    errorMessage: null,
  };

  static navigationOptions = {
    header: null,
  };

  handleSignUp = () => {
    if (this.state.password.length < 6) {
      alert('Please enter at least 6 characters');
      return;
    }
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => this.props.navigation.navigate('Login'))
      .catch(error => this.setState({ errorMessage: error.message }));
      alert('Sign Up Success!');
  };

  render() {
    return (
      <Container style={styles.container}>
        <Grid>
          <Row
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: '20%',
              marginTop: '10%',
            }}>
            <Thumbnail
              large
              source={{
                uri: 'https://i.imgur.com/pctDdxk.png',
              }}
              style={{ width: '100%' }}
            />
          </Row>

          <Row
             style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: '10%',
              marginTop: '10%',
              fontWeight: 'bold'
            }}>
          >
            <Text style={{color: 'white', fontSize: '20'}}>Translate Your Medical Records</Text>
          </Row>

          <Row
             style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: '10%',
              marginTop: '-15%',
              fontWeight: 'bold'
            }}>
          >
            <Text style={{color: 'white', fontSize: '20'}}>Find Local Hospitals Abroad</Text>
          </Row>

          <Row
            style={{
              justifyContent: 'center',
              height: '70%',
              marginTop: '10%',
            }}>
            <Form style={{ width: '100%' }}>
              <Item stackedLabel>
                <Label style={{ color: 'white' }}>Email</Label>
                <Input
                  autoCorrect={false}
                  autoCapitalize="none"
                  onChangeText={email => this.setState({ email })}
                  value={this.state.email}
                  style={{ color: 'white' }}
                />
              </Item>
              <Item stackedLabel>
                <Label style={{ color: 'white' }}>Password</Label>
                <Input
                  secureTextEntry={true}
                  autoCorrect={false}
                  autoCapitalize="none"
                  onChangeText={password => this.setState({ password })}
                  value={this.state.password}
                  style={{ color: 'white' }}
                />
              </Item>

              <Button
                full
                rounded
                style={{ backgroundColor: 'white', marginTop: 10 }}
                onPress={this.handleSignUp}>
                <Text>Sign Up</Text>
              </Button>

              <Button
                full
                rounded
                transparent
                onPress={() => this.props.navigation.navigate('Login')}
                style={{ marginTop: 10 }}>
                <Text style={{ color: 'white' }}>
                  Already have an account? Login
                </Text>
              </Button>
            </Form>
          </Row>
        </Grid>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#87cefa',
    padding: 10,
  },
});
