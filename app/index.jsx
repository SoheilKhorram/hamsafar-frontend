import { StyleSheet, Text, View } from 'react-native'
import { Link } from "expo-router"
import { useFonts } from 'expo-font'
import { setCustomText } from 'react-native-global-props'

const index = () => {
    const [fontLoaded] = useFonts({
        'YekanBold': require('../assets/fonts/YekanBold.ttf'),
        'Yekan': require('../assets/fonts/Yekan.ttf'),
    })

    /* Adding the global props */
    const customTextProps = {
        style: {
            fontFamily: 'Yekan',
            fontSize: 12,
        }
    }
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