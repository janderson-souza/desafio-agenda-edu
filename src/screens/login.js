import React from 'react';
import { StyleSheet, View, Text, AsyncStorage } from 'react-native';
import { Button } from 'react-native-elements';
import { LoginInput } from '../components/login-input';

const baseURL = 'https://frontend-test.agendaedu.com/api';

export default class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loading: false,
      message: ''
    }
  }

  submitLogin = async () => {
    if (this.state.email.trim() == '' || this.state.password.trim() == '') {
      this.setState({message: 'E-mail e Senha são obrigórios'});
    } else {

      this.setState({loading: true});
      const response = await fetch(`${baseURL}/login`, this.getRequestInfo());
      const data = await response.json();
      this.setState({loading: false});

      if(!data.token) {
        this.setState({message: data.message});
        return;
      }

      AsyncStorage.setItem('token', data.token);
      const {navigate} = this.props.navigation;
      navigate('Events');
    }
  }

  updateState = (item) => {
    this.setState(item);
    this.setState({message: ''});
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderTitle()}
        {this.renderForm()}
        {this.renderButton()}
      </View>
    );
  }

  renderTitle = () => {
    return (
      <View  style={styles.viewTitle}>
        <Text style={styles.title}>
          {'Faça seu login 🔑'}
        </Text>
      </View>
    );
  }

  renderForm = () => {
    return (
      <View  style={styles.viewForm}>
        <LoginInput
          label='E-mail ou usuário'
          icon='envelope'
          editable={this.state.loading}
          onChangeText={text => this.updateState({email: text})}
          danger={this.state.message.trim() !== '' && this.state.email.trim() === ''}>
        </LoginInput>
        <LoginInput 
          label='Senha'
          icon='eye-slash'
          editable={this.state.loading}
          secureTextEntry={true}
          onChangeText={text => this.updateState({password: text})}
          danger={this.state.message.trim() !== '' && this.state.password.trim() === ''}>
        </LoginInput>
        <Text style={styles.danger}>{this.state.message}</Text>
      </View>
    );
  }

  renderButton = () => {
    return (
      <View  style={styles.viewButton}>
        <Button
          buttonStyle={styles.buttonEntrar}
          title="Entrar"
          loading={this.state.loading}
          onPress={(e) => this.submitLogin(e)}
        />
      </View>
    );
  }

  getRequestInfo = () => {
    return {
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
  danger: {
    color: '#D32F2F',
    textAlign: 'center',
    marginTop: 20,
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
