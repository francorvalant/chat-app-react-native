import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Input, Button } from '@rneui/base';

const RegisterScreen = () => {

    const [name, setName] = useState('');
    const [imageURL, setImageUrl] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        
        <View style={styles.content}>
            <Input
                placeholder='Ingrese su Nombre'
                label='Nombre'
                leftIcon={{ type: 'material', name: 'account-circle' }}
                value={name}
                onChangeText={text => setName(text)}
            />

            <Input
                placeholder='Imagen del Perfil'
                label='Url Imagen'
                leftIcon={{ type: 'material', name: 'camera' }}
                value={imageURL}
                onChangeText={text => setImageUrl(text)}
            />

            <Input
                placeholder='Ingrese su correo'
                label='Email'
                leftIcon={{ type: 'material', name: 'email' }}
                value={email}
                onChangeText={text => setEmail(text)}
            />

            <Input
                placeholder='Ingrese su contraseña'
                label='Contraseña'
                leftIcon={{ type: 'material', name: 'lock' }}
                value={password}
                onChangeText={text => setPassword(text)}
                secureTextEntry
            />

            <Button title='Registrarse' style={styles.boton} />

        </View>
    )
}

export default RegisterScreen


const styles = StyleSheet.create({

    content: {
        marginTop: 50,
        marginHorizontal: 10,
    },

    boton: {
        backgroundColor: 'green',
        color: '#333',
        marginTop: 50,
    }
})