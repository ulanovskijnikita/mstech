import HasSubscribeUseCase from "@/entities/subs/model/usecase/HasSubscribeUseCase";
import SubscribeUseCase from "@/entities/subs/model/usecase/SubscribeUseCase";
import PaywallViewModel from "@/features/paywall/model/PaywallViewModel";
import OnboardingViewModel from "@/widgets/onboarding/model/OnboardingViewModel";
import { ContainerModule } from "inversify";

const presentationModule = new ContainerModule(({ bind }) => {

    bind( PaywallViewModel ).toDynamicValue(context => {

        return new PaywallViewModel( context.get( SubscribeUseCase ) )
    }).inSingletonScope()

    bind( OnboardingViewModel ).toDynamicValue(context => {

        return new OnboardingViewModel( context.get( HasSubscribeUseCase ) )
    }).inSingletonScope()
})

export default presentationModule