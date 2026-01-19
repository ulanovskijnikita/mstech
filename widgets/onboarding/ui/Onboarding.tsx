import { Link } from "expo-router"
import { StyleSheet, Text, View } from "react-native"

const style = StyleSheet.create({

    bg: {

        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        gap: 24,
    },
    title: {
        
        fontSize: 32,
    },
    button: {

        fontSize: 18,
        backgroundColor: "#e9e9e9",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
    }
})

const Onboarding = () => {

    return (
        
        <View style={style.bg}>

            <Text style={style.title}>Welcome to MSTech</Text>

            <Link style={style.button} href={'/paywall'}>Get started</Link>
        </View>
    )
}

export default Onboarding