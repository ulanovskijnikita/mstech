import { ServiceIdentifier } from "inversify";
import { useContext } from "react";
import InversifyContext from "./InvesifyContext";

const useInjection = <T extends object>(identifier: ServiceIdentifier<T>): T => {

    const container = useContext( InversifyContext )

    return container!.get( identifier )
}

export default useInjection