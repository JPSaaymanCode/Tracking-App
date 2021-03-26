import React, {useContext} from 'react';
import {NavigationEvents} from 'react-navigation';
import {StyleSheet, View} from 'react-native';
import {Text, Input, Button } from 'react-native-elements';
import {Context as AuthContext} from '../context/authContext';
import Spacer from '../components/Spacer';
import AuthForm from '../components/authForm';
import NavLink from '../components/navLink';

const SignInScreen = ({navigation}) => {

  const {state, signIn, clearErrorMessage} = useContext(AuthContext);

      return (
        // SafeAreaView forceInset={{top: 'always'}} for margin on top
        <View style={styles.container}>
          <NavigationEvents onWillFocus={clearErrorMessage}/>
            <AuthForm 
            headerText='Sign In to Account'
            onSubmit={signIn}
            submitButtonText='Sign In'
            errorMessage={state.errorMessage}/>

            <NavLink 
            routeName ='SignUp'
            text='Dont have an account? Sign Up instead!'/>
        </View>
    );
};

SignInScreen.navigationOptions = () => {
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

export default SignInScreen;