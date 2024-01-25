import { Link } from "react-router-dom";
import Plus from "./icon/Plus.svg";

import s from "./StoreCard.module.scss";

const StoreCard = () => {
  return (
    <div className={s.StoreCard}>
      <Link to="/store/newstorecard">
        <img src={Plus} alt="" />
      </Link>
    </div>
  );
};

export default StoreCard;
