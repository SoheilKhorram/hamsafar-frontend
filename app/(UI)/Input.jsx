import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'

const Input = ({ placeholder, value, onChange, secureTextEntry, icon, onIconPress }) => {
    return (
        <View style={styles.inputContainer}>
            {icon &&
                <Ionicons onPress={onIconPress} name={icon.name} size={icon.size} color={icon.color} style={styles.icon} />}
            <TextInput
                value={value}
                onChangeText={onChange}
                style={styles.input}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
            />
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#8B8C89',
        borderRadius: 16,
        paddingHorizontal: 10,
    },
    icon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        height: 50,
        fontFamily: 'Yekan',
        textAlign: 'right',
    },
})
