
import Circle from "./Circle"

function BingoCard({
    onToggle,
    reasonId,
    state,
    randonBingoReasons,
    positionOfReasonInCenter
}) {
    return (
        <div
            key={reasonId}
            onClick={() => onToggle(reasonId)}
            className={`bingoCard ${!!state.checked[reasonId] ? "checked " : ""} ${parseInt(reasonId, 10) === parseInt(positionOfReasonInCenter, 10) && "notChecked"}`}
        >
            {parseInt(reasonId, 10) === parseInt(positionOfReasonInCenter, 10) ? <Circle/> : <p>{randonBingoReasons[reasonId]}</p>}
        </div>
    )
}

export default BingoCard;