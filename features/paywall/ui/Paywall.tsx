import useInjection from "@/shared/api/context/useInjection"
import { observer } from "mobx-react-lite"
import { Pressable, StyleSheet, Text, View } from "react-native"
import PaywallViewModel from "../model/PaywallViewModel"

const style = StyleSheet.create({

    bg: {

        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        gap: 16
    },
    title: {

        fontSize: 44,
        textAlign: "center"
    },
    subtitle: {

        fontSize: 32
    },
    tariffs: {

        flexDirection: "row",
        gap: 100,
        marginTop: 24,
    },
    tariffColum: {

        gap: 16,
        padding: 12
    },
    tariffText: {

        fontSize: 20
    },
    tariffSecond: {

        flexDirection: "row",
        gap: 8
    },
    tariffOldPrice: {

        textDecorationLine: "line-through",
        fontSize: 20
    },
    checkedTariff: {

        backgroundColor: "#e1ffe7",
        borderRadius: 15
    },
    button: {

        paddingHorizontal: 56,
        paddingVertical: 16,
        backgroundColor: "#e1ffe7",
        borderRadius: 15,
        marginTop: 152
    },
    buttonText: {

        fontSize: 20
    }
})

const Paywall = () => {

    const vm = useInjection( PaywallViewModel )

    return (

        <View style={style.bg}>

            <View>

                <Text style={style.title}>Paywall</Text>

                <Text style={style.subtitle}>Select Subscribe</Text>
            </View>

            <View style={style.tariffs}>

                <Pressable style={vm.getSubscribeid == 1 && style.checkedTariff} onPress={() => {

                    vm.setSubscribeId = 1
                }}>

                    <View style={style.tariffColum}>

                        <Text style={style.tariffText}>1 month</Text>

                        <Text style={style.tariffText}>100$</Text>
                    </View>
                </Pressable>
                
                <Pressable style={vm.getSubscribeid == 2 && style.checkedTariff} onPress={() => {

                    vm.setSubscribeId = 2
                }}>

                    <View style={style.tariffColum}>

                        <Text style={style.tariffText}>12 month</Text>

                        <View style={style.tariffSecond}>

                            <Text style={style.tariffOldPrice}>1200$</Text>

                            <Text style={style.tariffText}>1100$</Text>
                        </View>
                    </View>
                </Pressable>
            </View>

            <Pressable style={style.button} onPress={() => vm.handlePayClick()}>

                <Text style={style.buttonText}>pay</Text>
            </Pressable>
        </View>
    )
}

export default observer( Paywall )