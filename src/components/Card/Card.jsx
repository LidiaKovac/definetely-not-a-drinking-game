import "./Card.scss";
import Badge from "react-bootstrap/Badge";
export const Card = ({ card_data, lang, drinks, click }) => {
  const getSize = () => {
    if (card_data["question_" + (lang ? "ita" : "eng")].length < 30) {
      return "font--xl";
    } else if (card_data["question_" + (lang ? "ita" : "eng")].length < 80) {
      return "font--md";
    } else {
      return "font--sm";
    }
  };
  return (
    <div className="card__container" onClick={() => click()}>
      <div className={"card__text " + getSize()}>
        {card_data["question_" + (lang ? "ita" : "eng")]}
      </div>
      <div className="card__footer">
        <div className="drinks">
          {drinks && Math.floor(Math.random() * 3) + 1 + "x 🥤"}
        </div>
        <Badge className="badge__wrap" pill bg="info">
          The <i> Definetely Not Fake </i> Voting Game
        </Badge>
      </div>
    </div>
  );
};
