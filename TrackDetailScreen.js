import React, { useContext } from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Context as TrackContext} from '../context/TrackContext';
import MapView, {Polyline} from 'react-native-maps';

const TrackDetailScreen = ({navigation}) => {

    const {state} = useContext(TrackContext);
    const _id = navigation.getParam('_id');

    const track = state.find(t => t._id === _id);
    const initialCoords = track.locations[0].coords;

    return (
        <View>
            <Text style={styles.text}>{track.name}</Text>
                <MapView
                    style={styles.map}
                    initialRegion={{
                        longitudeDelta: 0.01,
                        latitudeDelta: 0.01,
                        ...initialCoords
                    }}>
                    
                </MapView>
        </View>
    );
};

const styles = StyleSheet.create({

    text: {
        marginTop: 20,
        fontSize: 30,
        fontWeight: 'bold',
        alignSelf: 'center'
    },

    map: {
        height: 300

    }

});

export default TrackDetailScreen;