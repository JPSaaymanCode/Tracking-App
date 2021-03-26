import React, {useContext} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Input, Button} from 'react-native-elements';
import Spacer from './Spacer';
import {Context as LocationContext} from '../context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack';

const TrackForm = () => {

    const {state: {name , recording, locations} , startRecording, stopRecording, changeName} = useContext(LocationContext);
    const [saveTrack] = useSaveTrack();

    return (
        <View>
            <Spacer>
            <Input
                value={name}
                onChangeText={changeName}
                placeholder='Enter Track Name'/>
            </Spacer>

            {recording ? (<TouchableOpacity style={styles.recordButton} onPress={stopRecording}>
                        <Text style={styles.text}>Stop</Text>
                            </TouchableOpacity>) : (
                        <TouchableOpacity style={styles.recordButton} onPress={startRecording} >
                           <Text style={styles.text}>Start Recording</Text>
                       </TouchableOpacity>)}

            <Spacer />

            {!recording && locations.length ? 
            (<TouchableOpacity style={styles.saveButton} onPress={saveTrack}>
                <Text style={styles.text}>Save</Text>
            </TouchableOpacity>): 

            null

            }

            


        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        alignSelf: 'center',
        padding: 10,
        color: 'white',
        fontSize: 20

    },
    

    recordButton: {
        backgroundColor: 'grey',
        marginHorizontal:40,
        borderRadius: 4

    },

    saveButton: {
        backgroundColor: 'green',
        marginHorizontal:40,
        borderRadius: 4

    }
})



export default TrackForm;