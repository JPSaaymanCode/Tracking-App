import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import Spacer from './Spacer';
import {withNavigation} from 'react-navigation';

const NavLink = ({navigation, text, routeName}) => {

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate(routeName)}>
            <Text style={styles.signInStyle}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({

    signInStyle: {
        color: 'blue',
        alignSelf: 'center'
    }

});

export default withNavigation(NavLink);