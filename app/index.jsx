import { StyleSheet, Text, View } from 'react-native'
import SignupScreen from './signup/index.jsx'
import { Link } from "expo-router"
import { useFonts } from 'expo-font'

const index = () => {
    const [fontLoaded] = useFonts({
        'YekanBold': require('../assets/fonts/YekanBold.ttf'),
        'Yekan': require('../assets/fonts/Yekan.ttf'),
    })

    if (!fontLoaded) {
        return <Text>Loading...</Text>
    }

    return (
        <View>
            <Link href='signup'>signup</Link>
            <Text>index</Text>
        </View >
    )
}
export default index

const styles = StyleSheet.create({})