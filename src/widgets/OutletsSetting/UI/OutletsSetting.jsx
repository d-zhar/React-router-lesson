import HeaderTittleUser2 from "../../../component/HeaderTittleUser2/UI/HeaderTittleUser2";
import Plus from "./icon/Plus.svg";
import { Link } from "react-router-dom";

import s from "./OutletsSetting.module.scss";

const OutletsSetting = () => {
  return (
    <div className={s.OutletsSetting}>
      <HeaderTittleUser2
        tittle={"Choize Coffee"}
        tittle2={"г. Москва м. Павелецкая стр. 12"}
      />
      <div className={s.wrapper}>
        <div className={s.wrapper_box}>
          <Link to="/store/outlets/transactions" className={s.box2}>
            Транзакции
          </Link>
          <Link to="/store/outlets/buyers" className={s.box3}>
            Покупатели
          </Link>
          <div className={s.box1}>Настройки</div>
        </div>
        <div className={s.container}>
          <div className={s.sidebar}>
            <p className={s.tittle_text}>Название</p>
            <form action="#" class="form">
              <div class={s.castom_input}>
                <input type="text" value={"Choize Coffee"} />
              </div>
            </form>
            <p className={s.tittle_text}>Направление бизнеса</p>
            <form action="#" class="form">
              <div class={s.castom_input2}>
                <input type="text" value={"HoReCa"} />
              </div>
            </form>
            <p className={s.tittle_text1}>Геопозиция:</p>
            <div className={s.style_text}>
              <p className={s.tittle_text}>Страна</p>
              <p className={s.star}>*</p>
            </div>
            <form action="#" class="form">
              <div class={s.castom_input2}>
                <input type="text" value={"Россия"} />
              </div>
            </form>
            <div className={s.style_text}>
              <p className={s.tittle_text}>Город</p>
              <p className={s.star}>*</p>
            </div>
            <form action="#" class="form">
              <div class={s.castom_input2}>
                <input type="text" value={"Архангельск"} />
              </div>
            </form>
            <div className={s.style_text}>
              <p className={s.tittle_text}>Улица</p>
              <p className={s.star}>*</p>
            </div>
            <form action="#" class="form">
              <div class={s.castom_input2}>
                <input type="text" value={"Лельская"} />
              </div>
            </form>
            <div className={s.style_text}>
              <p className={s.tittle_text}>Дом</p>
              <p className={s.star}>*</p>
            </div>
            <form action="#" class="form">
              <div class={s.castom_input2}>
                <input type="text" value={"д. 12 стр.22"} />
              </div>
            </form>
            <div>
              <p className={s.footer_text}>
                Если у Вас возникли проблемы обратитесь в службу поддержки
                клиентов
              </p>
              <p className={s.footer_text1}>support@esplanade-ms.com</p>
            </div>
          </div>
          <div className={s.card_box}>
            <p className={s.card_box_text}>Фотографии торговой точки</p>
            <div className={s.card_box_style}>IMG</div>
            <div className={s.card_minibox}>
              <div className={s.card_minibox_style}>IMG</div>
              <div className={s.card_minibox_style1}>
                <img src={Plus} alt="" />
              </div>
              <div className={s.card_minibox_style1}></div>
            </div>
            <div className={s.footer_wrapper}>
              <Link to="/store/outlets/transactions">
                <button className={s.entrance}>Сохранить</button>
              </Link>
              <Link to="/store">
                <button className={s.reg}>Отмена</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutletsSetting;
