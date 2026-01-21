import Subs from "@/shared/model/subs/Subs";

export default interface SubsRepository {

    subscribe(subs: Subs): void

    hasSubs(userId: number): boolean
}