import HeaderTittleUser2 from "../../../component/HeaderTittleUser2/UI/HeaderTittleUser2";
import { Link } from "react-router-dom";

import s from "./OutletsId.module.scss";
import LineOutletId from "../../../component/Lines/LineOutletId/UI/LineOutletId";
import Graph from "../../../component/Graph/UI/Graph";

const OutletsId = () => {
  return (
    <div className={s.OutletsId}>
      <HeaderTittleUser2
        tittle={"Choize Coffee"}
        tittle2={"г. Москва м. Павелецкая стр. 12"}
      />
      <div className={s.wrapper}>
        <div className={s.wrapper_box}>
          <div className={s.box1}>Транзакции</div>
          <Link to="/store/outlets/buyers" className={s.box2}>
            Покупатели
          </Link>
          <Link to="/store/outlets/setting" className={s.box3}>
            Настройки
          </Link>
        </div>
        <div className={s.container}>
          <div className={s.container_box}>
            <div className={s.tittle_line}>
              <span>ID</span>
              <span>Сумма</span>
              <span>Товары</span>
              <span>Покупатель</span>
              <span>Дата</span>
              <span>Администратор</span>
              <span>Обратная связь</span>
            </div>
            <LineOutletId number={"1"} name={"Александр Покупателев"} />
            <LineOutletId number={"2"} name={"Александр Покупателев"} />
            <LineOutletId number={"3"} name={"Александр Покупателев"} />
            <LineOutletId number={"4"} name={"Александр Покупателев"} />
            <LineOutletId number={"5"} name={"Александр Покупателев"} />
            <LineOutletId number={"6"} name={"Александр Покупателев"} />
            <LineOutletId number={"7"} name={"Александр Покупателев"} />
            <LineOutletId number={"8"} name={"Александр Покупателев"} />
            <LineOutletId number={"9"} name={"Александр Покупателев"} />
            <LineOutletId number={"10"} name={"Александр Покупателев"} />
            <LineOutletId number={"11"} name={"Александр Покупателев"} />
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

export default OutletsId;
