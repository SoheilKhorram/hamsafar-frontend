import { StyleSheet, Text, View } from 'react-native'
import { Link } from "expo-router"
import { useFonts } from 'expo-font'
import {
    setCustomView,
    setCustomTextInput,
    setCustomText,
    setCustomImage,
    setCustomTouchableOpacity
} from 'react-native-global-props'

const customTextProps = {
    style: {
        fontFamily: 'Yekan',
        fontSize: 12,
    }
}

const index = () => {
    const [fontLoaded] = useFonts({
        'YekanBold': require('../assets/fonts/YekanBold.ttf'),
        'Yekan': require('../assets/fonts/Yekan.ttf'),
    })

    setCustomText(customTextProps)

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