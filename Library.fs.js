import { Record, Union } from "./.fable/fable-library.3.1.5/Types.js";
import { record_type, union_type, string_type } from "./.fable/fable-library.3.1.5/Reflection.js";
import { Cmd_none } from "./.fable/Fable.Store.1.0.0-beta-005/ElmishStore.fs.js";
import { makeElmish } from "./.fable/Fable.SvelteStore.1.0.0-beta-006/Fable.SvelteStore.fs.js";

export class Msg extends Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["Greet"];
    }
}

export function Msg$reflection() {
    return union_type("Example.Msg", [], Msg, () => [[["name", string_type]]]);
}

export class State extends Record {
    constructor(Name) {
        super();
        this.Name = Name;
    }
}

export function State$reflection() {
    return record_type("Example.State", [], State, () => [["Name", string_type]]);
}

export function init(hub) {
    return [new State("World"), Cmd_none()];
}

export function update(msg, state) {
    const name = msg.fields[0];
    return [new State(name), Cmd_none()];
}

export function makeStore() {
    const patternInput = makeElmish(init, (msg, state) => update(msg, state), (value) => {
    }, void 0);
    const store = patternInput[0];
    const dispatch = patternInput[1];
    return [store, {
        greet: (name) => dispatch(new Msg(0, name)),
    }];
}

