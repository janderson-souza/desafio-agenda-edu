import React from 'react';
import { StyleSheet, View, Text, Dimensions, Image  } from 'react-native';
import Moment from 'moment';

const width = Dimensions.get('screen').width;

export default class DetailEvents extends React.Component {
  
  render() {
    const {navigate} = this.props.navigation;
    const event = this.props.navigation.getParam('event');

    return (
      <View style={styles.container}>
        <Image source={{uri: event.image}} style={styles.imageItem}></Image>
        <View style={{padding: 32, marginTop: -100, borderRadius: 30, backgroundColor: '#ffffff'}}>
          <View style={{marginBottom: 32, flexDirection: 'row'}}>
            <View style={{width:60, height: 60, backgroundColor: '#f1ebf9', borderRadius: 7}}>
              <View>
                <Text style={{color: '#733DBE', textAlign: 'center', fontWeight: 'bold', fontSize: 24}}>{Moment(event.startAt).format('DD')}</Text>
              </View>
              <View>
                <Text style={{color: '#733DBE', textAlign: 'center', fontSize: 16}}>{Moment(event.startAt).format('MMM')}</Text>
              </View>
            </View>

            <View style={{marginLeft: 32}}>
              <View>
                <Text style={{fontWeight: 'bold', fontSize: 24}}>{event.title}</Text>
              </View>
              <View>
                <Text style={{color: '#666666', fontSize: 18}}>{Moment(event.startAt).format('LT')}</Text>
              </View>
            </View>
          </View>
          <View>
            <Text style={{color: '#666666', fontSize: 16}}>{event.description}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageItem: {
    width: width,
    height: 250
  },
});
