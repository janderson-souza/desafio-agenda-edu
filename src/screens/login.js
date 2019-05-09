import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Button, Input } from 'react-native-elements';


export default class Login extends React.Component {

  submitLogin(event) {
    console.log(event);
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
        if(response.ok) 
          return response.json();
        
        throw new Error("Não foi possível efetuar login")
      })
      .then(token => console.warn(token.token))
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
          <Input
            label='E-mail ou usuário'
            labelStyle={styles.label}
            inputContainerStyle={styles.input}
            rightIcon={
              <Icon
                name='envelope'
                size={24}
                color='#bfc4c8'
              />
            }
            onChangeText={text => this.setState({email: text})}>
          </Input>
          <Input 
            label='Senha'
            labelStyle={styles.label}
            inputContainerStyle={styles.input}
            secureTextEntry={true} 
            rightIcon={
              <Icon
                name='eye-slash'
                size={24}
                color='#bfc4c8'
              />
            }
            onChangeText={text => this.setState({password: text})}>
          </Input>
        </View>

        <View  style={styles.viewButton}>
          <Button
            buttonStyle={styles.buttonEntrar}
            title="Entrar"
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
  label: {
    color: '#7d7d7d',
    marginBottom: 5,
    fontWeight: '300',
    fontSize: 16
  },
  input: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#bfc4c8',
    height: 50,
    marginBottom: 5,
    padding: 5,
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