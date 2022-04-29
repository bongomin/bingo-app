import './App.css';
import { useState } from "react"

import { shuffleAndRandomize, arrayMostCenterIndex, hasPlayerWon } from "./utils"
import { bingoReasons } from "./data"
import BingoCard from "./components/BingoCard"
import SuccessRain from "./components/SuccessRain"


const randonBingoReasons = shuffleAndRandomize(bingoReasons)

function App() {
  const [positionOfReasonInCenter] = useState(arrayMostCenterIndex(bingoReasons));
  const [state, setState] = useState({ checked: { [positionOfReasonInCenter]: true } })

  const onToggle = (id) => {
    setState(state => {
      let checked = parseInt(id, 10) === parseInt(positionOfReasonInCenter, 10) ? { ...state.checked, [positionOfReasonInCenter]: true } : { ...state.checked, [id]: !state.checked[id] }
      const won = hasPlayerWon(checked);
      return { ...state, checked, won }
    })
  }

  return (
    <div className='main'>
      {state.won ? <SuccessRain/>: null}
      <div className='bingoCardsContainer'>
        {Object.keys(randonBingoReasons).map(reasonId => {
          return <BingoCard onToggle={onToggle}
            reasonId={reasonId}
            state={state}
            randonBingoReasons={randonBingoReasons}
            positionOfReasonInCenter={positionOfReasonInCenter} />
        })}
      </div>
    </div>
  );
}

export default App;
