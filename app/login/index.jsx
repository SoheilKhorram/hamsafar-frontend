import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'
import React, { useState } from 'react'

import Input from '../(UI)/Input'
import Button from '../(UI)/Button'

const LoginScreen = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [shouldShowPassword, setShouldShowPassword] = useState(false)

    const handleUsernameChange = (text) => {
        setUsername(text)
    }

    const handlePasswordChange = (text) => {
        setPassword(text)
    }

    const handleSubmitButton = () => {
        console.log(username)
        console.log(password)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.h1}>ورود</Text>
            <View style={styles.inputContainer}>
                <Input
                    value={username}
                    onChange={handleUsernameChange}
                    placeholder={"نام کاربری"}
                />
                <Input
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder={"رمز عبور"}
                    icon={{
                        name: shouldShowPassword ? 'eye-outline' : 'eye-off-outline',
                        size: 24,
                        color: '#8B8C89',
                    }}
                    secureTextEntry={!shouldShowPassword}
                    onIconPress={() => setShouldShowPassword(!shouldShowPassword)}
                />
                <View style={{ alignSelf: "flex-end" }}>
                    <Text>
                        حساب کاربری نداری؟
                        <Link href='signup' style={{ color: "#6096BA" }}>  بساز</Link>
                    </Text>
                </View>
            </View>
            <Button onPress={handleSubmitButton}>ورود</Button>
        </View>
    )
}
export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    inputContainer: {
        alignItems: 'center',
        gap: 20,
        marginVertical: 20,
    },
    h1: {
        fontFamily: 'Yekan',
        fontSize: 24,
    }
})