import { useContext } from "react";
import { GameContext } from "../../../state/game/context";

export const PlayersList = () => {
    const { state } = useContext(GameContext);
    return (
        <div className='PlayersList'>
        <h4>Players</h4>
        {state.players.map((player) => (
            <label key={player.id}>{player.name}</label>
        ))}
        </div>
    );
};