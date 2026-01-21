import MmkvSubs from "./types/MmkvSubs"

export default interface SubsStorage {

    subscribe(subs: MmkvSubs): void

    hasSubs(userId: number): boolean
}