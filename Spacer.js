// This is just a global style creation to create 
// proper spacing between all elements of react-native-elements

import React from 'react';
import {View, StyleSheet} from 'react-native';

const Spacer = ({children}) => {
    return (
        <View style={styles.spacer}>{children}</View>
    )
};

const styles = StyleSheet.create({
    spacer: {
        margin: 15
    }
});

export default Spacer;