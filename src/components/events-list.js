import React from 'react';

import { View, Text, FlatList, StyleSheet, ActivityIndicator, AsyncStorage } from 'react-native';

const baseURL = 'https://frontend-test.agendaedu.com/api';
const perPage = 10;

class EventsList extends React.Component {
  state = {
    data: [],
    page: 1,
    loading: false,
  };

  componentDidMount() {
    this.loadEvents();
  }

  loadEvents = async () => {
    if (this.state.loading) return;

    const { page } = this.state;

    this.setState({ loading: true });
    const requestInfo = await this.getRequestInfo();
    const response = await fetch(`${baseURL}/events?limit=${perPage};page=${page}`, requestInfo);
    const events = await response.json();

    this.setState({
      data: [ ...this.state.data, ...events.data ],
      page: page + 1,
      loading: false,
    });
  }

  renderItem = ({ item }) => (
    <View style={styles.listItem}>
      <Text>{item.title}</Text>
    </View>
  );
  
  renderFooter = () => {
    if (!this.state.loading) return null;
    return (
      <View style={styles.loading}>
        <ActivityIndicator />
      </View>
    );
  };

  render() {
    return (
      <FlatList
        style={{ marginTop: 30 }}
        contentContainerStyle={styles.list}
        data={this.state.data}
        renderItem={this.renderItem}
        keyExtractor={item => item.id}
        onEndReached={this.loadEvents}
        onEndReachedThreshold={0.1}
        ListFooterComponent={this.renderFooter}
      />
    );
  }

  getRequestInfo = async () => {
    const token = await AsyncStorage.getItem('token');
    return {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'token': token
      }
    };
  }
}

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 20,
  },

  listItem: {
    backgroundColor: '#EEE',
    marginTop: 20,
    padding: 30,
  },
});

export { EventsList };