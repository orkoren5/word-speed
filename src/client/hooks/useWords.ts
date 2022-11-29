import { useEffect, useState } from "react";

const useWords = () => {
    const [currentTyping, setCurrentTyping] = useState("");
    const [typedText, setTypedText] = useState<string[]>([]);

    const onChange = (event: any) => {
        if (event.target.value.endsWith(" ")) {
            if (currentTyping.length > 0) {
                setTypedText([...typedText, currentTyping]);
                setCurrentTyping("");
            }
        } else {
            setCurrentTyping(event.target.value);
        }
    };

    const onKeyDown = (event: any) => {
        // javascript things
        if (event.isComposing || event.keyCode === 229) {
            return;
        }

        if (event.key === "Backspace" && event.target.value === "") {
            setCurrentTyping(typedText[typedText.length - 1]);
            setTypedText(typedText.slice(0, currentTyping.length - 1));
        }
    };

    return {
        typedText,
        currentTyping,
        onChange,
        onKeyDown,
    };
};

export default useWords;
