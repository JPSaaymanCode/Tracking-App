import React, {useContext} from 'react';
import {NavigationEvents} from 'react-navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {Context as AuthContext} from '../context/authContext';
import AuthForm from '../components/authForm';
import NavLink from '../components/navLink';

const SignUpScreen = ({navigation}) => {

    const {state, signUp, clearErrorMessage} = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <NavigationEvents onWillFocus={clearErrorMessage}/>
            <AuthForm 
            headerText='Sign Up for Tracker'
            onSubmit={signUp}
            submitButtonText='Sign Up'
            errorMessage={state.errorMessage}/>

            <NavLink 
            routeName ='SignIn'
            text='Already have an account? Sign In instead!'/>

            
        </View>
    );
};

SignUpScreen.navigationOptions = () => {
    return {
      headerShown: false,
    };
  };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 200
    },


});

export default SignUpScreen;