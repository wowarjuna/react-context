import { useReducer } from "react";
import { TwoContext } from "../../state/ctwo/context";
import { changeName, reducer } from "../../state/ctwo/reducer";
import { initialTwoState } from "../../state/ctwo/state";

export const CtwoCom = () => {
    const [state, dispatch] = useReducer(reducer, initialTwoState);

    return ( <TwoContext.Provider value={{ state, dispatch }}>
        <button onClick={() => dispatch(changeName('Arjuna Dratharashtra'))}>Add Ctx</button>
        <div>{state.name}</div>
    </TwoContext.Provider>)
}