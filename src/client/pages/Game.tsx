import React, { useEffect, useState } from "react";
import useWords from "../hooks/useWords";
import Word from "../components/Word";
import "./Game.scss";
import RefreshIcon from "@mui/icons-material/Refresh";
import { Paper, TextField, Typography } from "@mui/material";
import Statistics from "../components/Statistics";

const GAME_TIME_SECONDS = 60;

interface GameProps {
    words: string[];
    onRestart: () => void;
}

const Game = ({ words, onRestart }: GameProps) => {
    const { typedText, currentTyping, onChange, onKeyDown } = useWords();
    const [gameTimeSec, setGameTimeSec] = useState(0);
    const gameOn = gameTimeSec < GAME_TIME_SECONDS;

    useEffect(() => {
        const interval = gameOn
            ? setInterval(() => {
                  setGameTimeSec((current) => current + 1);
              }, 1000)
            : 0;

        return () => clearInterval(interval);
    }, [gameOn]);

    useEffect(() => {
        setTimeout(() => {
            const element = document.querySelector("#current-word");
            element?.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 0);
    }, [typedText]);

    return (
        <div className="game-page">
            <div className="game-page__title">
                <Typography variant="body1">Game time: {gameTimeSec}</Typography>
                <RefreshIcon sx={{ cursor: "pointer" }} onClick={onRestart} />
            </div>
            <Paper className="game-page__words">
                {words.map((word, index) => (
                    <Word
                        key={word}
                        word={word}
                        typed={typedText.length === index ? currentTyping : typedText[index]}
                        selected={typedText.length === index}
                    />
                ))}
            </Paper>
            <TextField
                fullWidth
                disabled={!gameOn}
                InputProps={{ classes: { input: "game-page__input" } }}
                onChange={onChange}
                value={currentTyping}
                onKeyDown={onKeyDown}
            />
            <Statistics words={words} typedWords={typedText} seconds={gameTimeSec} />
            {!gameOn && <Typography>Good job!</Typography>}
        </div>
    );
};

export default Game;
