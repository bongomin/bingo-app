import { useEffect } from "react"
import { generateFallingMiniCards } from "../utils"

function SuccessRain() {
    useEffect(() => {
        generateFallingMiniCards();
    });
    return <canvas id="canvas" />;
}

export default SuccessRain;