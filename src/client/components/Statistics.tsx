import { Paper, Typography } from "@mui/material";
import React, { useMemo } from "react";
import "./Statistics.scss";

interface StatisticsProps {
    words: string[];
    typedWords: string[];
    seconds: number;
}

const Statistics = ({ words, typedWords, seconds }: StatisticsProps) => {
    const [correctCount, incorrectCount, longestSentence] = useMemo(() => {
        let correctCount = 0;
        let incorrectCount = 0;
        let longestSentence = 0;
        let correctSentence = 0;
        typedWords.forEach((word, index) => {
            if (words[index] === word) {
                correctCount++;
                correctSentence++;
            } else {
                correctSentence = 0;
                incorrectCount++;
            }
            longestSentence = Math.max(correctSentence, longestSentence);
        });
        return [correctCount, incorrectCount, longestSentence];
    }, [words, typedWords]);

    const wpm = seconds ? (correctCount / seconds) * 60 : 0;

    return (
        <Paper className="statistics">
            <Typography variant="body1">Statistics:</Typography>
            <span>Correct: {correctCount}</span>
            <span>Incorrect: {incorrectCount}</span>
            <span>Longest sentence: {longestSentence}</span>
            <span>WPM: {Intl.NumberFormat(undefined, { maximumSignificantDigits: 2 }).format(wpm)}</span>
        </Paper>
    );
};

export default React.memo(Statistics);
