import SubsValue from "./SubsValue";

export default class Subs {

    private constructor(

        public isSucces: boolean,
        public value: SubsValue
    ) {}

    static success(value: SubsValue) {

        return new Subs(true, value)
    }
}