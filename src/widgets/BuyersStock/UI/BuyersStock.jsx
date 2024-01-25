import HeaderTittleUser2 from "../../../component/HeaderTittleUser2/UI/HeaderTittleUser2";
import LineOutletBuyers from "../../../component/Lines/LineOutletBuyers/UI/LineOutletBuyers";
import { Link } from "react-router-dom";

import s from "./BuyersStock.module.scss";

const BuyersStock = () => {
  return (
    <div className={s.BuyersStock}>
      <HeaderTittleUser2 tittle={"Анастасия Покупателева"} />
      <div className={s.wrapper}>
        <div className={s.wrapper_box}>
          <Link to="/buyers/transactions" className={s.box2}>
            Транзакции
          </Link>
          <Link to="/buyers/visited-places" className={s.box3}>
            Посещаемые места
          </Link>
          <div className={s.box1}>Акция</div>
        </div>
        <div className={s.container}>
          <div>
            <ul className={s.ul_style}>
              <li className={s.li_title}>Чашек на счету</li>
              <li className={s.li_text}>10</li>
              <li className={s.li_title}>Чашек до подарка</li>
              <li className={s.li_text}>2</li>
              <li className={s.li_title}>Бесплатных чашек на счету</li>
              <li className={s.li_text}>1</li>
              <li className={s.li_title}>Купленных чашек за всё время</li>
              <li className={s.li_text}>20</li>
            </ul>
            <div className={s.box}>
              <button className={s.reg}>Подарить стакан</button>
              <button className={s.reg}>Подарить бесплатный стакан</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyersStock;
