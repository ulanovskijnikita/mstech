import SubsRepository from "../repository/SubsRepository";

export default class HasSubscribeUseCase {

    constructor(

        private subsRepository: SubsRepository,
    ) {}

    execute(userId: number): boolean {

        return this.subsRepository.hasSubs( userId )
    }
}