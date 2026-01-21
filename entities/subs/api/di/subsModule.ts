import { ContainerModule } from "inversify"
import SubsRepositoryImpl from "../repository/SubsRepositoryImpl"
import SubscribeUseCase from "../../model/usecase/SubscribeUseCase"
import MmkvSubsStorage from "../storage/MmkvSubsStorage"
import storage from "@/shared/api/mmkv/storage"
import HasSubscribeUseCase from "../../model/usecase/HasSubscribeUseCase"

const subsModule = new ContainerModule(({ bind }) => {

    bind( HasSubscribeUseCase ).toDynamicValue(context => {

        return new HasSubscribeUseCase( context.get( SubsRepositoryImpl ) )
    }).inTransientScope()

    bind( SubscribeUseCase ).toDynamicValue(context => {

        return new SubscribeUseCase( context.get( SubsRepositoryImpl ) )
    }).inTransientScope()

    bind( SubsRepositoryImpl ).toDynamicValue(context => {

        return new SubsRepositoryImpl( context.get( MmkvSubsStorage ) )
    }).inSingletonScope()

    bind( MmkvSubsStorage ).toDynamicValue(() => {

        return new MmkvSubsStorage( storage )
    }).inSingletonScope()
})

export default subsModule