import { Link } from "react-router-dom";

import s from "./LineBuyers.module.scss";

const LineBuyers = (props) => {
  return (
    <div className={s.LineBuyers}>
      <Link to="/buyers/transactions">
        <p className={s.name}> {props.name}</p>
      </Link>
      <p>{props.name2}</p>
      <span className={s.telephone}>89999999992</span>
      <form>
        <select className={s.form1}>
          <option value="">Посмотреть</option>
          <option value="">Потрогать</option>
        </select>
      </form>
      <p className={s.data}>{props.present}</p>
      <p className={s.data}>{props.present}</p>
      <p className={s.data}>{props.present}</p>
    </div>
  );
};

export default LineBuyers;
