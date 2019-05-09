import React from 'react';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Input } from 'react-native-elements';

const ACTIVE_COLOR  = '#733DBE';
const DEFAULT_COLOR = '#BFC4C8';
const DANGER_COLOR  = '#D32F2F';
const LABE_COLOR    = '#7D7D7D';


class LoginInput extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      color: DEFAULT_COLOR
    }
  }
  
  onFocus() {
      this.setState({
        color: ACTIVE_COLOR
      })
  }

  onBlur() {
    this.setState({
      color: DEFAULT_COLOR
    })
  }

  render() {
      const label           = this.props.label;
      const icon            = this.props.icon;
      const secureTextEntry = this.props.secureTextEntry;
      const onChangeText    = this.props.onChangeText;

      let color = this.state.color;

      if (this.props.danger) {
        color = DANGER_COLOR;
      }

      return (
          <Input 
              label={label}
              labelStyle={styles.label}
              inputContainerStyle={{
                borderWidth: 1,
                borderRadius: 4,
                height: 50,
                padding: 5,
                borderColor: color
              }}
              secureTextEntry={secureTextEntry}
              onBlur={ () => this.onBlur() }
              onFocus={ () => this.onFocus() }
              rightIcon={
                  <Icon
                      name={icon}
                      size={24}
                      color={color}
                  />
              }
              onChangeText={onChangeText}>
          </Input>
      );
  }
}

const styles = StyleSheet.create({
  label: {
    color: LABE_COLOR,
    marginBottom: 5,
    marginTop: 5,
    fontWeight: '300',
    fontSize: 16
  },
  input: {
    
  },  
});

export { LoginInput };