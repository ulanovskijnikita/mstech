import useInjection from "@/shared/api/context/useInjection"
import { Link, useFocusEffect } from "expo-router"
import { observer } from "mobx-react-lite"
import { StyleSheet, Text, View } from "react-native"
import OnboardingViewModel from "../model/OnboardingViewModel"

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

    const vm = useInjection( OnboardingViewModel )

    useFocusEffect(() => vm.handleLayoutEffect())

    return (
        
        <View style={style.bg}>

            <Text style={style.title}>Welcome to MSTech</Text>

            <Link style={style.button} href={'/paywall'}>Get started</Link>
        </View>
    )
}

export default observer( Onboarding )