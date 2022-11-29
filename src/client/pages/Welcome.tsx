import React from "react";
import { Button, Typography } from "@mui/material";
import "./Welcome.scss";

interface WelcomeProps {
    onStartClick: () => void;
}

const Welcome = ({ onStartClick }: WelcomeProps) => {
    return <div className="welcome-page">
        <Typography variant="h1">Welcome to Word Speed game!</Typography>
        <Typography variant="body1" sx={{ fontStyle: "italic" }}>
            Most people say it's the best game in the world
        </Typography>
        <Button onClick={onStartClick}>Start Game</Button>
    </div>
}

export default Welcome;