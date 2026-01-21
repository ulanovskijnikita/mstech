import SubsStorage from "./SubsStorage";
import { MMKV } from "react-native-mmkv";
import MmkvSubs from "./types/MmkvSubs";
import SUBS_KEY from "./const/SUBS_KEY";

export default class MmkvSubsStorage implements SubsStorage {

    constructor(

        private storage: MMKV
    ) {}

    subscribe(subs: MmkvSubs): void {
        
        return this.storage.set(

            SUBS_KEY,
            JSON.stringify( subs.value )
        )
    }

    hasSubs(_userId: number): boolean {
        
        return this.storage.contains( SUBS_KEY )
    }
}