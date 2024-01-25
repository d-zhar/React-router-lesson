import HeaderTittleUser2 from "../../../component/HeaderTittleUser2/UI/HeaderTittleUser2";
import { Link } from "react-router-dom";

import s from "./OutletsBuyers.module.scss";
import LineOutletBuyers from "../../../component/Lines/LineOutletBuyers/UI/LineOutletBuyers";

const OutletsBuyers = (props) => {
  return (
    <div className={s.OutletsBuyers}>
      <HeaderTittleUser2
        tittle={"Choize Coffee"}
        tittle2={"г. Москва м. Павелецкая стр. 12"}
      />
      <div className={s.wrapper}>
        <div className={s.wrapper_box}>
          <Link to="/store/outlets/transactions" className={s.box2}>
            Транзакции
          </Link>
          <div className={s.box1}>Покупатели</div>
          <Link to="/store/outlets/setting" className={s.box3}>
            Настройки
          </Link>
        </div>
        <div className={s.container}>
          <div className={s.container_box}>
            <div className={s.tittle_line}>
              <span>Telegram</span>
              <span>Имя</span>
              <span>Телефон</span>
              <span>Стаканов подарено</span>
              <span>Стаканов на счету</span>
              <span>Стаканов до подарка</span>
            </div>
            <LineOutletBuyers
              name={"alexHost1"}
              name2={"Александр Покупателев1"}
              present={"1"}
            />
            <LineOutletBuyers
              name={"alexHost2"}
              name2={"Александр Покупателев2"}
              present={"2"}
            />
            <LineOutletBuyers
              name={"alexHost3"}
              name2={"Анастасия Покупателева1"}
              present={"220"}
            />
            <LineOutletBuyers
              name={"alexHost4"}
              name2={"Александр СТРОКАСТРО..."}
              present={"5400"}
            />
            <LineOutletBuyers
              name={"alexHost5"}
              name2={"Анастасия Покупателева2"}
              present={"120002"}
            />
            <LineOutletBuyers
              name={"alexHost6"}
              name2={"Александр "}
              present={"12000200120"}
            />
            <LineOutletBuyers
              name={"alexHost7"}
              name2={"Александр СТРОКАСТРО..."}
              present={"12000200120"}
            />
            <LineOutletBuyers
              name={"alexHost8"}
              name2={"Александр СТРОКАСТРО..."}
              present={"12000200120"}
            />
            <LineOutletBuyers
              name={"alexHost9"}
              name2={"Александр СТРОКАСТРО..."}
              present={"12000200120"}
            />
            <LineOutletBuyers
              name={"alexHost10"}
              name2={"Александр СТРОКАСТРО..."}
              present={"12000200120"}
            />
            <div className={s.list_pages}>
              <p>‹</p>
              <p>1</p>
              <p>2</p>
              <p>3</p>
              <p>...</p>
              <p>10</p>
              <p>11</p>
              <p>›</p>
            </div>
          </div>
          <div className={s.footer_wrapper}>
            <button className={s.reg}>Подарить всем</button>
            <button className={s.reg}>Подарить всем мужчинам</button>
            <button className={s.reg}>Подарить всем девушкам</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutletsBuyers;
