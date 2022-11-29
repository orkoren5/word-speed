import React, { useState } from "react";
import "./App.css";
import Welcome from "./pages/Welcome";
import Game from "./pages/Game";
import { getNewGame } from "./common/WordBank";

type GameState = "welcome" | "playing" | "finished";

function App() {
    const [gameSate, setGameState] = useState<GameState>("welcome");
    const [gamePlayed, setGamePlayed] = useState(0);
    const [words, setWords] = useState<string[]>([]);

    const handleRestart = () => {
        setGamePlayed(gamePlayed + 1);
        setGameState("playing");
        setWords(getNewGame());
    };

    return (
        <div className="app">
            {gameSate === "welcome" && <Welcome onStartClick={handleRestart} />}
            {gameSate === "playing" && <Game key={gamePlayed} words={words} onRestart={handleRestart} />}
        </div>
    );
}

export default App;
