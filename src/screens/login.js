import React from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default class Login extends React.Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Email"
          onChangeText={text => this.setState({email: text})}>
        </TextInput>
        
        <TextInput 
          placeholder="Senha"
          onChangeText={text => this.setState({senha: text})}>
        </TextInput>
        <Button
          title="Login"
          onPress={() => navigate('Events')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});