import { useReducer } from "react";
import { GameContext } from "../../state/game/context";
import { gameReducer } from "../../state/game/reducer";
import { initialGameState } from "../../state/game/state";
import { AddPlayer } from "../players/add-player/add-player";
import { GameStatus } from "../players/game-status";
import { PlayersList } from "../players/player-list/player-list";
import { Players } from "../players/players";

export const Poker = () => {
    const [state, dispatch] = useReducer(gameReducer, initialGameState);
    return (
        <GameContext.Provider value={{ state, dispatch }}>
            <div className='Header'>
                <header>
                    <p>React useReducer and useContext example Poker App</p>
                </header>
            </div>
            <div className='ContentArea'>
                <div className='LeftPanel'>
                    <PlayersList />
                </div>
                <div className='MainContentArea'>
                    <Players />
                </div>
                <div className='RightPanel'>
                    <GameStatus />
                </div>
            </div>
            <div className='Footer'>
                <AddPlayer />
            </div>
        </GameContext.Provider>
    );
};