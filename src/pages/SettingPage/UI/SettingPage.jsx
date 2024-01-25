import HeaderTittleUser from "../../../component/HeaderTittleUser/UI/HeaderTittleUser";
import { Link } from "react-router-dom";

import s from "./SettingPage.module.scss";

const SettingPage = () => {
  return (
    <div className={s.SettingPage}>
      <HeaderTittleUser tittle={"Настройки"} />
      <div className={s.wrapper}>
        <div className={s.container_box}>
          <div className={s.box_style}>
            <p className={s.tittle}>Чашек до бесплатной</p>
            <div className={s.tittle_style}>
              <input className={s.input_style} type="text" value={"6"} />
              <button className={s.reg}>Ок</button>
            </div>
            <p className={s.tittle}>Имя</p>
            <div className={s.tittle_style}>
              <input
                className={s.input_style}
                type="text"
                value={"Александр"}
              />
              <button className={s.reg}>Ок</button>
            </div>
            <p className={s.tittle}>Фамилия</p>
            <div className={s.tittle_style1}>
              <form action="#" class="form">
                <div class={s.castom_input2}>
                  <input type="text" value={"Владельцев"} />
                </div>
              </form>
              <button className={s.reg}>Ок</button>
            </div>
            <p className={s.tittle}>Email</p>
            <div className={s.tittle_style1}>
              <form action="#" class="form">
                <div class={s.castom_input2}>
                  <input type="text" value={"email@email.com"} />
                </div>
              </form>
              <button className={s.reg}>Ок</button>
            </div>
            <p className={s.tittle2}>Пароль</p>
            <Link to="/setting/change-pass">
              <button className={s.entrance}>Поменять пароль</button>
            </Link>
          </div>
          <div className={s.footer_style}>
            <p className={s.footer_style_text}>
              Если у Вас возникли проблемы обратитесь в службу поддержки
              клиентов
            </p>
            <p className={s.footer_style_text2}>support@esplanade-ms.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingPage;
