import SubscribeUseCase from "@/entities/subs/model/usecase/SubscribeUseCase";
import Subs from "@/shared/model/subs/Subs";
import { router } from "expo-router";
import { makeAutoObservable } from "mobx";

export default class PaywallViewModel {

    constructor(

        private subscribeUseCase: SubscribeUseCase,
    ) {

        makeAutoObservable( this )
    }

    private subscribeId: number = 1

    get getSubscribeid() {
        
        return this.subscribeId
    }

    set setSubscribeId(subscribeId: number) {

        this.subscribeId = subscribeId
    }

    handlePayClick() {

        const subs = Subs.success({

            startDate: new Date(),
            subsType: this.getSubscribeid,
            userId: 1,
        })

        this.subscribeUseCase.execute( subs )

        router.replace("/main")
    }
}