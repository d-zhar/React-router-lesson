import CardFooter from "../../CardFooter/UI/CardFooter";
import s from "./Card.module.scss";

export const Card = ({ Name, Price, iconTop, Number, Mark }) => {
  return (
    <div className={s.card}>
      <div className={s.cardHeader}>
        <p className={s.cardTitle}>{Name}</p>
        <img src={iconTop} className={s.cardIcon} alt="" />
      </div>
      <div className={s.cardValue}>{Price}</div>
      <CardFooter mark={Mark} number={Number} />
    </div>
  );
};

export default Card;
