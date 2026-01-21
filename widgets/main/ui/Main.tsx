import { Image, StyleSheet, Text, View } from "react-native"

const style = StyleSheet.create({

    bg: {

        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        gap: 32
    },
    image: {

        width: 200,
        height: 200
    },
    title: {

        fontSize: 32
    }
})

const Main = () => {

    return (

        <View style={style.bg}>

            <Text style={style.title}>Using all functions</Text>

            <Image source={require("@/assets/images/icon.png")} width={200} height={200} style={style.image} />
        </View>
    )
}

export default Main