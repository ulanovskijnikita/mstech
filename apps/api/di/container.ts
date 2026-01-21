import { Container } from "inversify";
import presentationModule from "./presentationModule";
import subsModule from "@/entities/subs/api/di/subsModule";

const container = new Container()

container.load(

    presentationModule,
    subsModule,
)

export default container