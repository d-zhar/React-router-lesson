import HeaderTittleUser from "../../../component/HeaderTittleUser/UI/HeaderTittleUser";
import { Link } from "react-router-dom";

import s from "./SupportPage.module.scss";
import HeaderTittleUser4 from "../../../component/HeaderTittleUser4/UI/HeaderTittleUser4";

const SupportPage = () => {
  return (
    <div className={s.SupportPage}>
      <HeaderTittleUser4 />
      <div className={s.wrapper}>
        <div className={s.main_container}>
          <p className={s.container_text}>
            Поддержка работает с 10 до 18 по МСК
          </p>
          <p className={s.container_text}>
            Добро пожаловать! Вы можете описать вопрос ниже под этим сообщением!
            <br /> На данный момент, сотрудников службы поддержки в сети: 23.
          </p>
          <div className={s.container_text}>
            <p className={s.container_text}>
              Прямые контакты экстренной помощи:
            </p>
            <p className={s.container_text1}>Telegram</p>
            <p className={s.container_text2}>https://t.me/gvegasss</p>
            <p className={s.container_text1}>Номер телефона</p>
            <p className={s.container_text2}>89775299415</p>
            <p className={s.container_text1}>Email</p>
            <p className={s.container_text2}>support@loyaleg.com</p>
          </div>
          <div className={s.text_chat}>
            <p className={s.event} id="font1"></p>
          </div>
        </div>
        <div className={s.footer_container}>
          <form className={s.footer_container_style}>
            <input
              className={s.input_box}
              type="text"
              placeholder="Введите сообщение"
            />
            <input className={s.button_box} type="button" value="➤" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
