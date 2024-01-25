import HeaderTittleUser2 from "../../../component/HeaderTittleUser2/UI/HeaderTittleUser2";
import { Link } from "react-router-dom";

import s from "./BuyersId.module.scss";
import LineBuyersId from "../../../component/Lines/LineBuyersId/UI/LineBuyersId";
import Graph from "../../../component/Graph/UI/Graph";

const BuyersId = () => {
  return (
    <div className={s.BuyersId}>
      <HeaderTittleUser2 tittle={"Анастасия Покупателева"} />
      <div className={s.wrapper}>
        <div className={s.wrapper_box}>
          <div className={s.box1}>Транзакции</div>
          <Link to="/buyers/visited-places" className={s.box2}>
            Посещаемые места
          </Link>
          <Link to="/buyers/stock" className={s.box3}>
            Акция
          </Link>
        </div>
        <div className={s.container}>
          <div className={s.container_box}>
            <div className={s.tittle_line}>
              <span>ID</span>
              <span>Сумма</span>
              <span>Товары</span>
              <span>Торговая точка</span>
              <span>Дата</span>
              <span>Администратор</span>
              <span>Обратная связь</span>
            </div>
            <LineBuyersId number={"1"} name={"Александр Покупателев"} />
            <LineBuyersId number={"2"} name={"Александр Покупателев"} />
            <LineBuyersId number={"3"} name={"Александр Покупателев"} />
            <LineBuyersId number={"4"} name={"Александр Покупателев"} />
            <LineBuyersId number={"5"} name={"Александр Покупателев"} />
            <LineBuyersId number={"6"} name={"Александр Покупателев"} />
            <LineBuyersId number={"7"} name={"Александр Покупателев"} />
            <LineBuyersId number={"8"} name={"Александр Покупателев"} />
            <LineBuyersId number={"9"} name={"Александр Покупателев"} />
            <LineBuyersId number={"10"} name={"Александр Покупателев"} />
            <LineBuyersId number={"11"} name={"Александр Покупателев"} />
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
          <div className={s.graph_box}>
            <Graph />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyersId;
