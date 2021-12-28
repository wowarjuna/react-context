import { ActionType, ChangeName, TwoActions } from "./actions";
import { TwoState } from "./state";

export const reducer = (state: TwoState, action: TwoActions): TwoState => {
    switch (action.type) {
        case ActionType.ChangeName:
            return { ...state, name: action.payload}
        default:
            return state;
    }
}

export const changeName = (name: string): ChangeName => ({
    type: ActionType.ChangeName,
    payload: name,
});