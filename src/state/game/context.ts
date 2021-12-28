import { createContext } from "react";
import { GameActions } from "./actions";
import { GameState, initialGameState } from "./state";

export const GameContext = createContext<{
    state: GameState;
    dispatch: React.Dispatch<GameActions>;
}>({
    state: initialGameState,
    dispatch: () => undefined,
});