import React from 'react';

import { View, Text, FlatList, StyleSheet, ActivityIndicator, AsyncStorage, Image} from 'react-native';

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
      <Image source={{uri: item.image}} style={styles.imageItem} />
      <View>
        <Text style={{color:'#999999', fontSize: 14, marginBottom: 10}}>EVENTOS</Text>
        <Text style={{color: '#333333', fontSize: 16}}>{item.title}</Text>
      </View>
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
        keyExtractor={item => item.id.toString()}
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
    marginBottom: 8,
    height: 124,
    backgroundColor: '#FFFFFF',
    flex: 1,
    borderRadius: 5,
    padding: 16,
    shadowColor: '#000000',
    elevation: 2,
    borderLeftColor: '#733DBE',
    borderLeftWidth: 4,
    flexDirection: 'row',
  },
  imageItem: {
    width: 66,
    height: 92,
    marginRight: 16,
    borderRadius: 5,
  }
});

export { EventsList };