import React, {useContext} from 'react';
import { ActivityIndicator } from 'react-native';
import {View, StyleSheet, Text} from 'react-native';
import MapView, {Polyline, Circle} from 'react-native-maps';
import {Context as LocationContext} from '../context/LocationContext';

const Map = () => {

    const {state: {currentLocation, locations},} = useContext(LocationContext);

    if(!currentLocation) {
        return <ActivityIndicator  size='large' style={{marginTop: 200}} />
    };

    initialLocation = {
        longitude: -122.0312186,
        latitude: 37.33233141,
      };

    return (
        <View>
            <MapView 
            style={styles.mapStyle}
            initialRegion={{
                ...initialLocation,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01       
            }}
            
            // region={{
            //     ...currentLocation.coords,
            //     latitudeDelta: 0.01,
            //     longitudeDelta: 0.01
            // }}
            >

                <Circle 
                    center={currentLocation.coords}
                    radius={50}
                    strokeColor= 'rgba(158, 158, 255, 1.0)'
                    fillColor= 'rgba(158, 158, 255, 0.3)'
                    />

                <Polyline strokeColor='red' strokeWidth={2} coordinates={locations.map(loc => loc.coords)}/>
        
            </MapView>
        </View>
    );
};

const styles = StyleSheet.create({

    mapStyle: {
        height: 300
    }

});

export default Map;