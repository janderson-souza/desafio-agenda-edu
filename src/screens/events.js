import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default class Events extends React.Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>Events</Text>
        <Button
          title="Detail"
          onPress={() => navigate('DetailEvents')}
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
