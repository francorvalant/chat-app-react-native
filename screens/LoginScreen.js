import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Input, Button } from '@rneui/base';

const LoginScreen = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.content}>
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

            <Button title='Iniciar Sesion' style={styles.boton} />
            <Button title='Registrarse' style={styles.boton} onPress={() => navigation.navigate('RegisterScreen')} />

        </View>
    )
}

export default LoginScreen


const styles = StyleSheet.create({

    content: {
        marginTop: 50,
        marginHorizontal: 10,
    },

    boton: {
        backgroundColor: 'green',
        color: '#333',
        marginTop: 20,
    }
})