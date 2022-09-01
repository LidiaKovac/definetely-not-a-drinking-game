import "./Card.scss"
import Badge from "react-bootstrap/Badge"
export const Card = ({ card_data, lang, drinks }) => {
  const getSize = () => {
    console.log(card_data["question_" + lang].length)
    if (card_data["question_" + lang].length < 30) {
      return "font--xl"
    } else if (card_data["question_" + lang].length < 80) {
      return "font--md"
    } else {
      return "font--sm"
    }
  }
  return (
    <div className="card__container">
      <div className={"card__text " + getSize()}>
      {card_data["question_" + lang]}
      </div>
      <div className="card__footer">

      <div className="drinks">
        {(drinks && !card_data.isUnforseen) && card_data.drinks + "x 🥤"} 
      </div>
      <Badge className="badge__wrap" pill bg="info">
        The <i> Definetely Not Fake </i> Voting Game
      </Badge>
      </div>
    </div>
  )
}
