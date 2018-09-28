import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import firebase from '../config/firebase';
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
export default class Login extends React.Component {
  state = { email: '', password: '', errorMessage: null };

  static navigationOptions = {
    header: null,
  };

  handleLogin = () => {
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate('Home2'))
      .catch(error => this.setState({ errorMessage: error.message }));
  };

  render() {
    return (
      <Container style={styles.container}>
        <Form style={{ width: '100%' }}>
          <Item stackedLabel>
            {this.state.errorMessage && (
              <Text style={{ color: 'red', marginBottom: '50%' }}>
                {this.state.errorMessage}
              </Text>
            )}
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
            style={{ backgroundColor: 'white', marginTop: 20 }}
            onPress={this.handleLogin}>
            <Text>Login</Text>
          </Button>

          <Button
            full
            rounded
            transparent
            onPress={() => this.props.navigation.navigate('SignUp')}
            style={{ marginTop: 20 }}>
            <Text style={{ color: 'white' }}>
              Don't have an account? Sign Up
            </Text>
          </Button>
        </Form>
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
