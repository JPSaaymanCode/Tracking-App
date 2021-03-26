import React, {useContext} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, FlatList} from 'react-native';
import {ListItem} from 'react-native-elements';
import {NavigationEvents} from 'react-navigation';
import {Context as TrackContext} from '../context/TrackContext';
import Spacer from '../components/Spacer';

const TrackListScreen = ({navigation}) => {

    const {state, fetchTracks} = useContext(TrackContext);

    return (
        <>
            <NavigationEvents onWillFocus={fetchTracks}/>

        <Spacer/>
                <FlatList
        data={state}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('TrackDetail' , {_id: item._id})}>
              <ListItem>
                <ListItem.Content>
                  <ListItem.Title>{item.name}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem>
            </TouchableOpacity>
          );
        }}
      />
        </>
    );
};

TrackListScreen.navigationOptions = () => {
  return {
    title: 'Tracks'
  };
};

const styles = StyleSheet.create({

    text: {
        marginTop: 20,
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center'
    },

});

export default TrackListScreen;