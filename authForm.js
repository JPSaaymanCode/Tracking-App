import React, {useState} from 'react';
import {Input, Button, Text} from 'react-native-elements';
import {StyleSheet, View} from 'react-native';
import Spacer from './Spacer';

const AuthForm = ({onSubmit, submitButtonText, headerText, errorMessage}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(
        <View style={styles.container}>
                <Spacer>
            <Text style={{alignSelf: 'center'}} h3>{headerText}</Text>
                </Spacer>
            <Input 
                label='Email Address'
                value={email}
                onChangeText={setEmail}
                autoCapitalize='none'
                autoCorrect={false}/>
                <Spacer />
            <Input 
                label='Password'
                value={password}
                onChangeText={setPassword}
                autoCapitalize='none'
                autoCorrect={false}
                secureTextEntry={true}/>

            {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}

            <Button 
                title={submitButtonText}
                onPress={() => onSubmit({email, password})}/>
            <Spacer />
                
        </View>
    )

};

const styles = StyleSheet.create({
    
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginBottom: 10,
        alignSelf: 'center'
    },

    
});

export default AuthForm;