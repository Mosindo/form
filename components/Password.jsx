import React from 'react';
import {TextInput,Text} from 'react-native';

const  Password=(props) =>{
    const [password, onChangePass] = React.useState('');
    const [secureTextEntry, setSecureTextEntry] = React.useState(true);
    return (
        <>
            <Text>Enter Your password</Text>
              <TextInput secureTextEntry={secureTextEntry} 
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 , padding: '1em' }}
            placeholder='Your password'
            onChangeText={text => onChangePass(text)}
            value={password} 
            maxLength={6}/>
        </>
    );
}

export default Password;