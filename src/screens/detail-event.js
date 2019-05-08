import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default class DetailEvents extends React.Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>DetailEvents</Text>
        <Button
          title="Events"
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
