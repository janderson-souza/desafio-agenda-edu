import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { EventsList } from '../components/events-list';
import Moment from 'moment';

export default class Events extends React.Component {
  
  detailEvent(event) {
    const {navigate} = this.props.navigation;
    navigate('DetailEvents', {'event': event});
  }

  renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => this.detailEvent(item)}> 
        <View style={styles.listItem}>
          <Image source={{uri: item.image}} style={styles.imageItem} />
          <View>
            <Text style={{color:'#999999', fontSize: 14, marginBottom: 8}}>EVENTOS</Text>
            <Text style={{color: '#333333', fontSize: 16, fontWeight: 'bold'}}>{item.title}</Text>
            <Text style={{marginBottom: 8}} >
              <Text style={{color:'#999999', fontSize: 16, marginLeft: 10}} >
                {Moment(item.startAt).format('LT')}
              </Text>
            </Text>
            <Text numberOfLines={1} ellipsizeMode='tail' style={{color:'#333333', fontSize: 14, width: 200}}>
              {this.fullDate(item.startAt)}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
  
  fullDate(date) {
    Moment.locale('pt-br');
    return Moment(date).format('LLLL');
  }

  render() {
    return (
        <EventsList
          renderItem={this.renderItem}>
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
