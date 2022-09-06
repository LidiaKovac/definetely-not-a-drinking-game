import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { Card } from "./components/Card/Card";
import jsonCards from "./data/questions.json";
import { useEffect, useState } from "react";
import { Toggle } from "./components/Toggle/Toggle";
import { NewVersion } from "./components/New/NewVersion";

function App() {
  // localStorage
  let browserOptions = JSON.parse(localStorage.getItem("options"));
  let browserDrawn = JSON.parse(localStorage.getItem("alreadyDrawn"));

  // hooks
  const [cards, setCards] = useState(jsonCards);
  const [number, setNumber] = useState(Math.floor(Math.random() * (cards.length - 1)));
  const [alreadyDrawn, setDrawn] = useState(browserDrawn || []);
  const [cardsLeft, setCardsLeft] = useState(cards.length);
  const [options, setOptions] = useState(
    browserOptions || {
      lang: false,
      spicy: false,
      drinks: false,
    }
  );

  // onUpdate and onMount

  //When a card is drawn, set it in ls
  useEffect(() => {
    localStorage.setItem("alreadyDrawn", JSON.stringify(alreadyDrawn));
  }, [alreadyDrawn]);

  //When an option is changed, set it in ls
  useEffect(() => {
    localStorage.setItem("options", JSON.stringify(options));
  }, [options]);

  //Filters out spicy / not spicy cards
  useEffect(() => {
    if (options.spicy) {
      setCards(jsonCards);
    } else {
      let newCards = cards.filter((card) => card.isSpicy === false);
      setCardsLeft(newCards.length);
      setNumber(Math.floor(Math.random() * (newCards.length - 1)));
      setCards(newCards);
    }
  }, [options.spicy]);


  // Utils

  //resets all options, ls and refreshes the page because I'm lazy
  const reset = () => {
    localStorage.clear();
    setDrawn([]);
    setCardsLeft(cards.length);
    setOptions({
      ...options,
      spicy: false,
      drinks: false,
    });
    window.location.reload();
  };

  //handles the randomizing of cards and insures they are not drawn twice
  const getRandom = () => {
    let randomNumber = Math.floor(Math.random() * (cards.length - 1));
    let repeats = 0;
    while (alreadyDrawn.includes(randomNumber)) {
      repeats++;
      randomNumber = Math.floor(Math.random() * (cards.length - 1));
      if (repeats > 100) {
        setCardsLeft(0);
        break;
      }
    }

    if (!alreadyDrawn.includes(randomNumber)) {
      setNumber(randomNumber);
      setDrawn((prev) => prev.concat(randomNumber));
      setCardsLeft((prev) => prev - 1);
    }
  };
  return (
    <div className="container">
      <h1>Definetely not a drinking game</h1>
      {cardsLeft === 0 ? (
        // need to add a end-game screen
        <>finito!</>
      ) : (
        <>
          <div className="buttons__layout">
            <div className="toggles">
              <Toggle
                name="spicy"
                label="🌶️"
                change={() =>
                  setOptions((prev) => {
                    return { ...prev, spicy: Boolean(!prev.spicy) };
                  })
                }
              />
              <Toggle
                name="drinks"
                value={options.drinks}
                label="🥤"
                change={() =>
                  setOptions((prev) => {
                    return { ...prev, drinks: Boolean(!prev.drinks) };
                  })
                }
              />
              <Toggle
                name="lang"
                value={options.lang}
                label={
                  <img
                    className="lang__label"
                    src={"/" + (options.lang ? "ita" : "eng") + ".png"}
                  />
                }
                change={() =>
                  setOptions((prev) => {
                    return { ...prev, lang: !prev.lang };
                  })
                }
              />
            </div>
            <div className="header__buttons">
              <Button variant="info" onClick={() => getRandom()}>
                Pesca! 🎣
              </Button>
              <Button variant="info" onClick={() => reset()}>
                🔁
              </Button>
            </div>
          </div>
          <Card
            click={() => getRandom()}
            card_data={cards[number]}
            lang={options.lang}
            drinks={options.drinks}
          />
        </>
      )}
      <NewVersion />
    </div>
  );
}

export default App;
