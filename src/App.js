import logo from "./logo.svg"
import "./App.scss"
import "bootstrap/dist/css/bootstrap.min.css"
import Button from "react-bootstrap/Button"
import { Card } from "./components/Card/Card"
import jsonCards from "./data/questions.json"
import { useEffect, useState } from "react"
import Form from "react-bootstrap/Form"

function App() {
  const [cards, setCards] = useState(jsonCards)
  const [number, setNumber] = useState(
    Math.floor(Math.random() * (cards.length - 1))
  )
  const [alreadyDrawn, setDrawn] = useState([])
  const [cardsLeft, setCardsLeft] = useState(cards.length)

  //options
  const [lang, setLang] = useState("ita")
  const [spicy, setSpicy] = useState(false)
  const [drinks, setDrinks] = useState(false)
  useEffect(() => {
    if (spicy) {
      setCards(jsonCards)
    } else {
      let newCards = cards.filter(
        (card) => card.isSpicy === false || card.isUnforseen
      )
      setCardsLeft(newCards.length)
      setNumber(Math.floor(Math.random() * (newCards.length - 1)))
      setCards(newCards)
    }
  }, [spicy])
  const reset = () => {
    setDrawn([])
    setCardsLeft(cards.length)
    setDrinks(false)
    setSpicy(false)
  }
  const handleLang = (event) => {
    console.log(event)
    if (event.target.checked) {
      setLang("ita")
    } else setLang("eng")
  }
  const getRandom = () => {
    let randomNumber = Math.floor(Math.random() * (cards.length - 1))
    let repeats = 0
    while (alreadyDrawn.includes(randomNumber)) {
      repeats++
      randomNumber = Math.floor(Math.random() * (cards.length - 1))

      if (repeats > 100) {
        setCardsLeft(0)
        break
      }
    }

    if (!alreadyDrawn.includes(randomNumber)) {
      setNumber(randomNumber)
      setDrawn((prev) => prev.concat(randomNumber))
      setCardsLeft((prev) => prev - 1)
    } else {
    }
  }
  return (
    <div className="container">
      {cardsLeft === 0 ? (
        <>
          finito!{" "}
          <Button variant="info" onClick={() => reset()}>
            Reset
          </Button>{" "}
        </>
      ) : (
        <>
          <div className="buttons__layout">
            <div className="toggles">
              <Form.Check
                type="switch"
                id="custom-switch"
                value={spicy}
                onChange={() => setSpicy((prev) => !prev)}
                label="🌶️"
              />
              <Form.Check
                type="switch"
                value={drinks}
                onChange={() => setDrinks((prev) => !prev)}
                id="custom-switch"
                label="🥤"
              />

              <Form.Check
                type="switch"
                value={lang === "ita" ? false : true}
                onChange={handleLang}
                id="custom-switch"
                label={
                  lang === "ita" ? (
                    <img className="lang__label" src="/ita.png" />
                  ) : (
                    <img className="lang__label" src="/eng.png" />
                  )
                }
              />
            </div>

            <Button variant="info" onClick={() => getRandom()}>
              Pesca! 🎣
            </Button>
          </div>
          <Card card_data={cards[number]} lang={lang} drinks={drinks} />{" "}
        </>
      )}
    </div>
  )
}

export default App
