import React, {useContext, useCallback} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {withNavigationFocus} from 'react-navigation';
import Map from '../components/Map';
import TrackForm from '../components/trackForm';
import {Context as LocationContext} from '../context/LocationContext';
import '../_mockLocation';
import useLocation from '../hooks/useLocation';
import {FontAwesome} from '@expo/vector-icons';

const TrackCreateScreen = ({isFocused}) => {

    const {state: {recording}, addLocation} = useContext(LocationContext);
    const callback = useCallback((location) => {
        addLocation(location, recording);
    }, [recording]);
    const [err] = useLocation(isFocused || recording , callback);

    return (
        <View>
            <Text style={styles.text}>Create a Track</Text>
            <Map />
            {err ? <Text>Please enable location services to record track</Text> : null}

            <TrackForm />
        </View>
    );
};

TrackCreateScreen.navigationOptions = () => {
    return {
      title: 'Add Track',
      tabBarIcon: <FontAwesome name='plus' size={20}/>
    };
  };

const styles = StyleSheet.create({

    text: {
        marginTop: 50,
        marginLeft: 15,
        fontSize: 38,
        fontWeight: 'bold',
        
    },

});

export default withNavigationFocus(TrackCreateScreen);