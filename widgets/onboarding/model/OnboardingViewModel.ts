import HasSubscribeUseCase from "@/entities/subs/model/usecase/HasSubscribeUseCase"
import { router } from "expo-router"
import { makeAutoObservable } from "mobx"

export default class OnboardingViewModel {

    constructor(

        private hasSubscribeUseCase: HasSubscribeUseCase,
    ) {

        makeAutoObservable( this )
    }

    handleLayoutEffect() {

        if ( this.hasSubscribeUseCase.execute( 1 ) ) {

            router.replace("/main")
        }
    }
}