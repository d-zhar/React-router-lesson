import HeaderTittleUser from "../../../component/HeaderTittleUser/UI/HeaderTittleUser";
import ButtonLogin from "../../../component/ButtonLogin/UI/ButtonLogin";
import ButtonLogin2 from "../../../component/ButtonLogin2/UI/ButtonLogin2";
import Plus from "./icon/Plus.svg";

import { Link } from "react-router-dom";

import s from "./NewStoreCard.module.scss";

const NewStoreCard = () => {
  return (
    <div className={s.NewStoreCard}>
      <HeaderTittleUser tittle={"Добавить торговую точку"} />
      <div className={s.wrapper}>
        <div className={s.sidebar}>
          <div className={s.style_text}>
            <p className={s.tittle_text}>Название</p>
            <p className={s.star}>*</p>
          </div>
          <input type="text" className={s.input_style} />
          <div className={s.style_text}>
            <p className={s.tittle_text}>Направление бизнеса</p>
            <p className={s.star}>*</p>
          </div>
          <form>
            <label for="Busines"></label>
            <select
              className={s.input_style}
              id="Busines"
              onchange="BusinesChange()"
            >
              <option>HoReCa</option>
              <option>HoReCa 1</option>
              <option>HoReCa 2</option>
            </select>
          </form>
          <p className={s.tittle_text1}>Геопозиция:</p>
          <div className={s.style_text}>
            <p className={s.tittle_text}>Страна</p>
            <p className={s.star}>*</p>
          </div>
          <input type="text" className={s.input_style} />
          <div className={s.style_text}>
            <p className={s.tittle_text}>Город</p>
            <p className={s.star}>*</p>
          </div>
          <input type="text" className={s.input_style} />
          <div className={s.style_text}>
            <p className={s.tittle_text}>Улица</p>
            <p className={s.star}>*</p>
          </div>
          <input type="text" className={s.input_style} />
          <div className={s.style_text}>
            <p className={s.tittle_text}>Дом</p>
            <p className={s.star}>*</p>
          </div>
          <input type="text" className={s.input_style} />
        </div>
        <div className={s.card_style}>
          <span>Фотографии торговой точки (опционально)</span>
          <div className={s.card_style_box}>
            <img src={Plus} alt="" />
          </div>
          <div className={s.card_style2}>
            <div className={s.card_style_box2}></div>
            <div className={s.card_style_box2}></div>
            <div className={s.card_style_box2}></div>
          </div>
          <div className={s.button}>
            <Link to="/store">
              <ButtonLogin2>Отмена</ButtonLogin2>
            </Link>
            <Link to="/store/outlets">
              <ButtonLogin>Добавить торговую точку</ButtonLogin>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewStoreCard;
