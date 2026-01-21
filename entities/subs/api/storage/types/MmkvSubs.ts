import MmkvSubsValue from "./MmkvSubsValue";

export default class MmkvSubs {

    private constructor(

        public isSucces: boolean,
        public value: MmkvSubsValue
    ) {}

    static success(value: MmkvSubsValue) {

        return new MmkvSubs(true, value)
    }
}