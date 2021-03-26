import React, {useContext} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Button} from 'react-native-elements';
import Spacer from '../components/Spacer';
import {Context as AuthContext} from '../context/authContext';
import {FontAwesome} from '@expo/vector-icons';

const AccountScreen = () => {

    const {signOut} = useContext(AuthContext);

    return (
        <View>
            <Text style={styles.text}>Your Account</Text>

        <Spacer />
        <Spacer />
        <Spacer />
            <Button 
            style={styles.signOut}
            title='Sign Out'
            onPress={signOut}/>
        </View>
    );
};

AccountScreen.navigationOptions = () => {
    return {
      title: 'My Account',
      tabBarIcon: <FontAwesome name='gear' size={20}/>
    };
  };

const styles = StyleSheet.create({
    text: {
        marginTop: 20,
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center'
    },

    signOut: {
        
    }

});

export default AccountScreen;