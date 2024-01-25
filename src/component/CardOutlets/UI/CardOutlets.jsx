import CardFooter from "../../CardFooter/UI/CardFooter";
import s from "./CardOutlets.module.scss";

export const CardOutlets = ({ Name, Price, Adress, Number, Mark }) => {
  return (
    <div className={s.card}>
      <div className={s.cardHeader}>
        <p className={s.cardTittle}>{Name}</p>
        <p className={s.cardTittle2}>{Adress}</p>
      </div>
      <div className={s.cardValue}>{Price}</div>
      <CardFooter mark={Mark} number={Number} />
    </div>
  );
};

export default CardOutlets;
