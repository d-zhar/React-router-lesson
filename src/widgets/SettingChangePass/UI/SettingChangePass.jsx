import HeaderTittleUser from "../../../component/HeaderTittleUser/UI/HeaderTittleUser";
import { Link } from "react-router-dom";

import s from "./SettingChangePass.module.scss";

const SettingChangePass = () => {
  return (
    <div className={s.SettingChangePass}>
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
            <div className={s.tittle_style2}></div>
            <div className={s.change_pass}>
              <p className={s.tittle3}>Пароль</p>
              <Link to="/setting">
                <button className={s.cancel}>x </button>
              </Link>
            </div>
            <div className={s.style_text}>
              <p className={s.tittle_text}>Старый пароль</p>
              <p className={s.star}>*</p>
            </div>
            <form action="#" class="form">
              <div class={s.castom_input3}>
                <input type="text" />
              </div>
            </form>
            <div className={s.style_text}>
              <p className={s.tittle_text}>Новый пароль</p>
              <p className={s.star}>*</p>
            </div>
            <form action="#" class="form">
              <div class={s.castom_input3}>
                <input type="text" />
              </div>
            </form>
            <div className={s.style_text}>
              <p className={s.tittle_text}>Подтвердите новый пароль</p>
              <p className={s.star}>*</p>
            </div>
            <div className={s.tittle_style3}>
              <form action="#" class="form">
                <div class={s.castom_input3}>
                  <input type="text" />
                </div>
              </form>
              <Link to="/setting">
                <button className={s.reg}>Ок</button>
              </Link>
            </div>
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

export default SettingChangePass;
