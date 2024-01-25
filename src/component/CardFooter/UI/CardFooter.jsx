import clsx from "clsx";
import s from "./CardFooter.module.scss";

const CardFooter = (props) => {
  return (
    <div className={s.CardFooter}>
      <p
        className={clsx(
          props.mark === "-" && s.red,
          props.mark === "+" && s.green
        )}
      >
        {props.mark}
        {props.number}
      </p>
      <p className={s.arrowStyle}>⇅</p>
    </div>
  );
};

export default CardFooter;
