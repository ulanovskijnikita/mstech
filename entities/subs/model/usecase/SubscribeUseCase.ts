import Subs from "@/shared/model/subs/Subs";
import SubsRepository from "../repository/SubsRepository";

export default class SubscribeUseCase {

    constructor(

        private subsRepository: SubsRepository,
    ) {}

    execute(subs: Subs) {

        this.subsRepository.subscribe( subs )
    }
}