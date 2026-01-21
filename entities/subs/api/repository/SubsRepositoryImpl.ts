import Subs from "@/shared/model/subs/Subs";
import SubsRepository from "../../model/repository/SubsRepository";
import SubsStorage from "../storage/SubsStorage";
import MmkvSubs from "../storage/types/MmkvSubs";

export default class SubsRepositoryImpl implements SubsRepository {

    constructor(

        private subsStorage: SubsStorage
    ) {}

    subscribe(subs: Subs): void {

        const mmkvSubs = this.mapSubsToMmkvSubs( subs )
        
        this.subsStorage.subscribe( mmkvSubs )
    }
    hasSubs(userId: number): boolean {
        
        return this.subsStorage.hasSubs( userId )
    }

    private mapSubsToMmkvSubs(subs: Subs): MmkvSubs {

        return MmkvSubs.success( subs.value )
    }
}