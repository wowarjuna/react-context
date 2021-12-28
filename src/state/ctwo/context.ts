import { createContext } from "react";
import { TwoActions } from "./actions";
import { initialTwoState, TwoState } from "./state";

export const TwoContext = createContext<{
    state: TwoState;
    dispatch: React.Dispatch<TwoActions>;
}>({
    state: initialTwoState,
    dispatch: () => undefined,
});