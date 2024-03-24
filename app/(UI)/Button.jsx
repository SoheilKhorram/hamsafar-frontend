import { StyleSheet, Text, View, Pressable } from 'react-native'

const Button = ({ children, onPress }) => {
    return (
        <Pressable onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{children}</Text>
            </View>
        </Pressable>
    )
}
export default Button

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#007AFF',
        padding: 10,
        borderRadius: 16,
        minWidth: '100%',
        height: 50,
    },
    buttonText: {
        color: "#E7ECEF",
        fontFamily: "Yekan",
        textAlign: "center",
    }
})