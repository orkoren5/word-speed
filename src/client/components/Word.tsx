import React, { useState } from "react";
import { Button, Typography } from "@mui/material";
import "./Word.scss";
import useWords from "../hooks/useWords";
import cx from "classnames";

interface WordProps {
    word: string;
    typed: string | undefined;
    selected: boolean;
}

const Word = ({ word, typed, selected }: WordProps) => {
    if (selected) {
        return (
            <span className="word word--selected">
                {Array.from(word).map((letter, index) => (
                    <span
                        key={letter + index}
                        id="current-word"
                        className={cx("letter", {
                            "letter--correct": letter === typed?.[index],
                            "letter--incorrect": typed?.[index] && typed?.[index] !== letter,
                        })}
                    >
                        {letter}
                    </span>
                ))}
            </span>
        );
    } else {
        return (
            <span
                className={cx("word", { "word--correct": typed === word, "word--incorrect": typed && typed !== word })}
            >
                {word}
            </span>
        );
    }
};

export default React.memo(Word);
