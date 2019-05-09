import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { LoginInput } from '../components/login-input';

export default class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      validateForm: false,
      waiting: false
    }
  } 

  submitLogin() {

    if (this.state.email.trim() == '' || this.state.password.trim() == '') {
      this.setState({validateForm: true});
    } else {
      this.setState({waiting: true});
      const uri = "https://frontend-test.agendaedu.com/api/login";
      const requestInfo = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password
        }),
      };

      fetch(uri, requestInfo)
        .then(response => {
          this.setState({waiting: false});
          if(response.ok) 
            return response.json();
          throw new Error("Não foi possível efetuar login")
        })
        .then(token => console.warn(token.token))
    }

  }

  render() {
    return (
      <View style={styles.container}>
        <View  style={styles.viewTitle}>
          <Text style={styles.title}>
            {'Faça seu login 🔑'}
          </Text>
        </View>

        <View  style={styles.viewForm}>
          <LoginInput
            label='E-mail ou usuário'
            icon='envelope'
            editable={this.state.waiting}
            onChangeText={text => this.setState({email: text})}
            danger={this.state.validateForm && this.state.email.trim() === ''}>
          </LoginInput>
          <LoginInput 
            label='Senha'
            icon='eye-slash'
            secureTextEntry={true}
            onChangeText={text => this.setState({password: text})}
            danger={this.state.validateForm && this.state.password.trim() === ''}>
          </LoginInput>
        </View>

        <View  style={styles.viewButton}>
          <Button
            buttonStyle={styles.buttonEntrar}
            title="Entrar"
            loading={this.state.waiting}
            onPress={(e) => this.submitLogin(e)}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'stretch',
  },
  viewTitle: {
    flex: 1,
    justifyContent: 'flex-end',
    margin: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30
  },
  viewForm: {
    flex: 1,
    justifyContent: 'center',
    margin: 10,
  },
  viewButton: {
    flex: 1,
    justifyContent: 'flex-end',
    elevation: 0,
    margin: 20,
  },
  buttonEntrar: {
    backgroundColor: '#733DBE',
    borderRadius: 4,
    height: 50
  }
});