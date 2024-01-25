import HeaderTittleUser from "../../HeaderTittleUser/UI/HeaderTittleUser";
import LineBuyers from "../../../component/Lines/LineBuyers/UI/LineBuyers";

import s from "./Buyers.module.scss";

const Buyers = () => {
  return (
    <div className={s.Buyers}>
      <HeaderTittleUser tittle={"Покупатели"} />
      <div className={s.wrapper}>
        <div className={s.container_box}>
          <div className={s.tittle_line}>
            <span>Telegram</span>
            <span>Имя</span>
            <span>Телефон</span>
            <span>Торговые точки</span>
            <span>Стаканов подарено</span>
            <span>Стаканов на счету</span>
            <span>Стаканов до подарка</span>
          </div>
          <LineBuyers
            name={"alexHost1"}
            name2={"Александр Покупателев1"}
            present={"1"}
          />
          <LineBuyers
            name={"alexHost1"}
            name2={"Александр Покупателев1"}
            present={"1"}
          />
          <LineBuyers
            name={"alexHost2"}
            name2={"Александр Покупателев2"}
            present={"2"}
          />
          <LineBuyers
            name={"alexHost3"}
            name2={"Анастасия Покупателева1"}
            present={"220"}
          />
          <LineBuyers
            name={"alexHost4"}
            name2={"Александр СТРОКАСТРО..."}
            present={"5400"}
          />
          <LineBuyers
            name={"alexHost5"}
            name2={"Анастасия Покупателева2"}
            present={"120002"}
          />
          <LineBuyers
            name={"alexHost6"}
            name2={"Александр "}
            present={"12000200120"}
          />
          <LineBuyers
            name={"alexHost7"}
            name2={"Александр СТРОКАСТРО..."}
            present={"12000200120"}
          />
          <LineBuyers
            name={"alexHost8"}
            name2={"Александр СТРОКАСТРО..."}
            present={"12000200120"}
          />
          <LineBuyers
            name={"alexHost9"}
            name2={"Александр СТРОКАСТРО..."}
            present={"12000200120"}
          />
          <LineBuyers
            name={"alexHost10"}
            name2={"Александр СТРОКАСТРО..."}
            present={"12000200120"}
          />
          <LineBuyers
            name={"alexHost10"}
            name2={"Александр СТРОКАСТРО..."}
            present={"12000200120"}
          />
          <LineBuyers
            name={"alexHost10"}
            name2={"Александр СТРОКАСТРО..."}
            present={"12000200120"}
          />
          <LineBuyers
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
      </div>
    </div>
  );
};

export default Buyers;
