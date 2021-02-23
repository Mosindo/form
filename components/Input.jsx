import React from 'react';
import { TextInput, Text } from 'react-native';

const Input = (props) => {
  const [value, onChangeText] = React.useState('');
  
  return (
    <>
    <Text >Enter Your login</Text>
        <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 , padding: '1em' }}
        placeholder='Your login'
        onChangeText={text => onChangeText(text)}
        value={value}
        />
    </>
  );
}

export default Input;