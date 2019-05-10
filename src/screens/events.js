import React from 'react';
import { ScrollView, StyleSheet, View, Text, Button } from 'react-native';
import { EventsList } from '../components/events-list';

export default class Events extends React.Component {
  render() {
    return (
        <EventsList>
        </EventsList>
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
