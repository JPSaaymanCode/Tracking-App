import React, {useEffect, useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {Context as AuthContext} from '../context/authContext';

const ResolveAuthScreen = () => {

    const {testLocalSignUp, testLocalSignIn} = useContext(AuthContext);

    useEffect(() => {
        testLocalSignUp();
    }, []);

    useEffect(() => {
        testLocalSignIn();
    }, []);

    return null;
};

const styles = StyleSheet.create({

});

export default ResolveAuthScreen;